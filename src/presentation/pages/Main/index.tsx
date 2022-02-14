import useHeroes from 'presentation/context/heros'
import { MainLayout } from 'presentation/layouts/Main'
import React, { useEffect } from 'react'

export const MainPage = () => {
	const { getHeroes, heroes, isLoading } = useHeroes()
	useEffect(() => {
		getHeroes()
	}, [])

	return <MainLayout heroes={heroes} isLoading={isLoading} />
}
