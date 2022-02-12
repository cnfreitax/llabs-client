import React, { ReactNode } from 'react'
import { Header } from '../Header'
import * as S from './styles'

type Props = {
	children: ReactNode
}

export const Wrapper = ({ children }: Props) => {
	return (
		<S.Wrapper>
			<S.Content>
				<Header />

				{children}
			</S.Content>

			<footer>{''}</footer>
		</S.Wrapper>
	)
}
