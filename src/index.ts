import { InvalidInternalDefinitionParameterError } from '@gammarers/aws-cdk-errors';
import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

/**
 * @TODO: Not yet supported Omit
 * https://github.com/aws/jsii/issues/4468
 * type omitKeys = 'eventPattern';
 * export interface CodePipelineStateChangeDetectionEventRuleProps extends Omit<events.RuleProps, 'eventPattern'> {}
 */

export interface EcsFargateTaskTerminationDetectionEventRuleProps extends events.RuleProps {
  readonly clusterArn: string;
}

export class EcsFargateTaskTerminationDetectionEventRule extends events.Rule {

  constructor(scope: Construct, id: string, props: EcsFargateTaskTerminationDetectionEventRuleProps) {
    super(scope, id, {
      ...props,
      eventPattern: ((): events.EventPattern => {
        if (props.eventPattern) {
          throw new InvalidInternalDefinitionParameterError('eventPattern');
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