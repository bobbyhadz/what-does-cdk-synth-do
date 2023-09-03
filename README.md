# What does CDK Synth do in AWS CDK

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/what-aws-cdk-bootstrap-do)

> If you use CDK v1, switch to the cdk-v1 branch

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Synth `prod` and `dev` stacks

```bash
npx aws-cdk synth \
  my-cdk-stack-dev \
  my-cdk-stack-prod
```
