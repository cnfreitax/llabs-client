import { Comic } from 'domain/protocols/comic'

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
