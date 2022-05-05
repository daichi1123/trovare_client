import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RequestContent } from "../atoms/content/RequestContent";
import { useForm } from "react-hook-form";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export const RequestRegistrationForm = () => {
  const handleSub = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <MailOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              オーナーの登録
            </Typography>
            <RequestContent />
            <Box
              component="form"
              onSubmit={handleSubmit(handleSub)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                id="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                })}
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                margin="normal"
              />
              {errors.email && errors.email.type === "required" && (
                <span className="error-message">Emailは必須項目です。</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="error-message">
                  Emailの形式に間違いがあります。
                </span>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                登録申請をする
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
};
