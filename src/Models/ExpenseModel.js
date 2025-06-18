import Realm, { BSON } from 'realm';

export default class ExpenseModel extends Realm.Object {}
ExpenseModel.schema = {
    name: 'Expenses',
    primaryKey: '_id',
    properties: {
        _id: { type: 'objectId', default: () => new BSON.ObjectId() },
        catagory_id: {type:"objectId"},
        description: 'string',
        date: 'date',
        title: 'string',
        amount: 'double'     // Use 'double' for monetary values (or 'float' if you prefer).
    }
}