import React from 'react';
import { Amplify } from 'aws-amplify';
import Resident from "./resident"
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Resident />
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}