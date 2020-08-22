import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


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
  Actions,
  Option,
  OptionLabel,
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

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={18} color="#FFF" />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={18} color="#FFF" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}