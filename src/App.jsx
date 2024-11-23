import { useState, useEffect } from "react";
import { ThemeProvider } from "@aws-amplify/ui-react";
//import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import {
  ResidentCreateForm 
 } from './ui-components';
Amplify.configure(awsconfig);
import {
  Authenticator,
  Button,
  Text,
  TextField,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
//import outputs from "../amplify_outputs.json";
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */



export default function App() {
  


  <ResidentCreateForm />

  

  return (
    
        <Flex
          className="App"
          justifyContent="center"
          alignItems="center"
          direction="column"
          width="70%"
          margin="0 auto"
        >
          <Heading level={1}>Resident Details</Heading>
          <ResidentCreateForm onSubmit={(fields) => {
        // Example function to trim all string inputs
        const updatedFields = {}
        Object.keys(fields).forEach(key => {
            if (typeof fields[key] === 'string') {
                updatedFields[key] = fields[key].trim()
            } else {
                updatedFields[key] = fields[key]
            }
        })
        return updatedFields
    }}
/>
          <Divider />
         
         
        </Flex>
      
   
  );
}