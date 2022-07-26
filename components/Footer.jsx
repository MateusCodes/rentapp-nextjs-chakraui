import { Box, Flex } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    2022 MateusCodes®
    <Flex width="full" alignItems="center" justifyContent="center" gap={5}>
      <a target="_blank" href="https://github.com/MateusCodes" rel="noreferrer">
        <FaGithub size={35} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/mateus-sobreira-734433184/"
        rel="noreferrer"
      >
        <FaLinkedin size={35} />
      </a>
    </Flex>
  </Box>
);

export default Footer;
