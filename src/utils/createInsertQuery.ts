export default function createInsertQuery(
  table: string,
  fields: any,
  withReturn: boolean = true,
): string {
  const keys: string[] = [];
  const values: string[] = [];

  Object.keys(fields).forEach((key: string) => {
    keys.push(key);
    values.push(`'${fields[key]}'`);
  });

  let query = `INSERT INTO ${table} (${keys.join(',')})
    VALUES (${values.join(',')})
  `;

  if (withReturn) {
    query += 'RETURNING id';
  }

  return query;
}
