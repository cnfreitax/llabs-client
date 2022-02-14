import md5 from 'md5'

type GenerateHashApi = {
	timeNow: number
	hash: string
}

export const generateHashApi = (): GenerateHashApi => {
	const timeNow = new Date().getTime()

	const pk = process.env.REACT_APP_PUBLIC_KEY_MARVEL_API || 'LOCAL'
	const sk = process.env?.REACT_APP_PRIVATE_KEY_MARVEL_API || 'LOCAL'
	const hash = md5(timeNow + sk + pk)

	return {
		timeNow,
		hash
	}
}
