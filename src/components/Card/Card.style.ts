import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .button {
    background: linear-gradient(
      135deg,
      rgba(67, 30, 63, 1) 0%,
      rgba(29, 28, 37, 1) 100%
    );
    color: white;
    border-radius: 0px 0px 10px 10px;

    text-transform: uppercase;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 5px 5px;
  }

  .btn-flip {
    position: absolute;
    opacity: 0.6;
    background: white;
    border-radius: 100%;
    border: 2px solid #343242;
    display: block;
    height: 44px;
    width: 44px;
    padding: 7px;
    cursor: pointer;
    top: 26%;
    left: 75%;
    transform-style: flat;
    z-index: 1000;
    transition: background-color 200ms linear, opacity 50ms linear;
    transform: translateZ(0.01px);

    &:hover {
      opacity: 1;
    }
  }

  .btn-flip:hover:after {
    display: block;
    width: 80px;
    height: 25px;
    border: 1px solid white;
    background: rgba(29, 28, 37, 1);
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    content: 'Turn Over';
  }

  .btn-flipped {
    border-color: #fff;
    background-color: #343242;

    path {
      fill: white;
    }
  }

  .flipped {
    animation: flipInY 1s, 1s forwards;
  }

  .back-flipped {
    animation: zoomIn 0.3s, 1s forwards;
  }
`;
