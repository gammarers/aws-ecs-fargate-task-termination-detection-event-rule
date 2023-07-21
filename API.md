# AWS ECS Fargate task termination detection notification event rule

This an AWS ECS Fargate task termination detection Event Rule.

## Install

### TypeScript

```shell
npm install @gammarer/aws-ecs-fargate-task-termination-detection-event-rule
# or
yarn add @gammarer/aws-ecs-fargate-task-termination-detection-event-rule
```

### Python

```shell
pip install gammarer.aws-ecs-fargate-task-termination-detection-event-rule
```

## Example

### TypeScript

```shell
npm install @gammarer/aws-ecs-fargate-task-termination-detection-event-rule
```

```typescript
import { EcsFargateTaskTerminationDetectionEventRule } from '@gammarer/aws-ecs-fargate-task-termination-detection-event-rule';

const clusterArn = 'arn:aws:ecs:us-east-1:123456789012:cluster/example-app-cluster';

const rule = new EcsFargateTaskTerminationDetectionEventRule(stack, 'EcsFargateTaskTerminationDetectionEventRule', {
  ruleName: 'example-event-rule',
  description: 'example event rule.',
  clusterArn,
});

```
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsFargateTaskTerminationDetectionEventRule <a name="EcsFargateTaskTerminationDetectionEventRule" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule"></a>

#### Initializers <a name="Initializers" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.Initializer"></a>

```typescript
import { EcsFargateTaskTerminationDetectionEventRule } from '@gammarer/aws-ecs-fargate-task-termination-detection-event-rule'

new EcsFargateTaskTerminationDetectionEventRule(scope: Construct, id: string, props: EcsFargateTaskTerminationDetectionEventRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRuleProps">EcsFargateTaskTerminationDetectionEventRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRuleProps">EcsFargateTaskTerminationDetectionEventRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.addEventPattern"></a>

```typescript
public addEventPattern(eventPattern?: EventPattern): void
```

Adds an event pattern filter to this rule.

If a pattern was already specified,
these values are merged into the existing pattern.

For example, if the rule already contains the pattern:

    {
      "resources": [ "r1" ],
      "detail": {
        "hello": [ 1 ]
      }
    }

And `addEventPattern` is called with the pattern:

    {
      "resources": [ "r2" ],
      "detail": {
        "foo": [ "bar" ]
      }
    }

The resulting event pattern will be:

    {
      "resources": [ "r1", "r2" ],
      "detail": {
        "hello": [ 1 ],
        "foo": [ "bar" ]
      }
    }

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.isConstruct"></a>

```typescript
import { EcsFargateTaskTerminationDetectionEventRule } from '@gammarer/aws-ecs-fargate-task-termination-detection-event-rule'

EcsFargateTaskTerminationDetectionEventRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.isOwnedResource"></a>

```typescript
import { EcsFargateTaskTerminationDetectionEventRule } from '@gammarer/aws-ecs-fargate-task-termination-detection-event-rule'

EcsFargateTaskTerminationDetectionEventRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.isResource"></a>

```typescript
import { EcsFargateTaskTerminationDetectionEventRule } from '@gammarer/aws-ecs-fargate-task-termination-detection-event-rule'

EcsFargateTaskTerminationDetectionEventRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.fromEventRuleArn"></a>

```typescript
import { EcsFargateTaskTerminationDetectionEventRule } from '@gammarer/aws-ecs-fargate-task-termination-detection-event-rule'

EcsFargateTaskTerminationDetectionEventRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


## Structs <a name="Structs" id="Structs"></a>

### EcsFargateTaskTerminationDetectionEventRuleProps <a name="EcsFargateTaskTerminationDetectionEventRuleProps" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRuleProps"></a>

#### Initializer <a name="Initializer" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRuleProps.Initializer"></a>

```typescript
import { EcsFargateTaskTerminationDetectionEventRuleProps } from '@gammarer/aws-ecs-fargate-task-termination-detection-event-rule'

const ecsFargateTaskTerminationDetectionEventRuleProps: EcsFargateTaskTerminationDetectionEventRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRuleProps.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRuleProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRuleProps.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@gammarer/aws-ecs-fargate-task-termination-detection-event-rule.EcsFargateTaskTerminationDetectionEventRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---



