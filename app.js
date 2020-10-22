const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/index')

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))

app.use(routes);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`))