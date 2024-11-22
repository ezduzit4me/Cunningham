//import { useState, useEffect } from "react";

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
import {
  ResidentCreateForm 
 } from './ui-components';

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
//import outputs from "../amplify_outputs.json";
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {
  


  async function createResident(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    await client.models.Resident.create({
      name: form.get("name"),
      apartment_no: form.get("apartment_no"),
      move_in_date: form.get("move_in_date"),
      mobile_phone: form.get("mobile_phone"),
      parking_no: form.get("parking_no"),
      vehicle_rego: form.get("vehicle_rego"),
      pet_type: form.get("pet_type"),
      pet_weight: form.get("pet_weight"),
      storage_no: form.get("storage_no"),
      re_name: form.get("re_name"),
      re_mobile: form.get("re_mobile"),
      re_email: form.get("re_email"),
    });

    event.target.reset();
  }

  

  return (
  //  <Authenticator>
  //    {({ signOut }) => (
        <Flex
          className="App"
          justifyContent="center"
          alignItems="center"
          direction="column"
          width="70%"
          margin="0 auto"
        >
          <Heading level={1}>Resident Details</Heading>
          <View as="form" margin="3rem 0" onSubmit={createResident}>
            <Flex
              direction="column"
              justifyContent="center"
              gap="2rem"
              padding="2rem"
              >
            
             <TextField
                name="name"
                placeholder="Name"
                label="Name"
                type="string"
                labelHidden
                variation="quiet"
                required
              />
              <Button type="submit" variation="primary">
                Submit
              </Button>
          </Flex>
          
          </View>
          <Divider />
         
          <Button onClick={signOut}>Sign Out</Button>
        </Flex>
        
      // )
   // }
  //  </Authenticator>
  );
}