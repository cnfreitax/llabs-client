import React from 'react'
import Logo from 'presentation/shared/assets/icons/logo.svg'
import SmallLogo from 'presentation/shared/assets/icons/logo_menor.svg'

import { Text } from '../Text'

import * as S from './styles'
import { SearchForm } from '../forms/Search'
export type HeaderProps = {
	withText?: boolean
}

export const Header = ({ withText }: HeaderProps) => {
	return (
		<S.Wrapper withText={withText}>
			<img
				src={withText ? String(Logo) : String(SmallLogo)}
				alt="Logo escrito Marvel search heros em vermelho e preto"
			/>
			{withText && (
				<div className="header-info">
					<Text size="xlarge" color="gray">
						EXPLORE O UNIVERSO
					</Text>

					<Text size="small" color="gray" as="span">
						Mergulhe no domínio deslumbrante de todos os personagens clássicos
						que você ama - e aqueles que você descubrira em breve!
					</Text>
				</div>
			)}

			<SearchForm />
		</S.Wrapper>
	)
}
