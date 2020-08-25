import React, { useState } from 'react'
import { TextInput } from 'react-native'

import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { Wrapper, Header, CardSearch, ContainerIcon } from './styles'

export default function Pay() {

  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <Wrapper>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
        <CardSearch>
          {/* <ContainerIcon> */}
          <FontAwesome name="search" size={30} color="#FFF" />
          {/* </ContainerIcon> */}
          <TextInput
            
            placeholderTextColor="#FFF"
          />
        </CardSearch>
      </Header>
    </Wrapper>
  );
}