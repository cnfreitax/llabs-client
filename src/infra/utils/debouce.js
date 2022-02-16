export function debounce(fn, mls) {
	let timeout
	;(() => {
		const args = arguments

		const context = this
		clearTimeout(timeout)

		timeout = setTimeout(() => {
			fn.apply(context, args)
		}, mls)
	})()
}
