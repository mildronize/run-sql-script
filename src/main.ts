require('dotenv').config({ path: '.env' });
import { executeSQL } from './executeSQL';
import fs from 'fs';

async function main() {
  const sqlFilePath = process.argv[2];
  const sqlCommand = fs.readFileSync(sqlFilePath, 'utf8');
  console.log('Executing SQL ...');
  const result = await executeSQL(sqlCommand);
  console.log(JSON.stringify(result, null, 2));
}

main();
