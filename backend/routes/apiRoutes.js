const express = require('express');
const app = express();

app.get('/api/brands', (req, res) => {
  const request = pool.request();
  request.query('SELECT * FROM your_brands', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server Error');
      return;
    }

    const brands = result.recordset;
    res.json(brands);
  });
});
