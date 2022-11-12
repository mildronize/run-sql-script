import sql from 'mssql';

export async function executeSQL(command: string) {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(process.env.CONNECTION_STRING || '');
    const result = await sql.query(command);
    return result;
  } catch (err) {
    throw new Error(err as string);
  }
}