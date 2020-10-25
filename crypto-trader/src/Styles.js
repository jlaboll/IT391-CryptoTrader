import styled from "styled-components";
import Container from "react-bootstrap/Container";
import {Switch} from "react-router-dom";

export const Body = styled(Container)`
flex: 100%;
`;
export const StyledSwitch = styled(Switch)`
flex: 100%;
`;

export const CustomBar = styled.div`
  .container-fluid{
    padding: 0px 0px;
  }
  .navbar{
    background-color: #284B63;
    justify-content: space-between;
  }
  .Title{
    font-size: 1.8em;
    color: #CCB114;
    &:hover { color: #E7ECEF; }
  }
`;
export const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  margin-bottom: 0;   /* Puts space between NavItems */
  a{
    font-size: 2.7em;
    color: ${(props) => props.active ? "#E7ECEF" : "#284B63"};
    :hover {
      text-decoration: none;
      opacity: 0.7; /* Gets rid of underlining of icons */
    }  
    text{
      font-size: small;
    }
  }
  
`;

export const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  bottom: 0;
  right: 0;
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */ 
  background-color: #86BBBD;
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

export const HomeContainer = styled(Container)`
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #86BBBD;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: wrap;
  .homeimagecarousel{
    flex-basis: 100%;
    order: 0;
  }
  .signup{
    order: 1;
    flex-basis: 40%;
    align-self: flex-start;
  }
  .trending{
    order: 1;
    flex-basis: 60%;
  }
  .homeabout{
    order: 2;
    flex-basis: 40%;
  }
`;

export const TrendingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeAboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  .h2{
    align-self: center;
  }
  .p{
  align-self: inherit;
  }
`;

export const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgCarousel = styled.div`
  display: flex;
  justify-content: center;
  .carousel{
  width: 40%;
  align-self: center;
  .item{
  border-radius: 10px;
  
  .img{
    border-radius: inherit;
    align-self: center;
  }
  
  .caption{
    border-color: #284B63;
    .h3{
    text-outline: inherit;
    }
    .p{
    text-outline: inherit;
    }
  }
  }
  }
  
`;

export const AboutDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const NoMatchDiv = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

export const CoinDiv = styled.div`
  
`;