module.exports = {
    development: {
      port: process.env.PORT || 3000,
      saltingRounds: 10
    },
    //Db creds will be moved to ENV file, while going to production.
    db:{
        HOST: "database-2.cfmiwud6chfq.us-east-2.rds.amazonaws.com",
        USER: "root",
        PASSWORD: "mypassword",
        DATBASE:"inventory"
    }
  }