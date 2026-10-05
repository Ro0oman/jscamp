import {createServer} from 'node:http'
import { json } from 'node:stream/consumers'
import { randomUUID } from 'node:crypto'

process.loadEnvFile()

const port = process.env.PORT || 3000;
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Jack'},
];


const server = createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    const {method, url} = req;

    const [pathname, queryString] = url.split('?');
    const searchParams = new URLSearchParams(queryString);

    if (method === 'GET') {
        if (pathname === '/users') {

            if (
              Number.isNaN(Number(searchParams.get("limit"))) ||
              Number.isNaN(Number(searchParams.get("offset")))
            ) {
              return sendJsonResponse(res, 400, {
                message: "Limit and offset must be numbers",
              });
            }

            const limit = Number(searchParams.get('limit')) || users.length;
            const offset = Number(searchParams.get('offset')) || 0;
            const paginatedUsers = users.slice(offset, offset + limit);

    
            return sendJsonResponse(res, 200, paginatedUsers);
        }
    }

    function sendJsonResponse(res, statusCode, data) {
        res.statusCode = statusCode;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(data));
    }

    function sendResponse(res, statusCode, message) {
        res.statusCode = statusCode;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(message);
    }

    if (method === 'POST') {
        if (pathname === '/users') {            
            const body = await json(req);
            if (!body.name) {
                return sendJsonResponse(res, 400, { message: 'Name is required' });
            }
            const newUser = { id: randomUUID(), name: body.name };
            users.push(newUser);
            console.log(users);

            return sendJsonResponse(res, 201, { message: 'User created', user: newUser });
            
        }
    }

    if (pathname === '/') {
        res.end('Welcome to the Node.js server!');
    }else if (pathname === '/health'){
        sendJsonResponse(res, 200, {status: 'OK', uptime: process.uptime() });
    }else{
        sendResponse(res, 404, 'Not found'); 
    }
})

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})