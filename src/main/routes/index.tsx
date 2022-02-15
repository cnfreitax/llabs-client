import { HeroDetailsPage } from 'presentation/pages/HeroDetails'
import { MainPage } from 'presentation/pages/Main'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const RoutesAPP = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<MainPage />} />
				<Route path="/details" element={<HeroDetailsPage />} />
			</Routes>
		</BrowserRouter>
	)
}
