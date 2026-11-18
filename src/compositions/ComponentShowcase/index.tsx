import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import {
  BASE_COLORS,
  SPACING,
  LAYOUT,
} from "../../theme";
import {
  SceneTitle,
  Label,
  InfoCard,
  Badge,
  CodePanel,
  ClientNode,
  ServerNode,
  DatabaseNode,
  CacheNode,
  LoadBalancerNode,
  QueueNode,
  APINode,
  CloudNode,
} from "../../components";

export const ComponentShowcase: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BASE_COLORS.background,
        boxSizing: "border-box",
      }}
    >
      {/* =========================================================================
          SEGMENT 1 (Frames 0 - 150): Phase 3A Typography & Card Components
          ========================================================================= */}
      <Sequence durationInFrames={150}>
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: `${LAYOUT.safeZone.y}px ${LAYOUT.safeZone.x}px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* Top: SceneTitle */}
          <SceneTitle
            title="Phase 3A: Typography & Card Components"
            subtitle="Reusable atomic elements for Minimal Tech Explainer videos"
            animated
            startFrame={0}
          />

          {/* Middle: Grid preview of components */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: SPACING.xxl,
              marginTop: SPACING.lg,
              marginBottom: SPACING.lg,
              alignItems: "start",
            }}
          >
            {/* Left Column: Badges & Labels & InfoCard */}
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING.xl }}>
              {/* Badge Row */}
              <div style={{ display: "flex", flexDirection: "column", gap: SPACING.sm }}>
                <Label mono size="badge" variant="muted">
                  STATUS BADGES (SOLID & SUBTLE)
                </Label>
                <div style={{ display: "flex", gap: SPACING.sm, flexWrap: "wrap" }}>
                  <Badge label="200 OK" state="success" variant="subtle" />
                  <Badge label="503 DOWN" state="error" variant="subtle" />
                  <Badge label="THROTTLED" state="warning" variant="subtle" />
                  <Badge label="LEADER" state="primary" variant="solid" />
                  <Badge label="FOLLOWER" state="secondary" variant="subtle" />
                  <Badge label="IDLE" state="neutral" variant="outline" />
                </div>
              </div>

              {/* Labels Showcase */}
              <div style={{ display: "flex", flexDirection: "column", gap: SPACING.sm }}>
                <Label mono size="badge" variant="muted">
                  TECHNICAL LABELS
                </Label>
                <div style={{ display: "flex", gap: SPACING.md, alignItems: "baseline" }}>
                  <Label variant="primary" size="heading">
                    O(1)
                  </Label>
                  <Label variant="secondary" size="subheading" mono>
                    192.168.1.1:8080
                  </Label>
                  <Label variant="accent" size="body">
                    Consistent Hashing Ring
                  </Label>
                </div>
              </div>

              {/* Info Cards */}
              <div style={{ display: "flex", gap: SPACING.md }}>
                <InfoCard
                  title="Cache Hit Ratio"
                  description="L1 cache reduced DB query load by 85%."
                  accentColor={BASE_COLORS.primary}
                  animated
                  startFrame={10}
                  style={{ flex: 1 }}
                />
                <InfoCard
                  title="Partition Alert"
                  description="Split-brain risk detected on node S-03."
                  accentColor={BASE_COLORS.error}
                  highlight
                  animated
                  startFrame={15}
                  style={{ flex: 1 }}
                />
              </div>
            </div>

            {/* Right Column: CodePanel */}
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING.sm }}>
              <Label mono size="badge" variant="muted">
                CODE PANEL / TERMINAL WINDOW
              </Label>
              <CodePanel
                title="hash_ring.py"
                language="python"
                code={`def get_node(key: str) -> str:
    h = mmh3.hash(key)
    idx = bisect_right(ring_keys, h)
    return ring[ring_keys[idx % len(ring_keys)]]

