module.exports = {
    host: "127.0.0.1",
    port: 3307,
    user: "root", 
    password: "Password1.",
    db: "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: true
};
