#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ProjectUploadsStack } from '../lib/project_uploads-stack';

const app = new cdk.App();
new ProjectUploadsStack(app, 'ProjectUploadsStack');
