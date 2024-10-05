// Configuración de Express

const express = require('express');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api', itemRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
