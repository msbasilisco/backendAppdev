const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const rateLimitMiddleware = require('./middleware/rateLimitMiddleware');
const app = express();

app.use(bodyParser.json());
app.use(rateLimitMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/users', userRoutes);


app.listen(3000, ()=>{
    console.log('Server running on port 3000');
});
