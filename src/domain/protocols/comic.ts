type ComicDate = {
	date: string
	type: 'onsaleDate' | 'focDate'
}

export type ComicImages = {
	path: string
}

export type Comic = {
	id: number
	title: string
	dates: ComicDate[]
	description: string
	images: ComicImages[]
}
