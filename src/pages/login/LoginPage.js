import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import eyeIcon from "../../../src/eye-icon.png";
import { Link } from "../../components/Link";
import { Wrapper } from "../../components/Wrapper";
import { Stack } from "../../components/Stack";
import * as React from "react";
import { Layout } from "../../components/Layout";
import { ErrorMessage } from "../../components/ErrorMessage";

export function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginResponse, setLoginResponse] = React.useState(null);

  if (loginResponse && loginResponse.granted) {
    window.location.assign("/home/users");
  }

  return (
    <Layout>
      <Wrapper>
        <Stack gap={"44px"}>
          <LoginTitle />
          <Stack gap={"8px"}>
            <Stack gap={"24px"}>
              <Stack>
                <Input
                  id="email"
                  type={"email"}
                  setValue={setEmail}
                  title="Adresse email"
                />
                {loginResponse && loginResponse.emailErrorMessage ? (
                  <ErrorMessage
                    errorMessage={loginResponse.emailErrorMessage}
                  />
                ) : null}
              </Stack>
              <Stack>
                <Input
                  id="password"
                  type={"password"}
                  title="Mot de passe"
                  icon={eyeIcon}
                  setValue={setPassword}
                  relative
                />

                {loginResponse && loginResponse.passwordErrorMessage ? (
                  <ErrorMessage
                    errorMessage={loginResponse.passwordErrorMessage}
                  />
                ) : null}
              </Stack>
            </Stack>
            <Stack gap={"18px"}>
              <Link href="#">Mot de passe oublié ?</Link>
              <Button
                onClick={() => checkAccess(email, password, setLoginResponse)}
                backgroundColor="#0BD1D1"
                title="Se connecter"
              />
            </Stack>
          </Stack>
        </Stack>
      </Wrapper>
    </Layout>
  );
}

function LoginTitle() {
  return (
    <div style={{ fontSize: "23px", fontWeight: "bold", color: "black" }}>
      Connectez vous
      <br /> à MyUnisoft
    </div>
  );
}

function checkAccess(email, password, setLoginResponse) {
  const isCorrectEmail = email === "demo@myunisoft.fr";
  const isCorrectPassword = password === "MyUnisoft2021**";
  const isGrantedAccess = isCorrectEmail && isCorrectPassword;

  const emailErrorMessage = "L'email ne correspond pas. Veuillez rééssayer.";
  const passwordErrorMessage =
    "Le mot de passe ne correspond pas. Veuillez réessayer.";

  if (isGrantedAccess) {
    setLoginResponse({
      granted: true,
      emailErrorMessage: "",
      passwordErrorMessage: "",
    });
    return;
  }

  if (!isGrantedAccess && isCorrectEmail) {
    setLoginResponse({
      granted: false,
      emailErrorMessage: "",
      passwordErrorMessage: passwordErrorMessage,
    });
    return;
  }

  if (!isGrantedAccess && isCorrectPassword) {
    setLoginResponse({
      granted: false,
      emailErrorMessage: emailErrorMessage,
      passwordErrorMessage: "",
    });
    return;
  }

  setLoginResponse({
    granted: false,
    emailErrorMessage: emailErrorMessage,
    passwordErrorMessage: passwordErrorMessage,
  });

  return;
}
