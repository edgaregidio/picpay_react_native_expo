import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  TitleAccount,
  CardAccount,
  TitleAccountSetting,
  ButtonSettings,
  CardMyPicPay,
  PicPayAccount,
} from './styles'

export default function MyAccount() {
  return (
    <Container>
      <TitleAccount>Minha Conta</TitleAccount>

      <CardAccount>
        <CardMyPicPay>
          <TitleAccountSetting>Meu PicPay</TitleAccountSetting>
          <ButtonSettings>
            <PicPayAccount>@edgar.siqueira.egudui</PicPayAccount>
            <MaterialIcons name="navigate-next" size={24} color="#666" />
          </ButtonSettings>
        </CardMyPicPay>

        <CardMyPicPay>
          <TitleAccountSetting>Meu Número</TitleAccountSetting>
          <ButtonSettings>
            <PicPayAccount>(**) *****-6544</PicPayAccount>
            <MaterialIcons name="navigate-next" size={24} color="#666" />
          </ButtonSettings>
        </CardMyPicPay>

        <CardMyPicPay>
          <TitleAccountSetting>Meu e-mail</TitleAccountSetting>
          <ButtonSettings>
            <PicPayAccount>e*************i@g***l.com</PicPayAccount>
            <MaterialIcons name="navigate-next" size={24} color="#666" />
          </ButtonSettings>
        </CardMyPicPay>

        <CardMyPicPay>
          <TitleAccountSetting>Dados Pessoais</TitleAccountSetting>
          <ButtonSettings>
            <MaterialIcons name="navigate-next" size={24} color="#666" />
          </ButtonSettings>
        </CardMyPicPay>

        <CardMyPicPay>
          <TitleAccountSetting>Taxas e Limites</TitleAccountSetting>
          <ButtonSettings>
            <MaterialIcons name="navigate-next" size={24} color="#666" />
          </ButtonSettings>
        </CardMyPicPay>


        <CardMyPicPay>
          <TitleAccountSetting>Meus Endereços</TitleAccountSetting>
          <ButtonSettings>
            <MaterialIcons name="navigate-next" size={24} color="#666" />
          </ButtonSettings>
        </CardMyPicPay>

        <CardMyPicPay>
          <TitleAccountSetting>Meus Favoritos</TitleAccountSetting>
          <ButtonSettings>
            <MaterialIcons name="navigate-next" size={24} color="#666" />
          </ButtonSettings>
        </CardMyPicPay>

        <CardMyPicPay>
          <TitleAccountSetting>Validar Identidade</TitleAccountSetting>
          <ButtonSettings>
            <PicPayAccount>@Verificado</PicPayAccount>
            <MaterialIcons name="navigate-next" size={24} color="#666" />
          </ButtonSettings>
        </CardMyPicPay>

        <CardMyPicPay
          style={{
            borderBottomColor: 0,
          }}>
          <TitleAccountSetting>Atualizar Cadastro</TitleAccountSetting>
          <ButtonSettings>
            <MaterialIcons name="navigate-next" size={24} color="#666" />
          </ButtonSettings>
        </CardMyPicPay>

      </CardAccount>

    </Container>

  )
}