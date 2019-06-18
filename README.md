# esx_characters - ESX Multi Characters

## Introdução

> Já vi muitos pedidos para ter o ESX Multi Character, enquanto trabalhei no meu próprio framework, fiz várias vezes e queria testá-lo com o ESX. Tentei editar o menos possível para o núcleo do essentialmode ou es_extended e funcionou bem :) PS. apenas não se importe com o nome...

## Suporte

> Por causa das muitas perguntas que recebo, elas são diferentes do script que eu decidi **não suporta** nenhum script esx_characters. Muitos erros são causados por causa de outro script que pode ter algo como 'playerJoined' como um evento. Existem muitos scripts ESX diferentes instalados para servidores diferentes, por isso não posso ajudar a todos.

## Instalação

> Primeiro de tudo para conseguir este trabalho você precisa comentar o `NetworkIsSessionStarted ()` Citizen.CreateThread () em *essentialmode\client\main.lua* nas linhas *6 - 16*

> Segundo, você precisa enviar o arquivo SQL para o seu banco de dados **ANTES** para iniciar o recurso.

> Por fim, você colocará o recurso (*esx_characters*) na sua pasta de recursos.

> Em *esx_characters\server\main.lua* você pode editar as tabelas onde um identificador é necessário como tal:
```
local IdentifierTables = {
    {table = "users", column = "identifier"},
    {table = "owned_vehicles", column = "owner"},
    {table = "user_accounts", column = "identifier"},
}
```
> **Preste atenção: você tem que chamar o recurso 'esx_characters' para que o javascript funcione!!!**

## Como funciona
> O que este script manipula o ESX para carregar caracteres
Então, quando você está escolhendo seu personagem, ele muda seu ID de vapor, que normalmente é vapor: para Char: isso evita que o ESX carregue outro caractere porque ele está procurando exatamente o vapor. Então, quando você escolher o seu personagem, ele mudará de Char: para o seu código de vapor normal (steam :). Ao criar um novo personagem, ele irá gerar você sem um steamid exato, o que cria uma nova entrada de banco de dados para o seu steamid

## Créditos

> ESX Framework e **KASH** e **Onno204** para criar o recurso. Você pode fazer o que quiser com o que quiser, mas é legal dar créditos ao homem principal ;)

- LOVE KASH (Discord: KASH#0205)
