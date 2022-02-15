import { IGetComics, IGetHeros } from 'domain/usecases'

export interface HeroReporisotyProtocol {
	loadHeros(): Promise<IGetHeros.Model>
	loadComics(params: IGetComics.Params): Promise<IGetComics.Model>
}
