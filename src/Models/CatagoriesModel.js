import Realm, { BSON } from 'realm';

class CatagoriesModel extends Realm.Object { }
CatagoriesModel.schema = {
  name: 'Catagories',
  primaryKey: '_id',
  properties: {
    _id: { type: 'objectId', default: () => new BSON.ObjectId() },
    name: 'string',
  },
};

export default CatagoriesModel;