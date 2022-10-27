import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const titleStyles = css`
  position: absolute;
  width: 284px;
  height: 50px;
  left: 25px;
  top: 36px;

  h1 {
    position: absolute;
    height: 29px;
    left: 0%;
    right: 0.35%;
    top: calc(50% - 29px / 2 - 10.5px);

    font-family: 'InterBold';

    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    color: #1d1f29;
  }

  p {
    position: absolute;
    height: 17px;
    left: 0.18%;
    right: 42.78%;
    top: calc(50% - 17px / 2 + 16.5px);

    font-family: 'InterBold';
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #63687d;
  }
`;

const lineStyles = css`
  position: absolute;
  width: 326px;
  height: 1px;
  left: 25px;
  top: 110px;

  background: #848bab;
`;

const darkModeStyles = css`
  position: absolute;
  width: 326px;
  height: 24px;
  left: 25px;
  top: 127px;

  span {
    position: absolute;
    height: 17px;
    left: 0%;
    right: 76.99%;
    top: calc(50% - 17px / 2 - 0.5px);

    font-family: 'InterBold';
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #63687d;
  }

  /* .dark-mode-toggle {
    position: absolute;
    width: 48px;
    height: 24px;
    left: 278px;
    top: 0px;
    border-radius: 12px;
    border-width: 0;
    background-color: #aeb3cb;
  }
  .dark-mode-toggle svg {
    fill: #aeb3cb;
  }
  .dark-mode-slider {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 0;
    top: 0px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    position: relative;
    transform: translateX(0px);
    transition: all 0.2s ease;
  }

  .dark .dark-mode-slider {
    transform: translateX(20px);
  } */
`;

const cardStyles = css`
  .icon {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 121px;
    top: 34px;

    .instagram {
      left: 109px;
    }
  }

  .twitter {
    height: 16.25px;
  }

  .accountName {
    position: absolute;
    height: 15px;
    left: 149px;
    top: 36px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #63687d;
    font-family: 'InterBold';

    .insta {
      left: 138px;
    }
  }

  .subscribersNumber {
    position: absolute;
    width: 141px;
    height: 48px;
    left: 92px;
    top: 28px;
    font-family: 'interBold';
    font-weight: 700;
    font-size: 56px;
    line-height: 48px;
    /* identical to box height, or 86% */

    text-align: center;
    letter-spacing: -2px;

    color: #1d1f29;
  }

  .followers {
    position: absolute;
    height: 15px;
    left: 108px;
    top: 137px;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;

    color: #63687d;
  }

  .today {
    position: absolute;
    height: 15px;
    left: 130px;
    right: 1.52%;
    top: 177px;

    font-family: 'InterBold';
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    color: #1eb589;

    img {
      margin-right: 5px;
      margin-bottom: 2px;
    }
  }
  .youtube {
    color: #dc414c;
  }

  .firstCard {
    position: absolute;
    width: 326px;
    height: 216px;
    left: 25px;
    top: 191px;
    background: #f1f3fa;
    border-radius: 5px;

    div {
      position: absolute;
      width: 326px;
      height: 4px;
      border-radius: 5px 5px 0 0;

      background: #178ff5;
    }
  }

  .secondCard {
    position: absolute;
    width: 326px;
    height: 216px;
    left: 25px;
    top: 431px;
    background: #f1f3fa;
    border-radius: 5px;

    div {
      position: absolute;
      width: 326px;
      height: 4px;
      border-radius: 5px 5px 0 0;

      background: #178ff5;
    }
  }

  .thirdCard {
    position: absolute;
    width: 326px;
    height: 216px;
    left: 25px;
    top: 671px;
    background: #f1f3fa;
    border-radius: 5px;

    div {
      position: absolute;
      width: 326px;
      height: 4px;
      border-radius: 5px 5px 0 0;

      background: linear-gradient(
        225deg,
        #df4896 0%,
        #ee877e 50.91%,
        #fdc366 100%
      );
    }
  }

  .fourthCard {
    position: absolute;
    width: 326px;
    height: 216px;
    left: 25px;
    top: 911px;
    background: #f1f3fa;
    border-radius: 5px;

    div {
      position: absolute;
      width: 326px;
      height: 4px;
      border-radius: 5px 5px 0 0;

      background: #c4032b;
    }
  }
`;

