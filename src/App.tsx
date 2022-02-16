import React from 'react'
import { GlobalStyles } from 'presentation/styles/global-styles'
import theme from 'presentation/styles/theme'
import { ThemeProvider } from 'styled-components'
import { HeoresProvider } from 'presentation/context/heros'
import { RoutesAPP } from 'main/routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<HeoresProvider>
				<RoutesAPP />
			</HeoresProvider>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default App
