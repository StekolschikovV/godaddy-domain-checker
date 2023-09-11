import express, {Request, Response} from 'express';
import checker from "./checker";

const app = express()
const port = process.env.PORT || 8080
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
app.post('/api/check', async (req: Request, res: Response) => {
    const {domainName} = req.body
    if (domainName) {
        res.json(await checker.check(domainName))
    } else {
        res.send("No domainName")
    }
})

app.get('/', async (req: Request, res: Response) => {
    res.send("Hi!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})