import React from 'react'
import { HeroDetailsPage } from 'presentation/pages/HeroDetails'
import { MainPage } from 'presentation/pages/Main'
import { Routes, Route, HashRouter } from 'react-router-dom'

export const RoutesAPP = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/">
					<Route index element={<MainPage />} />
					<Route path="/details" element={<HeroDetailsPage />} />
				</Route>
			</Routes>
		</HashRouter>
	)
}
