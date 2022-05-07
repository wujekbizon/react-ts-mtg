import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid #1e272e;
  border-radius: 20px;
  height: 100%;

  .button {
    background-color: #ee5a24;
    color: #1e272e;
    border-radius: 0px 0px 20px 20px;
    opacity: 0;
    animation: fadeInUp 1s 1s forwards;
  }

  img {
    height: 80%;
    width: 100%;
    object-fit: contain;
    border-radius: 15px 15px 10px 10px;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
