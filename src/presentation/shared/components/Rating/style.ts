import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin-top: 14px;
`

type StartProps = {
	ratingHero: number
}
export const Stars = styled.div<StartProps>`
	display: flex;
	margin-left: 4px;

	div:nth-child(-n + ${({ ratingHero }) => ratingHero}) {
		svg path {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}
`
