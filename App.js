import {View, Text, StyleSheet} from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Nome/>
      <Nome name="Dersoli"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    height: 400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    color: 'white'
  }

})

function Nome({name}){
  return(
    <Text>
      Olá {name}
    </Text>
  )
}