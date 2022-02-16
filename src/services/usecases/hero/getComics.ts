import { IGetComics } from 'domain/usecases'
import { HeroReporisotyProtocol } from 'repository/protocols/hero-protocol'

export class RemoteGetComics implements IGetComics {
	constructor(private readonly heroRepository: HeroReporisotyProtocol) {}

	async load(data: IGetComics.Params): Promise<IGetComics.Model> {
		return this.heroRepository.loadComics(data)
	}
}
