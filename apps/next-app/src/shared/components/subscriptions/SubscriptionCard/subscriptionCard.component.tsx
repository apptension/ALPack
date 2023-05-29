import { SUBSCRIPTION_PLAN } from 'constants/SUBSCRIPTION_PLAN';
import CheckmarkSVG from 'assets/check-mark.svg';
import CrossmarkSVG from 'assets/cross-mark.svg';
import { BASIC_FEATURES, FEATURES } from './subscriptionCard.constants';
import {
  Box,
  Button,
  Flex,
  List,
  Paper,
  Text,
  Title,
  createStyles,
} from '@mantine/core';

interface ProCardProps {
  type: SUBSCRIPTION_PLAN;
  name: string;
  price: number;
  currency: string;
}

const useStyles = createStyles((theme) => ({
  listIcon: {
    fill: theme.colors.violet,
  },
}));

export const SubscriptionCard = ({
  type,
  name,
  price,
  currency,
}: ProCardProps) => {
  const { classes } = useStyles();

  return (
    <Paper shadow="xl" p="lg" pos="relative">
      {type === SUBSCRIPTION_PLAN.PRO && (
        <Box
          bg="violet.6"
          w="100%"
          pos="absolute"
          top={-36}
          sx={(theme) => ({
            borderTopLeftRadius: theme.radius.md,
            borderTopRightRadius: theme.radius.md,
          })}
          left={0}
          right={0}
          py="xs"
        >
          <Text transform="uppercase" size="lg" ta="center" color="gray.0">
            Recommended
          </Text>
        </Box>
      )}
      <Flex direction="column" pos="relative" h="100%">
        <Title size="h2" ta="center">
          {name}
        </Title>
        <Text align="center" size="lg" color="gray.6" mb="md" mt="xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit!
        </Text>
        <Flex align="center" direction="column" justify="center">
          <Text color="violet" size="3xl">
            {currency} {price}
          </Text>
          <Text color="gray.6">/ per month</Text>
        </Flex>

        <List
          mt="xl"
          spacing="sm"
          size="md"
          center
          icon={<CheckmarkSVG width={24} className={classes.listIcon} />}
        >
          {type === SUBSCRIPTION_PLAN.BASIC
            ? FEATURES.map((feature) => (
                <List.Item
                  {...(!BASIC_FEATURES.includes(feature) && {
                    icon: (
                      <CrossmarkSVG width={24} className={classes.listIcon} />
                    ),
                  })}
                >
                  {feature}
                </List.Item>
              ))
            : type === SUBSCRIPTION_PLAN.PRO &&
              FEATURES.map((feature) => <List.Item>{feature}</List.Item>)}
        </List>

        <Button
          mt="xl"
          size="md"
          w={250}
          sx={{ alignSelf: 'center' }}
          onClick={() => {}}
        >
          Choose {name}
        </Button>
      </Flex>
    </Paper>
  );
};
