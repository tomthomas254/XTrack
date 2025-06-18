import Realm, { BSON } from 'realm';

export default class HabitCatagoryModel extends Realm.Object {}
HabitCatagoryModel.schema = {
    name: 'HabitCatagory',
    primaryKey: '_id',
    properties: {
        _id: { type: 'objectId', default: () => new BSON.ObjectId() },
        description: 'string',
        title: 'string',
    }
}