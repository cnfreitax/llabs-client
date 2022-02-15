import React from 'react'
import { Wrapper, Text, HeroCard } from 'presentation/shared/components'

import * as S from './styles'
import Button from 'presentation/shared/components/Button'
import { SvgHero } from 'presentation/shared/assets/icons/svg/SvgHero'
import { SvgHearth } from 'presentation/shared/assets/icons/svg/SvgHearth'
import { Hero } from 'domain/protocols/hero'
import useHeroes from 'presentation/context/heros'

type Props = {
	heroes: Array<Hero>
	isLoading: boolean
}

export const MainLayout = ({ heroes, isLoading }: Props) => {
	const [orderList, setOrderList] = React.useState<'ASC' | 'DESC'>('ASC')
	const [onlyFavorites, setOnlyFavorites] = React.useState<boolean>(false)

	const { favoritedHeoroes } = useHeroes()

	const formatedList = React.useMemo(() => {
		if (orderList === 'ASC') {
			return heroes.sort((a, b) => {
				if (a.name > b.name) return 1
				if (a.name < b.name) return -1
				return 0
			})
		} else {
			return heroes.sort((a, b) => {
				if (a.name < b.name) return 1
				if (a.name > b.name) return -1
				return 0
			})
		}
	}, [orderList, heroes])

	const listOfFavorites = () =>
		heroes.filter((hero) => favoritedHeoroes.includes(hero.id))

	const handleWithSwitchOrder = () =>
		orderList === 'ASC' ? setOrderList('DESC') : setOrderList('ASC')

	const handleSelectFavorites = () => {
		setOnlyFavorites(!onlyFavorites)
	}

	return (
		<Wrapper withText>
			<S.Container>
				<S.Main>
					<S.Menu>
						<Text color="lightGray" as="span" fontWeight={400} size="small">
							Encontrados {heroes.length} heróis
						</Text>

						<S.MenuOptions>
							<Button
								onClick={() => handleWithSwitchOrder()}
								variant="text"
								icon={<SvgHero />}
								active={true}
							>
								Ordenar por nome - {orderList === 'ASC' ? 'A/Z' : 'Z/A'}
							</Button>

							<Button
								onClick={() => handleSelectFavorites()}
								variant="text"
								icon={<SvgHearth />}
								active={onlyFavorites}
							>
								Somente favoritos
							</Button>
						</S.MenuOptions>
					</S.Menu>

					<ul>
						{onlyFavorites
							? listOfFavorites().map((hero) => (
									<li key={hero.name}>
										<HeroCard hero={hero} withFavoriteButton size="large" />
									</li>
							  ))
							: formatedList.map((hero) => (
									<li key={hero.name}>
										<HeroCard hero={hero} withFavoriteButton size="large" />
									</li>
							  ))}
					</ul>
				</S.Main>
			</S.Container>
		</Wrapper>
	)
}
