import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

export interface EcsFargateTaskTerminationDetectionNotificationEventRuleProps {
  readonly ruleName: string;
  readonly description: string;
  readonly clusterArn: string;
}

export class EcsFargateTaskTerminationDetectionNotificationEventRule extends events.Rule {

  constructor(scope: Construct, id: string, props: EcsFargateTaskTerminationDetectionNotificationEventRuleProps) {
    super(scope, id, {
      ruleName: props.ruleName,
      description: props.description,
      eventPattern: {
        source: ['aws.ecs'],
        detailType: ['ECS Task State Change'],
        detail: {
          clusterArn: props.clusterArn,
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
      },
    });
  }
}