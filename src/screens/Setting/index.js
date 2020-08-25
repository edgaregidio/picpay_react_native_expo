import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  HedaerContainer,
  HeaderText,
  CardProfile,
  Avatar,
  LoginPicPay,
  NamePicPay,
  CardViewProfile,
  ViewProfile,
} from './styles';

import img9 from '../../images/09.png'

export default function Setting() {
  return (
    <Wrapper>
      <Header>
        <HedaerContainer>
          <HeaderText>Ajustes</HeaderText>
        </HedaerContainer>
      </Header>

      <Container>
        <CardProfile>
          <Avatar source={img9} />
          <LoginPicPay>@edgar.siqueira.egidio</LoginPicPay>
          <NamePicPay>Edgar Siqueira Egidio</NamePicPay>

          <CardViewProfile>
            <ViewProfile>Ver meu perfil</ViewProfile>
            <MaterialIcons name="navigate-next" size={28} color="#10c86e" />
          </CardViewProfile>

        </CardProfile>
      </Container>
    </Wrapper>
  );
}