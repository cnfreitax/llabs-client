import styled, { css } from 'styled-components'
import { HeaderProps } from '.'

type Props = Pick<HeaderProps, 'withText'>

export const Wrapper = styled.header<Props>`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: ${({ withText }) => withText && 'column'};
	margin-bottom: 4rem;

	${({ withText }) =>
		!withText &&
		css`
			@media only screen and (max-width: 698px) {
				flex-direction: column;
				align-items: flex-start;

				label {
					margin-top: 12px;
				}
			}
		`}

	.header-info {
		margin: 22px 0 33px;
		text-align: center;

		h1 {
			margin-bottom: 12px;
		}
	}
`
