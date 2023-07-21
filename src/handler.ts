import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';

const logger = new Logger({
  serviceName: 'Service',
});

const handler: APIGatewayProxyHandlerV2 = async event => {
  logger.debug('Event', { event });

  return {
    body: JSON.stringify({ hello: 'world' }),
    headers: { 'Content-Type': 'application/json' },
    statusCode: 200,
  };
};

export default handler;
