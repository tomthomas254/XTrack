import Realm, { BSON } from 'realm';

export default class HabitModel extends Realm.Object { }
HabitModel.schema = {
    name: 'Habit',
    primaryKey: '_id',
    properties: {
        _id: { type: 'objectId', default: () => new BSON.ObjectId() },
        catagory_id: {type:"objectId"},
        date: 'date',
        title: 'string',
        selected: { type: 'bool', default: false }
    }
}