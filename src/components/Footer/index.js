import React from 'react'
import {
    Box,
    Container,
    Text,
  } from '@chakra-ui/react';
const Footer = () => {
  return (
    <Box
    
    bg="red"
    color="white"
    >
        <Container
        py={4}
        spacing={4}
        justify="center"
        textAlign="center">
        
        <Text>© 2022 Made By Can BİLGİÇ</Text>
      </Container>

    </Box>
  )
}

export default Footer