import { Flex, VStack, Image, Text, Link, Button } from "@chakra-ui/react"
import patternD from "./sources/images/pattern-background-desktop.svg"
import patternM from "./sources/images/pattern-background-mobile.svg"
import ilustration from "./sources/images/illustration-hero.svg"
import iconMusic from "./sources/images/icon-music.svg"
function App() {
  return (
    <Flex
      w="100vw"
      minH="100vh"
      justifyContent="center"
      bg=" hsl(225, 100%, 94%)"
      backgroundImage={{ base: patternM, md: patternD }}
      backgroundSize="100% 50%"
      backgroundRepeat="no-repeat"
      alignItems="flex-start"
    >
      <VStack
        w="375px"
        mt={10}
        rounded={8}
        overflow="hidden"
        shadow="md"
        bg="white"
      >
        <Image src={ilustration} />
        <VStack p={8} spacing={4}>
          <Text as="h1" fontWeight="bold" fontSize="xl">
            Order Summary
          </Text>
          <Text as="p" w="80%">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </Text>
          <Flex
            justifyContent="space-between"
            w="100%"
            bg="hsl(225, 100%, 98%)"
            p={4}
            rounded={8}
            alignItems="center"
          >
            <Image src={iconMusic} />
            <VStack spacing={0}>
              <Text fontWeight="bold">Annual Plan </Text>
              <Text>$59.99/year</Text>
            </VStack>
            <Link href="#" color="blue">
              Change
            </Link>
          </Flex>
          <Button colorScheme="blue" w="100%">
            Proceed to Payment
          </Button>
          <Link href="#" fontWeight="bold" color="gray.500">
            Cancel Order
          </Link>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default App
