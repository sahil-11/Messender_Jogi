import "./messmenu.scss"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Slide = styled.div`
    display: flex;
    aligh-items: center;
    width: 100vw;
    height: 100vh;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
    color: white;
`

const MessMenu = () => {
  const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        console.log(slideIndex);
        if(direction === "left"){
            
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

    const days = 
    [
      {
        id: 1,
        day: "Monday"
      },
      {
        id: 2,
        day: "Tuesday"
      },
      {
        id: 2,
        day: "Wednesday"
      }
    ]

  return (
    <div className="messmenu">
      <div className="card">
        
        
          <div className="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
          </div>
          <Wrapper slideIndex={slideIndex}>
                {days.map((item) => (
                    <Slide key = {item.id}>
                    
                    <InfoContainer>
                        <Title>{item.day}</Title>
                        
                    </InfoContainer>
                </Slide>
                ))}
                
            </Wrapper>
          <div className="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon/>
          </div>
       
        
      </div>
    </div>
  )
}

export default MessMenu