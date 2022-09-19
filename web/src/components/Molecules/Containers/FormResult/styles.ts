import styled from 'styled-components';

export const Container = styled.div`
  border-radius: var(--border-radius);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #eee !important;

  > header {
    width: 100%;
    display: flex;
    justify-content: center;

    > h3 {
      text-align: center;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  > main {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
