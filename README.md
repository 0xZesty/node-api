
## Documentação da API

#### rotas da aplicação



#### regista usuario

```http
  POST /auth/register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. |
| `email`      | `string` | **Obrigatório**.  |
| `password`      | `string` | **Obrigatório**.  |



```http
  POST /auth/authenticate
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**.  |
| `senha` | `string` | **Obrigatório**.  |

```http
  POST /auth/reset_password
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**.  |
| `token` | `string` | **Obrigatório**.  |
| `password` | `string` | **Obrigatório**.  |

```http
  POST /auth/forgot_password
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**.  |
