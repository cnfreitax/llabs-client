import { Hero } from 'domain/protocols/hero'

export const mockHeroList: Hero[] = [
	{
		comics: {
			available: 12,
			items: Array(12)
		},
		description: '',
		id: 1011334,
		modified: '2014-04-29T14:18:17-0400',
		name: '3-D Man',
		resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
		series: {
			available: 3,
			items: Array(3)
		},
		thumbnail: {
			path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784'
		}
	}
]
