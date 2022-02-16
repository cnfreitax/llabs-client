import React from 'react'
import Search from 'presentation/shared/assets/icons/ic_busca.svg'

import * as S from './styles'
import Input from '../../Input'

export const SearchForm = () => {
	return (
		<S.Form>
			<Input placeholder="Procure por heróis" icon={String(Search)} />
		</S.Form>
	)
}
