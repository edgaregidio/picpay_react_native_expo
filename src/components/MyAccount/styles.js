import styled from 'styled-components/native';

export const Container = styled.View``;

export const TitleAccount = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  margin-left: 16px;
`;

export const CardAccount = styled.View`
  align-items: center;
  background: #39464E;
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  border-width: 1px;
`;

export const CardMyPicPay = styled.TouchableOpacity`
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  width: 90%;
  padding: 5px 0;
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-bottom-width: 1px;
`;

export const TitleAccountSetting = styled.Text`
  color: #FFF;
`;

export const ButtonSettings = styled.View`
  flex-direction: row;
  align-items:center;
`;

export const PicPayAccount = styled.Text`
  color: #FFF;
`;
