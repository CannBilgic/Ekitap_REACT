import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
 
} from "@chakra-ui/react";
import { useAuth } from "../../../contexts/AuthContext";
import { fetchLogin } from "../../../api";

import { useFormik } from "formik";
const Login = () => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    
    },
    onSubmit: async (values, bag) => {
      console.log(values);

      try {
        var FormData = require("form-data");
        var data = new FormData();
        data.append("username", values.username);
        data.append("password", values.password);
        const data2= await fetchLogin(data);
        console.log(data2)
        login(data2);
      } catch (e) {
        bag.setStatus({ general: e.response.data.message });
      }
    },
  });

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center" marginBottom={508}>
        <Box pt={10}>
          <Box textAlign="center">
            <Heading> Login</Heading>
          </Box>

          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormLabel>User Name</FormLabel>
                <Input
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  isInvalid={formik.touched.username && formik.errors.username}
                ></Input>
              </FormControl>
              

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                ></Input>
              </FormControl>
              
              <Button
                ml={8}
                mt={4}
                type="submit"
                width="150px"
                colorScheme="green"
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
      
    </div>
  );
};

export default Login;
