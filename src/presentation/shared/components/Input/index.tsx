import React, { InputHTMLAttributes } from 'react'
import { BarLoader } from '../BarLoader'
import * as S from './styles'

type Props = {
	placeholder: string
	icon?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = ({
	placeholder,
	icon: Icon
}: Props) => {
	return (
		<S.InputWrapper>
			{Icon && <img src={String(Icon)} alt="Icone de Lupa em vermelho" />}
			<input type="text" placeholder={placeholder} />
			<BarLoader />
		</S.InputWrapper>
	)
}

export default React.forwardRef(Input)
