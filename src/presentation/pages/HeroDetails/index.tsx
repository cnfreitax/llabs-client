import React from 'react'
import { Hero } from 'domain/protocols/hero'
import { HeroDetailsLayout } from 'presentation/layouts/HeroDetails'
import { useLocation } from 'react-router-dom'

type LocationType = {
	state: {
		hero: Hero
	}
}

export const HeroDetailsPage = () => {
	const { state } = useLocation() as LocationType

	console.log('state', state.hero)

	return <HeroDetailsLayout hero={state.hero} />
}
