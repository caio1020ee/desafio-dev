import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 2.5rem;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  font-size: 14px!important;
  background-color: #666;

  div#title-description {
    text-align: center;
  }
  div#main-image {
    img {
      max-width: 600px;
    }
  }
  div#list {
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  div#imagens {
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    img {
      width: 200px;
      height: 400px
    }
  }
`;