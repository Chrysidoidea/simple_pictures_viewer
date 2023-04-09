import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
export const GalleryComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: .8rem;
  margin: 1rem;
  
  @media (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CloseBtn = styled(CloseIcon)`
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  color: white;
  width: 10rem;
  height: 10rem;
  padding: .2rem .2rem 1.5rem 1.5rem;
  background-color: rgba(255, 0, 0, 0.31);
  border-top: none;
  border-bottom: 1px solid rgba(255, 0, 0, 0.13);
  border-left: 1px solid rgba(255, 0, 0, 0.13);
  border-right: 1px solid transparent;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 20px 3px #ff5858;
  border-bottom-left-radius: 80%;
`;

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  backdrop-filter: blur(10px);
  background-color: transparent;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  transform: ${(props) => (props.active ? "scale(1)" : "scale(0)")};
  filter: ${(props) => (props.active ? "blur(0)" : "blur(20px)")};
  transition: opacity 0.4s ease-in-out,
  visibility 0.3s ease,
  transform 0.3s ease-in-out;
  overflow: hidden;
  z-index: 1000;
`;

export const ModalImage = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  display: block;
  line-height: 0;
  box-sizing: border-box;
  background-color: transparent;
  margin: 0 auto;
  
  &.opened {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
`;

export const ImageWrapper = styled.div`
  & > img {
    width: 100%;
    height: 100%;
    -webkit-transition: all .5s ease;
    transition: all .17s ease-in-out;
    border-radius: 3px;
    cursor: pointer;
    border: transparent 1px solid;
    box-sizing: border-box;
    background-color: transparent;

    &:hover {
      box-shadow: 0 0 10px white;
      transform: scale(1.01);
      border: rgba(51, 91, 38, 0.99) 1px solid;
    }
  }
`;