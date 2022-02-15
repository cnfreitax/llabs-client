import React from 'react'
import * as S from './styles'

export const CardLoaderSkeleton = ({ counter }: { counter: number }) => {
	return (
		<S.List>
			{[...Array(counter)].map((skeleton, index) => (
				<S.CardSkeletonDiv key={index} />
			))}
		</S.List>
	)
}
