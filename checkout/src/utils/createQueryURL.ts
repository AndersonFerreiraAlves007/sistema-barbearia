import { stringify } from 'query-string';

const createQueryURL = (sort, range, filter, nested) => {
  const queryOj = {};
  if (sort) queryOj.sort = JSON.stringify([sort[0], sort[1]]);
  if (range) queryOj.range = JSON.stringify([range[0], range[1]]);
  if (filter) queryOj.filter = JSON.stringify(filter);
  if (nested) queryOj.nested = JSON.stringify(nested);

  return stringify(queryOj);
};

export { createQueryURL };
