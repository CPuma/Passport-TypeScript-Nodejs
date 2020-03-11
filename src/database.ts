// Configuracion de la DATABASE

import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config/config';

const dbOptions: ConnectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
};

mongoose.connect(config.DB.URI, dbOptions);
const connection = mongoose.connection;

connection.once('open', () => {
	console.log('MongoDB connection stablished');
});
connection.on('error', (err) => {
	console.log('ERRRORRRRR::\n', err);
	process.exit(0);
});
