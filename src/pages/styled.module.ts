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
`
export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;

  input,
  button {
    margin-top: 1rem;
    margin: 10px;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    text-align-last: center;
    flex: 1 1 160px;
    background: var(--var-color-1-2);
    border-color: var(--var-color-3);
    text-align: center;
    font-size: 1.1rem;
    transition: filter 0.2s;
    transition: font-weight 0.3s;
    &:focus,
    &:hover {
      font-weight: 700;
      outline: none;
    }
  }
  input {
    ::placeholder {
      color: var(--var-color-4);
    }
  }
  button {
    flex: 1 0.8 5rem;
    background: var(--var-color-3);
    color: var(--var-color-1);
    border-color: var(--var-color-4);
    font-weight: 800;
    &:focus,
    &:hover {
      filter: brightness(0.75);
    }
  }
`

export const Result = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  ul {
    padding: 0;
    margin: 0;
    li {
      margin: 1.3rem 1.3rem 0;
      float: left;
      p {
        font-size: 1rem;
        span {
          font-weight: 600;
        }
      }
    }
  }

  div {
    display: flex;
    margin-top: 1rem;
    flex-wrap: wrap;
  }
`
