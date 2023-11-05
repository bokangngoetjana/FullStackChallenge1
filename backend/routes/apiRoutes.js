const express = require('express');
const app = express();
const sql = require('mssql');

const config = {
  user: 'BOKANGN\bokan',
  password: '',
  server: 'BOKANGN//SQLEXPRESS',
  database: 'BrandsDB',
  
};


app.get('./assets/', async (req, res) => {
  try{
    const pool = await sql.connect(config);
    const result = await pool.request().execute("sp_GetAllImages");

    const ImageUrls = result.recordset.map(record => record.ImageUrl);

    res.json(ImageUrls);
  }
  catch (error){
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is running on port ${port}');
});