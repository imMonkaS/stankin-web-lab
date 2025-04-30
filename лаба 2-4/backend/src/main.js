const express = require('express');
const cors = require('cors');
require('dotenv').config({path: './src/config/.env'});

const app = express();
require('./models/index');

app.use(cors())
app.use(express.json());

const routers = require('./routes/router');
app.use('/api/v1', routers)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT}`);
    console.log(`Docs is on http://${process.env.HOST}:${process.env.PORT}/api/docs`);
});
