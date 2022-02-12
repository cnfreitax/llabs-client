import { SvgHearth } from 'presentation/shared/assets/icons/svg/SvgHearth'
import React from 'react'
import { Text } from '..'
import Button from '../Button'

import * as S from './style'
export const HeroCard = () => {
	return (
		<S.CardContainer>
			<S.Card />

			<div className="info">
				<Text color="gray" as="span">
					Star-Lord
				</Text>
				<Button noPadding variant="text" icon={<SvgHearth />}></Button>
			</div>
		</S.CardContainer>
	)
}
