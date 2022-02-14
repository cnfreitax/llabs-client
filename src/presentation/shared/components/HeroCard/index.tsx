import { Hero } from 'domain/protocols/hero'
import { generateHashApi } from 'infra/utils/generateHashApi'
import { SvgHearth } from 'presentation/shared/assets/icons/svg/SvgHearth'
import React from 'react'
import { Text } from '..'
import Button from '../Button'

import * as S from './style'

export type CardProps = {
	size?: 'large' | 'medium'
	withFavoriteButton?: boolean
	hero: Hero
}

export const HeroCard = ({ size, withFavoriteButton, hero }: CardProps) => {
	const formatImageURI = `${hero.thumbnail.path}/standard_xlarge.jpg`

	console.log(hero)

	return (
		<S.CardContainer size={size}>
			<S.Card imageURI={formatImageURI} />

			<div className="info">
				<Text color="gray" as="span">
					{hero.name}
				</Text>
				{withFavoriteButton && (
					<Button noPadding variant="text" icon={<SvgHearth />}></Button>
				)}
			</div>
		</S.CardContainer>
	)
}
