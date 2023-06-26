import React from 'react'
import { styled } from 'styled-components'



import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

import {Link} from 'react-router-dom'





const Container =styled.div`

 flex:1;
 background-color: ${({theme})=>theme.bg};
 color:${({theme})=>theme.text};
 position:sticky;
 top: 0;
 font-size: 15px;
 height: 100vh;

`


const Wrapper = styled.div`
 padding:18px 26px;
 
`



const Logo = styled.div`

display:flex;
align-items: center;
gap:5px;
cursor:pointer;
padding: 7.5px, 0px;
font-size: 20px;




`

const Img =styled.img`

  height:50px;

`

const Item = styled.div`

display:flex;
align-items: center;
gap:20px;
cursor:pointer;
padding: 7.5px, 0px;
margin: 10px;



  &:hover {
    background-color: ${({theme})=>theme.soft};
  }


`;

const Hr = styled.hr`
  
   margin: 25px  0px;
   border:0.5px solid ${({theme})=> theme.soft};
   
`;

const Login = styled.div``;

const Button=styled.button`
padding: 5px  15px;
background-color: transparent;
border: 1px solid blue;
color:white;
font-weight: 500;
border-radius: 3px;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap:10px;

`

const Title =styled.h2`

  font-size: 20px;
  font-weight: 500;
  color:red;

`


const Logotitle = styled.h4``


function Menu({setdarkmode, darkmode}) {

  return (


    <Container>

      <Wrapper>
       
   
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
   
        
         <Logo >
        
        <Img src='./img.png'/>
   
           <h5>Youtube</h5>          
       
        </Logo>
        
       </Link>
       

        <Item>

          <HomeIcon/>    
           home
        </Item>

        <Item>
         <ExploreOutlinedIcon />
            Explore
        </Item>


        
        <Item>
          <SubscriptionsOutlinedIcon/>

          Subscription
          
        </Item>

        <Hr/>

        <Item>


          <VideoLibraryOutlinedIcon/>

          Library
          
        </Item>

        <Item>
          
          <HistoryOutlinedIcon/>
          History
        </Item>


         <Hr/>

         <Login>

          sign in to like the vidios,comment, and subscribe
          
          <Button>

            <AccountCircleOutlinedIcon/>
            SIGN IN
          </Button>
         </Login>

         <Hr/>
          <Title>BEST FOR YOU</Title>
         <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={()=>setdarkmode(!darkmode)}>
          <SettingsBrightnessOutlinedIcon/>
            Darkmode
        </Item>
      </Wrapper>
        
    </Container>
  )
}

export default Menu;