import axios, { AxiosResponse } from 'axios'
import { generateHashApi } from 'infra/utils/generateHashApi'
import {
	ApiClient,
	ApiRequest,
	ApiResponse
} from 'services/protocols/api-client'

export default class ApiClientImplementation implements ApiClient {
	async request(data: ApiRequest): Promise<ApiResponse> {
		let axiosResponse: AxiosResponse

		try {
			const { hash, timeNow } = generateHashApi()
			axiosResponse = await axios.get(
				`${process.env.REACT_APP_API_URL}${data.route}?ts=${timeNow}&apikey=${process.env.REACT_APP_PUBLIC_KEY_MARVEL_API}&hash=${hash}`
			)
		} catch (err: any) {
			axiosResponse = err.response
		}

		return {
			statusCode: axiosResponse.status,
			body: axiosResponse.data
		}
	}
}
