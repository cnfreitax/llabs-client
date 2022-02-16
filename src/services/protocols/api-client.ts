export type ApiRequest = {
	// url: string
	// method: ApiMethod
	// body?: any
	// headers?: any

	route: string
}

export interface ApiClient<R = any> {
	request: (data: ApiRequest) => Promise<ApiResponse<R>>
}

export enum ApiMethod {
	POST = 'post',
	GET = 'get',
	PUT = 'put',
	DELETE = 'delete'
}

export enum ApiStatusCode {
	ok = 200,
	created = 201,
	noContent = 204,
	badRequest = 400,
	unauthorized = 401,
	forbidden = 403,
	notFound = 404,
	serverError = 500
}

export type Pagination = {
	pageSize: number
	pageNumber: number
}

export type Interval = {
	startDate: string
	endDate: string
}

export type ApiResponse<T = any> = {
	statusCode: ApiStatusCode
	body: T
}
