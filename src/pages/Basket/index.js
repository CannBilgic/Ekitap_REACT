import { Alert, Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

import { useBasket } from "../../contexts/BasketContext";

function Basket() {
  const { items, removeFromBasket } = useBasket();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);
  return (
    <Box p="20">
      {items.length < 1 && (
        <Alert status="warning">Sepetin Içerisinde Urün Yok!</Alert>
      )}

      {items.length > 0 && (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id} style={{ marginBottom: 20 }}>
                <Box
                flex="1"
                w="500px"
                h="650px"
                borderRadius="lg"
                position="relative"
                shadow="dark-lg"
                mb="50px"
                textAlign="center"
                p="3"
                backgroundColor="#f8f8f8"
                left="50">
                <Link to={`/product/${item.id}`}>
                  <Text marginBottom="30" textDecoration="underline" as="h2" fontSize="2xl">
                    {item.book_name}
                  </Text>
                  
                  <Image
                    p="2"
                    transition="all .25s ease"
                    _hover={{ transform: "scale(1.1)", filter: "brightness(100%)" }}
                    height="60%"
                    src={item.img}
                    width="100"
                    display="initial"
                  ></Image>
                  <Box>
                  <Text textColor="red" as="h3" fontSize="3xl">
                    {item.author}
                  </Text>
                    <Text as="h3" fontSize="3xl">
                      {item.publisher}
                    </Text>
                    <Text as="h3" fontSize="2xl">
                      {item.type}
                    </Text>
                  </Box>
                </Link>
                <Button
                  mt="2"
                  size="md"
                  colorScheme="red"
                  onClick={() => removeFromBasket(item.id)}
                >
                  Remove From Basket
                </Button>
                </Box>
                
              </li>
            ))}
          </ul>

          <Box mt="10">
            <Text fontSize="22">Total : {total} TL</Text>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Basket;
