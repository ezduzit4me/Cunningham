import React from "react";
import { Link } from "react-router-dom";
import {
  
   Flex,
   Grid,
   Image,
   useTheme,
   View
 } from "@aws-amplify/ui-react";


export function Navbar() {
   const { tokens } = useTheme();
   return (


<Grid templateColumns={{ base: "1fr 0"}}>
      
      <Flex

        backgroundColor={tokens.colors.background.secondary}
        padding= ".5rem"
        height= "120px"
        box-shadow= "2px 2px 5px rgba(0,0,0,0.03)"
        border-radius= "4px"
        justifyContent="center"
        align-items="center"
      >
        
        
        <div class="navbar">
          <div class="container flex">
          

      <div>
         <ul>
        <li class="nav"><Link to= "/">Home</Link></li>     
      <li class="nav"><Link to= "resident">Resident</Link></li>
      
       
      
      
       </ul>
      </div>

      
      </div>
      </div>
     
      
      </Flex>
        <View height="7vh">
          <Image
            src="https://cunninghamapartments.imgix.net/Cunningham_ext_14.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>

   );
}

export  default Navbar; 