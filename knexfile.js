// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://joe:123@localhost:5432/portfolio-thompson',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: 'jdbc:postgresql://ec2-54-160-133-106.compute-1.amazonaws.com:5432/d3mtstgkk6n8o4?sslmode=require&user=mrxfsxmdrxmgfe&password=6bd41dfa2c50c8ad89a9f5ce06563c1ab1450c7e834bb327d8e3d0d1d2aa0641',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    }
  }

};
