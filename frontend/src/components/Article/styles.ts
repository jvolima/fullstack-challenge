import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;

  .article-infos {
    max-width: 600px;
    width: 100%;
    margin-left: 2.5rem;

    h2 {
      color: var(--yellow-600);
    }

    time {
      color: #cccccc;
      display: block;
      margin-top: 0.25rem;
    }

    p {
      display: block;
      margin-top: 0.5rem;
    }

    button {
      margin-top: 0.75rem;
      background: transparent;
      border: 1px solid #cccccc;
      color: #cccccc;
      padding: 0.5rem 1rem;
    }
  }
`