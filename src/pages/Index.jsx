import { Container, Text, VStack, Box, Image, SimpleGrid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const fruits = [
  { name: "Apple", image: "/images/apple.jpg" },
  { name: "Banana", image: "/images/banana.jpg" },
  { name: "Cherry", image: "/images/cherry.jpg" },
  { name: "Grapes", image: "/images/grapes.jpg" },
  { name: "Orange", image: "/images/orange.jpg" },
  { name: "Strawberry", image: "/images/strawberry.jpg" },
];

const Index = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setGallery(fruits);
  }, []);

  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to the Fruit Gallery</Heading>
        <Text fontSize="xl">Explore a variety of delicious fruits below:</Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {gallery.map((fruit, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={fruit.image} alt={fruit.name} />
              <Box p={6}>
                <Text fontSize="xl" fontWeight="bold">{fruit.name}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;