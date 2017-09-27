// import support for mongo and minimongo
import { Mongo } from 'meteor/mongo';

// creeate two collections, chats and messages
export const Chats = new Mongo.Collection('chats');
export const Messages = new Mongo.Collection('messages');


