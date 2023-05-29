import {
  Button,
  Center,
  Container,
  Flex,
  MediaQuery,
  Text,
  Title,
  rem,
} from '@mantine/core';
import Link from 'next/link';
import { ROUTES } from 'constants/ROUTES';

const Login = () => {
  const handleLogin = async () => {
    // TODO: ADD LOGIN LOGIC
  };

  return (
    <Container>
      <Center mx="auto" mih={'100vh'}>
        <Flex
          pos="relative"
          w="100%"
          h="100%"
          justify="center"
          direction="column"
          gap={rem(25)}
          align="center"
        >
          <Flex maw={620} direction="column" gap="xl" w="60%">
            <Flex direction="column" gap="xs" align="center">
              <MediaQuery
                smallerThan="xs"
                styles={(theme) => ({
                  fontSize: theme.headings.sizes.h2.fontSize,
                })}
              >
                <Title size="h1">Hello! 👋</Title>
              </MediaQuery>

              <Text size="xl" color={'gray.6'}>
                To access the app please log in with Google
              </Text>
            </Flex>

            <Button size="lg" onClick={handleLogin}>
              Sign In With Google
            </Button>
          </Flex>
          <Text size="lg" color={'gray.6'}>
            Don't have an account?{' '}
            <Text
              component={Link}
              href={ROUTES.REGISTER}
              color={'violet.5'}
              weight="bold"
            >
              Sign up here
            </Text>
          </Text>
        </Flex>
      </Center>
    </Container>
  );
};

export default Login;
