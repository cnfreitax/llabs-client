# Link da aplicação: https://cnfreitax.github.io/llabs-client/

## Requisitos Atendidos:
- Listagem de personagens na home
- Possibilidade de ordenação ASC/DESC
- Filtro por nome
- Favoritar até 05 personagens e poder filtrar apenas os favoritos
- Persistir os state de personagens favoritados
- Exibir pagina de detalhes do personagem escolhido
- Exibir últimos 10 quadrinhos lançados deste personagem (
- Layout responsivo
- Utilização de ES6+
- Utilização de ferramentas para garantir a qualidade do código
- CI/CD.

- alterado error ortográfico no svg logo disponibilizado, **HEROS** para **HEROES**

## Tecnologias usadas
- ReactJS
- ReactContext
- StyledComponents
- React testing library
- babel
- jest
- Typescript
- Github pages
- Github actions
- husky
- lint-staged
- eslint/prettier

### Arquitetura do projeto
A arquitetura do projeto segue os conceitos de Clean Architecture, isolando as camadas de negócio das camadas de interação e frameworks. Referência dos conceitos da arquitetura

## Instalação do projeto localmente
### Requisitos:
- NodeJS (versão recomendada: v14.18.3 ou superior)
- NPM
- Yarn (para instalar execute o comando npm i -g yarn tendo o Node e o NPM instalados na máquina ou container)

Para instalar as dependências do projeto execute o seguinte script:
```
yarn
```
Para formatar os espaçamentos gerados pelo Github:
```
yarn eslint --fix .
```

Para iniciar o projeto execute o comando:
```
yarn start
```
