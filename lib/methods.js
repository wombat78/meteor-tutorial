import { Meteor } from 'meteor/meteor';
import { Chats, Messages} from '../lib/collections';

Meteor.methods({
  // inserts the new message into the database
  newMessage(message) {
    // make sure that the user is logged in before sending a message
    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
         'Must be logged in to send message.');
    } 

    // validate input data type is correct
    check(message, {
      type: String,
      text: String,
      chatId: String
    });

    message.timestamp=new Date();
    message.userId=this.userId;

    const messageId=Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });

    return messageId;
  },
  updateName(name) {
    if (!this.userId) {
       throw new Meteor.Error('not-logged-in',
         'Must be logged in to update name.');
    }

    check(name,String);

    if (name.length === 0) {
       throw new Meteor.error('name-required', "Must Provide Username");
    }

    return Meteor.users.update(this.userId, { $set: { 'profile.name': name } });
  }
});
