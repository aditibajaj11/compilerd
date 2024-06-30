import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import { Box, HStack, Flex } from '@chakra-ui/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constants';
import { motion } from "framer-motion";
import Output from './Output';

const MotionBox = motion(Box);

const CodeEditor = () => {
  const [value, setValue] = useState('');
  const editorRef = useRef(null);
  const [language, setLanguage] = useState('javascript');

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage.toLowerCase());
    setValue(CODE_SNIPPETS[selectedLanguage.toLowerCase()]);
  }

  return (
    <Flex>
      <MotionBox w="50%">
        <HStack spacing={4}>
          <Box w="100%">
            <LanguageSelector language={language} onSelect={handleLanguageSelect} />
            <Editor
              height="90vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </Box>
        </HStack>
      </MotionBox>
      <Output w="50%" />
    </Flex>
  );
}

export default CodeEditor;



