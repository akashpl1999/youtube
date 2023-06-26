import { AccountCircleOutlined, SearchOffOutlined, SearchOffRounded } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components'

function Navbar() {



  const Container=styled.div`
  position: sticky;
  top:0;
  background-color: ${({theme})=>theme.bglighter};
  height: 56px;
  padding : 5px 20px ;
  margin: 5px;
  box-shadow: inset;
  z-index: 1;
  
  
  `

  const Wrapper =styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0px 15px;
    position: relative;   
`

  const Search = styled.div` 
  
   display: flex;
   width:30%;
   align-items: center;
   justify-content: space-between;
   padding: 5px; 
   color:black;
   border-radius: 5px;
   gap:10px;
   position: absolute; 
   top:0;
   left:600px;
   margin:auto;
   background-color: #d7dbdb;
  `;

const Input = styled.input`
   width: 100%;
   border:none;
   outline: none;
   padding:10px 10px;

`;

const Button =styled.button`

   display: flex;
   align-items: center;
   justify-content: center;
   gap:10px;
   padding: 5px 15px;
   border: 0.5px solid blue;
   border-radius: 3px;
   background-color: transparent;
   margin: 3px;
   color: blue;


  
`



  return (

    <Container>
      <Wrapper>

        <Search>
          <Input placeholder='...search here'/>
          <SearchOffRounded/>
        </Search>

     
         <Link to='/login' style={{textDecoration:'none', color:'inherit'}}>
         
        <Button>
          <AccountCircleOutlined/>
          SIGN IN
        </Button>

        </Link>
       

      </Wrapper>
    </Container>
  )
}

export default Navbar