const path = require('path');
const server = require('./src/server');

const PORT = 3000;

// global.appRoot = path.resolve(__dirname);
console.log(global.appRoot);
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
