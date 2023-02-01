import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as events from 'aws-cdk-lib/aws-events';
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

  const rule = new EcsFargateTaskTerminationDetectionEventRule(stack, 'EcsFargateTaskTerminationDetectionEventRule', {
    ruleName: 'example-event-rule',
    description: 'example event rule.',
    clusterArn,
  });

  it('Is Rule', () => {
    expect(rule).toBeInstanceOf(events.Rule);
  });

  const template = Template.fromStack(stack);

  it('Should match event rule.', () => {
    template.hasResourceProperties('AWS::Events::Rule', {
      EventPattern: Match.objectEquals({
        'source': ['aws.ecs'],
        'detail-type': ['ECS Task State Change'],
        'detail': {
          clusterArn,
          containers: {
            exitCode: [
              { 'anything-but': 0 },
            ],
          },
          lastStatus: ['STOPPED'],
          stoppedReason: [
            {
              'anything-but': { prefix: 'Scaling activity initiated by' },
            },
          ],
        },
      }),
    });
  });

  it('Should match snapshot.', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });
});