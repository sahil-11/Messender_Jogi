import "./messmenu.scss"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";
import styled from 'styled-components'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Wrapper = styled.div`
    display: flex;
    
    position: absolute;
    transition: all 1.5s ease;
    
    transform: translateX(${props=>props.slideIndex * -80}vw);
`
const Slide = styled.div`
    display: flex;
    aligh-items: center;
    flex-basis: 80vw;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100vh;
`
const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    padding-top: 20px;
`

const Title = styled.h1`
    font-size: 50px;
    color: white;
`
const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const MealContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const MealTitle  =styled.h1`
  margin-top: 10px;
  color: white;
`

const MealDesc = styled.p`
  color: white;
`


const MessMenu = ({messMenuOpen, setMessMenuOpen}) => {
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
        id: 3,
        day: "Wednesday"
      }
    ]

  return (
    <div className={'messmenu ' + (messMenuOpen && 'active')}>
      <div className="close">
        <CloseOutlinedIcon onClick={()=>setMessMenuOpen(false)}/>
      </div>
      <div className="card">
        
        
          <div className="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
          </div>
          <Wrapper slideIndex={slideIndex}>
                {days.map((item) => (
                    <Slide key = {item.id}>
                    
                    <InfoContainer>
                        <Title>{item.day}</Title>
                        <MenuContainer>
                            <MealContainer>
                                <MealTitle>Breakfast</MealTitle>
                                <MealDesc>Pulao</MealDesc>
                            </MealContainer>
                            <MealContainer>
                                <MealTitle>Lunch</MealTitle>
                                <MealDesc>Chaap</MealDesc>
                            </MealContainer>
                            <MealContainer>
                                <MealTitle>Dinner</MealTitle>
                                <MealDesc>Rajma</MealDesc>
                            </MealContainer>
                        </MenuContainer>
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