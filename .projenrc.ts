import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  constructsVersion: '10.0.5',
  typescriptVersion: '5.3.x',
  jsiiVersion: '5.3.x',
  defaultReleaseBranch: 'main',
  name: '@gammarers/aws-ecs-fargate-task-termination-detection-event-rule',
  description: 'This an AWS ECS Fargate task termination detection Event Rule.',
  keywords: ['aws', 'cdk', 'aws-cdk', 'event', 'rule', 'ecs', 'fargate'],
  majorVersion: 1,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-ecs-fargate-task-termination-detection-event-rule.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '22.x',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 18 * * 4']), // every thursday 18:00
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarer.aws-ecs-fargate-task-termination-detection-event-rule',
    module: 'gammarer.aws_ecs_fargate_task_termination_detection_event_rule',
  },
});
project.synth();