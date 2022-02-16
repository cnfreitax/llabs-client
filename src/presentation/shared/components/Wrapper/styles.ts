import styled from 'styled-components'

import { WrapperProps } from '.'

type Props = Pick<WrapperProps, 'bgColor'>

export const Wrapper = styled.div<Props>`
	flex: 1;
	display: flex;
	min-height: 100vh;
	align-items: flex-start;
	width: 100%;
	font-size: 16px;
	position: relative;
	background: ${({ bgColor, theme }) => theme.colors[bgColor || 'white']}};
	footer {
		position: fixed;
		height: 16px;
		background: ${({ theme }) => theme.colors.primary};
		width: 100%;
		bottom: 0;
	}
`

export const Content = styled.div`
	display: flex;
	padding: 24px 14px;
	flex: 1;
	margin: 0 auto;
	width: 100%;
	max-width: 920px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`

export const Header = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
