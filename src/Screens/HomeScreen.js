import React from 'react';
import styled from 'styled-components';

const Root = styled.View`
  background: #eee;
  justify-content: center;
  align-content: center;
  margin-top: 30px;
  text-align: center;
`;

const Header = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Typography = styled.Text`
  text-align: center;
  font-size: 16px;
`;

const UserScreen = () => {
  return (
    <Root>
      <Header>Contact App</Header>
      <Typography>Welcome to your Contact-App.</Typography>
      <Typography>
        To browse your contacts use the drawer and navigate to contacts
      </Typography>
    </Root>
  );
};

export default UserScreen;
