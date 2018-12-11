const app = require('express') ();

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: false}));

app.use(cookieParser());

app.set('view engine', 'ejs');

app.set('views', 'views');

let favorite;

app.get('/', (req, res)=> {
    res.render('index', { favorite: req.cookies.favorite}) ;
});

app.post('/', (req, res)=> {
    favorite = req.body.favorite;

    res.cookie('favorite', favorite, {
        maxAge : 30000
    });

    res.redirect('/');
});

app.listen(3000, ()=>{
    console.log('3000 port');
});