import express, { Request, Response, NextFunction } from 'express';

const app = express();


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.redirect('https://twitch.tv/forsen')
});

app.listen('4000', () => {
    console.log(`server is running on port 4000`);
});