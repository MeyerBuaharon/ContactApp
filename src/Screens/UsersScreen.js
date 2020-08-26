import React, {useState} from 'react';
import styled from 'styled-components';
import UserProfile from '../shared/components/UserProfile';
import {ActivityIndicator} from 'react-native';

const Root = styled.ScrollView`
  display: flex;
  margin: 10px;
  align-content: center;
`;

const Header = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const UsersScreen = () => {
  const users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Root>
      <Header>Contact List</Header>
      {users.map((user) => (
        <UserProfile key={user} />
      ))}
    </Root>
  );
};

export default UsersScreen;
