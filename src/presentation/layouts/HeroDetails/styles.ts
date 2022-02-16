import styled from 'styled-components'

type DetailProps = {
	heroName: string
}

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const DetailsSection = styled.section<DetailProps>`
	display: flex;
	align-items: center;
	width: 100%;
	position: relative;

	&::before {
		content: '${({ heroName }) => heroName}';
		position: absolute;
		font-size: 24rem;
		font-weight: 700;
		color: ${({ theme }) => theme.colors.white};
		opacity: 0.5;
		right: 0;
	}

	.background-hero {
		position: absolute;
		right: 8rem;
		top: 9px;
		max-height: 400px;

		@media only screen and (max-width: 529px) {
			display: none;
		}
	}
`

export const DetailsContent = styled.div`
	display: flex;
	width: 100%;
	max-width: 250px;
	flex-direction: column;
	margin-bottom: 64px;
	z-index: 1;

	.details-row {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const CardWrapper = styled.div`
	margin-top: 2rem;
	width: 100%;
	display: flex;
	flex-direction: column;

	.card-wrapper-content {
		margin-top: 8px;
		display: flex;
		align-items: center;
	}

	img {
		width: 25px;
		height: 25px;
		margin-right: 8px;
	}
`

export const DivComic = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 40px;
`

export const ComicList = styled.ul`
	margin-top: 40px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-gap: 24px;
	list-style: none;
	align-items: start;
`
