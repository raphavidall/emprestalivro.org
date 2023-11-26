require('dotenv').config();

const app = require('./src/app');


app.listen(process.env.PORT, () => {
    console.log(`Rodando na porta ${process.env.PORT}`);
});