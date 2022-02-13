import md5 from 'md5'

type GenerateHashApi = {
	timeNow: number
	hash: string
}

export const generateHashApi = (): GenerateHashApi => {
	const timeNow = Number(new Date())
	const pk = process.env.REACT_APP_PUBLIC_KEY_MARVEL_API || 'LOCAL'
	const hash = md5(timeNow + pk + process.env?.REACT_APP_PRIVATE_KEY_MARVEL_API)

	return {
		timeNow,
		hash
	}
}
