import React, { ReactElement } from 'react'
import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'presentation/styles/theme'

import { createBrowserHistory } from 'history'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'

const history = createBrowserHistory()

const customRender = (ui: ReactElement) =>
	render(
		<HistoryRouter history={history}>
			<ThemeProvider theme={theme}>{ui}</ThemeProvider>
		</HistoryRouter>
	)

export * from '@testing-library/react'
export { customRender as render }
export { history }
