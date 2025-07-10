import express from 'express';
import cors from 'cors';

// Import JSON data
import customerType from '../data/customer-type.json';
import accountIndustry from '../data/account-industry.json';
import teamData from '../data/team.json';
import acvRange from '../data/acv-range.json';

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS for your frontend
app.use(cors());
app.use(express.json());

// Define your endpoints
app.get('/api/customer-type', (_req, res) => {
  res.json(customerType);
});

app.get('/api/account-industry', (_req, res) => {
  res.json(accountIndustry);
});

app.get('/api/team', (_req, res) => {
  res.json(teamData);
});

app.get('/api/acv-range', (_req, res) => {
  res.json(acvRange);
});

// Global error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`📡 API server running at http://localhost:${PORT}`);
});