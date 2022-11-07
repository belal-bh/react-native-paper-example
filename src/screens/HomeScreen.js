import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

export default HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigation.navigate('Typography')}>
        Typography
      </Button>
    </View>
  );
};