const overviewStyles = css`
  position: absolute;
  width: 209px;
  height: 29px;
  left: 25px;
  top: 1173px;

  font-family: 'InterBold';
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #63687d;

  p {
    position: absolute;
    width: 209px;
    height: 29px;
    left: 25px;
  }

  span {
    position: absolute;
    left: 267px;
    top: 86px;
    font-family: 'InterBold';
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    text-align: right;

    color: #1eb589;

    img {
      margin-right: 5px;
      margin-bottom: 2px;
    }
  }

  .down {
    color: #dc414c;
  }

  .subtitle {
    font-family: 'InterBold';
    font-size: 14px;
    line-height: 17px;
    left: 24px;
    top: 16px;
    color: #63687d;
    width: 91px;
    height: 17px;
  }

  .number {
    position: absolute;
    width: 136px;
    height: 39px;
    left: 24px;
    top: 32px;

    font-family: 'InterBold';
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    color: #1d1f29;
  }

  .socialMediaIcon {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 26px;
    left: 275px;
  }

  .twitter {
    height: 16.25px;
  }

  .firstOverview {
    position: absolute;
    width: 326px;
    height: 125px;
    top: 83px;
    background: #f1f3fa;
    border-radius: 5px;
  }
  .secondOverview {
    position: absolute;
    width: 326px;
    height: 125px;
    top: 224px;
    background: #f1f3fa;
    border-radius: 5px;
  }
  .thirdOverview {
    position: absolute;
    width: 326px;
    height: 125px;
    top: 365px;
    background: #f1f3fa;
    border-radius: 5px;
  }
  .fourthOverview {
    position: absolute;
    width: 326px;
    height: 125px;
    top: 506px;
    background: #f1f3fa;
    border-radius: 5px;
  }
  .fifthOverview {
    position: absolute;
    width: 326px;
    height: 125px;
    top: 647px;
    background: #f1f3fa;
    border-radius: 5px;
  }
  .sixthOverview {
    position: absolute;
    width: 326px;
    height: 125px;
    top: 788px;
    background: #f1f3fa;
    border-radius: 5px;
  }
  .seventhOverview {
    position: absolute;
    width: 326px;
    height: 125px;
    top: 929px;
    background: #f1f3fa;
    border-radius: 5px;
  }
  .eighthOverview {
    position: absolute;
    width: 326px;
    height: 125px;
    top: 1070px;
    background: #f1f3fa;
    border-radius: 5px;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="App">
      <div css={titleStyles}>
        <h1 className="white">Social Media Dashboard</h1>
        <p className="gray">Total Followers: 23,004</p>
      </div>
      <div css={lineStyles} />
      <div css={darkModeStyles}>
        <span>Dark Mode</span>
        <button
          className="dark-mode-toggle"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          <div className="dark-mode-slider" />
        </button>
      </div>
      <div css={cardStyles}>
        <div className="firstCard darkCard">
          <div />
          <img
            className="icon"
            src="/images/icon-facebook.svg"
            alt="facebook logo"
          />
          <span className="accountName gray">@nathanf</span>
          <p className="subscribersNumber white">1987</p>
          <p className="followers gray">followers</p>

          <span className="today">
            <img src="/images/icon-up.svg" alt="icon-up" />
            12 Today
          </span>
        </div>
        <div className="secondCard darkCard">
          <div />
          <img
            className="icon twitter"
            src="/images/icon-twitter.svg"
            alt="twitter logo"
          />
          <span className="accountName gray">@nathanf</span>
          <p className="subscribersNumber white">1044</p>
          <p className="followers gray">followers</p>

          <span className="today">
            <img src="/images/icon-up.svg" alt="icon-up" />
            99 Today
          </span>
        </div>
        <div className="thirdCard darkCard">
          <div />
          <img
            className="icon instagram"
            src="/images/icon-instagram.svg"
            alt="instagram logo"
          />
          <span className="accountName insta gray">@realnathanf</span>
          <p className="subscribersNumber white">11k</p>
          <p className="followers gray">followers</p>

          <span className="today">
            {' '}
            <img src="/images/icon-up.svg" alt="icon-up" />
            1099 Today
          </span>
        </div>
        <div className="fourthCard darkCard">
          <div />
          <img
            className="icon"
            src="/images/icon-youtube.svg"
            alt="youtube logo"
          />
          <span className="accountName gray">Nathan F.</span>
          <p className="subscribersNumber white">8239</p>
          <p className="followers gray">followers</p>

          <span className="today youtube">
            <img src="/images/icon-down.svg" alt="icon-up" />
            144 Today
          </span>
        </div>
      </div>
      <div css={overviewStyles}>
        <p className="white">Overview - Today</p>
        <div className="firstOverview darkCard">
          <p className="subtitle gray">Page Views</p>
          <p className="number white">87</p>
          <img
            className="socialMediaIcon"
            src="/images/icon-facebook.svg"
            alt="facebook icon"
          />
          <span>
            <img src="/images/icon-up.svg" alt="icon up" />
            3%
          </span>
        </div>
        <div className="secondOverview darkCard">
          <p className="subtitle gray">Likes</p>
          <p className="number white">52</p>
          <img
            className="socialMediaIcon"
            src="/images/icon-facebook.svg"
            alt="facebook icon"
          />
          <span className="down">
            <img src="/images/icon-down.svg" alt="icon down" />
            2%
          </span>
        </div>
        <div className="thirdOverview darkCard">
          <p className="subtitle gray">Likes</p>
          <p className="number white">5462</p>
          <img
            className="socialMediaIcon"
            src="/images/icon-instagram.svg"
            alt="instagram icon"
          />
          <span>
            <img src="/images/icon-up.svg" alt="icon up" />
            2257%
          </span>
        </div>
        <div className="fourthOverview darkCard">
          <p className="subtitle gray">Profile Views</p>
          <p className="number white">87</p>
          <img
            className="socialMediaIcon"
            src="/images/icon-instagram.svg"
            alt="instagram icon"
          />
          <span>
            <img src="/images/icon-up.svg" alt="icon up" />
            1375%
          </span>
        </div>
        <div className="fifthOverview darkCard">
          <p className="subtitle gray">Retweets</p>
          <p className="number white">117</p>
          <img
            className="socialMediaIcon twitter"
            src="/images/icon-twitter.svg"
            alt="twitter icon"
          />
          <span>
            <img src="/images/icon-up.svg" alt="icon up" />
            303%
          </span>
        </div>
        <div className="sixthOverview darkCard">
          <p className="subtitle gray">Likes</p>
          <p className="number white">507</p>
          <img
            className="socialMediaIcon twitter"
            src="/images/icon-twitter.svg"
            alt="twitter icon"
          />
          <span>
            <img src="/images/icon-up.svg" alt="icon up" />
            553%
          </span>
        </div>
        <div className="seventhOverview darkCard">
          <p className="subtitle gray">Likes</p>
          <p className="number white">107</p>
          <img
            className="socialMediaIcon"
            src="/images/icon-youtube.svg"
            alt="youtube icon"
          />
          <span className="down">
            <img src="/images/icon-down.svg" alt="icon down" />
            19%
          </span>
        </div>
        <div className="eighthOverview darkCard">
          <p className="subtitle gray">Total Views</p>
          <p className="number white">1407</p>
          <img
            className="socialMediaIcon"
            src="/images/icon-youtube.svg"
            alt="youtube icon"
          />
          <span className="down">
            <img src="/images/icon-down.svg" alt="icon down" />
            12%
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
