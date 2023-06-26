import React from 'react'
import { styled } from 'styled-components'



 const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  color: ${({theme})=>theme.text};

  flex-direction: column;
  
 `

   const Wrapper = styled.div`
       display: flex;
       align-items: center;
       background-color: ${({theme})=>theme.bglighter};
       border:1px solid ${({theme})=>theme.soft};
       flex-direction: column;
       gap:20px;
       padding: 20px  60px;
   `

   const Title = styled.h2`
   
      font-size: 30px;
      font-weight: 600;
    
   `

   const Subtitle=styled.div`
      font-size: 20px;
   
   `

    const Input = styled.input`
       
        padding: 20px 15px;
        margin: 5px 10px ;
        border : none;
        width:100%;
     
        background-color: "#aaaaaa";

    `

     const Button = styled.button`

          display: flex;
          align-items: center;
          padding: 10px 20px;
          justify-content: center;
          border: 0.5px solid blue;
          background-color: inherit;
          color: blue;  
     `


 const Moretab =styled.div`
    
    display: flex;

    color: ${({ theme }) => theme.textsoft};


 `

 const Links= styled.div`
  margin-left: 50px;
 
 `

 const  Link = styled.span`
 margin-left: 20px;
    
 `


    

 function Signin() {
    return (


    <Container>


      <Wrapper>


        <Title>Sign in Here</Title>
     
     
        <Subtitle>to continue to youtube</Subtitle>

        <Input type="text" placeholder='Username' />


        <Input type="text" placeholder='Password' />

     
         <Button >Sign in</Button>

       
           <Title>Or</Title>



          <Input type="text" placeholder='Username' />

          <Input type="text" placeholder='Password' />

          <Input type="text" placeholder='Password' />

          <Button>Sign up</Button>
     

      </Wrapper>


     <Moretab>

        Enligsh(india)

        <Links>
          
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>


        </Links>
     </Moretab>   
    </Container>
  )
}

export default Signin