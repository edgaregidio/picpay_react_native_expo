import React from 'react'
import { TextInput } from 'react-native'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';


import { Wrapper, Header, CardSearch } from './styles'
import NavigationTop from './NavigationTop'

export default function Pay() {

  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <Wrapper>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
        <CardSearch>

          <FontAwesome name="search" size={30} color="#FFF" />

          <TextInput
            placeholderTextColor="#FFF"
          />
          <NavigationTop />

        </CardSearch>
      </Header>
    </Wrapper>
  );
}