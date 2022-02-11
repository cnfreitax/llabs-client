import styled from 'styled-components'

export const LoadginWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	#upperbar {
		animation: upperBar linear;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		transform-origin: center;
		transform-box: border-box;
	}

	#middlebar {
		animation: middlebar ease;

		animation-duration: 2s;
		animation-iteration-count: infinite;
		transform-origin: center;
		transform-box: border-box;
	}

	#bottombar {
		animation: bottombar ease;

		animation-duration: 2s;
		animation-iteration-count: infinite;
		transform-origin: center;
		transform-box: border-box;
	}

	@keyframes upperBar {
		0% {
			transform: translateX(0px);
		}
		50% {
			transform: translateX(15px);
		}
		100% {
			transform: translateX(0px);
		}
	}

	@keyframes middlebar {
		0% {
			transform: translateX(-20px);
		}
		50% {
			transform: translateX(0px);
		}
		100% {
			transform: translateX(-20px);
		}
	}

	@keyframes bottombar {
		0% {
			transform: translateX(0px);
		}
		50% {
			transform: translateX(10px);
		}
		100% {
			transform: translateX(0px);
		}
	}
`
