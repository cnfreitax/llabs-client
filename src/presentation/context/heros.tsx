import React from 'react'
import { Hero } from 'domain/protocols/hero'
import useServices from 'presentation/hooks/useService'
import { IGetComics } from 'domain/usecases'
import { Comic } from 'domain/protocols/comic'

type HeroContext = {
	heroes: Array<Hero>
	favoritedHeoroes: number[]
	isLoading: boolean
	comicsfromSelectedHero: Comic[]
	getHeroes: () => Promise<void>
	favoriteHero: (heroId: number) => void
	getComics: (param: IGetComics.Params) => void
}

// const objModelReturnIComic = {} as IGetComics.Model

export const HeroesContext = React.createContext<HeroContext>({} as HeroContext)

export function HeoresProvider({ children }: { children: React.ReactNode }) {
	const [heroes, setHeroes] = React.useState<Hero[]>([])

	const [comicsfromSelectedHero, setComicsFromSelectedHero] = React.useState<
		Comic[]
	>([])

	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const heroService = useServices().hero
	const [favoritedHeoroes, setFavoriteHeores] = React.useState<number[]>(() => {
		const favoriteStorage = localStorage.getItem('marvel_heros_favorite')
		if (favoriteStorage) return JSON.parse(favoriteStorage)
		return []
	})

	const getComics = async (params: IGetComics.Params) => {
		try {
			setIsLoading(true)
			const response = await heroService.getComics(params)
			setComicsFromSelectedHero(response.data.results)
		} catch (error) {
			console.log(error)
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
			console.log(error)

			return
		} finally {
			setIsLoading(false)
		}
	}

	// const providerValues = React.useMemo(() => {
	// 	return {
	// 		state: {
	// 			isLoading,
	// 			heroes
	// 		},
	// 		getHeroes
	// 	}
	// }, [isLoading, heroes, getHeroes])

	return (
		<HeroesContext.Provider
			value={{
				isLoading,
				heroes,
				getHeroes,
				favoriteHero,
				favoritedHeoroes,
				getComics,
				comicsfromSelectedHero
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
