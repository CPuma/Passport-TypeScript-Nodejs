// ***************  Configuracion principal del SERVIDOR

// importaciones
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import specialRoutes from './routes/special.routes';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
// APP.SET  crea variables para la configuracion o uso del servidor

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize()); // para que inicialize
passport.use(passportMiddleware); // por passport . EJECUTA el middleware

// routes
app.get('/', (req, res) => {
	res.send(`The Api is at  http://localhost:${app.get('port')}`);
});
app.use(authRoutes);
app.use(specialRoutes);

export default app;
