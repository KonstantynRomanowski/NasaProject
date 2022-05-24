const http = require('http');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./modules/planets.model');
const { loadLaunchesData } = require('./modules/launches.model');

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchesData();
    
    server.listen((PORT), () => {
        console.log(`Server is listening on ${PORT}...`)
    });
}

startServer();

