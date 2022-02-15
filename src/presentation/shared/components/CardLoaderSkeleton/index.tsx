import React from 'react'
import * as S from './styles'

export const CardLoaderSkeleton = ({
	counter,
	role
}: {
	counter: number
	role?: string
}) => {
	return (
		<S.List role={role}>
			{[...Array(counter)].map((skeleton, index) => (
				<S.CardSkeletonDiv key={index} />
			))}
		</S.List>
	)
}
