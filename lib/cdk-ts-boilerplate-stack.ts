import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import Path from 'path';

export class CdkTsBoilerplateStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new NodejsFunction(this, 'lambda-function', {
      entry: Path.join(__dirname, '../src/handler.ts'),
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(15),
    });
  }
}
