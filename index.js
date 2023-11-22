import http from "node:http"
import fs from "node:fs/promises";

const PORT = 8080;

http
    .createServer(async (request, response) => {
        if (request.method === 'GET' && request.url === '/comedians') {
            try {
                const data = await fs.readFile('comedians.json', 'utf-8')

                response.writeHead(200, {
                    "Content-Type": "text/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                })
                response.end(data);
            } catch (error) {
                response.writeHead(500, {
                    "Content-Type": "text/plain; charset=utf-8",
                })
                response.end(`Ошибка сервера: ${error}`)
            }



        } else {
            response.writeHead(404, {
                "Content-Type": "text/plain; charset=utf-8",
            });
            response.end("not авыавы")
        }

    })
    .listen(PORT)

console.log(`Сервер запущен на http://localhost:${PORT}`)