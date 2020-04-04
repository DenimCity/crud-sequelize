
function changeEnvVariabled() {
  console.log('Configuring Env Variable');
  console.log('===================================');
  console.log(JSON.stringify(process.env, null, 1));
  console.log('===================================');
  if (process.env.DATABASE_URL && process.env.NODE_ENV === 'test') {
    process.env.TEST_DATABASE_URL = process.env.DATABASE_URL;
    console.log(process.env);
    console.log('Updated Env Variables');
  }
}
changeEnvVariabled();
