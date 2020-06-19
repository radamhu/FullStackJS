const joi = require('joi');

// unknow : elfogadhat más értéekket, is , nemcsak azokat amit az objektumban definiálunk
// required: fontos hogy az obketum ott legyn:
const configSchema = joi
  .object({
    PORT: joi.number().default(3000),
    CURRENCY_API_KEY: joi.string().required(),
    LOG_LEVEL: joi.string().default('info'),
    DB_URI: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    CURRENCY_API_URL: joi.string().required(),
  })
  .unknown()
  .required();

const validatedConfig = joi.attempt(process.env, configSchema);

const config = {
  port: validatedConfig.PORT,
  currencyAPIKey: validatedConfig.CURRENCY_API_KEY,
  logLevel: validatedConfig.LOG_LEVEL,
  dbURI: validatedConfig.DB_URI,
  jwtSecret: validatedConfig.JWT_SECRET,
  currencyAPIURL: validatedConfig.CURRENCY_API_URL,
};

module.exports = config;
