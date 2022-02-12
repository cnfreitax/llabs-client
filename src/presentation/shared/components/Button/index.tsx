import React, {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	forwardRef,
	ForwardRefRenderFunction
} from 'react'

import * as S from './styles'

type ButtonTypes =
	| AnchorHTMLAttributes<HTMLAnchorElement>
	| ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
	outlined?: boolean
	fullWidth?: boolean
	as?: React.ElementType
	variant?: 'text'
	icon?: JSX.Element
	active?: boolean
} & ButtonTypes

const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
	{ fullWidth = false, icon: Icon, active, ...props }: ButtonProps,
	ref
) => (
	<S.Wrapper fullWidth={fullWidth} ref={ref} {...props} active={active}>
		{Icon && Icon}
		{!!props.children && <span>{props.children}</span>}
	</S.Wrapper>
)

export default forwardRef(Button)
