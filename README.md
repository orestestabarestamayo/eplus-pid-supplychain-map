*EcoChain – Supply Chain & Descarbonização* 🇧🇷Plataforma integrada ao PID E+ para mapeamento de cadeias produtivas brasileiras com camada de decisão baseada em impacto de CO₂.
Este projeto foi desenvolvido para o Hackathon E+, com o objetivo de resolver dores reais da economia brasileira através da visibilidade da cadeia de suprimentos e sustentabilidade.  

🚀 Visão Geral
O EcoChain permite a conexão entre empresas fornecedoras, centros de distribuição e pontos de venda, adicionando uma camada de inteligência que calcula a pegada de carbono baseada na logística. 
O sistema utiliza dados reais para oferecer transparência e apoiar a transição para uma economia verde.  

🛠️ Arquitetura do Sistema 
(Híbrida & Cloud)Como responsável por Administração e Sistemas, implementei uma arquitetura desacoplada que prioriza a agilidade no desenvolvimento e a robustez no processamento de dados:  

Frontend (Interface): 
Desenvolvido em Wix, garantindo uma interface de usuário (UX) moderna e rápida de iterar.  
Integração de Dados: Uso de Wix Velo para conectar a interface visual com a nossa API via requisições assíncronas (fetch).  
Backend API: 
Construído em Node.js + Express, hospedado no Render, responsável pelo processamento de lógica e endpoints de dados.  
DevOps: 
Fluxo de Continuous Deployment (CD) via GitHub. Cada atualização no código reflete automaticamente no ambiente de produção.  
Segurança: 
API configurada com políticas de CORS para permitir comunicação segura entre o domínio do Wix e o servidor Render.  

📁 Estrutura do Repositório/frontend: 
Referências e scripts de integração da interface. 
/backend: API, lógica de simulação e serviços de dados (Node.js).  
/docs: Documentación técnica de infraestrutura, requisitos e processos.  
/pitch: Materiais, capturas de tela e roteiro para a apresentação final.  

⚙️ Como Executar (Ambiente de Desenvolvimento)Clone o repositório:
Bashgit clone https://github.com/orestestabarestamayo/ecochain-supply-map.git
Configuração do Backend:
Entre na pasta /backend, instale as dependências e inicie o servidor:Bashcd backend
npm install
npm start
O servidor estará disponível em http://localhost:3000. 

 🔗 Demonstração LiveSite Oficial (Frontend): https://yasmincostalima07.wixsite.com/ecochain.  Status do Backend: https://eplus-pid-supplychain-map.onrender.com/health.  API de Dados (JSON): https://eplus-pid-supplychain-map.onrender.com/api/map. 