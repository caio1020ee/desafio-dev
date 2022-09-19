import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 2.5rem;

  > header {
    margin-top: 1rem;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  border: solid 1px #aaa;
  border-left: none;
  border-bottom: none;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const TableMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1.5rem;
  border: solid 1px #aaa;
  border-left: none;
  border-bottom: none;
  background: transparent;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const BodyLine = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  background: transparent;

  & > div {
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
`;

export const Item = styled.div`
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-left: solid 1px #aaa;
  border-bottom: solid 1px #aaa;
  background: transparent;

  @media (max-width: 700px) {
    :nth-last-child(1) {
      border-bottom: solid 1px #aaa;
    }
    border-bottom: none;
    text-align: center;
    min-width: 100%;
  }
`;

export const Message = styled.div`
  font-size: 1.3rem;
  text-align: center;
  width: 100%;
  padding-top: 15px;
  display: flex;
  justify-content: center;

  p {
    border: 1px solid #cccccc;
    border-radius: 10px;
    width: 45%;
    padding: 1rem 0rem;
  }

  @media (max-width: 700px) {
    font-size: 16px;

    p {
      width: 100%;
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1rem;

  @media (min-width: 700px) {
    display: none;
  }
`;
