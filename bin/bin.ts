#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { CdkTsBoilerplateStack } from '@app/cdk/lib/cdk-ts-boilerplate-stack';

const app = new App();

new CdkTsBoilerplateStack(app, 'cdk-ts-boilerplate-stacks');
