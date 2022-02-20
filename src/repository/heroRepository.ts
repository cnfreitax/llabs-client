import { IGetComics, IGetHeros } from 'domain/usecases'
import { ApiStatusCode } from 'services/protocols/api-client'
import { IApiRepository } from 'services/protocols/apiRepository'
import { HeroReporisotyProtocol } from './protocols/hero-protocol'

export class HeroRepository implements HeroReporisotyProtocol {
	constructor(private readonly apiRepository: IApiRepository) {}

	async loadComics(params: IGetComics.Params): Promise<IGetComics.Model> {
		const { apiRepository } = this

		const httpResponse = await apiRepository.get({
			route: `characters/${params.characterId}/comics`
		})

		if (
			httpResponse.statusCode &&
			httpResponse.statusCode !== ApiStatusCode.ok
		) {
			throw new Error('Erro no servidor ao buscar os filmes')
		} else {
			return httpResponse.body
		}
	}

	async loadHeros(params: IGetHeros.Params): Promise<IGetHeros.Model> {
		const { apiRepository } = this

		const httpResponse = await apiRepository.get({
			route: 'characters',
			params: params
		})

		if (
			httpResponse.statusCode &&
			httpResponse.statusCode !== ApiStatusCode.ok
		) {
			throw new Error('Erro no servidor ao buscar os filmes')
		} else {
			return httpResponse.body
		}
	}
}
