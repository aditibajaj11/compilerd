import React, { useState } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";

const Output = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const runCode = () => {
 
    setIsLoading(true);
 
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Code executed successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 2000); 
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={6}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <Box
        height="90vh"
        p={3}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
      >
      
        Output will appear here.
      </Box>
    </Box>
  );
};

export default Output;

