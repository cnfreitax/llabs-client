import { Hero } from 'domain/protocols/hero'
import useHeroes from 'presentation/context/heros'
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
	const { favoriteHero, favoritedHeoroes } = useHeroes()
	const formatImageURI = `${hero.thumbnail.path}/standard_xlarge.jpg`

	return (
		<S.CardContainer size={size}>
			<S.Card imageURI={formatImageURI} />
			<div className="info">
				<Text color="gray" as="span">
					{hero.name}
				</Text>
				{withFavoriteButton && (
					<Button
						active={
							favoritedHeoroes.length >= 0 && favoritedHeoroes.includes(hero.id)
						}
						onClick={() => favoriteHero(hero.id)}
						noPadding
						variant="text"
						icon={<SvgHearth />}
					></Button>
				)}
			</div>
		</S.CardContainer>
	)
}
