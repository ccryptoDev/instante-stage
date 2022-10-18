import React, { useState } from "react";
import styled from "styled-components";
import { Form, BankLogo } from "../styles";
import Button from "../../../../../../atoms/Buttons/Button";
import { useStepper } from "../../../../../../../contexts/steps";
import Header from "../../../../Components/FormHeader";
import { renderFields, initForm, validateForm } from "./config";
import Loader from "../../../../../../molecules/Loaders/LoaderWrapper";
import { useUserData } from "../../../../../../../contexts/user";

const Wrapper = styled.div`
  .logo {
    max-width: 100%;
    width: 100%;
  }
`;

const ButtonsWrapper = styled.div`
  max-width: 342px;
  width: 100%;
  margin-top: 24px;

  .login-buttons {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  .btn {
    &-continue {
      width: 164px;
    }
    &-relogin {
      border: none;
      background: transparent;
      color: var(--color-blue-1);
      font-weight: 600;
      font-size: 14px;
      padding: 20px;
      min-width: 170px;
    }
    &-manual {
      margin-top: 12px;
      width: 100%;
    }
  }

  @media screen and (max-width: 400px) {
    .login-buttons {
      flex-wrap: wrap;

      & button {
        width: 100%;
      }
    }
  }
`;

interface propsType {
  setActiveTab: any;
  setConnected: any;
  tabType: { AUTO: string; MANUAL: string };
  selectedBank: any;
  loginToBankHandler: (form: any) => Promise<boolean>;
}

const ChooseProviderForm = (props: propsType) => {
  const { fetchUser } = useUserData();
  const { moveToNextStep } = useStepper();
  const [form, setForm] = useState(initForm());
  const [loading, setLoading] = useState(false);
  const {
    selectedBank,
    setActiveTab,
    tabType,
    loginToBankHandler,
    setConnected,
  } = props;

  // eslint-disable-next-line consistent-return
  const onSubmitHandler = async (e: any): any => {
    try {
      e.preventDefault();
      setLoading(true);
      const [isValid, validatedForm] = validateForm(form);
      if (!isValid) {
        return setForm(validatedForm);
      }
      const isVerified: boolean = await loginToBankHandler(form);
      await fetchUser();
      setLoading(false);
      if (isVerified) moveToNextStep();
    } catch (error) {
      setLoading(false);
    }
  };

  const onChangeHandler = (e: any) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: { value: e.target.value, message: "" },
    }));
  };

  const goToManual = () => {
    setConnected(false);
    setActiveTab(tabType.MANUAL);
  };

  const title = "Banking Information";
  const note = "Login to your bank account to get the best offer.";
  const userIsLogged = true;
  return (
    <Wrapper>
      <Loader loading={loading}>
        <Form onSubmit={onSubmitHandler}>
          <Header title={title} note={note} />

          <BankLogo key={selectedBank.name} className="logo">
            <img src={selectedBank.img} alt={selectedBank.name} />
          </BankLogo>

          {renderFields(form, userIsLogged).map(
            ({ component: Component, ...field }) => {
              return (
                <Component
                  key={field.name}
                  {...field}
                  onChange={onChangeHandler}
                />
              );
            }
          )}

          <ButtonsWrapper>
            <div className="login-buttons">
              <Button type="submit" variant="primary" className="btn-continue">
                Continue
              </Button>

              <button
                type="button"
                onClick={() => setConnected(false)}
                className="btn-relogin"
              >
                Re-login to bank
              </button>
            </div>
            <Button
              type="button"
              variant="secondary"
              onClick={goToManual}
              className="btn-manual"
            >
              Manually Submit Banking Information
            </Button>
          </ButtonsWrapper>
        </Form>
      </Loader>
    </Wrapper>
  );
};

export default ChooseProviderForm;
