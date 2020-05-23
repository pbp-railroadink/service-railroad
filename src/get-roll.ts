import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: APIGatewayProxyHandler = async (event, _context) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Lets go roll some dice!',
    input: event,
  }, null, 2),
});
