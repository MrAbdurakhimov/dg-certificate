import * as React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Button, FormControl, TextField } from "@mui/material";
const Container = styled.div`
  padding: 20px 0;
`;

const Form = () => {
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
          />
        </FormControl>
        <Button
          fullWidth
          sx={{ mt: 1, mb: 1 }}
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
