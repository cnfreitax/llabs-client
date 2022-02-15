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
	entityIdentifier?: number
	thumbnailPath: string
	role?: string
} & LinkType

export const HeroCard = ({
	size,
	withFavoriteButton,
	title,
	to,
	state,
	entityIdentifier,
	thumbnailPath,
	role
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
				{withFavoriteButton && entityIdentifier && (
					<Button
						active={
							favoritedHeoroes &&
							favoritedHeoroes.length >= 0 &&
							favoritedHeoroes.includes(entityIdentifier)
						}
						onClick={() => favoriteHero(entityIdentifier)}
						noPadding
						variant="text"
						icon={<SvgHearth />}
					/>
				)}
			</div>
		</S.CardContainer>
	)
}
