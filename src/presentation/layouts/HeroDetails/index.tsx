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

export const HeroDetailsLayout = () => {
	return (
		<Wrapper bgColor="secondary">
			<S.Content>
				<S.DetailsSection heroName="Hulk">
					<S.DetailsContent>
						<div className="details-row">
							<Text size="xlarge" color="gray">
								HULK
							</Text>

							<Button icon={<SvgHearth />} noPadding variant="text" />
						</div>

						<Text
							as="p"
							size="xxsmall"
							fontWeight={500}
							color="gray200"
							lineHeight={1.7}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</Text>

						<div className="details-row">
							<InfoCard label="Quadrinhos" icon={IconComic} amout={3000} />
							<InfoCard label="Filmes" icon={IconComic} amout={50} />
						</div>

						<Rating />

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

					{/* <S.ComicList>
						<li>
							<HeroCard size="medium" />
						</li>

						<li>
							<HeroCard size="medium" />
						</li>

						<li>
							<HeroCard size="medium" />
						</li>

						<li>
							<HeroCard size="medium" />
						</li>

						<li>
							<HeroCard size="medium" />
						</li>

						<li>
							<HeroCard size="medium" />
						</li>
					</S.ComicList> */}
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
