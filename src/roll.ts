import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      dice: [{type: 'standard'}, {type: 'standard'}, {type: 'standard'}, {type: 'special'}],
      input: event,
    }, null, 2),
  };
};
