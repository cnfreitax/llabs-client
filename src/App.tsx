import React from 'react'
import { GlobalStyles } from 'presentation/styles/global-styles'
import { Main } from 'presentation/layouts/Main'
import theme from 'presentation/styles/theme'
import { ThemeProvider } from 'styled-components'
import { MoviesProvider } from 'presentation/context/heros'
import { HeroDetailsLayout } from 'presentation/layouts/HeroDetail'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<MoviesProvider>
				{/* <Main /> */}
				<HeroDetailsLayout />
			</MoviesProvider>
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default App
