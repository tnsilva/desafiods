import {
  TextField,
  Button,
  Grid,
  Container
} from "@mui/material";

import React, { useReducer } from 'react';

import { reducer, initialLoginProps } from "../components/Login";


export function LoginPage() {
  const [state, dispatch] = useReducer(reducer, initialLoginProps);

  const handleLogin = () => {
    if (state.user === 'admin' && state.password === '1234') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUser',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    };

  return (
    <Container maxWidth="sm">
      <h1>Tela de Login</h1>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <TextField
            error={state.isError}
            fullWidth
            id="user"
            label="Username"
            variant="outlined"
            onChange={handleUsernameChange}
            onKeyPress={handleKeyPress}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={state.isError}
            fullWidth
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            helperText={state.helperText}
            onChange={handlePasswordChange}
            onKeyPress={handleKeyPress}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            onClick={handleLogin}
            disabled={state.isButtonDisabled == false}
          >
            Logar
          </Button>
        </Grid>
      </Grid>

    </Container>

  );
}