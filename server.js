const express = require('express');
const path = require('path');
const { collectDefaultMetrics, register } = require('prom-client');
const app = express();
const port = 80;

// Prometheus metrics setup
collectDefaultMetrics();

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (error) {
    res.status(500)
       .set('Content-Type', 'text/plain')
       .send(error.message);
  }
});

// Serve static files using absolute path
app.use(express.static(
  path.join(__dirname, '/dist/poker-planning-back/browser'),
  { maxAge: '1y' }  // Add caching for production
));

// Client-side routing fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/poker-planning-back/browser/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});