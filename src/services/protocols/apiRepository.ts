import { ApiRequest, ApiResponse } from './api-client'

export type RepositoryRequest = {
	url?: string
	body?: any
	headers?: any
	route: string
	params?: Params
}

type Params = {
	offset?: number
}

export interface IApiRepository<T = any> {
	get: (data: RepositoryRequest) => Promise<ApiResponse<T>>
}
