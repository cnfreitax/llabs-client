export const debounce = (fn: () => void, ms = 1000) => {
	let timeoutId: ReturnType<typeof setTimeout>
	return function (this: any, ...args: any[]) {
		clearTimeout(timeoutId)
		// eslint-disable-next-line
		// @ts-ignore: Unreachable code error
		timeoutId = setTimeout(() => fn.apply(this, args), ms)
	}
}
