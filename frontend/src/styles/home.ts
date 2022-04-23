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
    
    .dropbtn {
      background-color: var(--yellow-600);
      color: white;
      padding: 16px;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }
    
    /* The container <div> - needed to position the dropdown content */
    .dropdown {
      margin-left: 2.5rem;
      position: relative;
      display: inline-block;
    }
    
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      width: 100%;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    
    .dropdown-content button {
      width: 100%;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    
    .dropdown:hover .dropdown-content {
      display: block;
    }
    
    .dropdown:hover .dropbtn {
      background-color: var(--yellow-600);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    border: 1px solid var(--yellow-600);
    width: 100%;
  }

  button {
    margin: 3rem 0;
    background: transparent;
    border: 1px solid var(--yellow-600);
    padding: 0.75rem 1.25rem;
    font-size: 1.25rem;
    color: var(--yellow-600);

    &:hover {
      background: var(--yellow-600);
      color: #cccccc;
      transition: 0.3s;
    }
  }
`