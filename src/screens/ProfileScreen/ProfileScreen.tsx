import { useCallback, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { fetchProfile } from '../../services/FetchService';
import { getStorageData, storeData } from '../../services/StorageService';
import { IProfileProps } from '../../../types';
import Footer from '../../components/Footer/Footer';

export default function ProfileScreen({ navigation, route }: IProfileProps) {

  const [profile, setProfile] = useState({} as { firstName?: string, lastName?: string, gender?: string, age?: number });

  useFocusEffect(
    useCallback(() => {
      getStorageData('token')
        .then((res) => {
          if (res) return fetchProfile(res[0]);
          else navigation.navigate('Login');
        })
        .then((res) => {
          if (res) setProfile(res);
          else navigation.navigate('Login');
        })
        .catch(() => {
          navigation.navigate('Login');
        });
    }, [])
  )

  return (
    <View>
      <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
        <View style={{ backgroundColor: 'gray', width: 200, height: 200 }} />
      </View>
      <View>
        <Text style={styles.rowStyle}>{`Full Name: ${profile?.firstName} ${profile?.lastName}`}</Text>
      </View>
      <View >
        <Text style={styles.rowStyle}>
          {`Gender: ${profile?.gender}`}
        </Text>
      </View>
      <View>
        <Text style={styles.rowStyle}>
          {`Age: ${profile?.age}`}
        </Text>
      </View>
      <View style={{ padding: 140 }}>
        <Button title='Log out' onPress={() => {
          storeData('token', ['']).then(() => { navigation.navigate('Login') })
        }}>
        </Button>
      </View>

      <Footer navigation={navigation} route={route}>
      </Footer>
    </View >
  );
}

export const styles = StyleSheet.create({
  rowStyle: {
    padding: 16,
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'uppercase'
  },
});
