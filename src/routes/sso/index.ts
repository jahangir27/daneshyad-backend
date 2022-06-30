import express from 'express';
import base64url from 'base64url';
import passport from 'passport';

let router = express.Router();

router.use('/login/*', (req: any, res: any, next: any) =>{
    passport.authenticate('oauth2')(req, res, next);
});

router.use('/auth/callback/',
            passport.authenticate('oauth2', { failureRedirect: '/error' , session: false}),
            (req:any, res:any) => {
                let options = {
                    signed: true 
                }
            
                // Set cookie
                res.cookie('accessToken', req.user.accessToken, options);
                res.cookie('refreshToken', req.user.refreshToken, options);
                return res.redirect(process.env.DANESHYAN_FRONT_ROOT);
            }
        );
router.use('/error', (req: any, res: any) => {
    console.log(`${req.baseURL} --> Error`);
    return res.json({ message: 'error', success: false });
});

router.use((req: any, res: any, next: any)=> {
    res.status(404);
    const error = new Error('Not Found');
    next(error);
});

router.use((error: any, req: any, res: any, next: any)=> {
    res.status(res.statusCode || 500);

    return res.json({ message: error.message, success: false });
});

export default router;