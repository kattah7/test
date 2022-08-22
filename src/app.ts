import express, { Request, Response, NextFunction } from 'express';

const app = express();


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.redirect('https://youtu.be/d1YBv2mWll0')
});

app.listen('4000', () => {
    console.log(`server is running on port 4000`);
});