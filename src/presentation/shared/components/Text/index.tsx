import React from 'react'

import * as S from './styles'

export type TextProps = {
	color?: 'primary' | 'gray' | 'lightGray' | 'gray200'
	size?:
		| 'xlarge'
		| 'xsmall'
		| 'small'
		| 'medium'
		| 'large'
		| 'xxxsmall'
		| 'xxsmall'
		| 'xxlarge'
		| 'xxxlarge'
	fontWeight?: 100 | 200 | 400 | 300 | 500 | 600
	lineHeight?: string | number
	as?: React.ElementType
	children: React.ReactNode
	role?: string
}

export const Text = ({
	children,
	color,
	size,
	fontWeight,
	lineHeight,
	as,
	role
}: TextProps) => {
	return (
		<S.Heading
			role={role}
			color={color}
			size={size}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			as={as}
		>
			{children}
		</S.Heading>
	)
}
