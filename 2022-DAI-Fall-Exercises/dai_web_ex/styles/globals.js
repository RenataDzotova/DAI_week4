import styled from 'styled-components';

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 300px;
//   height: 20vh;
//   justify-content: space-around;
//   `


export const FlexCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props=>props.color || "inherit"};
    padding: 10px;
`
export const BigCont = styled(FlexCont)`
    width: 100vw;
    height: 100vh;
    // background:#FAFFDE;
`


export const Wrapper = styled(FlexCont)`
  flex-direction: column;
  width: 300px;
  height: 20vh;
  justify-content: space-around;
  background:#FFFDFA;
  border-radius: 18px;
  filter: drop-shadow(30px 10px 4px #4444dd);
  `
