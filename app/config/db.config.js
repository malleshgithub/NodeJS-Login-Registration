module.exports = {
    HOST: "localhost",
    USER: "Root@1992",
    PASSWORD: "Root@1992",
    DB: "mydb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };