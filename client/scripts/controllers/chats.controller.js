import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';

// Chats is the mongo collection that contains all the messages
import { Chats } from '../../../lib/collections';
 
export default class ChatsCtrl extends Controller {
    constructor() {
           super(...arguments);

           // we provide a helper that returns chat messages from the chat databsae in lib/collections
           this.helpers({
             data() {
               return Chats.find();
             }
           });
    }

    // deletes this chat entry
    remove(chat) {
        Chats.remove(chat._id);
    }
}
 
ChatsCtrl.$name = 'ChatsCtrl';
