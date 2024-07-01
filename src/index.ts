import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

export interface EcsFargateTaskTerminationDetectionEventRuleProps extends events.RuleProps {
  readonly clusterArn: string;
}

export class EcsFargateTaskTerminationDetectionEventRule extends events.Rule {

  constructor(scope: Construct, id: string, props: EcsFargateTaskTerminationDetectionEventRuleProps) {
    super(scope, id, {
      ...props,
      eventPattern: (() => {
        if (props.eventPattern) {
          throw new Error('InvalidArgumentException: The specified argument eventPattern is predefined and should not be changed.');
        }
        return {
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
        };
      })(),
    });
  }
}