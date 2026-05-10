# Infraestrutura do Projeto – Hackaton E+ PID

## Backend

O backend do sistema foi desenvolvido em Node.js com Express e está hospedado na plataforma Render.

URL pública:
https://eplus-pid-supplychain-map.onrender.com/

A Render realiza automaticamente:

- Deploy contínuo a partir do GitHub
- Instalação automática das dependências (npm install)
- Exposição do servidor utilizando porta dinâmica (process.env.PORT)
- Disponibilidade pública para testes da banca avaliadora

## Repositório

O código-fonte do projeto está organizado da seguinte forma:

- /frontend → interface do usuário
- /backend → servidor da API
- /docs → documentação do projeto
- /pitch → materiais da apresentação

## Fluxo DevOps

1. Alterações no código
2. git push para o GitHub
3. Redeploy automático na Render
4. URL sempre atualizada com a versão mais recente

## Papel: Administração e Sistemas

Responsável por:

- Organização da estrutura do repositório
- Deploy da aplicação na nuvem
- Garantia de disponibilidade do sistema
- Definição da arquitetura de pastas
- Implementação do fluxo DevOps