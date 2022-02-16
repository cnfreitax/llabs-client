import {
	ApiClient,
	ApiMethod,
	ApiResponse
} from 'services/protocols/api-client'
import {
	IApiRepository,
	RepositoryRequest
} from 'services/protocols/apiRepository'

export default class ApiRepository<Model = any>
	implements IApiRepository<Model>
{
	constructor(private readonly apiClient: ApiClient<Model>) {}

	async get(data: RepositoryRequest): Promise<ApiResponse<Model>> {
		return this.apiClient.request({
			...data
		})
	}
}
