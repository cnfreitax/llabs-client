import styled, { css } from 'styled-components'

export const InputWrapper = styled.label`
	${({ theme }) => css`
		width: 100%;
		/* margin-top: 4rem; */
		height: 5rem;
		border-radius: ${theme.border.radius.inputRound};
		padding: 0 25px;
		display: flex;
		align-items: center;
		background: ${theme.colors.lightRed};

		input {
			margin-left: 36px;
			flex: 1;
			height: 100%;
			background: transparent;
			border: none;
			color: ${theme.colors.gray};
			font-size: ${theme.font.sizes.medium};
			font-weight: 500;
		}
	`}
`
