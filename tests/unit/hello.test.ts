import {handler} from '../../src/hello'
import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

describe('basic unit test framework', () => {
  it('can run a test', () => {
    expect.hasAssertions();
    expect(1).toBe(1);
  });

  it('can call lambda', async done => {
      const event = {} as APIGatewayProxyEvent;
      const context = {} as Context;
      let thing = await handler(event,context,() => {}) as APIGatewayProxyResult
      expect(JSON.parse(thing.body).message).toBe("Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!");
      done();
  });

});