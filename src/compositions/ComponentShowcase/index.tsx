import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import {
  BASE_COLORS,
  SPACING,
  LAYOUT,
  SEMANTIC_COLORS,
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
  Connection,
  AnimatedArrow,
  Packet,
} from "../../components";

export const ComponentShowcase: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // COORDINATE SYSTEM FOR PHASE 3C (FRAMES 300 - 450)
  // Diagram canvas: 1760 x 780 (centered, spacious, zero clipping)
  // Node dimension: width 240, height 104
  // Primary horizontal line at Y = 200
  // Secondary Redis Cache node placed at Y = 460 directly beneath Server
  // =========================================================================
  const nodeW = 240;
  const nodeH = 104;

  const clientPos = { x: 70, y: 200, width: nodeW, height: nodeH };
  const lbPos = { x: 500, y: 200, width: nodeW, height: nodeH };
  const srvPos = { x: 940, y: 200, width: nodeW, height: nodeH };
  const dbPos = { x: 1440, y: 200, width: nodeW, height: nodeH };
  const cachePos = { x: 940, y: 460, width: nodeW, height: nodeH };

  // Anchors calculated precisely on node edges
  const clientRight = { x: clientPos.x + clientPos.width, y: clientPos.y + clientPos.height / 2 };
  const lbLeft = { x: lbPos.x, y: lbPos.y + lbPos.height / 2 };
  const lbRight = { x: lbPos.x + lbPos.width, y: lbPos.y + lbPos.height / 2 };

  const srvLeft = { x: srvPos.x, y: srvPos.y + srvPos.height / 2 };
  const srvRight = { x: srvPos.x + srvPos.width, y: srvPos.y + srvPos.height / 2 };
  const srvBottom = { x: srvPos.x + srvPos.width / 2, y: srvPos.y + srvPos.height };

  const dbLeft = { x: dbPos.x, y: dbPos.y + dbPos.height / 2 };
  const cacheTop = { x: cachePos.x + cachePos.width / 2, y: cachePos.y };

  // Relative frame for Segment 3 (0 to 149)
  const relFrame = Math.max(0, frame - 300);

  // Error simulation timing:
  // relFrame 0-80: Healthy Flow (Client -> LB -> Server -> Cache Check -> DB Request)
  // relFrame 80-95: DB Error Triggered (500 Connection Refused)
  // relFrame 95-149: Error Propagation back to Client (DB -> Server -> LB -> Client)
  const isDbFailing = relFrame >= 85;
  const isSrvAlerted = relFrame >= 105;
  const isLbAlerted = relFrame >= 125;
  const isClientFailed = relFrame >= 140;

  const dbState = isDbFailing ? "error" : "default";
  const srvState = isSrvAlerted ? "error" : relFrame >= 20 ? "active" : "default";
  const lbState = isLbAlerted ? "error" : "active";
  const clientState = isClientFailed ? "error" : "active";

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
          <SceneTitle
            title="Phase 3A: Typography & Card Components"
            subtitle="Reusable atomic elements for Minimal Tech Explainer videos"
            animated
            startFrame={0}
          />

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
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING.xl }}>
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
              PART 1/3: TYPOGRAPHY & CARDS (FRAMES 0-150)
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
          <SceneTitle
            title="Phase 3B: Reusable System Diagram Nodes"
            subtitle="8 Atomic Nodes with deterministic spring entrances, states & pulsing glows"
            animated
            startFrame={0}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: SPACING.lg,
              marginTop: SPACING.md,
              marginBottom: SPACING.md,
            }}
          >
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
              PART 2/3: SYSTEM ARCHITECTURE NODES (FRAMES 150-300)
            </Label>
            <Label mono size="badge" variant="secondary">
              MINIMAL TECH EXPLAINER
            </Label>
          </div>
        </div>
      </Sequence>

      {/* =========================================================================
          SEGMENT 3 (Frames 300 - 450): Phase 3C Connections & Animated Data Flow
          Refined Architecture: Primary horizontal flow + Redis Cache neatly below
          ========================================================================= */}
      <Sequence from={300} durationInFrames={150}>
        <div
          style={{
            position: "relative",
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
            title="Phase 3C: Connections & End-to-End Data Flow"
            subtitle="Client ➔ Load Balancer ➔ Server ➔ Database (Normal Request & Cascading 500 Error)"
            animated
            startFrame={0}
          />

          {/* Diagram Canvas: Spacious 1760 x 780 workspace */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 780,
              backgroundColor: `${BASE_COLORS.surfaceSubtle}90`,
              borderRadius: 16,
              border: `1px solid ${BASE_COLORS.surfaceHover}`,
              overflow: "hidden",
            }}
          >
            {/* -----------------------------------------------------------------
                LAYER 1: CONNECTIONS (Underneath nodes)
                Offsets ensure connection labels float above wires without obscuring packets
                ----------------------------------------------------------------- */}
            {/* 1. Client -> Load Balancer */}
            <Connection
              from={clientRight}
              to={lbLeft}
              label="HTTPS POST"
              labelOffset={{ y: -34 }}
              state={isClientFailed ? "error" : "active"}
              type="straight"
            />

            {/* 2. Load Balancer -> Server */}
            <Connection
              from={lbRight}
              to={srvLeft}
              label="gRPC /orders"
              labelOffset={{ y: -34 }}
              state={isLbAlerted ? "error" : "active"}
              type="straight"
            />

            {/* 3. Server -> Database */}
            <Connection
              from={srvRight}
              to={dbLeft}
              label="SQL INSERT"
              labelOffset={{ y: -34 }}
              state={isDbFailing ? "error" : "default"}
              type="straight"
            />

            {/* 4. Server -> Redis Cache (Vertical) */}
            <Connection
              from={srvBottom}
              to={cacheTop}
              label="Cache Lookup"
              labelOffset={{ x: 120, y: 0 }}
              state="default"
              dashed
              type="straight"
            />

            {/* -----------------------------------------------------------------
                LAYER 2: ARROW DRAWING ANIMATION (Opening reveals)
                ----------------------------------------------------------------- */}
            <AnimatedArrow
              from={clientRight}
              to={lbLeft}
              startFrame={5}
              durationInFrames={15}
              color={SEMANTIC_COLORS.connectionLine.active}
            />

            {/* -----------------------------------------------------------------
                LAYER 3: SEQUENTIAL DATA PACKET TRANSMISSIONS
                ----------------------------------------------------------------- */}
            {/* PHASE A: NORMAL REQUEST (relFrames 10 -> 80) */}
            {/* 1. Client -> LB */}
            <Packet
              from={clientRight}
              to={lbLeft}
              type="straight"
              startFrame={10}
              durationInFrames={18}
              color={SEMANTIC_COLORS.packet.default}
              size={16}
            />

            {/* 2. LB -> Server */}
            <Packet
              from={lbRight}
              to={srvLeft}
              type="straight"
              startFrame={28}
              durationInFrames={18}
              color={SEMANTIC_COLORS.packet.default}
              size={16}
            />

            {/* 3. Server -> Cache Lookup */}
            <Packet
              from={srvBottom}
              to={cacheTop}
              type="straight"
              startFrame={46}
              durationInFrames={14}
              color={BASE_COLORS.warning}
              size={14}
            />

            {/* 4. Cache Miss return -> Server */}
            <Packet
              from={cacheTop}
              to={srvBottom}
              type="straight"
              startFrame={60}
              durationInFrames={14}
              color={BASE_COLORS.muted}
              size={14}
            />

            {/* 5. Server -> Database (SQL query) */}
            <Packet
              from={srvRight}
              to={dbLeft}
              type="straight"
              startFrame={74}
              durationInFrames={16}
              color={SEMANTIC_COLORS.packet.accent}
              size={16}
            />

            {/* PHASE B: FAILURE & ERROR PROPAGATION (relFrames 90 -> 145) */}
            {/* Step 1: Database Error Packet (Red) travels back: Database -> Server */}
            <Packet
              from={dbLeft}
              to={srvRight}
              type="straight"
              startFrame={90}
              durationInFrames={16}
              color={BASE_COLORS.error}
              size={18}
            />

            {/* Step 2: Server transmits 500 error packet back: Server -> LB */}
            <Packet
              from={srvLeft}
              to={lbRight}
              type="straight"
              startFrame={108}
              durationInFrames={16}
              color={BASE_COLORS.error}
              size={18}
            />

            {/* Step 3: LB passes 500 error packet back to Client: LB -> Client */}
            <Packet
              from={lbLeft}
              to={clientRight}
              type="straight"
              startFrame={126}
              durationInFrames={16}
              color={BASE_COLORS.error}
              size={18}
            />

            {/* -----------------------------------------------------------------
                LAYER 4: ARCHITECTURE NODES (Above connections)
                ----------------------------------------------------------------- */}
            {/* 1. Client Node */}
            <div style={{ position: "absolute", left: clientPos.x, top: clientPos.y }}>
              <ClientNode
                label="Web Client"
                sublabel={isClientFailed ? "HTTP 500 (Fatal)" : "POST /orders"}
                state={clientState}
                pulse={clientState === "error"}
                width={clientPos.width}
              />
            </div>

            {/* 2. Load Balancer Node */}
            <div style={{ position: "absolute", left: lbPos.x, top: lbPos.y }}>
              <LoadBalancerNode
                label="Envoy Proxy"
                sublabel={isLbAlerted ? "502 Bad Gateway" : "Port 443 [Active]"}
                state={lbState}
                pulse={lbState === "error"}
                width={lbPos.width}
              />
            </div>

            {/* 3. API Server Node */}
            <div style={{ position: "absolute", left: srvPos.x, top: srvPos.y }}>
              <ServerNode
                label="Order Service"
                sublabel={isSrvAlerted ? "DB Deadlock (Err)" : "Worker Pod #1"}
                state={srvState}
                pulse={srvState === "error"}
                width={srvPos.width}
              />
            </div>

            {/* 4. Redis Cache Node (Beneath Server) */}
            <div style={{ position: "absolute", left: cachePos.x, top: cachePos.y }}>
              <CacheNode
                label="Redis Cache"
                sublabel="Cache Miss (Key Nil)"
                state="default"
                width={cachePos.width}
              />
            </div>

            {/* 5. PostgreSQL Database Node */}
            <div style={{ position: "absolute", left: dbPos.x, top: dbPos.y }}>
              <DatabaseNode
                label="PostgreSQL DB"
                sublabel={isDbFailing ? "Deadlock Timeout" : "Port 5432 [Pool: 12]"}
                state={dbState}
                pulse={dbState === "error"}
                width={dbPos.width}
              />
            </div>
          </div>

          {/* Footer bar: Live status indicator */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: `1px solid ${BASE_COLORS.surfaceHover}`,
              paddingTop: SPACING.md,
            }}
          >
            <div style={{ display: "flex", gap: SPACING.md, alignItems: "center" }}>
              <Label mono size="badge" variant="muted">
                FLOW SEQUENCE:
              </Label>
              <Badge
                label={
                  isClientFailed
                    ? "CLIENT RECEIVED 500 ERROR"
                    : isLbAlerted
                      ? "LB RETURNING 502 / 500"
                      : isSrvAlerted
                        ? "SERVER HANDLING DB EXCEPTION"
                        : isDbFailing
                          ? "DATABASE DEADLOCK DETECTED"
                          : relFrame >= 70
                            ? "DB QUERY IN FLIGHT"
                            : relFrame >= 45
                              ? "CACHE LOOKUP (MISS)"
                              : "NORMAL REQUEST ROUTING"
                }
                state={isDbFailing ? "error" : "success"}
                variant="subtle"
              />
            </div>

            <div style={{ display: "flex", gap: SPACING.md, alignItems: "center" }}>
              <Label mono size="badge" variant="secondary">
                PART 3/3: END-TO-END FLOW (FRAMES 300-450)
              </Label>
              <Label mono size="badge" variant="primary">
                FRAME: {frame}
              </Label>
            </div>
          </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
