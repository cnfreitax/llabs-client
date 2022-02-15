import React from 'react'
import { fireEvent } from '@testing-library/react'
import { MainLayout } from 'presentation/layouts/Main'
import { mockHeroList } from '__test__/mocks/heroes-list'
import { render, screen, history } from '__test__/test-utils'

const makeSut = ({ isLoading = false }) => {
	return render(<MainLayout heroes={mockHeroList} isLoading={isLoading} />)
}

describe('<MainLayout />', () => {
	test('should render with correct indication amout heroes text', () => {
		makeSut({})

		const textElement = screen.getByRole('text-heroes-amount')

		expect(textElement).toBeInTheDocument()
		expect(textElement).toHaveTextContent(
			`Encontrados ${mockHeroList.length} heróis`
		)
	})

	test('should render two actions buttons', () => {
		makeSut({})

		const buttons = screen.getAllByRole('action-button-list')
		expect(buttons.length).toBe(2)

		expect(buttons[0]).toHaveTextContent('Ordenar por nome - A/Z')
		expect(buttons[1]).toHaveTextContent('Somente favoritos')
	})

	test('should render an skeleton if is loading', () => {
		makeSut({ isLoading: true })

		const skeleton = screen.getByRole('skeleton-loading')
		expect(skeleton).toBeInTheDocument()
	})

	test('should render a list of heroes', () => {
		makeSut({})

		const list = screen.getByRole('ul-heroes-list')
		expect(list).toBeInTheDocument()
		expect(list.childElementCount).toBe(mockHeroList.length)
	})

	test('should render hero card for each hero on hero list', () => {
		makeSut({})
		const cards = screen.getAllByRole('hero-card')

		expect(cards).toHaveLength(1)
		expect(cards[0]).toHaveTextContent(mockHeroList[0].name)
	})

	test('should redirect to detail page when click on hero card', () => {
		makeSut({})
		const cards = screen.getAllByRole('hero-card')

		fireEvent.click(cards[0].children[0])

		expect(history.location.pathname).toBe('/details')
	})
})
