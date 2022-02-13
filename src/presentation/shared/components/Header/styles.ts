import styled from 'styled-components'
import { HeaderProps } from '.'

type Props = Pick<HeaderProps, 'withText'>

export const Wrapper = styled.header<Props>`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: ${({ withText }) => withText && 'column'};
	margin-bottom: 4rem;

	.header-info {
		margin-top: 1.3rem;
		text-align: center;

		h1 {
			margin-bottom: 12px;
		}
	}
`
