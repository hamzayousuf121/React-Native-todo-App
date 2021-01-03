import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  let [num, setNum] = useState(1);
  const [todo, setTodo] = useState([{name: 'hamza', key: 0}]);

  const addTodo = () => {
    if(name !== '' && name !== ' '){
    setNum(++num);
    // var newTodo = todo;
    // newTodo.push({name: name, key: num.toString()});
    const newObj = {
      name,
      key: num,
    };
    setTodo([...todo, newObj]);
    setName('');
  };
};

  const deleteTodo = (index) => {
    const newTodo = todo;
    newTodo.splice(index, 1);
    // const dlteTodo = todo.filter(items => items.key !== index);
    // console.log(dlteTodo, "dlettodo");
    setTodo([...newTodo]);
  };
  const Button = ({background, width, title, titleColor, onPress, height}) => (
    <TouchableOpacity
      onPress={onPress}
       style={{
        width: width || '100%',
        height: height || 40,
        backgroundColor: background || 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
        borderStyle: 'solid',
    }}>
      <Text style={{color: titleColor || 'white'}}> {title}</Text>
    </TouchableOpacity>
  ); 

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1007&q=80',
        }}
        style={styles.image}
      />
      <Text style={{color: 'purple', fontSize: 24, textAlign: 'center', fontWeight: '900', marginVertical: 6}}>Todo App</Text>
      <TextInput
        placeholder={'Enter Todo Name'}
        style={styles.input}
        defaultValue={name}
        onChangeText={(text) => setName(text)}
      />
      {/* <Button onPress={addTodo} title="Add Todo" style={{color: 'red'}} /> */}
      <Button title="AddTodo" onPress={addTodo} background="#17a2b8" />
      <FlatList
        data={todo}
        style={{width: '100%'}}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({item, index}) => (
          <View style={{width: "100%", paddingHorizontal: 5, marginVertical: 5, flexDirection: 'row',
           backgroundColor: 'gray', height: 30, justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: 'white'}}>{item.name}</Text>
            <Button title="Delete Todo"
                onPress={() => deleteTodo(index)}
                background="#C70039"
                height={30}
                width='30%'
              />
          </View>
        )}
      />
      {/* <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        {todo.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>{item.name}</Text>
            <Button
              title="Delete Todo"
              onPress={() => deleteTodo(index)}
              background="blue"
            />
          </View>
        ))}
      </ScrollView> */}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 120,
  },
  input: {
    color: 'black',
    marginVertical: 10,
    width: '100%',
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
  },
  btn: {
    marginTop: 5,
    backgroundColor: 'red',
    width: 350,
    color: '#fff',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'green',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginVertical: 10,
    height: 30,
  },
});

export default App;
