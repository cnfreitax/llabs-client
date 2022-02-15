import { Comic } from 'domain/protocols/comic'
import { Hero } from 'domain/protocols/hero'

export interface IGetComics {
	load(data: IGetComics.Params): Promise<IGetComics.Model>
}

export namespace IGetComics {
	export type Params = {
		characterId: number
	}

	export type Model = {
		data: {
			results: Array<Comic>
		}
	}
}
