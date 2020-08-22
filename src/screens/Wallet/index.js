import React from 'react'
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import {
  Wrapper,
  Header,
  HedaerContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButtom,
  Info,
  Actions,
  Action,
  ActionLabel,
} from './styles'

export default function Wallet() {
  return (
    <Wrapper>
      <Header colors={['#52e78c', '#1ab56e']}>

        <HedaerContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>0,00</Bold>
            </Value>

            <EyeButtom >
              <Feather name="eye" size={28} color="#FFF" />
            </EyeButtom>
          </BalanceContainer>

          <Info>
            Seu saldo está rendendo 100% do CDI
          </Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash-multiple" size={26} color="#FFF" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={20} color="#FFF" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>

        </HedaerContainer>
      </Header>
    </Wrapper>
  );
}