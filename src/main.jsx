import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import { studioTheme } from './ui-components';

const updatedTheme = createTheme({
    // Extend the theme to update the button color
    name: "my-theme-updates", 
    tokens: {
       colors: {
            font: {
              primary: { value: 'white' },
                  },
              },
        components: {
            button: {
                primary: {
                    backgroundColor: {
                        value: "blue"
                    },
                },
        },
         text: {
        color: { value: 'white' },
      },
      label: {
        color: { value: 'white' },
      },

        },
    },
}, studioTheme)

createRoot(document.getElementById('root')).render(
 <> 
  <ThemeProvider theme={updatedTheme}>
  
    <App />
    
    </ThemeProvider>
</>
)
