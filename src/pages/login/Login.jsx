import React, {  useState } from "react";
import {
  LoginContainer,
  StyledImg,
  FormContainer,
  Header,
  StyledInput,
  StyledForm,
  StyledButton,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import meal from "../../assets/meal.svg";
import {  useLoginContext } from "../../context/LoginContext";

const Login = () => {
  const navigate = useNavigate();

  const {values:{user}, values:{setUser}} = useLoginContext()
  const [inputUser, setInputUser] = useState({})
  console.log(inputUser)
 
  const realUser = {
    name: "admin",
    password: "123"
  };

  const [alertFlag, setAlertFlag] = useState(false)
  const alert = (message) => {
    return (
    <span style={{position:"absolute", bottom:"0", right:"4rem"}} className="alert alert-success" role="alert">
      Başarılı, Yönlendiriliyor...
    </span>
    )
  
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (realUser.name == inputUser.name && realUser.password == inputUser.password) {
      setUser({name:inputUser.name, password:inputUser.password})
      //? Set to true success alert
      setAlertFlag(true)
      //? Navigate to Homepage if user name and password is true
      setTimeout(() => {
        navigate("/")
      }, 2000);
    } else {
      console.log("Invalid username or password");
    }
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<CW/>"}Recipe</Header>
        <p className="text-light">username: admin <br />  pass: 123</p>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            onChange={(e) =>
              setInputUser({ name: e.target.value, password: inputUser.password })
            }
            placeholder="Enter username"
            type="text"
          />
          <StyledInput
            onChange={(e) =>
              setInputUser({
                name: inputUser.name,
                password: e.target.value,
              })
            }
            placeholder="Enter Password"
            type="password"
          />
          <StyledButton type="submit">Login</StyledButton>
          {alertFlag ? alert() : "" }

        </StyledForm>
      </FormContainer>

    </LoginContainer>
  );
};

export default Login;
