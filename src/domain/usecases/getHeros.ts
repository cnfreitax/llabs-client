import { Hero } from 'domain/protocols/hero'

export interface IGetHeros {
	load(): Promise<IGetHeros.Model>
}

export namespace IGetHeros {
	export type Model = Array<Hero>
}
