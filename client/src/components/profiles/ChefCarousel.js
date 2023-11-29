// import React from "react";
// import {
//   Box,
//   Text,
//   Stack,
//   IconButton,
//   StackDivider,
//   VStack,
//   Button,
//   HStack,
//   Heading,
// } from "@chakra-ui/react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// const ChefCarousel = () => {
//   const favoriteChefs = [
//     {
//       name: "Chef X",
//       description: "Award-winning chef with a passion for seafood.",
//       popularMeals: ["Seafood Pasta", "Grilled Salmon", "Shrimp Scampi"],
//     },
//     {
//       name: "Chef Y",
//       description: "Mexican cuisine specialist known for spicy dishes.",
//       popularMeals: ["Taco Tuesday Special", "Enchiladas", "Salsa Verde Tacos"],
//     },
//     {
//       name: "Chef Z",
//       description: "Italian chef who creates authentic pasta dishes.",
//       popularMeals: ["Spaghetti Carbonara", "Lasagna", "Margherita Pizza"],
//     },
//     {
//       name: "Chef W",
//       description:
//         "Master of fusion cuisine blending flavors from around the world.",
//       popularMeals: ["Sushi Burrito", "Thai Basil Pizza", "Mexican Ramen"],
//     },
//   ];

//   return (
//     // ... Rest of your code

//     <Box w="100%" maxW="700px" mt={8}>
//       <Heading as="h2" size="lg" color="#207141" mb={4}>
//         Favorite Chefs
//       </Heading>
//       <FavoriteChefCarousel chefs={favoriteChefs} />
//     </Box>
//   );
// };

// const FavoriteChefCarousel = ({ chefs }) => {
//   const [currentIndex, setCurrentIndex] = React.useState(0);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % chefs.length);
//   };

//   const goToPrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + chefs.length) % chefs.length
//     );
//   };

//   const currentChef = chefs[currentIndex];

//   return (
//     <Box mt={4} bgColor="#207141" borderRadius="lg" p={20}>
//       <HStack spacing={4} justifyContent="space-between" alignItems="center">
//         <IconButton
//           icon={<ChevronLeftIcon />}
//           onClick={goToPrev}
//           aria-label="Previous"
//           size="md"
//           isDisabled={chefs.length <= 1}
//           color="#FAD560"
//         />
//         <Stack
//           bgColor="#272D2FB2"
//           p={4}
//           borderRadius="lg"
//           textAlign="center"
//           color="#FAD560"
//           spacing={2}
//         >
//           <Text fontSize="xl">{currentChef.name}</Text>
//           <Text fontSize="md">{currentChef.description}</Text>
//           <Text fontSize="lg">Popular Meals:</Text>
//           <VStack spacing={1} alignItems="flex-start">
//             {currentChef.popularMeals.map((meal, index) => (
//               <Text key={index} fontSize="md">
//                 {meal}
//               </Text>
//             ))}
//           </VStack>
//           <Button
//             colorScheme="yellow"
//             size="sm"
//             onClick={() => window.alert(`Order from ${currentChef.name}`)}
//           >
//             Order Now
//           </Button>
//         </Stack>
//         <IconButton
//           icon={<ChevronRightIcon />}
//           onClick={goToNext}
//           aria-label="Next"
//           size="md"
//           isDisabled={chefs.length <= 1}
//           color="#FAD560"
//         />
//       </HStack>
//     </Box>
//   );
// };

// export default ChefCarousel;
import React from "react";
import {
  Box,
  Text,
  Stack,
  IconButton,
  HStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useAuth } from "../Auth/AuthContext";

const ChefCarousel = () => {
  const { user } = useAuth();
  const authUser = user.authUser;
  return (
    <Box w="100%" maxW="700px" mt={8} px={4}>
      <FavoriteChefCarousel />
    </Box>
  );
};

const FavoriteChefCarousel = () => {
  const { user } = useAuth();
  const chefs = user.authUser.favoriteChefs;
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % chefs.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + chefs.length) % chefs.length
    );
  };

  const currentChef = chefs[currentIndex];

  return (
    <Box
      mt={4}
      bgColor="yellow.100"
      borderRadius="2xl"
      borderColor={"white"}
      borderShadow="xl"
      borderWidth="2px"
      p={4}
    >
      <Heading as="h2" size="lg" color="#207141" mb={2} textAlign="center">
        Favorite Chefs
      </Heading>
      <HStack spacing={4} justifyContent="space-between" alignItems="center">
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={goToPrev}
          aria-label="Previous"
          size="md"
          isDisabled={chefs.length <= 1}
          color="#FAD560"
          bg="#207141"
        />
        <Stack
          bgColor="#FAF6EB"
          p={4}
          borderRadius="lg"
          borderWidth="4px"
          boxShadow="2xl"
          borderColor="#515555"
          textAlign="center"
          color="#FAD560"
          spacing={4}
        >
          <Text fontSize={["xl", "2xl"]} fontWeight="bold" color="#FE724C">
            Chef Name :{currentChef.username}
          </Text>
          <Text fontSize="md" color="#515555">
            Total Meals:{currentChef.meals.length}
          </Text>
          <Text
            fontSize="md"
            color="#515555"
          >{`Contact: ${currentChef.email}`}</Text>
          <Button mt={4} bg=" #207141" color="white" size="md" w="100%">
            View Profile
          </Button>
        </Stack>
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={goToNext}
          aria-label="Next"
          size="md"
          isDisabled={chefs.length <= 1}
          color="#FAD560"
          bg="#207141"
        />
      </HStack>
    </Box>
  );
};

export default ChefCarousel;
