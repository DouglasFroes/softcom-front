import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Body = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 65vh;

  .teste {
    display: flex;
    /* padding: 0 3rem; */
    margin-top: 20vh;
  }
  p {
    font-size: 1.8rem;
    margin-left: 4.5rem;
  }
  @media (max-width: 440px) {
    width: 95%;
    padding: 1.2rem;
  }
`
