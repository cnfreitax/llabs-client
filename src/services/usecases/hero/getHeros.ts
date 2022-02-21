import { IGetHeros } from 'domain/usecases'
import { HeroRepository } from 'repository/heroRepository'

export class RemoteGetHeros implements IGetHeros {
	constructor(private readonly heroRepository: HeroRepository) {}

	async load(params: IGetHeros.Params): Promise<IGetHeros.Model> {
		return this.heroRepository.loadHeros(params)
	}
}
