import React from 'react'
import { styled } from 'styled-components'




function Comment() {

  const Conatiner = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   gap:10px;
   margin-bottom: 10px;

  
     
  `

  const Avature = styled.img`

   width:50px;
   height: 50px;
   border-radius: 50%;

    

  `


  const Usercomments = styled.div`
    
   display: flex;
   flex-direction: column;

   
  
 `

  const Userinfo = styled.div`

    display: flex;
   flex-direction: row;
   align-items: center;
    gap: 10px;
 
 `

  const Username = styled.h1`
    font-size: 19px;
    font-weight: 500;
  `

  const Days = styled.span`
   font-size: 12px;
  
  `

  const Usercomment = styled.div`
    
     font-size: 15px;
     font-weight: 200;
  `



  return (

    <Conatiner>

      <Avature src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />

      <Usercomments>
      
      
      <Userinfo>
         
          <Username>Den dnd y</Username>
          <Days>10 days ago</Days>


        </Userinfo>


        <Usercomment>this is to Good video to jnhjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh now on react and usecontext conncepts</Usercomment>

      </Usercomments>


    </Conatiner>
  )
}

export default Comment