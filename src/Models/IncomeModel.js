import { version } from 'react';
import Realm, { BSON } from 'realm';

export default class IncomeModel extends Realm.Object {}
IncomeModel.schema = {
    name: 'Income',
    primaryKey: '_id',
    properties: {
        _id: { type: 'objectId', default: () => new BSON.ObjectId() },
        amount:'double',
        date:'date',
        title:'string',
        description: 'string',
        type:{type:'string', default:'income'}
    }
}