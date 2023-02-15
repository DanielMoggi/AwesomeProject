import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '.src/component/Header';

export default function App() {
  const task = ['Tarefa1', 'Tarefa2','Tarefa3', 'Tarefa4', 'Tarefa5'];
  return (
    <View style={styles.container}>
      <Header/>
      <View>
        <FlatList data={task} renderItem={({item}) => <Text>{item}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'coral',
    width: '100%',
    heigth: 70,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
