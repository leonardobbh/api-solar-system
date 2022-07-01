require('dotenv').config();

module.exports = {
    service: {
        prefix_url: process.env.PREFIX_URL,
        port: parseInt(process.env.SERVICE_PORT) || 5000
    }
}