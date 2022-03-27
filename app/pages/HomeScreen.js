import React, {useCallback, useMemo} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Button,
  Pressable,
  Text,
  Alert,
} from 'react-native';
import {Task} from '../models/Task';
import {Project} from '../models/Project';
import IntroText from '../components/IntroText';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';
// import colors from '../styles/colors';
import {PrivateData} from '../context/RealmConfig';
import {useAuth} from '../context/Authentication';

import {useTheme} from '@react-navigation/native';
import Greeting from '../components/Greeting';
import Content from '../components/DataView/Content';
import Navigator from '../components/DataView/Navigator';

const {useQuery, useRealm} = PrivateData;

export default function HomeScreen({navigation}) {
  const realm = useRealm();
  const result = useQuery('Task');
  const resultProject = useQuery('Project');
  const tasks = useMemo(() => result.sorted('createdAt'), [result]);
  console.log(resultProject);
  const {
    state: {user},
  } = useAuth();
  console.log('UseActive: ', user.id);
  let theme = useTheme();
  const colors = theme.colors;
  const handleAddTask = useCallback(
    ({description, project}) => {
      if (!description || !project) {
        return;
      }

      // Everything in the function passed to "realm.write" is a transaction and will
      // hence succeed or fail together. A transcation is the smallest unit of transfer
      // in Realm so we want to be mindful of how much we put into one single transaction
      // and split them up if appropriate (more commonly seen server side). Since clients
      // may occasionally be online during short time spans we want to increase the probability
      // of sync participants to successfully sync everything in the transaction, otherwise
      // no changes propagate and the transaction needs to start over when connectivity allows.

      try {
        realm.write(() => {
          // check for project
          const q = `name == '${project}'`;
          let projectResults = realm.objects('Project').filtered(q);

          // if needed create it
          if (!projectResults.length) {
            projectResults = [
              realm.create(
                'Project',
                new Project({name: project, user: user.id, tasks: []}),
              ),
            ];
          }

          const projectO = projectResults[0];

          const task = realm.create('Task', new Task({description}));
          projectO.tasks.push(task);

          Alert.alert('Success Creating New Task');
        });
      } catch (e) {
        Alert.alert('Error Creating Task', e.message);
      }
    },
    [realm],
  );

  const handleToggleTaskStatus = useCallback(
    task => {
      realm.write(() => {
        // Normally when updating a record in a NoSQL or SQL database, we have to type
        // a statement that will later be interpreted and used as instructions for how
        // to update the record. But in RealmDB, the objects are "live" because they are
        // actually referencing the object's location in memory on the device (memory mapping).
        // So rather than typing a statement, we modify the object directly by changing
        // the property values. If the changes adhere to the schema, Realm will accept
        // this new version of the object and wherever this object is being referenced
        // locally will also see the changes "live".
        task.isComplete = !task.isComplete;
      });

      // Alternatively if passing the ID as the argument to handleToggleTaskStatus:
      // realm?.write(() => {
      //   const task = realm?.objectForPrimaryKey('Task', id); // If the ID is passed as an ObjectId
      //   const task = realm?.objectForPrimaryKey('Task', Realm.BSON.ObjectId(id));  // If the ID is passed as a string
      //   task.isComplete = !task.isComplete;
      // });
    },
    [realm],
  );

  const handleDeleteTask = useCallback(
    task => {
      realm.write(() => {
        realm.delete(task);

        // Alternatively if passing the ID as the argument to handleDeleteTask:
        // realm?.delete(realm?.objectForPrimaryKey('Task', id));
      });
    },
    [realm],
  );

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      // justifyContent: 'flex-start',
      backgroundColor: colors.white,
      paddingLeft: 60,
      marginRight: -20,
    },
  });
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{height: 50}} />
      <Greeting name="Mica" />
      <View style={{height: 20}} />
      {/* <Navigator /> */}
      <Content />
    </SafeAreaView>
  );
}
