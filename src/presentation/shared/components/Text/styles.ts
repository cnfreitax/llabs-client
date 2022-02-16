import theme from 'presentation/styles/theme'
import styled, { css } from 'styled-components'
import { TextProps } from '.'

export const Heading = styled('h1').attrs<TextProps>(({ as }) => ({
	as: as
}))<TextProps>`
	${({ color, size, fontWeight = 700, lineHeight = 1.5 }) => css`
		color: ${theme.colors[color || 'primary']};
		font-size: ${theme.font.sizes[size || 'medium']};
		font-weight: ${fontWeight};
		line-height: ${lineHeight};
	`}
`
