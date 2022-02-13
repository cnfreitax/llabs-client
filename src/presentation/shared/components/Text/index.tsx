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
}

export const Text = ({
	children,
	color,
	size,
	fontWeight,
	lineHeight,
	as
}: TextProps) => {
	return (
		<S.Heading
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
