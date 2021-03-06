import React, {useCallback, useMemo} from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProjectList from '../components/ProjectList';
import AddProjectForm from '../components/AddProjectForm';
import colors from '../styles/colors';
import {PrivateData} from '../context/RealmConfig';

// Models
import {Project} from '../models/Project';
import {useAuth} from '../context/Authentication';

const {useQuery, useRealm} = PrivateData;

export default function ProjectScreen({navigation}) {
  const {
    state: {user},
  } = useAuth();
  const realm = useRealm();
  const result = useQuery('Project');
  const projects = useMemo(() => result.sorted('createdAt', true), [result]);

  const handleAddProject = useCallback(
    ({name}) => {
      if (!name) {
        return;
      }
      try {
        realm.write(() => {
          const project = realm.create(
            'Project',
            new Project({name, user: user.id, tasks: []}),
          );
        });
        Alert.alert('Success Creating New Project');
      } catch (e) {
        Alert.alert('Error Creating Project', e.message);
      }
    },
    [realm],
  );

  /**
   *
   */
  const handleDeleteProject = project => {
    try {
      realm.write(() => {
        //delete all tasks associated with project, no cascade delete
        realm.delete(project.tasks);

        // delete the actual task
        realm?.delete(realm?.objectForPrimaryKey('Project', project?._id));
      });
      Alert.alert('Success Deleting Project');
    } catch (e) {
      Alert.alert('Error Deleting Project', e.message);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Text>Project View</Text>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
