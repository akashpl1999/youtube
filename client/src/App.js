



import './App.css';
import Menu from './componets/Menu';
import Navbar from './componets/Navbar';
import { ThemeProvider, styled } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Theme';

import Home from './pages/Home'
import Video from './pages/Video';
import Signin  from './pages/Signin'

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import React,{useState} from 'react'


 const Container = styled.div`
     display:flex;
 
 ` 

 const  Main = styled.div`

   flex: 7;
   background-color: ${({theme})=>theme.bg};
   color: ${({theme})=>theme.text};
  
 
 `

 const Wrapper= styled.div`
   font-size: 18px;
   margin-top: 20px;
 
 `






function App() {


   const [darkmode, setdarkmode] = useState(true)


  return (

      <ThemeProvider theme={darkmode ? darkTheme : lightTheme} >
      
       <Container>
        
         <BrowserRouter>

          <Menu darkmode={darkmode} setdarkmode={setdarkmode}  />

          <Main>

          <Navbar/>

          <Wrapper>

            <Routes>

               <Route path='/'>

                <Route index element={<Home/>}/>
                <Route path="/login" element={<Signin/>} />


                   <Route path="video">

                    <Route path=":id" element={<Video/>} />


                  </Route>

               </Route>

            </Routes>

         
     
        
          </Wrapper>



         </Main>

         </BrowserRouter>
     
       </Container>
         
       </ThemeProvider>
       
      
     );
}

export default App;
