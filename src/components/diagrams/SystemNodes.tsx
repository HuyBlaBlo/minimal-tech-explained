import React from "react";
import { BaseNode, NodeState } from "./BaseNode";
import {
  ClientIcon,
  ServerIcon,
  DatabaseIcon,
  CacheIcon,
  LoadBalancerIcon,
  QueueIcon,
  APIIcon,
  CloudIcon,
} from "./NodeIcons";
import { SEMANTIC_COLORS, BASE_COLORS } from "../../theme";

export interface SystemNodeProps {
  label?: string;
  sublabel?: string;
  tag?: string;
  state?: NodeState;
  animated?: boolean;
  startFrame?: number;
  pulse?: boolean;
  width?: number | string;
  accentColor?: string;
  style?: React.CSSProperties;
}

// 1. ClientNode
export const ClientNode: React.FC<SystemNodeProps> = ({
  label = "Client",
  sublabel,
  tag = "CLIENT",
  state = "default",
  accentColor = SEMANTIC_COLORS.clientNode.accent,
  ...rest
}) => (
  <BaseNode
    label={label}
    sublabel={sublabel}
    tag={tag}
    icon={<ClientIcon color={accentColor} />}
    state={state}
    accentColor={accentColor}
    glowColor={SEMANTIC_COLORS.clientNode.glow}
    {...rest}
  />
);

// 2. ServerNode
export const ServerNode: React.FC<SystemNodeProps> = ({
  label = "App Server",
  sublabel,
  tag = "SERVER",
  state = "default",
  accentColor = SEMANTIC_COLORS.serverNode.accent,
  ...rest
}) => (
  <BaseNode
    label={label}
    sublabel={sublabel}
    tag={tag}
    icon={<ServerIcon color={accentColor} />}
    state={state}
    accentColor={accentColor}
    glowColor={SEMANTIC_COLORS.serverNode.glow}
    {...rest}
  />
);

// 3. DatabaseNode
export const DatabaseNode: React.FC<SystemNodeProps> = ({
  label = "PostgreSQL",
  sublabel,
  tag = "DB",
  state = "default",
  accentColor = SEMANTIC_COLORS.databaseNode.accent,
  ...rest
}) => (
  <BaseNode
    label={label}
    sublabel={sublabel}
    tag={tag}
    icon={<DatabaseIcon color={accentColor} />}
    state={state}
    accentColor={accentColor}
    glowColor={SEMANTIC_COLORS.databaseNode.glow}
    {...rest}
  />
);

// 4. CacheNode
export const CacheNode: React.FC<SystemNodeProps> = ({
  label = "Redis Cache",
  sublabel,
  tag = "CACHE",
  state = "default",
  accentColor = SEMANTIC_COLORS.cacheNode.accent,
  ...rest
}) => (
  <BaseNode
    label={label}
    sublabel={sublabel}
    tag={tag}
    icon={<CacheIcon color={accentColor} />}
    state={state}
    accentColor={accentColor}
    glowColor={SEMANTIC_COLORS.cacheNode.glow}
    {...rest}
  />
);

// 5. LoadBalancerNode
export const LoadBalancerNode: React.FC<SystemNodeProps> = ({
  label = "Load Balancer",
  sublabel,
  tag = "LB",
  state = "default",
  accentColor = SEMANTIC_COLORS.loadBalancerNode.accent,
  ...rest
}) => (
  <BaseNode
    label={label}
    sublabel={sublabel}
    tag={tag}
    icon={<LoadBalancerIcon color={accentColor} />}
    state={state}
    accentColor={accentColor}
    glowColor={SEMANTIC_COLORS.loadBalancerNode.glow}
    {...rest}
  />
);

// 6. QueueNode
export const QueueNode: React.FC<SystemNodeProps> = ({
  label = "Message Queue",
  sublabel,
  tag = "QUEUE",
  state = "default",
  accentColor = SEMANTIC_COLORS.queueNode?.accent ?? BASE_COLORS.warning,
  ...rest
}) => (
  <BaseNode
    label={label}
    sublabel={sublabel}
    tag={tag}
    icon={<QueueIcon color={accentColor} />}
    state={state}
    accentColor={accentColor}
    glowColor={SEMANTIC_COLORS.queueNode?.glow ?? "rgba(245, 192, 99, 0.25)"}
    {...rest}
  />
);

// 7. APINode
export const APINode: React.FC<SystemNodeProps> = ({
  label = "API Gateway",
  sublabel,
  tag = "GATEWAY",
  state = "default",
  accentColor = SEMANTIC_COLORS.apiNode?.accent ?? BASE_COLORS.secondary,
  ...rest
}) => (
  <BaseNode
    label={label}
    sublabel={sublabel}
    tag={tag}
    icon={<APIIcon color={accentColor} />}
    state={state}
    accentColor={accentColor}
    glowColor={SEMANTIC_COLORS.apiNode?.glow ?? "rgba(140, 168, 255, 0.25)"}
    {...rest}
  />
);

// 8. CloudNode
export const CloudNode: React.FC<SystemNodeProps> = ({
  label = "Cloud VPC",
  sublabel,
  tag = "CLOUD",
  state = "default",
  accentColor = SEMANTIC_COLORS.cloudNode?.accent ?? BASE_COLORS.primary,
  ...rest
}) => (
  <BaseNode
    label={label}
    sublabel={sublabel}
    tag={tag}
    icon={<CloudIcon color={accentColor} />}
    state={state}
    accentColor={accentColor}
    glowColor={SEMANTIC_COLORS.cloudNode?.glow ?? "rgba(125, 227, 209, 0.2)"}
    {...rest}
  />
);
