import styled from "styled-components";

export const Header = styled.header`
  max-width: 1200px;
  width: 100%;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  section {
    width: 100%;
    margin-bottom: 3rem; 
    display: flex;
    justify-content: flex-end;

    .fake-input {
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      border: 1px solid var(--yellow-600);

      input {
        background: transparent;
        border: 0;
        outline: none;
        font-size: 1.125rem;
        color: var(--yellow-600);
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--yellow-600);
        border: 0;
        width: 2rem;
        height: 2rem;
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border: 1px solid var(--yellow-600);
    border-radius: 120px;
  }

  h1 {
    margin-top: 2rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 400;
  }
`

export const Container = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  hr {
    border: 1px solid var(--yellow-600);
  }
`