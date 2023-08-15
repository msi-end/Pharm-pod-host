
let clients = [];

function sendSSE(data, user) {
    clients.forEach((client) => {
        if (client.user == user) {
            client.res.write(`data: ${JSON.stringify(data)}\n\n`);
        }
    });
}

const getRealtime = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'X-Accel-Buffering': 'no',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    let client = { id: Date.now(), user: req.query.user, res };
    clients.push(client);
    req.on('close', () => {
        console.log(`Client ${client.id} disconnected.`);
        clients.splice(clients.indexOf(client), 1);
    });
}

module.exports = { clients, sendSSE, getRealtime };