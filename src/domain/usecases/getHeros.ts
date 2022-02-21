import { Hero } from 'domain/protocols/hero'

export interface IGetHeros {
	load(data: IGetHeros.Params): Promise<IGetHeros.Model>
}

export namespace IGetHeros {
	export type Params = {
		offset?: number
		name?: string
	}

	export type Model = {
		data: {
			results: Array<Hero>
			total: number
		}
	}
}
