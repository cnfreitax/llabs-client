import React from 'react'
import { Hero } from 'domain/protocols/hero'
import useServices from 'presentation/hooks/useService'
import { IGetComics, IGetHeros } from 'domain/usecases'
import { Comic } from 'domain/protocols/comic'
import { toast } from 'react-toastify'
import { toastProps } from 'main/config/toastOptions'
import { debounce } from 'infra/utils/debouce'

type HeroContext = {
	heroes: Array<Hero>
	heroesFilteredByName: Array<Hero>
	favoritedHeoroes: Array<Hero>
	isLoading: boolean
	totalPages: number
	comicsfromSelectedHero: Comic[]
	getHeroes: (params: IGetHeros.Params) => Promise<void>
	favoriteHero: (selectedHero: Hero) => void
	getComics: (param: IGetComics.Params) => void
	findHeroByName: (name: string) => void
}

export const HeroesContext = React.createContext<HeroContext>({} as HeroContext)

export function HeoresProvider({ children }: { children: React.ReactNode }) {
	const [heroes, setHeroes] = React.useState<Hero[]>([])
	const [totalPages, setTotalPages] = React.useState<number>(0)
	const [comicsfromSelectedHero, setComicsFromSelectedHero] = React.useState<
		Comic[]
	>([])

	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const heroService = useServices().hero
	const [heroesFilteredByName, setHeroesFilteredByName] = React.useState<
		Hero[]
	>([])

	const [favoritedHeoroes, setFavoriteHeores] = React.useState<Hero[]>(() => {
		const favoriteStorage = localStorage.getItem('marvel_heros_favorite')
		if (favoriteStorage) return JSON.parse(favoriteStorage)
		return []
	})

	const findHeroByName = async (name: string) => {
		let searchResult: Array<Hero> = []

		const returnHero = async () => {
			const resultHeroByNameOnLoadedHeroes = heroes.filter(
				(hero) => !hero.name.toLowerCase().search(name.toLowerCase())
			)

			searchResult = resultHeroByNameOnLoadedHeroes

			if (resultHeroByNameOnLoadedHeroes.length <= 0) {
				try {
					setIsLoading(true)
					const response = await heroService.getHeros({
						name
					})
					const { results } = response.data
					searchResult = results
				} catch (error) {
					console.log('error')
				} finally {
					setIsLoading(false)
				}
			}

			setHeroesFilteredByName(searchResult)
		}

		return debounce(returnHero)
	}

	const getComics = async (params: IGetComics.Params) => {
		try {
			setIsLoading(true)
			const response = await heroService.getComics(params)
			const result = response.data.results
			const orderByReleaseDate = result.sort((a, b) =>
				// eslint-disable-next-line
				// @ts-ignore: Unreachable code error
				Math.abs(new Date(b.dates[0].date) - new Date(a.dates[0].date))
			)

			setComicsFromSelectedHero(orderByReleaseDate.slice(0, 10))
		} catch (error) {
			toast.error('Erro ao carregar quadrinhos', toastProps)
		} finally {
			setIsLoading(false)
		}
	}

	const favoriteHero = (selectedHero: Hero): void => {
		let updatedValueState = []

		const favoriteStorage = localStorage.getItem('marvel_heros_favorite')
		if (favoriteStorage) {
			const parsedValue = [...JSON.parse(favoriteStorage)]
			if (
				parsedValue.filter((item) => item.id === selectedHero.id).length > 0
			) {
				const removedByStorage = [...parsedValue].filter(
					(item) => item.id !== selectedHero.id
				)
				updatedValueState = removedByStorage

				localStorage.setItem(
					'marvel_heros_favorite',
					JSON.stringify(removedByStorage)
				)
			} else {
				if (parsedValue.length >= 5) {
					toast.warn('Número máximo de favoritos excedido', toastProps)
					return
				}

				const updatedValue = [...JSON.parse(favoriteStorage), selectedHero]

				localStorage.setItem(
					'marvel_heros_favorite',
					JSON.stringify(updatedValue)
				)

				updatedValueState = updatedValue
			}
		} else {
			updatedValueState.push(selectedHero)
			localStorage.setItem(
				'marvel_heros_favorite',
				JSON.stringify([selectedHero])
			)
		}

		setFavoriteHeores(updatedValueState)
	}

	const getHeroes = async (params: IGetHeros.Params) => {
		try {
			setIsLoading(true)
			const response = await heroService.getHeros(params)
			const { total, results } = response.data

			setHeroes(results)
			setTotalPages(Math.floor(total / 20))
		} catch (error) {
			toast.error('Erro ao carregar heróis', toastProps)
			return
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<HeroesContext.Provider
			value={{
				isLoading,
				totalPages,
				heroes,
				getHeroes,
				favoriteHero,
				favoritedHeoroes,
				getComics,
				comicsfromSelectedHero,
				findHeroByName,
				heroesFilteredByName
			}}
		>
			{children}
		</HeroesContext.Provider>
	)
}

function useHeroes(): HeroContext {
	const context = React.useContext(HeroesContext)
	if (!context) {
		throw new Error('useHeroes muste be used with a HeroesProvider')
	}
	return context
}

export default useHeroes
