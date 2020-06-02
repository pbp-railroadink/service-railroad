import {defineFeature, loadFeature} from 'jest-cucumber';
import {APIGatewayProxyEvent, APIGatewayProxyResult, Context} from 'aws-lambda';
import {handler} from '@src/hello';

const feature = loadFeature('./tests/feature/hello.feature');

defineFeature(feature, (test) => {
  test('Calling Hello service', ({
    given,
    when,
    then,
  }) => {
    let result;

    given('I want to be greeted', () => {
      // no-op
    });

    when('I call the service', async () => {
      const event = {} as APIGatewayProxyEvent;
      const context = {} as Context;
      const callback = () => {
        null;
      };
      const proxyResult = await handler(event, context, callback) as APIGatewayProxyResult;
      result = JSON.parse(proxyResult.body).message;
    });

    then(/^the message should be "(.*)"$/, (message) => {
      expect(result).toBe(message);
    });
  });
});
