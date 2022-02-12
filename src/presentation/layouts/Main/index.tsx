import React from 'react'
import { Wrapper, Text, HeroCard } from 'presentation/shared/components'

import * as S from './styles'
import Button from 'presentation/shared/components/Button'
import { SvgHero } from 'presentation/shared/assets/icons/svg/SvgHero'
import { SvgHearth } from 'presentation/shared/assets/icons/svg/SvgHearth'

export const Main = () => {
	return (
		<Wrapper>
			<S.Container>
				<S.Menu>
					<Text color="lightGray" as="span" fontWeight={400} size="small">
						Encontrados 20 heróis
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

				<S.Main>
					<ul>
						<li>
							<HeroCard />
						</li>
					</ul>
				</S.Main>
			</S.Container>
		</Wrapper>
	)
}
