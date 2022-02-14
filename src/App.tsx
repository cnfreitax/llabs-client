import React from 'react'
import { GlobalStyles } from 'presentation/styles/global-styles'
import theme from 'presentation/styles/theme'
import { ThemeProvider } from 'styled-components'
import { HeoresProvider } from 'presentation/context/heros'
import { MainPage } from 'presentation/pages/Main'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<HeoresProvider>
				<MainPage />
			</HeoresProvider>
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default App
