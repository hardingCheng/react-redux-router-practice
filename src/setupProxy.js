// 跨域配置   在create-react-app  github中有的
const proxy= require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        proxy({
            target: 'http://localhost:3031',
            changeOrigin: true,
        })
    );
};
