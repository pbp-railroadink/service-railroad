import {handler} from '@src/hello';
import {APIGatewayProxyEvent, Context, APIGatewayProxyResult} from 'aws-lambda';

describe('basic unit test framework', () => {
  it('can run a test', () => {
    expect.hasAssertions();
    expect(1).toBe(1);
  });

  it('can call lambda', async () => {
    // Arrange
    const event = {} as APIGatewayProxyEvent;
    const context = {} as Context;
    const callback = () => {
      null;
    };
    const expected = 'Go Serverless Webpack (Typescript) v1.0! Your function executed not-goodly!';

    // Act
    const proxyResult = await handler(event, context, callback) as APIGatewayProxyResult;
    const message = JSON.parse(proxyResult.body).message;

    // Assert
    expect(message).toBe(expected);
  });
});
