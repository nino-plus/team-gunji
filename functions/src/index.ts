import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

export { createUser } from './user.function';
export { createPoo, addPoo } from './poo.function';
export { sendEmail } from './send-email.function';
