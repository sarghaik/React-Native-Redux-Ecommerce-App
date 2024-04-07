import React, { useEffect } from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, Button, Text } from 'react-native';
import { login } from '../../services/FetchService';
import { storeData } from '../../services/StorageService';
import { ILoginProps } from '../../../types';

export default function LoginScreen({ navigation, route }: ILoginProps) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  return (
    <View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
        />
      </SafeAreaView>
      {error ? <View>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View> : null}
      <View style={{ paddingTop: 50 }}>
        <Button title='Login' onPress={() => {
          login({ username, password })
            .then((res) => {
              if (res && res?.token) return storeData('token', res?.token)
            })
            .then(() => { navigation.navigate('Profile') })
            .catch((err) => {
              console.error(err)
              setError('Try Again') // or Some other errorMessage
            });
        }}>

        </Button></View>
    </View >
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});



