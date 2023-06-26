import { MoreHorizOutlined, Share, ThumbDownAltOutlined, ThumbUpOutlined } from '@mui/icons-material'
import React from 'react'
import { styled } from 'styled-components'

import Comments from '../componets/Comments'

import Card  from '../componets/Card'


 const Container = styled.div`
     display: flex;
     gap: 20px;

 `

 const Content = styled.div`
   flex: 5;

 `


const Videowrapper = styled.div`
   
  
`

 const Title=styled.h1`

   font-size: 25px;
  
 `

 const Detiles =styled.div`


  display: flex;
  align-items: flex-start;
  justify-content: space-between;

 `

  const Info= styled.span`

   font-size: 14px;
    
  `
 
   const Buttons = styled.div`
   
    display: flex;
    gap:20px;
    align-items: center;
   
   `

   const Button =styled.div`
   
   `



  const Hr=styled.hr`

    margin: 15px 0px;
    border: 0.5px solid ${({theme})=>theme.soft};
  `


   const Channals= styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;

     

   `

   const Channalimg= styled.img`
     height: 50px;
     width: 50px;
     border-radius: 50%;

    
   `
   
   const Channalinfo=styled.div`
     
      display: flex;
      align-items: center;
      gap: 20px;
    
   `

   const Channaltitle=styled.h1`
     font-size: 20px;
     font-weight: 400px;
   `;

   const Subscribers =styled.span`
    font-size: 14px;
   `;

   const Channalbody=styled.div`
     font-weight: 566px;
     font-size: 18px;
   `;


   const Subbutton= styled.button`
     width: 100px;
     height: 40px;
     border-radius: 3px;
     justify-content: center;
     display: flex;
     align-items: center;
     background-color: red;
     color: white;
    
   `






 const Recommendation = styled.div`

       flex: 2;
 `


function Video() {




  return (
    
    <Container>
      <Content>

         <Videowrapper>

         <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <Title>React Vidio Sharing App UI using Styled Componets </Title>

            <Detiles>

              <Info >7,899,8899 Views * JUN 23, 2024</Info>

              <Buttons>
                <Button><ThumbUpOutlined/></Button>

                <Button><ThumbDownAltOutlined/></Button>

                <Button><Share/></Button>

                <Button><MoreHorizOutlined/></Button>

    
              </Buttons>
              
            </Detiles> 
            <Hr/>

            <Channals>

              <Channalinfo>
                
              <Channalimg src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"    />
                  <div>

                   <Channaltitle>fgvbhn</Channaltitle>
                <Subscribers>2345 subscribers</Subscribers>
                
                <Channalbody>

                  frg yghygy uhuhu uhujjijiji huhugygyggtfrfrd uhuh

                </Channalbody>
                </div>
               

              </Channalinfo>



              <Subbutton>Subscribe</Subbutton>
              
              
             </Channals>    

             <Comments/>  


         </Videowrapper>
      </Content>
    



      <Recommendation>

        <Card type='sm' />

        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
 

      </Recommendation>

    
    </Container>
  )
}

export default Video