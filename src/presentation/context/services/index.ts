import React from 'react'
import { makeHeroService } from 'main/factories/stores/services/hero'

const services = {
	hero: makeHeroService()
}

export const servicesContext = React.createContext(services)

export type ServicesType = Partial<typeof services>
