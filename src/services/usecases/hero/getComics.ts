import { IGetComics } from 'domain/usecases'
import { HeroRepository } from 'repository/heroRepository'

export class RemoteGetComics implements IGetComics {
	constructor(private readonly heroRepository: HeroRepository) {}

	async load(data: IGetComics.Params): Promise<IGetComics.Model> {
		return this.heroRepository.loadComics(data)
	}
}
