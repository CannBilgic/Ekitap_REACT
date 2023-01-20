import Card from "../../components/Card";
import React from "react";
import { useQuery } from "react-query";
import { Box, Grid } from "@chakra-ui/react";
import { fetchProductList } from "../../api";
import Slider from "../../components/Slider";

const Products = () => {
  const { isLoading, error, data } = useQuery("products", fetchProductList);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Slider></Slider>
      <Box
        bg="red"
        borderRadius="lg"
        width={400}
        marginLeft={720}
        marginBottom={10}
        marginTop={10}
        p={4}
        color="white"
        textAlign="center"
        textColor="white"
        fontSize={30}
        
      >
        KİTAPLAR
      </Box>

      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {data.map((item, key) => (
          <Card key={key} item={item} />
        ))}
      </Grid>
      
    </div>
  );
};

export default Products;
