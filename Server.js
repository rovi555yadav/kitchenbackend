const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ingredientRoutes = require('./routes/ingredients');
const recipeRoutes = require('./routes/recipes');
const authRoutes = require('./routes/auth');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/recipes', recipeRoutes);

app.use('/api/auth', authRoutes);


// MongoDB Connection
mongoose.connect('mongodb+srv://bobby555yadav:L7cBw7noz6veqevS@cluster0.6ikgsos.mongodb.net/', {}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});
//L7cBw7noz6veqevS
//mongodb+srv://bobby555yadav:L7cBw7noz6veqevS@cluster0.6ikgsos.mongodb.net/

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
