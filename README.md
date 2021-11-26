# Eduzzstore - server
Esse é o backend da aplicação de ecommerce EduzzStore.<br/>Acesse o repositório do Frontend em: https://github.com/DausterBarbosa/eduzzstore<br/>Acesse esse projeto em produção em: https://eduzzstore.netlify.app/

## Sobre
Backend feito em NodeJS e banco de dados MongoDB.

## Como rodar o projeto
```
# Clone o repositório
$ git clone https://github.com/DausterBarbosa/eduzzstore-server.git

# Instale as dependências
$ yarn

# Inicilize o server
$ yarn start
```
### Observações
Antes de rodar o projeto trate de configurar as variáveis de ambiente.<br/>
Crie um arquivo <strong>.env</strong> na raiz do projeto com o conteúdo abaixo e insira a porta e a URL do banco de dados no local indicado, qualquer dúvida consulte o arquivo <strong>.env.example</strong> que mostra como deve ser o formato do arquivo.

```
# Porta da aplicação
PORT="Aqui vai a porta da aplicação. EX: 3000"

#Banco de dados

DB_URL="Aqui vai a URL do banco de dados"
```

## Endpoints
| Method | Endpoint | Sobre
|--- |--- |---
| GET | /products | Retorna todos os produtos
| GET | /stock/id_do_produto | Retorna a quantidade em estoque do produto indicado
