const router = (app) => {
    //General Routes
    app.use('/_health', require('./api-health'));

    //--------------------------------------------------------------
    //Application Specific Routes

    app.use('/login', require('./login'));
    app.use('/member', require('./member'));





};



module.exports = router;