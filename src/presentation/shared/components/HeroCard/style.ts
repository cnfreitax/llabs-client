import styled from 'styled-components'

import { CardProps } from '.'

type Props = Pick<CardProps, 'size'>

export const CardContainer = styled.div<Props>`
	width: ${({ size }) => (size === 'large' ? 170 : 120)}px;
	/*
	transition: box-shadow 0.5s;

	&:hover {
		-moz-box-shadow: 2px 2px rgba(68, 68, 68, 0.6);
		-webkit-box-shadow: 2px 2px rgba(68, 68, 68, 0.6);
		box-shadow: 2px 2px rgba(68, 68, 68, 0.6);
	} */

	cursor: pointer;
	.info {
		margin-top: 12px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

type PorpsCardBackground = {
	imageURI: string
}

export const Card = styled.div<PorpsCardBackground>`
	background-image: url(${({ imageURI }) => imageURI});
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	width: 100%;
	height: 180px;
	position: relative;

	&::before {
		content: '';
		width: 100%;
		height: 4px;
		position: absolute;
		bottom: 0;
		background-color: ${({ theme }) => theme.colors.primary};
	}
`