# Route incoming client request
node = get_node("session:user_8912")`}
              />
            </div>
          </div>

          {/* Footer bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: `1px solid ${BASE_COLORS.surfaceHover}`,
              paddingTop: SPACING.md,
            }}
          >
            <Label mono size="badge" variant="muted">
              PART 1/2: TYPOGRAPHY & CARDS (FRAMES 0-150)
            </Label>
            <Label mono size="badge" variant="primary">
              MINIMAL TECH EXPLAINER
            </Label>
          </div>
        </div>
      </Sequence>

      {/* =========================================================================
          SEGMENT 2 (Frames 150 - 300): Phase 3B Reusable System Architecture Nodes
          ========================================================================= */}
      <Sequence from={150} durationInFrames={150}>
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: `${LAYOUT.safeZone.y}px ${LAYOUT.safeZone.x}px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* Top: SceneTitle */}
          <SceneTitle
            title="Phase 3B: Reusable System Diagram Nodes"
            subtitle="8 Atomic Nodes with deterministic spring entrances, states & pulsing glows"
            animated
            startFrame={0}
          />

          {/* Grid of All 8 Nodes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: SPACING.lg,
              marginTop: SPACING.md,
              marginBottom: SPACING.md,
            }}
          >
            {/* Row 1: Frontend & Edge & Compute */}
            <ClientNode
              label="Web Browser"
              sublabel="React Client (v19)"
              state="default"
              animated
              startFrame={0}
              width="100%"
            />

            <APINode
              label="Kong Gateway"
              sublabel="api.company.internal"
              state="active"
              pulse
              animated
              startFrame={4}
              width="100%"
            />

            <LoadBalancerNode
              label="NGINX LB"
              sublabel="Round Robin [Healthy]"
              state="success"
              animated
              startFrame={8}
              width="100%"
            />

            <ServerNode
              label="Order Service"
              sublabel="srv-prod-01 (10.0.4.12)"
              state="active"
              pulse
              animated
              startFrame={12}
              width="100%"
            />

            {/* Row 2: Storage, Messaging & Cloud */}
            <CacheNode
              label="Redis Cluster"
              sublabel="Memory: 1.2GB / 8GB"
              state="default"
              animated
              startFrame={16}
              width="100%"
            />

            <QueueNode
              label="Kafka Partition"
              sublabel="orders-topic [Lag: 42]"
              state="warning"
              animated
              startFrame={20}
              width="100%"
            />

            <DatabaseNode
              label="PostgreSQL Primary"
              sublabel="Deadlock Timeout (500 Error)"
              state="error"
              animated
              startFrame={24}
              width="100%"
            />

            <CloudNode
              label="AWS us-east-1"
              sublabel="VPC Peering Mesh"
              state="disabled"
              animated
              startFrame={28}
              width="100%"
            />
          </div>

          {/* Legend / State explanation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: BASE_COLORS.surface,
              padding: `${SPACING.sm}px ${SPACING.lg}px`,
              borderRadius: 8,
              border: `1px solid ${BASE_COLORS.surfaceHover}`,
            }}
          >
            <div style={{ display: "flex", gap: SPACING.md, alignItems: "center" }}>
              <Label mono size="badge" variant="muted">
                DEMONSTRATED STATES:
              </Label>
              <Badge label="DEFAULT" state="neutral" variant="subtle" />
              <Badge label="ACTIVE + PULSE" state="primary" variant="subtle" />
              <Badge label="SUCCESS" state="success" variant="subtle" />
              <Badge label="WARNING" state="warning" variant="subtle" />
              <Badge label="ERROR" state="error" variant="subtle" />
              <Badge label="DISABLED" state="neutral" variant="outline" />
            </div>

            <Label mono size="badge" variant="primary">
              CURRENT FRAME: {frame}
            </Label>
          </div>

          {/* Footer bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: `1px solid ${BASE_COLORS.surfaceHover}`,
              paddingTop: SPACING.md,
            }}
          >
            <Label mono size="badge" variant="muted">
              PART 2/2: SYSTEM ARCHITECTURE NODES (FRAMES 150-300)
            </Label>
            <Label mono size="badge" variant="secondary">
              MINIMAL TECH EXPLAINER
            </Label>
          </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
