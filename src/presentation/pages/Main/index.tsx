import useHeroes from 'presentation/context/heros'
import { MainLayout } from 'presentation/layouts/Main'
import React, { useEffect } from 'react'

export const MainPage = () => {
	const { getHeroes, heroes, isLoading, totalPages } = useHeroes()
	useEffect(() => {
		getHeroes({})
	}, [])

	const findHeores = (offset: number) => {
		getHeroes({
			offset: offset * 20
		})

		window.scroll({
			top: 40,
			left: 100,
			behavior: 'smooth'
		})
	}

	return (
		<MainLayout
			onChange={findHeores}
			heroes={heroes}
			isLoading={isLoading}
			totalPages={totalPages}
		/>
	)
}
