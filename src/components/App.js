import React from 'react';
import './SignInForm.css'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
          Sign in
        </Typography>
    <div>
      <form>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
       <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Вход
          </Button>
        <Grid container direcion="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Link href="#">
              Забыли пароль?
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link href="#">
              Нет аккаунта?
            </Link>
          </Grid>
        </Grid>
        </form>
    </div>
    </Container>
  );
}

export default App;
