export default {
	border: {
		radius: {
			small: '10px',
			medium: '15px',
			inputRound: '25px',
			large: '20px',
			rounded: '50%'
		}
	},
	font: {
		family:
			"Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		light: 300,
		normal: 400,
		semiBold: 500,
		bold: 600,
		black: 700,
		sizes: {
			xxxsmall: '0.625em',
			xxsmall: '0.75em',
			xsmall: '0.875em',
			small: '1em',
			medium: '1.125em',
			large: '1.5em',
			xlarge: '2em',
			xxlarge: '3em',
			xxxlarge: '3.5em'
		}
	},
	colors: {
		primary: '#ff0000',
		white: '#ffffff',
		secondary: '#E2F0E1',
		gray: '#4A4A4A',
		lightRed: '#ff00001c',
		lightGray: '#bcc2be'
	},
	transition: {
		default: '0.3s ease-in-out',
		fast: '0.1s ease-in-out'
	}
} as const
