import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
`

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;

  img {
    width: 200px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }
`
export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 1.4rem;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`

export const Button = styled.button`
  background-color: #6654da;
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  color: white;
  padding: 0.8rem 2rem;
  margin-top: 1rem;
  font-size: 1.3rem;
  transition: all 0.3s;

  :hover {
    filter: brightness(1.3);
  }
`
