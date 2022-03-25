import {createRealmContext} from '@realm/react';
import {Farmer} from '../models/Farmer';
import {Project} from '../models/Project';
import {Task} from '../models/Task';

const OpenRealmBehaviorConfiguration = {
  type: 'openImmediately',
};

const PublicData = createRealmContext({
  schema: [Farmer.schema],
  newRealmFileBehavior: OpenRealmBehaviorConfiguration,
  existingRealmFileBehavior: OpenRealmBehaviorConfiguration,
  // deleteRealmIfMigrationNeeded: true,
});

const PrivateData = createRealmContext({
  schema: [Project.schema, Task.schema],
  newRealmFileBehavior: OpenRealmBehaviorConfiguration,
  existingRealmFileBehavior: OpenRealmBehaviorConfiguration,
  // deleteRealmIfMigrationNeeded: true,
});

export {PrivateData, PublicData};
