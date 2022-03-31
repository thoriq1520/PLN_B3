module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-52-3-60-53.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'df3nfpp5m4kt9m'),
      user: env('DATABASE_USERNAME', 'tvwfcchfvrpnnk'),
      password: env('DATABASE_PASSWORD', 'fd64e92653cff25ec060c58f2e9c2ee78d8236a1e356f6e3050ec0e6f45ec792'),
      ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false)},
    },
  },
});
