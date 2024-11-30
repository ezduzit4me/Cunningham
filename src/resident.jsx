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
  
  Heading,
  Flex,
  View,
  Grid,
  Divider,
  Image,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
//import outputs from "../amplify_outputs.json";
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */



export default function Resident() {
  
    <ResidentCreateForm />

  

    return (
      <Grid templateColumns={{ base: "1fr 0", medium: "1fr 0" }}>
          <Flex
            className="App"
            justifyContent="center"
            alignItems="center"
            direction="column"
            width="70%"
            margin="0 auto"
          >
            <Heading level={2}>Resident Details</Heading>
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
            <Heading level={4}>Contacts</Heading>
            <h4> Committee - committee@cunninghamapartments.net</h4>
            <h4> Building Manager - manager@cunninghamapartments.net</h4>


           
          </Flex>
          
      </Grid>
     
    );
  }
