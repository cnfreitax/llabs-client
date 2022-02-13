import ApiRepository from 'repository/apiRepository'
import { ApiResponse } from 'services/protocols/api-client'
import {
	IApiRepository,
	RepositoryRequest
} from 'services/protocols/apiRepository'

export default class ApiRequestDecorator implements IApiRepository {
	constructor(private readonly apiRepository: ApiRepository) {}

	async get(data: RepositoryRequest): Promise<ApiResponse> {
		const newData: RepositoryRequest = {
			...data,
			url: `${data.url}&apikey=67c1297f`
		}
		return this.apiRepository.get(newData)
	}
}
