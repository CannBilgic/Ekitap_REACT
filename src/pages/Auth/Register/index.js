import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useAuth } from "../../../contexts/AuthContext";
import { fetchRegister } from "../../../api";
import validationSchema from "./validations";
import { useFormik } from "formik";
const Register = () => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      phonNumber: "",
      password: "",
      authority: "",
      address: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        var FormData = require("form-data");
        var data = new FormData();
        data.append("name", values.name);
        data.append("surname", values.surname);
        data.append("username", values.username);
        data.append("email", values.email);
        data.append("phonNumber", values.phonNumber);
        data.append("password", values.password);
        data.append("authority", values.authority);
        data.append("address", values.address);
        
       const {data:data2}= await fetchRegister(data)
          /*.then((deneme) => {
            localStorage.setItem('token',deneme.data.token)
            console.log(deneme);
          })
          .catch((error) => console.log(error));*/

        login(data2);
      } catch (e) {
        bag.setStatus({ general: e.response.data.message });
      }
    },
  });

  return (
    <div>
      <Flex
        align="center"
        width="full"
        justifyContent="center"
        marginBottom={20}
      >
        <Box pt={10}>
          <Box textAlign="center">
            <Heading> Register</Heading>
          </Box>

          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  isInvalid={formik.touched.name && formik.errors.name}
                />
              </FormControl>
              <Box>
                {formik.errors.name && (
                  <Alert status="error">
                    <AlertIcon />
                    {formik.errors.name}
                  </Alert>
                )}
              </Box>

              <FormControl>
                <FormLabel>SurName</FormLabel>
                <Input
                  name="surname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.surname}
                  isInvalid={formik.touched.surname && formik.errors.surname}
                ></Input>
              </FormControl>
              <Box>
                {formik.errors.surname && (
                  <Alert status="error">
                    <AlertIcon />
                    {formik.errors.surname}
                  </Alert>
                )}
              </Box>

              <FormControl>
                <FormLabel>UserName</FormLabel>
                <Input
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  isInvalid={formik.touched.username && formik.errors.username}
                ></Input>
              </FormControl>
              <Box>
                {formik.errors.username && (
                  <Alert status="error">
                    <AlertIcon />
                    {formik.errors.username}
                  </Alert>
                )}
              </Box>

              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                ></Input>
              </FormControl>
              <Box>
                {formik.errors.email && (
                  <Alert status="error">
                    <AlertIcon />
                    {formik.errors.email}
                  </Alert>
                )}
              </Box>

              <FormControl>
                <FormLabel>PhonNumber</FormLabel>
                <Input
                  name="phonNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phonNumber}
                  isInvalid={
                    formik.touched.phonNumber && formik.errors.phonNumber
                  }
                ></Input>
              </FormControl>
              <Box>
                {formik.errors.phonNumber && (
                  <Alert status="error">
                    <AlertIcon />
                    {formik.errors.phonNumber}
                  </Alert>
                )}
              </Box>

              <FormControl>
                <FormLabel>PassWord</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                ></Input>
              </FormControl>
              <Box>
                {formik.errors.password && (
                  <Alert status="error">
                    <AlertIcon />
                    {formik.errors.password}
                  </Alert>
                )}
              </Box>

              <FormControl>
                <FormLabel>Authority</FormLabel>
                <Input
                  name="authority"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.authority}
                  isInvalid={
                    formik.touched.authority && formik.errors.authority
                  }
                ></Input>
              </FormControl>
              <Box>
                {formik.errors.authority && (
                  <Alert status="error">
                    <AlertIcon />
                    {formik.errors.authority}
                  </Alert>
                )}
              </Box>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  isInvalid={formik.touched.address && formik.errors.address}
                ></Input>
              </FormControl>
              <Box>
                {formik.errors.address && (
                  <Alert status="error">
                    <AlertIcon />
                    {formik.errors.address}
                  </Alert>
                )}
              </Box>
              
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

export default Register;
