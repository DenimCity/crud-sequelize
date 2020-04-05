require('dotenv').config();

const CONFIG = require('./config/app');
const server = require('./server');
const logger = require('./utils/logger');

server.listen(CONFIG.PORT, () => logger.info(`Server is running on PORT: ${CONFIG.PORT}`));
