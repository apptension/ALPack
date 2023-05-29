import { Container, Flex, MediaQuery, Title, rem } from '@mantine/core';
import { SUBSCRIPTION_PLAN } from 'constants/SUBSCRIPTION_PLAN';
import { SubscriptionCard } from 'shared/components/subscriptions/SubscriptionCard';

const Subscription = () => {
  return (
    <Container p="lg" size="lg">
      <Title size="h1" ta="center" mb={100}>
        App Boilerplate Subscription
      </Title>

      <MediaQuery
        smallerThan="sm"
        styles={{ flexDirection: 'column', maxWidth: '600px' }}
      >
        <Flex justify="center" gap={rem(100)} maw="1000px" w="100%" mx="auto">
          <SubscriptionCard
            type={SUBSCRIPTION_PLAN.BASIC}
            name="Basic"
            price={39.99}
            currency="PLN"
          />
          <SubscriptionCard
            type={SUBSCRIPTION_PLAN.PRO}
            name="Pro"
            price={59.99}
            currency="PLN"
          />
        </Flex>
      </MediaQuery>
    </Container>
  );
};

export default Subscription;
