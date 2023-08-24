const loadEnvironmentVariable = (envName) => {
  if(process.env[envName]) return process.env[envName]

  throw new Error(`${envName} does not exists`)
}
module.exports = {
  database_uri: loadEnvironmentVariable('POSTGRES_URI')
}
