const express = require('express');
const userRoutes = require('./routes/user');
const rateLimitMiddleware = require('./middleware/rateLimitMiddleware');
const app = express();

app.use(express.json());
// Remove the global application of rateLimitMiddleware
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
