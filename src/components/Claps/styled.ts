import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8vh;
  margin-left: 1rem;

  div {
    display: flex;
    align-items: center;
    height: 10rem;
  }

  .count {
    height: 10rem;
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: -18rem;

    div {
      height: 5rem;
      width: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3rem;
      background: rgba(0, 0, 0, 0.8);
    }

    p {
      color: #fff;
      margin: 0;
      font-size: 1.5rem;
    }

    .hidden {
      display: none;
    }
  }

  .numberAnimations {
    animation-name: countAnimation;
    animation-duration: 0.2s;
    animation-iteration-count: infinite;
  }
  .exitAnimations {
    animation-name: hiddenAnimation;
    animation-duration: 2s;
    animation-iteration-count: 1;
  }

  .animation {
    height: 10rem;
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 5rem;
  }
  .clapsText {
    margin-left: 2rem;
    font-size: 2rem;
    line-height: 3rem;
    color: #000;
    display: none;
  }

  .imgAnimation1 {
    border-color: #000;
    animation-name: imgBlackAnimation;
    animation-duration: 2s;
    animation-iteration-count: 1;
  }

  .imgAnimation2 {
    animation-name: imgAnimation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .imgBorder {
    border: 2px solid #393e46;
    border-radius: 10rem;
    width: 9rem;
    padding: 1rem;
  }

  @keyframes imgAnimation {
    0% {
      width: 9rem;
    }

    50% {
      width: 8rem;
    }
    100% {
      width: 9rem;
    }
  }

  @keyframes imgBlackAnimation {
    0% {
      box-shadow: 0 0 0.1em #000;
      border-radius: 10rem;
      padding: 1rem;
      width: 7rem;
    }

    100% {
      box-shadow: 0 0 2em #000;
      border-radius: 10rem;
      padding: 1rem;
      width: 7rem;
    }
  }

  @keyframes countAnimation {
    0% {
      height: 5.2rem;
      width: 5.2rem;
    }
    50% {
      height: 5rem;
      width: 5rem;
    }
    100% {
      height: 5.2rem;
      width: 5.2rem;
    }
  }

  @keyframes hiddenAnimation {
    0% {
      margin-top: 0;
      opacity: 1;
    }
    100% {
      margin-top: -15rem;
      opacity: 0;
      display: none !important;
    }
  }
`
