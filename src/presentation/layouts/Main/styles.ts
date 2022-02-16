import styled from 'styled-components'

export const Container = styled.div`
	flex: 1;
	display: flex;
	width: 100%;
	margin-top: 44px;
	flex-direction: column;
`

export const Menu = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	width: 100%;
	padding: 8px 0;
	justify-content: space-between;
`

export const MenuOptions = styled.div`
	display: flex;
	align-items: center;
`

export const Main = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	ul {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 40px;
		list-style: none;
	}
`
