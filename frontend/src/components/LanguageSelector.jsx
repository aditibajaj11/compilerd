import React from "react";
import {
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const MotionMenuList = motion(MenuList);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Menu>
        <MenuButton as={Button} mb={3}>
          {language}
        </MenuButton>
        <MotionMenuList bg="gray.800" borderColor="gray.800"
         initial={{ opacity: 0, y: -10 }}  
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.3 }}
          >
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              bg="gray.800"
              borderColor="gray.800"
              _hover={{ bg: "gray.700" }}
              onClick={() => onSelect(lang)}
            >
              <HStack>
              <Text color={lang === language ? "blue.400" : "white"}>{lang}</Text>
                <Text as="span" color="gray.400" fontSize="sm">
                  &nbsp;({version})
                </Text>
              </HStack>
            </MenuItem>
          ))}
        </MotionMenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;