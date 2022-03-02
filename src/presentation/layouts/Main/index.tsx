import React from 'react'
import {
	Wrapper,
	Text,
	HeroCard,
	CardLoaderSkeleton
} from 'presentation/shared/components'

import * as S from './styles'
import Button from 'presentation/shared/components/Button'
import { SvgHero } from 'presentation/shared/assets/icons/svg/SvgHero'
import { SvgHearth } from 'presentation/shared/assets/icons/svg/SvgHearth'
import { ReactComponent as EnpytIcon } from 'presentation/shared/assets/icons/ic_enpyt-heroes.svg'
import { Hero } from 'domain/protocols/hero'
import useHeroes from 'presentation/context/heros'
import {
	Pagination,
	PaginationProps
} from 'presentation/shared/components/Pagination'

type Props = {
	heroes: Array<Hero>
	isLoading: boolean
} & PaginationProps

export const MainLayout = ({
	heroes,
	isLoading,
	totalPages,
	onChange
}: Props) => {
	const [orderList, setOrderList] = React.useState<'ASC' | 'DESC'>('ASC')
	const [onlyFavorites, setOnlyFavorites] = React.useState<boolean>(false)

	const { favoritedHeoroes, heroesFilteredByName } = useHeroes()

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
						<Text
							role="text-heroes-amount"
							color="lightGray"
							as="span"
							fontWeight={400}
							size="small"
						>
							Encontrados {heroes.length} heróis
						</Text>

						<S.MenuOptions>
							<Button
								role="action-button-list"
								onClick={() => handleWithSwitchOrder()}
								variant="text"
								icon={<SvgHero />}
								active={true}
							>
								Ordenar por nome - {orderList === 'ASC' ? 'A/Z' : 'Z/A'}
							</Button>

							<Button
								role="action-button-list"
								onClick={() => handleSelectFavorites()}
								variant="text"
								icon={<SvgHearth />}
								active={onlyFavorites}
							>
								Somente favoritos
							</Button>
						</S.MenuOptions>
					</S.Menu>

					{isLoading ? (
						<CardLoaderSkeleton role="skeleton-loading" counter={10} />
					) : (
						<>
							{heroesFilteredByName && heroesFilteredByName.length > 0
								? mekaHeroCardList(heroesFilteredByName)
								: onlyFavorites
								? favoritedSection(favoritedHeoroes)
								: mekaHeroCardList(formatedList)}
						</>
					)}
				</S.Main>
				{!onlyFavorites && (
					<Pagination onChange={onChange} totalPages={totalPages} />
				)}
			</S.Container>
		</Wrapper>
	)
}

const favoritedSection = (favoritedHeoroes: Hero[]) => {
	return favoritedHeoroes.length > 0 ? (
		mekaHeroCardList(favoritedHeoroes)
	) : (
		<EnpytIcon />
	)
}

const mekaHeroCardList = (heroList: Array<Hero>) => {
	return (
		<ul role="ul-heroes-list">
			{heroList.map((hero) => (
				<HeroCard
					key={hero.id}
					role="hero-card"
					title={hero.name}
					to="details"
					state={{ hero: hero }}
					thumbnailPath={hero.thumbnail?.path}
					hero={hero}
					withFavoriteButton
					size="large"
				/>
			))}
		</ul>
	)
}
