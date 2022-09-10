import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 13px;
  border: 1px solid black;
  height: 100%;
  /* opacity: 0;
  animation: fadeInDown 0.8s 0.5s forwards; */

  .button {
    background-color: black;
    color: white;
    border-radius: 0px 0px 10px 10px;
    border-color: black;
    font-size: 14px;
    /* opacity: 0;
    animation: fadeInUp 1s 2.2s forwards; */
  }

  img {
    display: flex;

    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 5px 5px;
    /* animation: zoomIn 1s 1s forwards; */
  }
`;
