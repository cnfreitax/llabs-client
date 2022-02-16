import ApiClientImplementation from 'infra/apiClient'
import ApiRequestDecorator from 'main/decorators/apiRequestDecorator'
import ApiRepository from 'repository/apiRepository'

export default function makeApiRepository() {
	const apiRepository = new ApiRepository(new ApiClientImplementation())
	return new ApiRequestDecorator(apiRepository)
}
