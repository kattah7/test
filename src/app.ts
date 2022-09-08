import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.use(express.static("src/public"));

app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.redirect('https://youtu.be/d1YBv2mWll0')
});

app.get(`/kekw`, (req: Request, res: Response, next: NextFunction) => {
    res.render('kekw.ejs');
});

app.get('/kekw2', (req: Request, res: Response, next: NextFunction) => {
    res.render('kekw2.ejs');
});

app.listen('4000', () => {
    console.log(`server is running on port 4000`);
});