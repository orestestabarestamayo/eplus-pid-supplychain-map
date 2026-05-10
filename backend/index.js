const express = require('express');
const cors = require('cors');
const app = express();

// Configuração de CORS para permitir o acesso do frontend no Wix [cite: 1012, 1013]
app.use(cors({
    origin: 'https://yasmincostalima07.wixsite.com' // Domínio oficial do frontend no Wix [cite: 1272]
}));

// Rota raiz com o nome oficial do projeto [cite: 1269, 1273]
app.get('/', (req, res) => {
  res.send('E+ PID EcoChain Backend Running');
});

// Endpoint de verificação de integridade (Health Check) [cite: 897]
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Endpoint para os nós da cadeia de suprimentos [cite: 944]
app.get('/api/nodes', (req, res) => {
  res.json([
    { id: 1, name: 'Fornecedor', type: 'supplier' },
    { id: 2, name: 'Centro de Distribuição', type: 'warehouse' },
    { id: 3, name: 'Loja', type: 'store' }
  ]);
});

// Endpoint para o mapa com dados de localização e CO2 [cite: 1136, 1137]
app.get('/api/map', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Fornecedor A',
      lat: -23.5505,
      lng: -46.6333,
      co2: 120
    },
    {
      id: 2,
      name: 'Centro Distribuição',
      lat: -23.5200,
      lng: -46.6000,
      co2: 80
    },
    {
      id: 3,
      name: 'Loja Final',
      lat: -23.5600,
      lng: -46.6500,
      co2: 40
    }
  ]);
});

// Configuração da porta para o deploy no Render [cite: 762, 786]
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});