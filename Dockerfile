## Comando obrigatório
## Baixa a imagem do node com versão alpine (versão mais simplificada e leve)
FROM node:10.15.0-alpine
## Container ficará ouvindo os acessos na porta 3000 e 9229
EXPOSE 3000 9229

## Define o local onde o app vai ficar no disco do container
## Pode ser o diretório que você quiser
WORKDIR /home/app

## Copia tudo que começa com package e termina com .json para dentro da pasta /home/app/
COPY package*.json /home/app/

RUN npm install

## Copia tudo que está no diretório onde o arquivo Dockerfile está 
## para dentro da pasta /home/app do container
## Vamos ignorar a node_modules por isso criaremos um .dockerignore
COPY . .

CMD ./scripts/start.sh