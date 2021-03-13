export default function createUpdateQuery(
  id: string,
  table: string,
  fields: any,
): string {
  const update: string[] = [];

  Object.keys(fields).forEach((key: string) => {
    const line = `${key} = '${fields[key]}'`;
    update.push(line);
  });

  let query = `UPDATE ${table} SET
  ${update.join(',')} WHERE id = '${id}'`;

  return query;
}
