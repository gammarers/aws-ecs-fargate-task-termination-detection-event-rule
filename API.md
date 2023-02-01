# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsFargateTaskTerminationDetectionNotificationEventRule <a name="EcsFargateTaskTerminationDetectionNotificationEventRule" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule"></a>

#### Initializers <a name="Initializers" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.Initializer"></a>

```typescript
import { EcsFargateTaskTerminationDetectionNotificationEventRule } from '@yicr/ecs-fargate-task-termination-detection-notification-event-rule'

new EcsFargateTaskTerminationDetectionNotificationEventRule(scope: Construct, id: string, props: EcsFargateTaskTerminationDetectionNotificationEventRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.Initializer.parameter.props">props</a></code> | <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRuleProps">EcsFargateTaskTerminationDetectionNotificationEventRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRuleProps">EcsFargateTaskTerminationDetectionNotificationEventRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.isConstruct"></a>

```typescript
import { EcsFargateTaskTerminationDetectionNotificationEventRule } from '@yicr/ecs-fargate-task-termination-detection-notification-event-rule'

EcsFargateTaskTerminationDetectionNotificationEventRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.isOwnedResource"></a>

```typescript
import { EcsFargateTaskTerminationDetectionNotificationEventRule } from '@yicr/ecs-fargate-task-termination-detection-notification-event-rule'

EcsFargateTaskTerminationDetectionNotificationEventRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.isResource"></a>

```typescript
import { EcsFargateTaskTerminationDetectionNotificationEventRule } from '@yicr/ecs-fargate-task-termination-detection-notification-event-rule'

EcsFargateTaskTerminationDetectionNotificationEventRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.fromEventRuleArn"></a>

```typescript
import { EcsFargateTaskTerminationDetectionNotificationEventRule } from '@yicr/ecs-fargate-task-termination-detection-notification-event-rule'

EcsFargateTaskTerminationDetectionNotificationEventRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


## Structs <a name="Structs" id="Structs"></a>

### EcsFargateTaskTerminationDetectionNotificationEventRuleProps <a name="EcsFargateTaskTerminationDetectionNotificationEventRuleProps" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRuleProps"></a>

#### Initializer <a name="Initializer" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRuleProps.Initializer"></a>

```typescript
import { EcsFargateTaskTerminationDetectionNotificationEventRuleProps } from '@yicr/ecs-fargate-task-termination-detection-notification-event-rule'

const ecsFargateTaskTerminationDetectionNotificationEventRuleProps: EcsFargateTaskTerminationDetectionNotificationEventRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRuleProps.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRuleProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRuleProps.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_events.IRuleTarget[]</code> | *No description.* |

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRuleProps.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@yicr/ecs-fargate-task-termination-detection-notification-event-rule.EcsFargateTaskTerminationDetectionNotificationEventRuleProps.property.targets"></a>

```typescript
public readonly targets: IRuleTarget[];
```

- *Type:* aws-cdk-lib.aws_events.IRuleTarget[]

---



