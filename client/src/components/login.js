import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Login() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `signup`;
    navigate(path);
  };

  const signinChange = () => {
    let path = `Main`;
    navigate(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <image></image>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ bgcolor: "#E94057", mt: 1, width: "80%" }}
          >
            <Box sx={{ marginTop: "40px" }}>
              <TextField
                sx={{ width: "80%", marginLeft: "30px" }}
                margin="normal"
                required
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                sx={{ width: "80%", marginLeft: "30px" }}
                margin="normal"
                required
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                onClick={signinChange}
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "80%",
                  height: "50px",
                  marginLeft: "30px",
                }}
              >
                Sign In
              </Button>

              <Typography
                component="p"
                variant="p"
                sx={{ marginLeft: "150px" }}
              >
                or
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "80%",
                  height: "50px",
                  bgcolor: "white",
                  color: "black",
                  marginLeft: "30px",
                }}
              >
                Continue with Google
              </Button>
              <Grid>
                <Grid item sx={{ ml: 0, mb: 6, marginLeft: "35px" }}>
                  <Link href="#" variant="body2">
                    {"Don't have an account?"}
                  </Link>
                  <Link
                    onClick={routeChange}
                    sx={{ ml: 4, color: "white" }}
                    href="#"
                    variant="body2"
                  >
                    {"Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
