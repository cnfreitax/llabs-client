import { SVGRatingStart } from 'presentation/shared/assets/icons/svg/SVGRating'
import React from 'react'

import { Text } from '../Text'
import * as S from './style'

export const Rating = ({ rating }: { rating: number }) => {
	return (
		<S.Container>
			<Text as="span" color="gray" size="xxxsmall">
				Rating:
			</Text>
			<S.Stars ratingHero={rating}>
				{[...Array(5)].map((star) => (
					<div key={star}>
						<SVGRatingStart />
					</div>
				))}
			</S.Stars>
		</S.Container>
	)
}
