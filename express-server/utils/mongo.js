const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/web3-shopping-cart';

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => {
    console.error('Error conectando a MongoDB:', err.message);
    process.exit(1);
  });

module.exports = mongoose;
