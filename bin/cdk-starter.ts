#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import {MyCdkStack} from '../lib/cdk-starter-stack';

const app = new cdk.App();

// 👇 dev stack
new MyCdkStack(app, 'my-cdk-stack-dev', {
  stackName: 'my-cdk-stack-dev',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

// 👇 prod stack
new MyCdkStack(app, 'my-cdk-stack-prod', {
  stackName: 'my-cdk-stack-prod',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
