import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "../Footer";

const Wrapper = styled.div`
  background: url("${process.env.PUBLIC_URL}/images/borrower-bg.png");
  main {
    flex: 1 0 auto;
    max-width: 110rem;
    width: 100%;
    margin: 0 auto;
  }

  .app-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #f6f6f8;
  }
`;

interface PropsType {
  children: any;
  borrowerData: any;
}

const Layout = (props: PropsType) => {
  const { children, borrowerData } = props;
  return (
    <Wrapper>
      <div className="app-wrapper">
        <Header borrowerData={borrowerData} />
        <main>{children}</main>
        <Footer />
      </div>
    </Wrapper>
  );
};

export default Layout;
