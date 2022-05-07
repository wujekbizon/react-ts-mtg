import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid #1e272e;
  border-radius: 10px;
  height: 100%;
  opacity: 0;
  animation: fadeInDown 2s 1s forwards;

  .button {
    background-color: #ee5a24;
    color: #1e272e;
    border-radius: 0px 0px 10px 10px;
    font-size: 15px;
    opacity: 0;
    animation: fadeInUp 1s 2.2s forwards;
  }

  img {
    display: flex;

    max-height: 250px;
    width: 100%;
    object-fit: contain;
    border-radius: 15px 15px 10px 10px;
    animation: zoomIn 1s 1s forwards;
  }
`;
