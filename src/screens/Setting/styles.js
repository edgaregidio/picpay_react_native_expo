import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;
export const Container = styled.ScrollView ``;

export const Header = styled.View`
  background: #39464E;
  height: 12%;
`;

export const HedaerContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`;

export const CardProfile = styled.View`
  align-items: center;
  justify-content: center;
  padding: 25px 0;
`;

export const Avatar = styled.Image``;

export const LoginPicPay = styled.Text`
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
  margin-top: 15px;
`;

export const NamePicPay = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 5px;
`;

export const CardViewProfile = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const ViewProfile = styled.Text`
  color:#10c86e;
  font-weight: bold;
`;