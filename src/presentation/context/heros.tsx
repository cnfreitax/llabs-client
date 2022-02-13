import React from 'react'
// import { Hero } from 'domain/protocols/hero'

type HeroContext = {
	state: {
		// movies: Array<Hero>
		isLoading: boolean
	}
	// getAllHeros: () => Promise<void>
}

export const HerosContext = React.createContext<HeroContext>({
	state: {
		isLoading: false
	}
})

export function MoviesProvider({ children }: { children: React.ReactNode }) {
	// const [heros, setHeros] = React.useState<Hero[]>([])
	// const [totalResults, setTotalResults] = React.useState(0)
	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	// const movieService = useServices().movie

	const providerValues = React.useMemo(() => {
		return {
			state: {
				isLoading
			}
		}
	}, [isLoading])

	return (
		<HerosContext.Provider value={providerValues}>
			{children}
		</HerosContext.Provider>
	)
}

// function useHeros(): HeroContext {
// 	if (HerosContext) {
// 		return React.useContext(HerosContext)
// 	}
// 	return React.useContext(HerosContext)
// }

// export default useHeros
