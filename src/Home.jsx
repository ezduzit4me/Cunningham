import {
    Authenticator,
    Flex,
    Grid,
    Image,
    useTheme,
    View
  } from "@aws-amplify/ui-react";
  
  import { Header } from "./header";
  import { Footer } from "./footer";
  
  
  const components = {
    Header,
    
    Footer
  };
  
  export default function Home() {
    const { tokens } = useTheme();
  
    return (
      <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
        <Flex
          backgroundColor={tokens.colors.background.secondary}
          justifyContent="center"
        >
  
  
  
          <Authenticator components={components}>
            {({ signOut, user }) => (
              
               <div>
                
               <div className="navbar">
              
     <div className="container flex">
       <h1 className="logo">Home</h1>
       <button className= "btn" onClick={signOut}>Sign out</button> 
     </div>
   </div>
   <section className="showcase">
     <div className="container">
         <div className="grid">
           <div className="grid-item-1">
             <div className="showcase-text">
               <h1>&nbsp;&nbsp;&nbsp;Cunningham</h1>
               <p className="supporting-text">&nbsp;&nbsp;&nbsp;...66 Lamington St</p>
             </div>
             <div className="showcase-form">
               
               
             </div>
           </div>
   
           <div className="grid-item-2">
             <div className="image">
               <img src="https://cunninghamapartments.imgix.net/Home_220.jpg?w=250" alt="" />
             </div>
           </div>
        </div>
   
        </div>
   </section> 
   <section className="stats">
           <div className="flex">
             <div className="stat">
               <i className="fa fa-folder-open fa-2x" aria-hidden="true"></i>
               
               <h3 className="title">General</h3>
               <p className="text">Cunningham Apartments comprise 33 individual two and three bedroom apartments. These apartments were built by Mirvac to a superior quality of finish and soundproofing. The complex consists of 5 seperate modules each with its own security entrance. Access can also be gained to each module through the garage.</p>
               <h3 className="title">Management</h3>
            <p className="text">Maintenance, Administration, and Finance are handled jointly by a legislatively required management company, a body corporate committe who are elected yearly, and a non onsite Manager</p>
            <h3 className="title">Contact</h3>
            <p className="text"> Contact details for the above entities can be found in the 'Contact' link</p>
             </div>
             
             
           </div>
         </section>    
   
        
           </div>
            )}
          </Authenticator>
        </Flex>
        <View height="100vh">
          <Image
            src="https://cunninghamapartments.imgix.net/Cunningham_ext_2.jpg?auto=format,compress"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
      
    );
  }