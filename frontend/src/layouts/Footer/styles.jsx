import styled from "styled-components";

const Footer = styled.footer`
  position: relative;
  background-color: var(--color-main-1);
  padding: 2.4rem 0;
  height: var(--footer-height);
  box-sizing: border-box;

  ul {
    list-style: none;
  }

  img {
    height: 60px;
  }

  .footer-logoes img {
    height: 100px;
  }

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  & .account img,
  & .policies-socials {
    margin-bottom: 2.4rem;
    height: 35px;
    display: flex;
    align-items: center;
  }

  & .account-list,
  & .policies-list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    & li {
      & a,
      & button,
      & .nav-button {
        font-family: Poppins;
        text-decoration: none;
        background: transparent;
        text-transform: uppercase;
        border: none;
        outline: none;
        font-size: 12px;
        font-weight: 700;
        color: var(--color-secondary-1);
        padding: 0;
      }
    }
  }

  & .policies {
    &-socials {
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }
  }

  & .email-input-wrapper {
    position: relative;

    & input {
      padding-right: 32px;
    }

    & button {
      position: absolute;
      background: transparent;
      border: none;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      cursor: pointer;
      padding: 0;
    }
  }

  @media screen and (max-width: 767px) {
    height: auto;
  }

  @media screen and (max-width: 600px) {
    .footer-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 430px) {
    .footer-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 350px) {
    .footer-container {
      display: flex;
      flex-direction: column;

      .policies-list {
        & li {
          text-align: left;
        }
      }
    }
  }
`;

export default Footer;
