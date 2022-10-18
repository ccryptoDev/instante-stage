import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import hello from "../../assets/png/hello.png";
import Button from "../../components/molecules/Buttons/ActionButton";
import { routes } from "../../routes/Application/routes";
import { useUserData } from "../../contexts/user";
import logo from "../../assets/svgs/logo-dark.svg";

const Wrapper = styled.header`
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 70px;

  .container {
    height: 100%;
    max-width: 1100px;
    padding: 0 15px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      align-items: center;
    }

    button {
      margin-left: 24px;
    }

    .user {
      &-wrapper {
        display: flex;
        align-items: center;
        column-gap: 12px;
        font-size: 14px;
        line-height: 1.5;
      }
      &-name-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .logo img {
      height: 25px;
    }
    .user-name-wrapper {
      font-size: 12px;
    }
  }
`;

const Header = (props: any) => {
  const history = useHistory();
  const { user: borrowerData, fetchUser, loading }: any = useUserData();

  const logoutHandler = () => {
    history.push(routes.LOGIN);
  };

  const fullName = `${borrowerData?.user?.firstname}`;
  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <Link to="/borrower/">
            <img src={logo} alt="IstanteLending" />
          </Link>
        </div>
        <nav>
          <div className="user-wrapper">
            <img src={hello} alt="" />
            <div className="user-name-wrapper">
              <div>Hello,</div>
              <div className="user-name">
                <b>{fullName}</b>
              </div>
            </div>
          </div>
          <Button type="logout" onClick={logoutHandler} />
        </nav>
      </div>
    </Wrapper>
  );
};

export default Header;
