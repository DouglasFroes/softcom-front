import styled from 'styled-components'

export const Button = styled.button`
  flex: 1 0.8 5rem;
  margin: 10px;
  padding: 0.5rem 1rem;
  background: var(--var-color-3);
  color: var(--var-color-1);
  border-color: var(--var-color-4);
  font-weight: 800;
  margin-top: 1rem;
  border-radius: 1rem;
  text-align-last: center;
  text-align: center;
  font-size: 1.1rem;
  transition: filter 0.2s;
  transition: font-weight 0.3s;
  &:focus,
  &:hover {
    font-weight: 700;
    outline: none;
    filter: brightness(0.75);
  }
`
