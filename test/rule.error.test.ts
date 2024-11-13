import { InvalidInternalDefinitionParameterError } from '@gammarers/aws-cdk-errors';
import { App, Stack } from 'aws-cdk-lib';
import { EcsFargateTaskTerminationDetectionEventRule } from '../src';

describe('EcsFargateTaskTerminationDetectionNotificationEventRule Testing', () => {
  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const clusterArn = 'arn:aws:ecs:us-east-1:123456789012:cluster/example-app-cluster';

  it('Should Error', () => {
    expect(() => {
      new EcsFargateTaskTerminationDetectionEventRule(stack, 'EcsFargateTaskTerminationDetectionEventRule', {
        clusterArn,
        ruleName: 'codepipeline-state-change-detection-event-rule',
        eventPattern: {
          source: ['aws.ecs'],
          detailType: ['ECS Task State Change'],
        },
      });
    }).toThrow(InvalidInternalDefinitionParameterError);
  });

});