import React from 'react'
import { Hero } from 'domain/protocols/hero'
import useServices from 'presentation/hooks/useService'
type HeroContext = {
	heroes: Array<Hero>
	isLoading: boolean
	getHeroes: () => Promise<void>
}

export const HeroesContext = React.createContext<HeroContext>({
	heroes: [],
	isLoading: false,
	getHeroes: async () => undefined
})

export function HeoresProvider({ children }: { children: React.ReactNode }) {
	const [heroes, setHeroes] = React.useState<Hero[]>([])
	// const [totalResults, setTotalResults] = React.useState(0)
	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const heroService = useServices().hero

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
		<HeroesContext.Provider value={{ isLoading, heroes, getHeroes }}>
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
