import { Router, Request, Response } from 'express';
const router = Router();

import passport from 'passport';
router.all('**', passport.authenticate('jwt', { session: false }));
router.get('/special', (req: Request, res: Response) => {
	res.send('Bienvenido a la ruta protegida');
});

export default router;
