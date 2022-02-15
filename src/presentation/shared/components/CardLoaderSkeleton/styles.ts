import styled, { keyframes } from 'styled-components'

const laoding = keyframes`
	from {
		left: -10px
	}
	to {
		left: 10px
	}
`

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 40px;
	list-style: none;
`

export const CardSkeletonDiv = styled.div`
	position: relative;
	height: 180px;
	width: 150px;
	&::before {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
		height: 12px;
		width: 50%;
		background: linear-gradient(to right, #dee1e1 10%, #f4f4f4 360%);
		animation: ${laoding} 1s ease-in-out infinite;
		animation-fill-mode: forwards;
		animation-direction: alternate-reverse;
	}

	&::after {
		content: '';
		display: block;
		position: absolute;
		box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
		top: 0;
		height: 80%;
		width: 100%;
		background: linear-gradient(to right, #dee1e1 10%, #f4f4f4 360%);
		animation: ${laoding} 1s ease-in-out infinite;
		animation-fill-mode: forwards;
		animation-direction: alternate-reverse;
	}
`
