import styled from 'styled-components'

export const Container = styled.div`
  padding: 4rem 0;

  h1 {
    margin: 3rem 0;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 3rem;
    max-width: 50%;
  }

  button {
    background-color: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 1.3rem;
    transition: all 0.3s;
  }

  button:hover {
    filter: brightness(1.3);
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  .release-date {
    opacity: 0.5;
  }

  @media only screen and (max-width: 700px) {
    .movie {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .details {
      justify-content: center;
      align-items: center;
      max-width: 80%;
    }
  }
`
