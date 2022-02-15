import { IGetHeros } from 'domain/usecases'
import { generateHashApi } from 'infra/utils/generateHashApi'
import { ApiStatusCode } from 'services/protocols/api-client'
import { IApiRepository } from 'services/protocols/apiRepository'
import { HeroReporisotyProtocol } from './protocols/hero-protocol'

export class HeroRepository implements HeroReporisotyProtocol {
	constructor(private readonly apiRepository: IApiRepository) {}

	async load(): Promise<IGetHeros.Model> {
		const { apiRepository } = this
		const { hash, timeNow } = generateHashApi()

		const httpResponse = await apiRepository.get({
			route: 'characters'
		})

		if (
			httpResponse.statusCode &&
			httpResponse.statusCode !== ApiStatusCode.ok
		) {
			throw new Error('Erro no servidor ao buscar os filmes')
		} else {
			// httpResponse.body.Search = httpResponse.body.Search.map(
			// 	(movie: MovieAttributes) => {
			// 		return new Movie(movie)
			// 	}
			// )

			return httpResponse.body
		}
	}
}
