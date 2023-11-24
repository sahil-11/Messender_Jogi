import "./messmenu.scss"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState, useEffect } from "react";
import styled from 'styled-components'
import { useLocation } from "react-router-dom";
import axios from "axios";
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

const MealDesc = styled.ul`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const MealItem = styled.li`
  color: white;
`


const MessMenu = ({messMenuOpen, setMessMenuOpen, chief}) => {
  console.log("messmenu");
  const location = useLocation();
  const id = !chief?location.pathname.split("/")[1]:location.pathname.split("/")[2];
  console.log(id);
  const [slideIndex, setSlideIndex] = useState(0);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [eveningSnacks, setEveningSnacks] = useState([]);
  const [dinner, setDinner] = useState([]);

  useEffect(()=> {
    console.log("Effect triggered");
    const fetchData = async () => {
      try{
        const response = await axios.get("http://localhost:9000/api/showmenu/" + id + "?" + "day=" + slideIndex, {
        withCredentials: true
      })
        console.log(response);
        setBreakfast(response.data.meal.breakfast);
        setLunch(response.data.meal.lunch);
        setEveningSnacks(response.data.meal.eveningSnacks);
        setDinner(response.data.meal.dinner); // Set the fetched data into state
        // console.log(breakfast);
      }catch(err){
        console.log(err);
      }
      
     
      
    };
    fetchData();
  }, [id, slideIndex]);

    console.log(breakfast);
    const handleClick = (direction)=>{
        console.log(slideIndex);
        if(direction === "left"){
            
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 6)
        }else{
            setSlideIndex(slideIndex < 6 ? slideIndex + 1 : 0)
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
      },
      {
        id: 4,
        day: "Thursday"
      },
      {
        id: 5,
        day: "Friday"
      },
      {
        id: 6,
        day: "Saturday"
      },
      {
        id: 7,
        day: "Sunday"
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
                                <MealDesc>{breakfast.map((item) => (
                                  <MealItem>{item}</MealItem>
                                ))}</MealDesc>
                            </MealContainer>
                            <MealContainer>
                                <MealTitle>Lunch</MealTitle>
                                <MealDesc>{lunch.map((item) => (
                                  <MealItem>{item}</MealItem>
                                ))}</MealDesc>
                            </MealContainer>
                            <MealContainer>
                                <MealTitle>Snacks</MealTitle>
                                <MealDesc>{eveningSnacks.map((item) => (
                                  <MealItem>{item}</MealItem>
                                ))}</MealDesc>
                            </MealContainer>
                            <MealContainer>
                                <MealTitle>Dinner</MealTitle>
                                <MealDesc>{dinner.map((item) => (
                                  <MealItem>{item}</MealItem>
                                ))}</MealDesc>
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