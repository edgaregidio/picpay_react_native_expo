import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HedaerContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size:38px;
  color: #FFF;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: 500;
`;

export const EyeButtom = styled.TouchableOpacity`
  margin-left: 12px;
`;

export const Info = styled.Text`
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 25px;
  width: 150px;
  height: 45px;
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  color: #FFF;
  font-size: 16px;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  background: #1c1c1e;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
`;

export const UseBalanceTitle = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
`;

export const Container = styled.ScrollView ``;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 24px;
`;

export const CardTitle = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`;

export const CardInfo = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  margin-top: 15px;
`

export const Img = styled.Image`
  width: 70px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const AddLabel = styled.Text`
  color: #52e78c;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;

export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
`;
export const UseTicketLabel = styled.Text`
  color: #52e78c;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration-line: underline;
`;



