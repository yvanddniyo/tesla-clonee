import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal'

function Section({title, description, leftBtnText, rightBtnText,  backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg} >
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons> 
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
            {leftBtnText}
            </LeftButton>
            {rightBtnText && <RightButton>
              {rightBtnText}
            </RightButton>  }
          </ButtonGroup>
        </Fade>
       <DownArrow src="/images/down-arrow.svg" alt="" />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
 width:100vw;
 height:100vh;
 background-image:url('/images/model-s.jpg');
 background-size:cover;
 background-position:center;
 background-repeat: no-repeat;
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 align-items:center;
 background-image: ${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
 text-align:center;
 padding-top:10vh;
`
const ButtonGroup = styled.div`
text-align:center;
display:flex;
margin-bottom:30px;
cursor:pointer;
@media (max-width: 768px) {
  flex-direction: column;
}
`
const LeftButton = styled.div`
background-color:rgba(23, 26, 32, 0.8);
height:40px;
width:256px;
margin: 13px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:13px;
`
const RightButton = styled(LeftButton)`
 background:white;
 opacity:0.65;
 color:black;
`
const DownArrow = styled.img`
 margin-top:25px;
 height:40px;
 overflow-x:hidden;
 text-align:center;
 animation:animateDown infinite 1.5s;
 cursor:pointer;
`
const Buttons =styled.div``