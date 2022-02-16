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
	noPadding?: boolean
} & ButtonTypes

const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
	{ fullWidth = false, icon: Icon, active, role, ...props }: ButtonProps,
	ref
) => (
	<S.Wrapper
		fullWidth={fullWidth}
		ref={ref}
		role={role || 'button-role'}
		{...props}
		active={active}
	>
		{Icon && <div role="button-icon">{Icon}</div>}
		{!!props.children && <span>{props.children}</span>}
	</S.Wrapper>
)

export default forwardRef(Button)
