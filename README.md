# ECS Fargate task termination detection notification event rule

This an AWS ECS Fargate task termination detection Event Rule.

## Install

### TypeScript

```shell
npm install @yicr/ecs-fargate-task-termination-detection-event-rule
```
or
```shell
yarn add @yicr/ecs-fargate-task-termination-detection-event-rule
```

## Example

### TypeScript

```shell
npm install @yicr/ecs-fargate-task-termination-detection-event-rule
```

```typescript
import { EcsFargateTaskTerminationDetectionEventRule } from '@yicr/ecs-fargate-task-termination-detection-event-rule';

const clusterArn = 'arn:aws:ecs:us-east-1:123456789012:cluster/example-app-cluster';

const rule = new EcsFargateTaskTerminationDetectionEventRule(stack, 'EcsFargateTaskTerminationDetectionEventRule', {
  ruleName: 'example-event-rule',
  description: 'example event rule.',
  clusterArn,
});

```