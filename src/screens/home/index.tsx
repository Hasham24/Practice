import React from 'react';
// import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import useStyle from './styles';

const Home = () => {
  const styles = useStyle();
  // const {t} = useTranslation('login');
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
