import { handler } from '@src/hello'
import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

describe('basic unit test framework', () => {
  it('can run a test', () => {
    expect.hasAssertions();
    expect(1).toBe(1);
  });

  it('can call lambda', async () => {
      // Arrange
      const event = {} as APIGatewayProxyEvent;
      const context = {} as Context;
      const expected = "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!"

      // Act
      const proxy_result = await handler(event,context,() => {}) as APIGatewayProxyResult
      const message =  JSON.parse(proxy_result.body).message

      // Assert
      expect(message).toBe(expected);
  });

});