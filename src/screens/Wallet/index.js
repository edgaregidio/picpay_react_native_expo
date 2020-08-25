import React, { useState } from 'react'
import { Switch } from 'react-native'
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';

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
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  AddButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
} from './styles'

import creditCard from '../../images/credit-card.png'

export default function Wallet() {

  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState)
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState)
  }

  return (

    <Wrapper>
      <Header
        colors={
          useBalance ? ['#52e78c', '#1ab56e'] : ['#d3d3d3', '#868686']
        }

      >

        <HedaerContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? '32,500.14' : '-----'}</Bold>
            </Value>

            <EyeButtom onPress={handleToggleVisibility}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#FFF" />
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

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

        <Switch
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        />

      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>

        <Card>

          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre o seu Cartão de Crédito</CardTitle>
              <CardInfo>Cadastre seu cartão de Crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay</CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
          </CardBody>

          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#52e78c" />
            <AddLabel>
              Adicionar cartão de crédito
            </AddLabel>
          </AddButton>

        </Card>

        <UseTicketButton>
          <FontAwesome5 name="ticket-alt" size={24} color="#52e78c" />
          <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButton>

      </PaymentMethods>
    </Wrapper>
  );
}