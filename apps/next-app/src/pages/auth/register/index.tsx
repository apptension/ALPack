import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  MediaQuery,
  PasswordInput,
  Text,
  TextInput,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import ChevronRight from 'assets/chevron-right-solid.svg';
import { DatePickerInput, DateValue, DatesProvider } from '@mantine/dates';
import { Controller, useForm } from 'react-hook-form';
import { VALIDATION_MESSAGE } from 'utils/validationMessages';
import Link from 'next/link';
import { ROUTES } from 'constants/ROUTES';

const defaultValues = {
  fullname: '',
  birth: undefined,
  email: '',
  password: '',
  privacy: false,
};

interface RegisterFormValues {
  fullName: string;
  birth: DateValue;
  email: string;
  password: string;
  privacy: boolean;
}

const useStyles = createStyles((theme) => ({
  buttonLabel: {
    marginLeft: 'auto',
  },
  buttonIcon: {
    marginLeft: 'auto',
    fill: theme.white,
  },
}));

const Register = () => {
  const { classes } = useStyles();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<RegisterFormValues>({ defaultValues });
  return (
    <>
      <Container>
        <Center
          mx="auto"
          mih={'100vh'}
          component="form"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <Flex
            pos="relative"
            w="100%"
            h="100%"
            justify="center"
            gap={rem(100)}
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
                  <Title size="h1">Create an account</Title>
                </MediaQuery>

                <Text size="xl" color={'gray.6'}>
                  Sign up now and unlock exclusive access!
                </Text>
              </Flex>

              <Flex direction="column" gap="lg">
                <TextInput
                  w="100%"
                  placeholder="First Last"
                  label="Your name"
                  size="lg"
                  {...register('fullName', {
                    required: VALIDATION_MESSAGE.REQUIRED,
                  })}
                  error={errors.fullName?.message}
                />

                <DatesProvider settings={{ weekendDays: [0] }}>
                  <Controller
                    control={control}
                    name="birth"
                    rules={{ required: VALIDATION_MESSAGE.REQUIRED }}
                    render={({ field }) => (
                      <DatePickerInput
                        {...field}
                        error={errors.birth?.message}
                        size="lg"
                        label="Your date of birth"
                        placeholder="Your date of birth"
                        valueFormat="DD/MM/YYYY"
                      />
                    )}
                  />
                </DatesProvider>

                <TextInput
                  {...register('email', {
                    required: VALIDATION_MESSAGE.REQUIRED,
                  })}
                  error={errors.email?.message}
                  type="email"
                  w="100%"
                  placeholder="you@email.com"
                  label="Email"
                  size="lg"
                />

                <PasswordInput
                  w="100%"
                  placeholder="******"
                  label="Password"
                  size="lg"
                />

                <Checkbox
                  {...register('privacy', {
                    required: VALIDATION_MESSAGE.REQUIRED,
                  })}
                  label="I agree to sell my privacy"
                  radius="sm"
                  size="md"
                  error={Boolean(errors.privacy)}
                  styles={(theme) => ({
                    label: errors.privacy ? { color: theme.colors.red } : {},
                  })}
                />

                <Button
                  type="submit"
                  size="lg"
                  rightIcon={<ChevronRight width={16} height={16} />}
                  classNames={{
                    rightIcon: classes.buttonIcon,
                    label: classes.buttonLabel,
                  }}
                >
                  Create Account
                </Button>
                <Button
                  component={Link}
                  href={ROUTES.LOGIN}
                  size="lg"
                  variant="light"
                  color="dark"
                >
                  Sign In
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Center>
      </Container>
    </>
  );
};

export default Register;
