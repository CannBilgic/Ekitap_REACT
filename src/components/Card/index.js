import React from "react";
import { Box, Image, Button, } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";



const Card = ({item}) => {
  const {addToBasket,items} = useBasket();
  const findBasketItem = items.find(basket_item=> basket_item.id === item.id);
  return (
    <Box
      width="400px"
      borderRadius="lg"
      position="relative"
      shadow="dark-lg"
      mb="50px"
      textAlign="center"
      p="3"
      backgroundColor="#f8f8f8"
    >
      <Link to={`/product/${item.id}`}>
        <Image
        p="20px 0"
        transition="all .25s ease"
         _hover={{ transform: 'scale(1.1)', filter: "brightness(100%)", }}
        display="inherit"
          src={item.img}
          alt="product"
        ></Image>

        <Box p="6px">
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                {item.book_name}
            </Box>
            <Box color="red" d="plex" alignItems="baseline">
                
            {item.publisher}
            </Box >
            <Box color="red" d="plex" alignItems="baseline">
                
                {item.author}
            </Box>
        </Box>
      </Link>
      <Button colorScheme={ findBasketItem ? 'red' : 'green'} variant="solid" onClick={()=>addToBasket(item,findBasketItem)}>
        {
          findBasketItem ? 'Remove From Basket':`${item.price} TL`
        }
      </Button>
    </Box>
  );
};

export default Card;

//
