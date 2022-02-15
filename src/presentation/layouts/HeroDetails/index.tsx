import React from 'react'
import {
	Wrapper,
	Text,
	Rating,
	HeroCard
} from 'presentation/shared/components/'
import { SvgHearth } from 'presentation/shared/assets/icons/svg/SvgHearth'
import IconComic from 'presentation/shared/assets/icons/ic_quadrinhos.svg'
import * as S from './styles'

import Hulk from 'presentation/shared/assets/icons/hulkv.png'

import Button from 'presentation/shared/components/Button'
import theme from 'presentation/styles/theme'
import { Hero } from 'domain/protocols/hero'
import useHeroes from 'presentation/context/heros'

type Props = {
	hero: Hero
}

export const HeroDetailsLayout = ({ hero }: Props) => {
	const {
		favoriteHero,
		favoritedHeoroes,
		comicsfromSelectedHero: comics
	} = useHeroes()

	console.log(comics)

	return (
		<Wrapper bgColor="secondary">
			<S.Content>
				<S.DetailsSection heroName={hero.name.split(' ')[0]}>
					<S.DetailsContent>
						<div className="details-row">
							<Text size="xlarge" color="gray">
								{hero.name}
							</Text>

							<Button
								active={favoritedHeoroes.includes(hero.id)}
								onClick={() => favoriteHero(hero.id)}
								icon={<SvgHearth />}
								noPadding
								variant="text"
							/>
						</div>

						<Text
							as="p"
							size="xxsmall"
							fontWeight={500}
							color="gray200"
							lineHeight={1.7}
						>
							{hero.description || 'Descrição não disponível'}
						</Text>

						<div className="details-row">
							<InfoCard
								label="Quadrinhos"
								icon={IconComic}
								amout={hero.comics.available}
							/>
							<InfoCard
								label="Filmes"
								icon={IconComic}
								amout={hero.series.available}
							/>
						</div>

						<Rating rating={getRandomRanting()} />

						<Text size="xxxsmall" color="gray">
							Último quadrinho:{' '}
							<span style={{ color: theme.colors.gray200 }}>13 fev. 2020</span>
						</Text>
					</S.DetailsContent>

					<img
						className="background-hero"
						src={String(Hulk)}
						alt="imagem do herois"
					/>
				</S.DetailsSection>
				<S.DivComic>
					<Text size="xsmall" color="gray">
						Últimos lançamentos
					</Text>

					<S.ComicList>
						{comics.map((comic) => (
							<li key={comic.id}>
								<HeroCard
									title={comic.title}
									to="/"
									thumbnailPath={comic.images[0] && comic.images[0].path}
									size="medium"
								/>
							</li>
						))}
					</S.ComicList>
				</S.DivComic>
			</S.Content>
		</Wrapper>
	)
}

type PropsCard = {
	label: string
	amout: number
	icon: React.FC
}

const getRandomRanting = () => Math.floor(Math.random() * (5 - 1) + 1)

const InfoCard = ({ label, icon, amout }: PropsCard) => {
	return (
		<S.CardWrapper>
			<Text size="xxxsmall" color="gray">
				{label}
			</Text>
			<div className="card-wrapper-content">
				<img src={String(icon)} alt="icone de revista em quadrinho" />
				<Text size="xxxsmall" color="gray">
					{amout.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
				</Text>
			</div>
		</S.CardWrapper>
	)
}
