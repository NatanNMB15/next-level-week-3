# Front-End Happy

![ReactJS Front-End CI/CD](https://github.com/NatanNMB15/semanaomnistack11/workflows/ReactJS%20Front-End%20CI/CD/badge.svg?branch=frontend)

## 1. Instalação

Necessário estar com o Node JS versão 12 instalado.

Executar o comando abaixo para instalar as dependências:

Utilizando Yarn:

```
yarn install
```

Utilizando NPM:

```
npm install
```

## 2. Configurar variáveis de ambiente

É necessário configurar as variáveis de ambiente, como a URL de conexão com Back-End (API), credenciais do Google Maps Embed API que serão utilizadas pelo ReactJS. Há dois arquivos de configurações disponíveis o de desenvolvimento e de produção, ".env.development.example" e ".env.example".

### Google Maps Embed API

<a href="https://developers.google.com/maps/documentation/embed/get-api-key" target="_blank">Tutorial Google Maps Embed</a>

Necessário configurar a API Key para utilizar o Google Maps Embed API com a variável "REACT_APP_MAPS_API_KEY".

## 3. Executar na máquina local

Para executar na máquina local é necessário ter o arquivo ".env.development" e/ou ".env" com as variáveis de ambientes de desenvolvimento ou de produção. Execute com o seguinte comando:

Utilizando Yarn:

```
yarn dev
```

Utilizando NPM:

```
npm dev
```

## 4. Realizar a "Build" para o ambiente de produção

Para executar a Build é necessário ter o arquivo ".env" com as variáveis de ambientes de produção. Execute a "Build" com o seguinte comando:

Utilizando Yarn:

```
yarn build
```

Utilizando NPM:

```
npm build
```

Irá gerar uma pasta "build" com os arquivos estáticos do Site.
