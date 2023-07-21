import { Template } from 'aws-cdk-lib/assertions';

import { CdkTsBoilerplateStack } from '../lib/cdk-ts-boilerplate-stack';
import { App } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';

test('Lambda Function Created', () => {
  const app = new App();
  // // WHEN
  const stack = new CdkTsBoilerplateStack(app, 'cdk-ts-boilerplate-test-stack');
  // // THEN
  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::Lambda::Function', {
    runtime: Runtime.NODEJS_18_X,
  });
});
