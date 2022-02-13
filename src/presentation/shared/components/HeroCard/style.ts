import styled from 'styled-components'

import { CardProps } from '.'

export const CardContainer = styled.div<CardProps>`
	width: ${({ size }) => (size === 'large' ? 170 : 120)}px;

	.info {
		margin-top: 12px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const Card = styled.div`
	background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkEjfCg036qrg-ytF1xgITDisWe1M1SWHCe5B_Syt9UC9rpFdcfkucYn0cJ1E3vlkoU8&usqp=CAU');
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	width: 100%;
	height: 180px;
	position: relative;
`
