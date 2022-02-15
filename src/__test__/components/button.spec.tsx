import React from 'react'
import Button from 'presentation/shared/components/Button'
import { render, screen } from '__test__/test-utils'
import { SvgHero } from 'presentation/shared/assets/icons/svg/SvgHero'
import { fireEvent } from '@testing-library/react'

const fakeFuncktion = jest.fn()

const makeSut = ({
	children = 'Text button',
	icon
}: {
	children?: React.ReactNode
	icon?: JSX.Element
}) => {
	return render(
		<Button icon={icon} variant="text">
			{children}
		</Button>
	)
}

describe('<Button />', () => {
	test('should render a button with correct value text', () => {
		const expected = 'any text label'

		makeSut({ children: expected })
		const textButton = screen.getByText(expected)
		expect(textButton).toBeInTheDocument()
	})

	test('should render with transparent background', () => {
		makeSut({})

		expect(screen.getByRole('button-role')).toHaveStyle({
			background: 'transparent'
		})
	})

	test('should render with icon', () => {
		makeSut({ icon: <SvgHero /> })

		const iconDiv = screen.getByRole('button-icon')

		expect(iconDiv).toBeInTheDocument()
	})

	test('should call function on click', () => {
		render(
			<Button role="button" onClick={() => fakeFuncktion()}>
				button
			</Button>
		)
		const button = screen.getByRole('button')
		fireEvent.click(button)
		expect(fakeFuncktion).toHaveBeenCalled()
	})
})
