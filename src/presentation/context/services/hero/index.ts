import { IGetHeros } from 'domain/usecases'

type Services = {
	getHeros: IGetHeros
}

export default class HeroServiceContext {
	constructor(private readonly services: Services) {}

	getHeros(): Promise<IGetHeros.Model> {
		return this.services.getHeros.load()
	}
}
