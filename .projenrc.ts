import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  constructsVersion: '10.0.5',
  typescriptVersion: '5.1.x',
  jsiiVersion: '5.1.x',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-ecs-fargate-task-termination-detection-event-rule',
  description: 'This an AWS ECS Fargate task termination detection Event Rule.',
  keywords: ['aws', 'cdk', 'aws-cdk', 'event', 'rule', 'ecs', 'fargate'],
  majorVersion: 1,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-ecs-fargate-task-termination-detection-event-rule.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '18.17.1',
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
  publishToMaven: {
    mavenGroupId: 'com.gammarer',
    javaPackage: 'com.gammarer.cdk.aws.ecs_fargate_task_termination_detection_event_rule',
    mavenArtifactId: 'aws-ecs-fargate-task-termination-detection-event-rule',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
});
project.synth();