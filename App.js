import React, {Component} from 'react';
import {Plataform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  // A View é como a div em HTML
  // A Text é para textos
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // Toda a configuração de estilização é feita
    // utilizando, por padrão, o flexbox layout.
    // Logo, todos os componentes possuem, por padrão,
    // a estilização: display: "flex"
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: '#F00',
    borderRadius: 100,
  },
});
