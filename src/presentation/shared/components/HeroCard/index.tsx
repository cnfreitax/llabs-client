import { SvgHearth } from 'presentation/shared/assets/icons/svg/SvgHearth'
import React from 'react'
import { Text } from '..'
import Button from '../Button'

import * as S from './style'

export type CardProps = {
	size?: 'large' | 'medium'
	withFavoriteButton?: boolean
}

export const HeroCard = ({ size, withFavoriteButton }: CardProps) => {
	return (
		<S.CardContainer size={size}>
			<S.Card />

			<div className="info">
				<Text color="gray" as="span">
					Star-Lord
				</Text>
				{withFavoriteButton && (
					<Button noPadding variant="text" icon={<SvgHearth />}></Button>
				)}
			</div>
		</S.CardContainer>
	)
}
