import { Hero } from 'domain/protocols/hero'
import useHeroes from 'presentation/context/heros'
import { SvgHearth } from 'presentation/shared/assets/icons/svg/SvgHearth'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { Text } from '..'
import Button from '../Button'

import * as S from './style'

type LinkType = LinkProps

export type CardProps = {
	size?: 'large' | 'medium'
	withFavoriteButton?: boolean
	title: string
	thumbnailPath: string
	role?: string
	hero?: Hero
} & LinkType

export const HeroCard = ({
	size,
	withFavoriteButton,
	title,
	to,
	state,
	thumbnailPath,
	role,
	hero
}: CardProps) => {
	const { favoriteHero, favoritedHeoroes } = useHeroes()
	const formatImageURI = `${thumbnailPath}/standard_xlarge.jpg`

	return (
		<S.CardContainer size={size} role={role}>
			<Link to={to} state={state}>
				<S.Card imageURI={formatImageURI} />
			</Link>
			<div className="info">
				<Text color="gray" as="span">
					{title}
				</Text>
				{withFavoriteButton && hero && (
					<Button
						active={
							favoritedHeoroes.length >= 0 &&
							favoritedHeoroes.filter((item) => item.id === hero.id).length > 0
						}
						onClick={() => favoriteHero(hero)}
						noPadding
						variant="text"
						icon={<SvgHearth />}
					/>
				)}
			</div>
		</S.CardContainer>
	)
}
