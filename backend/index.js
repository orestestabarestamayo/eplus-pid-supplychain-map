const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('E+ PID SupplyChain Map Backend Running');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/nodes', (req, res) => {
  res.json([
    { id: 1, name: 'Fornecedor', type: 'supplier' },
    { id: 2, name: 'Centro de Distribuição', type: 'warehouse' },
    { id: 3, name: 'Loja', type: 'store' }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});