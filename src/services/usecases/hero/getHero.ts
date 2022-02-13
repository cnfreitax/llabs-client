import { IGetHeros } from 'domain/usecases'
import { HeroRepository } from 'repository/heroRepository'

export default class RemoteGetHeros implements IGetHeros {
	constructor(private readonly heroRepository: HeroRepository) {}

	async load(): Promise<IGetHeros.Model> {
		return this.heroRepository.load()
	}
}
