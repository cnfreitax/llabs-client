type Item = {
	name: string
	resourceURI: string
}

export type Hero = {
	id: number
	name: string
	description: string
	modified: string
	resourceURI: string
	comics: {
		available: number
		items: Item[]
	}
	series: {
		available: number
		items: Item[]
	}
	thumbnail: {
		path: string
	}
}
