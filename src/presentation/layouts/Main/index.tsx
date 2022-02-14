import React from 'react'
import { Wrapper, Text, HeroCard } from 'presentation/shared/components'

import * as S from './styles'
import Button from 'presentation/shared/components/Button'
import { SvgHero } from 'presentation/shared/assets/icons/svg/SvgHero'
import { SvgHearth } from 'presentation/shared/assets/icons/svg/SvgHearth'
import { Hero } from 'domain/protocols/hero'

type Props = {
	heroes: Array<Hero>
	isLoading: boolean
}

export const MainLayout = ({ heroes, isLoading }: Props) => {
	console.log(heroes)

	return (
		<Wrapper withText>
			<S.Container>
				<S.Main>
					<S.Menu>
						<Text color="lightGray" as="span" fontWeight={400} size="small">
							Encontrados {heroes.length} heróis
						</Text>

						<S.MenuOptions>
							<Button variant="text" icon={<SvgHero />} active={true}>
								Ordenar por nome - A/Z
							</Button>

							<Button variant="text" icon={<SvgHearth />} active={true}>
								Somente favoritos
							</Button>
						</S.MenuOptions>
					</S.Menu>

					<ul>
						{heroes.map((hero) => (
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
