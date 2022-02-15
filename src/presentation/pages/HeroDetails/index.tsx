import React from 'react'
import { Hero } from 'domain/protocols/hero'
import { HeroDetailsLayout } from 'presentation/layouts/HeroDetails'
import { useLocation } from 'react-router-dom'
import useHeroes from 'presentation/context/heros'
import { Comic } from 'domain/protocols/comic'

type LocationType = {
	state: {
		hero: Hero
	}
}

export const HeroDetailsPage = () => {
	const { state } = useLocation() as LocationType

	const { getComics } = useHeroes()

	React.useEffect(() => {
		;(async () => {
			getComics({ characterId: state.hero.id })
		})()
	}, [])

	return <HeroDetailsLayout hero={state.hero} />
}
