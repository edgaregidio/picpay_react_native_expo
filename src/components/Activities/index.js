import React from 'react';
import { Feather } from '@expo/vector-icons';


import {
  Container,
  Header,
  TitleAtivities,
  Title,
  Title2,
  Card,
  CardHedar,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
} from './styles';

import avatar from '../../images/avatar.png'

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <TitleAtivities>
          <Title2>Todas</Title2>
          <Title>Minhas</Title>
        </TitleAtivities>
      </Header>

      <Card>
        <CardHedar>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou o <Bold>@coderedgar</Bold>
          </Description>
        </CardHedar>

        <CardBody>
          <UserName>Edgar Siqueira</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>

            <Divider />
            <Feather name="lock" size={15} color="#FFF" />
            <Date>há 2 anos</Date>
          </Details>
        </CardFooter>
      </Card>
    </Container>
  );
}