import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = Pick<
	ButtonProps,
	'active' | 'fullWidth' | 'variant' | 'noPadding'
>
const wrapperModifiers = {
	fullWidth: () => css`
		width: 100%;
	`,
	disabled: (theme: DefaultTheme) => css`
		&:disabled {
			cursor: not-allowed;
			background: ${theme.colors.primary};
		}
	`,
	text: (theme: DefaultTheme) => css`
		background: transparent;
		color: ${theme.colors.primary};
	`
}

export const Wrapper = styled.button<WrapperProps>`
	${({ theme, fullWidth, disabled, variant, noPadding }) => css`
		display: inline-flex;
		align-items: center;
		padding: ${noPadding ? 0 : '20px'};
		justify-content: space-between;
		font-family: ${theme.font.family};
		cursor: pointer;
		border-radius: ${theme.border.radius.small};
		font-weight: 600;
		font-size: ${theme.font.sizes.small};
		height: 54px;
		outline: none;
		border none;
		/* width: min(290px, 100%); */
		text-decoration: none;
		flex-shrink: 0;
		${!!fullWidth && wrapperModifiers.fullWidth()};
		${disabled && wrapperModifiers.disabled(theme)};
		${variant === 'text' && wrapperModifiers[variant](theme)}
	`}

	span {
		color: ${({ theme, active }) => !active && theme.colors.lightGray};
	}

	svg {
		margin-right: 8px;
	}

	svg path {
		fill: ${({ theme, active }) => !active && theme.colors.lightGray};
	}
`
