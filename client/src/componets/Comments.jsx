import React from 'react'
import { styled } from 'styled-components'

import Comment from './Comment'



const Container = styled.div`

    margin-top:20px;
    width: 100%;

`

 const Addcomment=styled.div`

   display: flex;
   align-items: center;
   gap:20px;

    
 `

 const Avature=styled.img`
 
 
     height: 50px;
     width: 50px;
     border-radius: 50%;


    
 `

const Input =styled.input`

   width: 100%;
   border: none;
   border-bottom: 1px solid blue;
   padding: 10px;
   outline: none;
   background-color: inherit;
   color:${({theme})=>theme.text};
   font-size: 20px;
   



    
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
     justify-content: flex-end;
     gap:10px;
     margin-bottom: 10px;

`
const Button= styled.button`

   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px, 10px;
    border-radius: 10px;
    margin: 10px, 10px;



        
`


function Comments() {




  return (
     

      <Container>

        <Addcomment>

            <Avature src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />

            <Input type='text' placeholder='Add the Comment here' />



        </Addcomment>

        <Buttons>

            <Button>Cancle</Button>
            <Button>Coomment</Button>
        </Buttons>

        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
     
      </Container>

  )
}

export default Comments