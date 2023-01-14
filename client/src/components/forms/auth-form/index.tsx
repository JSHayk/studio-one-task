import { ChangeEvent, FC, memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { IAuthRequest } from "../../../interfaces/auth";
import Router from "../../../const/router";
// Common
import Form from "../../../common/Form";
import Input from "../../../common/Input";
import Title from "../../../common/Title";
import Button from "../../../common/Button";
import Container from "../../../common/Container";
import Text from "../../../common/Text";
import "./index.scss";
import resetForm from "../../../helpers/resetForm";

interface IAuthForm {
  title?: string;
  text?: string;
  link?: string;
  submitForm?: (sendData: IAuthRequest) => void;
}

const AuthForm: FC<IAuthForm> = ({
  title,
  submitForm,
  text,
  link = Router.LOGIN,
}) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const sendData = useMemo(() => {
    return {
      username,
      password,
    };
  }, [username, password]);

  return (
    <Form
      submit={(e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitForm!(sendData);
        resetForm([setUsername, setPassword]);
      }}
      className="auth-form"
    >
      <Title>{title}</Title>
      <Container className="auth-form-container">
        <Container className="auth-form-fields">
          <Input
            type="text"
            value={username}
            plc="username"
            change={(val: string) => {
              setUsername(val);
            }}
          />
          <Input
            type="password"
            value={password}
            plc="password"
            change={(val: string) => {
              setPassword(val);
            }}
          />
        </Container>
        <Container className="button-container">
          <Button>Submit</Button>
        </Container>
        <Link to={link}>
          <Text className="question">{text}</Text>
        </Link>
      </Container>
    </Form>
  );
};

export default memo(AuthForm);
