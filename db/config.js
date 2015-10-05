module.exports = {
    mongo: {
        //development environment connection string
        dev: {
            conn: process.env.DEV_CONN_STRING
        },
        //production environment connection string
        prod: {
            conn: process.env.PROD_CONN_STRING
        },
        options:{
            server: {
                socketOptions: { keepAlive: 1 }
            }
        }
    }
};