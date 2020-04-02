require('dotenv').config();

const CONFIG = require('./config/app');
const server = require('./server');

server.listen(CONFIG.PORT, () => console.log(`Server is running on PORT: ${CONFIG.PORT}`));
