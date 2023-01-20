import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProduct } from "../../api";
import {
  Box,
  Image,
  Button,
  HStack,
  TableContainer,
  Tbody,
  Thead,
  Tr,
  Th,
  Table,
  TableCaption,
  Td,
  Text
} from "@chakra-ui/react";
import { useBasket } from "../../contexts/BasketContext";

const ProductDetail = () => {
  const { product_id } = useParams();
  const { addToBasket ,items} = useBasket();
  const { isLoading, error, data } = useQuery(["products", product_id], () =>
    fetchProduct(product_id)
  );
  console.log("data", data);

  

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;


  const findBasketItem = items.find(item=> item.id === data.id);

  return (
    <div>
      <HStack spaceing="800px" marginBottom={330}>
        <Box
          flex="1"
          w="100px"
          h="600px"
          borderRadius="lg"
          position="relative"
          shadow="dark-lg"
          mb="50px"
          textAlign="center"
          p="3"
          backgroundColor="#f8f8f8"
          left="50"
        >
          <Image
            p="40px 0"
            transition="all .25s ease"
            _hover={{ transform: "scale(1.1)", filter: "brightness(100%)" }}
            height="100%"
            display="initial"
            src={data.img}
            alt="product"
          ></Image>
        </Box>
        <Box w="1400px" h="600px" paddingLeft="100">
          <Box w="7000px" >
          
            <Box >
              <Text textDecoration="underline" as="h2"   fontSize="6xl">{data.book_name}</Text>
              <Text textColor="red"  as="h3" fontSize="3xl">{data.author}</Text>
              <Text as="h3" fontSize="3xl">{data.publisher}</Text>
              <Text as="h3" fontSize="2xl">{data.type}</Text>
            </Box>
            
          
          
          </Box>
          
          <Box>
            <Box
            p="8px"
            m={2}
            borderRadius="lg"
            textColor="white"
            width="50px" 
            backgroundColor="red">
              Özet
            </Box>
            <Text as="h3" fontSize="2xl">
            {data.summary}
            </Text>
          </Box>
          <TableContainer w="700px" margintop="2">
            <Table variant="simple">
              <TableCaption>Kitap Özellikleri</TableCaption>
              <Thead backgroundColor="#ff1420" >
                <Tr>
                  <Th textColor="black">ISBN</Th>
                  <Th textColor="black">Sayfa Sayısı</Th>
                  <Th textColor="black" >Stok Durumu</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{data.ısbn}</Td>
                  <Td>{data.numberofPages}</Td>
                  <Td>{data.quantity}</Td>
                </Tr>
                 
              </Tbody>
              
            </Table>
          </TableContainer>
          <Button
          m={4}
          colorScheme={ findBasketItem ? 'red' : 'green'}
          onClick={()=> addToBasket(data, findBasketItem)}>
            {
              findBasketItem ? 'Remove From Basket':'Add To Basket'
            }
          </Button>
        </Box>
      </HStack>
    </div>
  );
};

export default ProductDetail;
