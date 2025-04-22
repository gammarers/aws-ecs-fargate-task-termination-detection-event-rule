import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.189.1',
  typescriptVersion: '5.7.x',
  jsiiVersion: '5.7.x',
  defaultReleaseBranch: 'main',
  name: '@gammarers/aws-ecs-fargate-task-termination-detection-event-rule',
  description: 'This an AWS ECS Fargate task termination detection Event Rule.',
  keywords: ['aws', 'cdk', 'aws-cdk', 'event', 'rule', 'ecs', 'fargate'],
  majorVersion: 2,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-ecs-fargate-task-termination-detection-event-rule.git',
  deps: [
    '@gammarers/aws-cdk-errors@^1.2.0',
  ],
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '22.x',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['25 18 8 * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarers.aws-ecs-fargate-task-termination-detection-event-rule',
    module: 'gammarers.aws_ecs_fargate_task_termination_detection_event_rule',
  },
  publishToNuget: {
    dotNetNamespace: 'Gammarers.CDK.AWS',
    packageId: 'Gammarers.CDK.AWS.EcsFargateTaskTerminationDetectionEventRule',
  },
});
project.synth();