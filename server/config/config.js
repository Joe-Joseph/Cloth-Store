import dotenv from 'dotenv';

const config = {};
dotenv.config();
config.development = {
 use_env_variable: 'DEV_DATABASE_URL',
 logging: false
};

config.staging = {
 use_env_variable: 'DATABASE_URL',
};

config.test = {
 use_env_variable: 'TEST_DATABASE_URL',
 logging: false
};

module.exports = config;