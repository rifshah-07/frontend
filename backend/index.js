const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");
const userRouter = require('./routers/userRouter.js'); //require function for importing in backend
const cors = require('cors');

const app = express();
const port = 5000; // server run krne ke lie port chahiye hota h, ek port pe ek se zada server run ni krta

// middleware
// for converting json data into js

app.use(express.json());
const httpServer = createServer(app);
const io = new Server(httpServer, { cors : {
    origin : ['http://localhost:3000']
} });

app.use(cors({
    origin: ['http://localhost:3000']
}));

io.on("connection", (socket) => {
    console.log('client connected');

    socket.on('sendmsg', (data) => {
        console.log(data);

        data.sent = false;

        socket.broadcast.emit('recmsg', data);
    })
  });

//middleware, upar wale ko use krne ke liye

app.use('/user', userRouter);// request ko userRouter pe bhejne kelien




//processing the request
//route or endpoint

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/home', (req, res) => {
    res.send('response from home');
});

app.get('*', (req, res) => {
    res.send('404 invalid route');
})

// starting the express server

httpServer.listen(port, () => {
    console.log(' express server started');
})

