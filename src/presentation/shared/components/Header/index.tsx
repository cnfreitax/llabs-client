import React from 'react'
import Logo from 'presentation/shared/assets/icons/logo.svg'
import Search from 'presentation/shared/assets/icons/ic_busca.svg'
import { Text } from '../Text'

import * as S from './styles'

export const Header = () => {
	return (
		<S.Wrapper>
			<img
				src={String(Logo)}
				alt="Logo escrito Marvel search heros em vermelho e preto"
			/>

			<div className="header-info">
				<Text size="xlarge" color="gray">
					EXPLORE O UNIVERSO
				</Text>

				<Text size="small" color="gray" as="span">
					Mergulhe no domínio deslumbrante de todos os personagens clássicos que
					você ama - e aqueles que você descubrirá em breve!
				</Text>
			</div>

			<S.Input>
				<img src={String(Search)} alt="Icone de Lupa em vermelho" />
				<input type="text" placeholder="Procure por heróis" />
			</S.Input>
		</S.Wrapper>
	)
}
