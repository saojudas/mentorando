export default function createInsertQuery(table: string, fields: any): string {
  const keys: string[] = [];
  const values: string[] = [];

  Object.keys(fields).forEach((key: string) => {
    keys.push(key);
    values.push(`'${fields[key].replace('\'', '')}'`);
  });

  const query = `INSERT INTO ${table} (${keys.join(',')})
    VALUES (${values.join(',')})
    RETURNING id
  `;

  return query;
}
