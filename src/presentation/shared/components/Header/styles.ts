import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.header-info {
		margin-top: 1.3rem;
		text-align: center;

		h1 {
			margin-bottom: 12px;
		}
	}
`

export const Input = styled.label`
	${({ theme }) => css`
		width: 100%;
		max-width: 820px;
		margin-top: 4rem;
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
