import EncryptedStorage from 'react-native-encrypted-storage';
export default localStore = {
  retrieve: async () => {
    try {
      const data = await EncryptedStorage.getItem('@token');
      if (data !== null) return data;
      return null;
    } catch (error) {
      console.log('Failed to Retrieve: ', error.message);
    }
  },
  store: async (key, data) => {
    try {
      await EncryptedStorage.setItem(key, data);
    } catch (error) {
      console.log('Failed to Store: ', error.message);
    }
  },
  emptyStore: async () => {
    try {
      await EncryptedStorage.clear();
    } catch (error) {
      console.log('Failed to Clear: ', error.message);
    }
  },
};
