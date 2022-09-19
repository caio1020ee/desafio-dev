import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  border-radius: var(--border-radius);
  height: 100%;
  background-color: var(--color-primary);
  position: sticky;
  height: calc(100vh - 4rem);
  border-left: 5px solid var(--color-primary);
  transition: var(--transition);
  position: relative;

  > ul {
    position: absolute;
    width: 100%;
    padding-left: 5px;
    padding-top: 60px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

interface ItemProps {
  active: boolean;
}

export const Item = styled.li<ItemProps>`
  position: relative;
  list-style: none;
  width: 100%;

  ${props => props.active && `background-color: #fff;`}

  border-radius: var(--border-radius) 0 0 var(--border-radius);

  > a {
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: ${props => (props.active ? '#333' : '#fff')};

    > i {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      min-width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }

    > span {
      display: block;
      position: relative;
      padding-left: 10px;
      line-height: 60px;
      height: 60px;
      white-space: normal;
    }
  }

  > b {
    position: absolute;
    height: 10px;
    width: 100%;
    background-color: #fff;
    display: ${props => (props.active ? 'block' : 'none')};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-primary);
    }

    &:first-of-type {
      top: -10px;

      &::before {
        border-radius: 0 0 var(--border-radius) 0;
      }
    }

    &:last-of-type {
      bottom: -10px;

      &::before {
        border-radius: 0 var(--border-radius) 0 0;
      }
    }
  }
`;
