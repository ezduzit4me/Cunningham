// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Resident } = initSchema(schema);

export {
  Resident
};