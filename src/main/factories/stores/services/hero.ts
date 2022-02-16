import makeApiRepository from 'main/factories/api/api-repository'
import HeroServiceContext from 'presentation/context/services/hero'
import { HeroRepository } from 'repository/heroRepository'
import { RemoteGetHeros } from 'services/usecases/hero/getHeros'
import { RemoteGetComics } from 'services/usecases/hero/getComics'

export const makeHeroService = () => {
	const heroRepository = new HeroRepository(makeApiRepository())

	const getHeros = new RemoteGetHeros(heroRepository)
	const getComics = new RemoteGetComics(heroRepository)

	return new HeroServiceContext({
		getHeros,
		getComics
	})
}
