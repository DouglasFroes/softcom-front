import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  background: rgba(0, 173, 181, 0.5);
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 1rem 2rem;
  h2 {
    margin-bottom: 2rem;
  }
  @media (max-width: 440px) {
    width: 95%;
    padding: 1.2rem;
  }
`
