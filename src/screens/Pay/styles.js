import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex:1;
  background: #000;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardSearch = styled.TextInput`
  background: #192027;
  width: 330px;
  height: 35px;
  margin-left: 15px;
  border-radius: 25px;
  padding: 0 15px;
`;

export const PlacehouderSearch = styled.Text`
  color: white;
`;