import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 14px;
	ul {
		color: ${({ theme }) => theme.colors.primary};
		font-weight: bold;
		width: 100%;
		max-width: 350px;
		justify-content: space-between;
		display: flex;
		flex-direction: row;
		list-style: none;
		li {
			padding: 4px;
			cursor: pointer;
		}

		li.active a {
			background-color: ${({ theme }) => theme.colors.primary};
			border-color: transparent;
			color: white;
			padding: 4px;
			border-radius: 4px;
			min-width: 32px;
		}
	}
`
