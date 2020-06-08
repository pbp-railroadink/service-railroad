import {handler} from '@src/roll';
import {APIGatewayProxyEvent, Context, APIGatewayProxyResult} from 'aws-lambda';

describe('get roll', () => {
  const event = {} as APIGatewayProxyEvent;
  const context = {} as Context;
  const callback = () => {
    null;
  };

  it('can be called as a lambda', async () => {
    // Arrange

    // Act
    const proxyResult = await handler(event, context, callback) as APIGatewayProxyResult;

    // Assert
    expect(proxyResult.statusCode).toBe(200);
  });

  it('will have 3 standard dice and 1 special die', async () => {
    // Arrange

    // Act
    const proxyResult = await handler(event, context, callback) as APIGatewayProxyResult;
    const result = JSON.parse(proxyResult.body);

    // Assert
    expect(result.dice.length).toBe(4);

    const standardDice = result.dice.filter( (die) => die.type == 'standard' );
    expect(standardDice.length).toBe(3);

    const specialDice = result.dice.filter( (die) => die.type == 'special' );
    expect(specialDice.length).toBe(1);
  });
});
