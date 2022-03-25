import {createRealmContext, Realm} from '@realm/react';
import {Task} from './Task';

export class Project {
  constructor({id = new Realm.BSON.ObjectId(), name, user}) {
    this.name = name;
    this._partition = user;
    this.createdAt = new Date();
    this._id = id;
    this.tasks = [];
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'Project',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      _partition: 'string',
      tasks: 'Task[]',
      createdAt: 'date',
    },
  };
}

export const {useRealm, useQuery, RealmProvider} = createRealmContext({
  schema: [Task.schema, Project.schema],
  deleteRealmIfMigrationNeeded: true,
});
