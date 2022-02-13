import { IGetHeros } from 'domain/usecases'

export interface HeroReporisotyProtocol {
	load(): Promise<IGetHeros.Model>
}
