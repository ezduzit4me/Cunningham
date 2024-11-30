//import React from 'react';
import { Amplify } from 'aws-amplify';
import Resident from "./resident"
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {
  
  Heading,
  Flex,
  View,
  Grid,
  
  Image,
} from "@aws-amplify/ui-react";
import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
    <Flex
      className="App"
      justifyContent="center"
      alignItems="center"
      direction="column"
      width="70%"
      margin="0 auto"
    >
      <Heading level={2}>Cunningham Apartments</Heading>
      <Heading level={4}>New Farm -Qld</Heading>
      //
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Resident />
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    </Flex>
          <View height="100vh">
          <Image
            src="https://s3.ap-northeast-1.amazonaws.com/cunninghamapartments.net/Cunningham_ext_14.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
  );
}