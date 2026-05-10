# eplus-pid-supplychain-map
Plataforma integrada ao PID E+ para mapeamento de cadeias produtivas brasileiras com camada de decisão baseada em CO₂.
# E+ PID – Supply Chain Map & Carbon Footprint 🇧🇷

Este projeto foi desenvolvido para o **Hackathon E+**, com foco em resolver dores reais da economia brasileira através da integração com a plataforma **PID**.

## 🚀 Visão Geral
A plataforma mapeia cadeias produtivas brasileiras, conectando empresas fornecedoras e adicionando uma camada de inteligência de decisão baseada no impacto logístico de CO₂.

## 🛠️ Arquitetura do Sistema (Cloud & DevOps)
Como responsável por **Administração e Sistemas**, implementei uma arquitetura desacoplada e automatizada para garantir escalabilidade e agilidade no desenvolvimento:

* **Frontend:** Desenvolvido em **React + Vite**, utilizando **Leaflet** para visualização geográfica, hospedado na **Vercel**.
* **Backend API:** Construído em **Node.js + Express**, processando dados reais e lógica de negócios, hospedado no **Render**.
* **DevOps:** Fluxo de **Continuous Deployment (CD)** via GitHub. Cada atualização no repositório reflete automaticamente nos ambientes de produção.
* **Integração:** API REST configurada com políticas de **CORS** para comunicação segura entre domínios.

## 📁 Estrutura do Repositório
* `/frontend`: Código interface, dashboard e mapas.
* `/backend`: API, lógica de simulação e serviços de dados.
* `/docs`: Documentação técnica de infraestrutura e processos.
* `/pitch`: Materiais e roteiro para a apresentação final.

## ⚙️ Como Executar
1. Clone o repositório: `git clone https://github.com/orestestabarestamayo/eplus-pid-supplychain-map.git`.
2. **Backend:** Entre em `/backend`, execute `npm install` e `npm start`.
3. **Frontend:** Entre em `/frontend`, execute `npm install` e `npm run dev`.

## 🔗 Endpoints de Demonstração (Live)
* **Status do Sistema:** [https://eplus-pid-supplychain-map.onrender.com/health](https://eplus-pid-supplychain-map.onrender.com/health.
* **API de Dados:** [https://eplus-pid-supplychain-map.onrender.com/api/nodes](https://eplus-pid-supplychain-map.onrender.com/api/nodes).