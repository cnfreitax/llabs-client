import makeApiRepository from 'main/factories/api/api-repository'
import HeroServiceContext from 'presentation/context/services/hero'
import { HeroRepository } from 'repository/heroRepository'
import RemoteGetHeros from 'services/usecases/hero/getHero'

export const makeHeroService = () => {
	const heroRepository = new HeroRepository(makeApiRepository())

	const getHeros = new RemoteGetHeros(heroRepository)

	return new HeroServiceContext({
		getHeros
	})
}
