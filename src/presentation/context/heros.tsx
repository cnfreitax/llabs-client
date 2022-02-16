import React from 'react'
import { Hero } from 'domain/protocols/hero'
import useServices from 'presentation/hooks/useService'
import { IGetComics } from 'domain/usecases'
import { Comic } from 'domain/protocols/comic'
import { toast } from 'react-toastify'
import { toastProps } from 'main/config/toastOptions'
import { clearTimeout } from 'timers'
import { debounce } from 'infra/utils/debouce'

type HeroContext = {
	heroes: Array<Hero>
	heroesFilteresByName: Array<Hero>
	favoritedHeoroes: number[]
	isLoading: boolean
	comicsfromSelectedHero: Comic[]
	getHeroes: () => Promise<void>
	favoriteHero: (heroId: number) => void
	getComics: (param: IGetComics.Params) => void
	findHeroByName: (name: string) => void
}

export const HeroesContext = React.createContext<HeroContext>({} as HeroContext)

export function HeoresProvider({ children }: { children: React.ReactNode }) {
	const [heroes, setHeroes] = React.useState<Hero[]>([])

	const [comicsfromSelectedHero, setComicsFromSelectedHero] = React.useState<
		Comic[]
	>([])

	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const heroService = useServices().hero
	const [heroesFilteresByName, setHeroesFilteresByName] = React.useState<
		Hero[]
	>([])

	const [favoritedHeoroes, setFavoriteHeores] = React.useState<number[]>(() => {
		const favoriteStorage = localStorage.getItem('marvel_heros_favorite')
		if (favoriteStorage) return JSON.parse(favoriteStorage)
		return []
	})

	const findHeroByName = (name: string) => {
		const returnHero = () => {
			const resultHeroByName = heroes.filter(
				(hero) => !hero.name.toLowerCase().search(name.toLowerCase())
			)

			setHeroesFilteresByName(resultHeroByName)
		}

		return debounce(returnHero, 1000)
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

	const favoriteHero = (heroId: number): void => {
		let updatedValueState = []

		const favoriteStorage = localStorage.getItem('marvel_heros_favorite')
		if (favoriteStorage) {
			const parsedValue = [...JSON.parse(favoriteStorage)]

			if ([...parsedValue].includes(heroId)) {
				const removedByStorage = [...parsedValue].filter((id) => id !== heroId)
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

				const updatedValue = [...JSON.parse(favoriteStorage), heroId]

				localStorage.setItem(
					'marvel_heros_favorite',
					JSON.stringify(updatedValue)
				)

				updatedValueState = updatedValue
			}
		} else {
			updatedValueState.push(heroId)
			localStorage.setItem('marvel_heros_favorite', JSON.stringify([heroId]))
		}

		setFavoriteHeores(updatedValueState)
	}

	const getHeroes = async () => {
		try {
			setIsLoading(true)
			const response = await heroService.getHeros()
			setHeroes(response.data.results)
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
				heroes,
				getHeroes,
				favoriteHero,
				favoritedHeoroes,
				getComics,
				comicsfromSelectedHero,
				findHeroByName,
				heroesFilteresByName
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
