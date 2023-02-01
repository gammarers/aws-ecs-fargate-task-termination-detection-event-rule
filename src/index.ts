import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

export interface EcsFargateTaskTerminationDetectionEventRuleProps {
  readonly ruleName?: string;
  readonly description?: string;
  readonly clusterArn: string;
}

export class EcsFargateTaskTerminationDetectionEventRule extends events.Rule {

  constructor(scope: Construct, id: string, props: EcsFargateTaskTerminationDetectionEventRuleProps) {
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