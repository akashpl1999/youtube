
import React from 'react'
import { styled } from 'styled-components'

import {Link} from "react-router-dom"


const Container = styled.div`
   width:${(props)=> props.type !== "sm" && "360px"};
   margin-bottom: ${(props)=>(props.type === "sm" ? "10px" : "45px") };
   margin-right: 10px;
   cursor: pointer;
   display: ${(props)=>props.type === "sm" &&  "flex"};
   gap:20px;
`

const Image = styled.img`

   width: 100%;
   height: ${(props)=> (props.type =="sm" ?"140px" : "202px")};
   background-color: #999;
   flex: 1;
   
`
 
 const Details =styled.div`

   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex: 1;


 `

  const ChannelImage =styled.img`

    width:36px;
    height: 36px;
    border-radius: 50%;
    background-color: antiquewhite;
    display: ${(props)=>props.type =="sm" && "none"};

  `
 
  const Texts = styled.div`
  gap:20px;  
  
  
  `

   const Title= styled.h1`

    font-size: 16px;
    font-weight: 500px;
    color: ${({theme})=>theme.text};
    

   `

  const ChannleName=styled.h2`

   font-size: 14px;
   font-weight: 600px;
   color: ${({theme})=>theme.text};

    ;


    
  `

  const Info =styled.div`
   font-size: 10px;

  `






function Card({type}) {

    return (

      <Link to='/video/test'  style={{textDecoration:"none", color:"inherit"}}>


      <Container type={type}> 

        <Image  type={type}         src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA" />

        <Details  type={type}   >

          <ChannelImage  type={type}         src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
         />

           <Texts>
                  
                  <Title>this is the vidio on youtube</Title>

                   <ChannleName>AK47</ChannleName>
                    
                    <Info>3456678views .1 days ago</Info>

           </Texts>
          
        </Details>

      </Container>
      </Link>
      

        
  )
}

export default Card