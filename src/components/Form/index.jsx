import * as React from "react";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Alert, Button, FormControl, TextField } from "@mui/material";
import { findUser } from "../../utils/findUser";

const Container = styled.div`
  padding: 20px 0;
`;

const Form = () => {
  const [values, setValues] = React.useState({ email: "" });
  const [redirect, setRedirect] = React.useState({ redirect: false, path: "" });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };
  const [showErr, setShowErr] = React.useState(false);

  const finder = (email) => {
    const user = findUser(email);
    if (user) {
      setRedirect({ redirect: true, path: email });
    } else {
      setShowErr(true);
    }
  };

  return (
    <Container>
      {redirect.redirect && <Navigate to={"/certificate/" + redirect.path} />}
      <Box
        component="form"
        fullWidth
        sx={{ m: 0 }}
        noValidate
        autoComplete="off"
      >
        {showErr && (
          <Alert severity="error">
            Siz qidirgan foydalanuvchi ma'lumotlar bazasidan topilmadi
          </Alert>
        )}
        <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
          <TextField
            id="filled-basic"
            label="Email manizilingiz"
            variant="filled"
            value={values.email}
            onChange={handleChange("email")}
          />
        </FormControl>
        <Button
          fullWidth
          sx={{ mt: 1, mb: 1 }}
          onClick={() => finder(values.email)}
          variant="contained"
          size="large"
        >
          Sertifikat olish
        </Button>
      </Box>
    </Container>
  );
};

export default Form;
