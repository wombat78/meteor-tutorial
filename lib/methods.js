import { Meteor } from 'meteor/meteor';
import { Chats, Messages} from '../lib/collections';

Meteor.methods({
  // inserts the new message into the database
  newMessage(message) {
    // validate input data type is correct
    check(message, {
      type: String,
      text: String,
      chatId: String
    });

    message.timestamp=new Date();

    const messageId=Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });

    return messageId;
  }
});
