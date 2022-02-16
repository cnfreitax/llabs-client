import theme from 'presentation/styles/theme'
import React, { ReactNode } from 'react'
import { Header } from '../Header'
import * as S from './styles'

export type WrapperProps = {
	children: ReactNode
	withText?: boolean
	bgColor?: keyof typeof theme.colors
}

export const Wrapper = ({ children, withText, bgColor }: WrapperProps) => {
	return (
		<S.Wrapper bgColor={bgColor}>
			<S.Content>
				<Header withText={withText} />

				{children}
			</S.Content>

			{/* <footer>{''}</footer> */}
		</S.Wrapper>
	)
}
