import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {getRandomUsers} from '../api';
import {Text, Modal, Button} from 'react-native';

const Root = styled.TouchableOpacity`
  background: #eee;
  border: black solid;
  margin: 10px;
  justify-content: center;
  align-content: center;
  text-align: center;
`;
const Container = styled.View`
  padding: 10px;
  justify-content: center;
  align-content: center;
  text-align: center;
`;
const Image = styled.Image`
  height: 60px;
  width: 60px;
`;

const ModalRoot = styled.View`
  background: #ccc;
  height: 90%;
  align-items: center;
  margin: 20px;
  padding: 20px;
`;

const ContactInfo = styled.View`
  flex: 1;
`;
const ContactInfoText = styled.Text`
  margin-bottom: 7px;
`;

const Header = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const UserProfile = () => {
  const [user, setUser] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getRandomUsers().then((result) => {
      setUser(result.results[0]);
    });
  }, []);
  return (
    <Root onPress={() => setModalVisible(true)}>
      {user && (
        <>
          <Container>
            <Image
              source={{
                uri: user.picture.medium,
              }}
            />
            <Text>
              {user.name.first} {user.name.last}
            </Text>
            <Text>{user.email}</Text>
            <Text>
              {user.location.city}, {user.location.state},{' '}
              {user.location.country}
            </Text>
          </Container>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <ModalRoot>
              <Header>Contact Info</Header>

              <Image
                source={{
                  uri: user.picture.medium,
                }}
              />
              <ContactInfo>
                <ContactInfoText>
                  Name: {user.name.title} {user.name.first} {user.name.last}
                </ContactInfoText>
                <ContactInfoText>Email: {user.email}</ContactInfoText>
                <ContactInfoText>
                  Address: {user.location.city}, {user.location.state},{' '}
                  {user.location.country}
                </ContactInfoText>
                <ContactInfoText>Phone: {user.phone}</ContactInfoText>
              </ContactInfo>
              <Button
                title="confirm"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                Confirm
              </Button>
            </ModalRoot>
          </Modal>
        </>
      )}
    </Root>
  );
};

export default UserProfile;
