import axios, { AxiosResponse } from 'axios'
import {
	ApiClient,
	ApiRequest,
	ApiResponse
} from 'services/protocols/api-client'

export default class ApiClientImplementation implements ApiClient {
	async request(data: ApiRequest): Promise<ApiResponse> {
		let axiosResponse: AxiosResponse
		try {
			axiosResponse = await axios.request({
				url: data.url,
				method: data.method,
				data: data.body,
				headers: data.headers
			})
		} catch (err: any) {
			axiosResponse = err.response
		}

		return {
			statusCode: axiosResponse.status,
			body: axiosResponse.data
		}
	}
}
