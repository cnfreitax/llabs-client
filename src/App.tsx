import React from 'react'
import { GlobalStyles } from 'presentation/styles/global-styles'
import { Main } from 'presentation/layouts/Main'
import theme from 'presentation/styles/theme'
import { ThemeProvider } from 'styled-components'
import { MoviesProvider } from 'presentation/context/heros'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<MoviesProvider>
				<Main />
			</MoviesProvider>
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default App
