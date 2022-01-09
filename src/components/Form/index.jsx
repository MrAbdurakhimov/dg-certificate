import * as React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Button, FormControl, TextField } from "@mui/material";
import { findUser } from "../../utils/findUser";

const Container = styled.div`
  padding: 20px 0;
`;

const Form = () => {
  const [values, setValues] = React.useState({ email: "" });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  const finder = (email) => {
    const user = findUser(email);
    console.log(user);
  };

  return (
    <Container>
      <Box
        component="form"
        fullWidth
        sx={{ m: 0 }}
        noValidate
        autoComplete="off"
      >
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
