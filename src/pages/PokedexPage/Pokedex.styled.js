import styled from "styled-components";

export const Container = styled.div`
   
section {
display:flex;
flex-direction:row;
flex-wrap: wrap;
/* height: 811px; */
background: #5E5E5E;
padding:50px
}
h1{
top: 220px; 
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
margin-top: -10px;
margin-left: 28px;
}
.cards1{
  height: 140px;
  margin-top: 100px;
}
.pokeimg{
  height: 190px;
    background: url(image.png);
    margin-top: -262px;
    margin-right: -68px;
}
.onclickpokemon{
  width: 210px;
height: 36px;
left: 100px;
top: 62px;
margin-left: 27px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 6px;
/* identical to box height */
margin: -64px 0px 38px 35px;

text-decoration-line: underline;

color: #1A1A1A;
}
/* .cards{
  display: flex;
    gap: 0.5px;
  
} */
.cards{ 
display: flex;
gap: 45px;
flex-wrap: wrap;
justify-content: center;
margin-top: -41px;
/* padding-bottom: 495px; */
}
.pinfo{
  margin-right: 286px;
    width: 32px;
    height: 19px;
    left: 23px;
    top: 25px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
}
.pname{
  width: 89px;
    height: 39px;
    left: 23px;
    top: 40px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFF;
    justify-content: space-between;
    margin-right: 368px;
    margin-top: -52px;
}

.pokedetalhes{
  display: flex;
    margin-left: -397px;
    color: white;
    text-decoration-line: underline;
    cursor: pointer;
    margin-top: -19px;
    margin-left: -1px;
}

.ptypes{
  display: flex;
    gap: 8px;
    margin-top: 73px;
    margin-left: -231px;
    width: 20px;
    margin-left: -201px;
}
.ptypes img{
  margin-left: -207px;
  margin-top: -141px;
  margin-right: 22px;
}
.button{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;
margin-left: 300px;
color: white;
width: 287px;
height: 74px;
left: 641px;
top: 41px;
background: #33A4F5;
border-radius: 8px ;
border-color: white;
}
.buttondel{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
/* padding: 4px 10px; */
width: 110px;
height: 35px;
background: #FF6262;
border-color: #FF6262;
border-radius: 8px;
border-color:#FF6262;
margin-left: 202px;
margin-top: -105px;
color: white;
}
.header-logo{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 498px;
  margin-right: 120px;
}
h1{
width: 100%;
font-family: 'Poppins';
font-style: normal;
font-size: 45px;
color: #FFFFFF;
margin-left: 3px;
margin-bottom: 74px;
}



` 
export const Cards = styled.div`
display: flex;
gap: 20px;
flex-wrap: wrap;
justify-content: center;
padding-bottom: 495px;

`
