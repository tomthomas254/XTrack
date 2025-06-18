import Realm, { BSON } from 'realm';

export default class BudgetModel extends Realm.Object {}
BudgetModel.schema = {
    name: 'Budget',
    primaryKey: '_id',
    properties: {
        _id: { type: 'objectId', default: () => new BSON.ObjectId() },
        catagory_id:{type:"objectId"},
        amount: 'double',     // Use 'double' for monetary values (or 'float' if you prefer).
        balance: 'double',     // Use 'double' for monetary values (or 'float' if you prefer).
    }
}