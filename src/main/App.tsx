import React from 'react'
import { GlobalStyles } from 'presentation/styles/global-styles'
import { Main } from 'presentation/layouts/Main'
import theme from 'presentation/styles/theme'
import { ThemeProvider } from 'styled-components'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Main />
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default App
