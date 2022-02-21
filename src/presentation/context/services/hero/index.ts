import { IGetComics, IGetHeros } from 'domain/usecases'

type Services = {
	getHeros: IGetHeros
	getComics: IGetComics
}

export default class HeroServiceContext {
	constructor(private readonly services: Services) {}

	getHeros(params: IGetHeros.Params): Promise<IGetHeros.Model> {
		return this.services.getHeros.load(params)
	}

	getComics(params: IGetComics.Params): Promise<IGetComics.Model> {
		return this.services.getComics.load(params)
	}
}
