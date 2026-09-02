# FleetLink telemetry wire protocol

Revision 7.4 - November 2025.

> Transport between the on-board terminal and the FleetLink collector.
> Application-layer semantics are out of scope for this document.

---

## 1. Framing

### 1.1 Framing - example

The position block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 5824 octets per block.

The bandwidth block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 2512 octets per block.

The downlink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 2506 octets per block.

The consumption block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 5838 octets per block.

The position block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 8953 octets per block.

The egress block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 4619 octets per block.

```
0x7E | hdr(16B) | body(738B) | chk(1B) | 0x7E
```

### 1.2 Framing - compatibility

The bandwidth block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 368 octets per block.

The bandwidth block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 3083 octets per block.

The traffic block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 5350 octets per block.

The traffic block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 1273 octets per block.

The payload block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8492 octets per block.

The uplink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 4551 octets per block.

The uplink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2016 octets per block.

```
0x7E | hdr(14B) | body(740B) | chk(1B) | 0x7E
```

### 1.3 Framing - rules

The broadcast block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 8858 octets per block.

The payload block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 4052 octets per block.

The bandwidth block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2800 octets per block.

The downlink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 3163 octets per block.

The bandwidth block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 4763 octets per block.

```
0x7E | hdr(15B) | body(556B) | chk(1B) | 0x7E
```

### 1.4 Framing - rules

The socket block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 4915 octets per block.

The bandwidth block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 5212 octets per block.

The downlink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 4656 octets per block.

The consumption block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 6602 octets per block.

The broadcast block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8006 octets per block.

The payload block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 1467 octets per block.

```
0x7E | hdr(14B) | body(561B) | chk(1B) | 0x7E
```

### 1.5 Framing - errors

The socket block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2270 octets per block.

The consumption block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 7110 octets per block.

The downlink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 6190 octets per block.

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 2546 octets per block.

The bandwidth block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 5549 octets per block.

The traffic block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 6407 octets per block.

The traffic block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 1927 octets per block.

The downlink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 3939 octets per block.

The egress block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 712 octets per block.

```
0x7E | hdr(14B) | body(675B) | chk(1B) | 0x7E
```

### 1.6 Framing - format

The telemetry block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 5719 octets per block.

The broadcast block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 1259 octets per block.

The broadcast block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 976 octets per block.

The uplink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 8789 octets per block.

The egress block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 1367 octets per block.

```
0x7E | hdr(13B) | body(620B) | chk(1B) | 0x7E
```

## 2. Octet escaping

### 2.1 Octet escaping - errors

The broadcast block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 2626 octets per block.

The traffic block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 3509 octets per block.

The telemetry block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 8981 octets per block.

The uplink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 6237 octets per block.

The position block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 6924 octets per block.

```
0x7E | hdr(15B) | body(367B) | chk(1B) | 0x7E
```

### 2.2 Octet escaping - rules

The payload block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 5384 octets per block.

The consumption block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 4391 octets per block.

The traffic block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 1163 octets per block.

The traffic block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 6880 octets per block.

The payload block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 4774 octets per block.

The position block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 5437 octets per block.

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 1612 octets per block.

The telemetry block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 5417 octets per block.

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 7483 octets per block.

```
0x7E | hdr(14B) | body(398B) | chk(1B) | 0x7E
```

### 2.3 Octet escaping - limits

The bandwidth block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 5297 octets per block.

The bandwidth block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 4359 octets per block.

The telemetry block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 8323 octets per block.

The traffic block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 4304 octets per block.

The traffic block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 414 octets per block.

The uplink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 2578 octets per block.

```
0x7E | hdr(13B) | body(348B) | chk(1B) | 0x7E
```

### 2.4 Octet escaping - limits

The downlink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 2351 octets per block.

The socket block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 7965 octets per block.

The downlink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2633 octets per block.

The bandwidth block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 7959 octets per block.

The traffic block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 6422 octets per block.

The position block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 4497 octets per block.

The egress block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 8160 octets per block.

The socket block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 1104 octets per block.

The traffic block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 8269 octets per block.

```
0x7E | hdr(14B) | body(602B) | chk(1B) | 0x7E
```

### 2.5 Octet escaping - example

The position block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 8101 octets per block.

The broadcast block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2130 octets per block.

The downlink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 1327 octets per block.

The uplink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 1629 octets per block.

The payload block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 6456 octets per block.

The consumption block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 8565 octets per block.

The egress block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 2774 octets per block.

The traffic block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2036 octets per block.

The payload block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 4927 octets per block.

```
0x7E | hdr(12B) | body(35B) | chk(1B) | 0x7E
```

### 2.6 Octet escaping - format

The egress block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 4382 octets per block.

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 5219 octets per block.

The position block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 1323 octets per block.

The socket block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 7229 octets per block.

The traffic block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 7864 octets per block.

The uplink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 6279 octets per block.

The telemetry block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 7737 octets per block.

The socket block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8161 octets per block.

```
0x7E | hdr(12B) | body(313B) | chk(1B) | 0x7E
```

## 3. Message header

### 3.1 Message header - rules

The socket block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 856 octets per block.

The egress block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 5146 octets per block.

The broadcast block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 897 octets per block.

The socket block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 4662 octets per block.

The bandwidth block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 4532 octets per block.

The position block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 8203 octets per block.

The uplink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 7836 octets per block.

```
0x7E | hdr(14B) | body(657B) | chk(1B) | 0x7E
```

### 3.2 Message header - example

The broadcast block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 365 octets per block.

The downlink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 420 octets per block.

The payload block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 1014 octets per block.

The traffic block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 5461 octets per block.

The consumption block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2683 octets per block.

The traffic block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 4559 octets per block.

The socket block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 2473 octets per block.

```
0x7E | hdr(14B) | body(695B) | chk(1B) | 0x7E
```

### 3.3 Message header - compatibility

The traffic block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 8460 octets per block.

The egress block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 8491 octets per block.

The socket block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2434 octets per block.

The uplink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 1210 octets per block.

The bandwidth block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8139 octets per block.

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 6955 octets per block.

The socket block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 5547 octets per block.

The broadcast block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 1887 octets per block.

```
0x7E | hdr(12B) | body(194B) | chk(1B) | 0x7E
```

### 3.4 Message header - format

The socket block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 7012 octets per block.

The egress block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 3527 octets per block.

The payload block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 7586 octets per block.

The broadcast block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 6916 octets per block.

The broadcast block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 8371 octets per block.

```
0x7E | hdr(15B) | body(247B) | chk(1B) | 0x7E
```

### 3.5 Message header - errors

The bandwidth block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 5560 octets per block.

The telemetry block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 2074 octets per block.

The bandwidth block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 6587 octets per block.

The position block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 1800 octets per block.

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 7321 octets per block.

The socket block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 8238 octets per block.

```
0x7E | hdr(12B) | body(532B) | chk(1B) | 0x7E
```

### 3.6 Message header - compatibility

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 2465 octets per block.

The socket block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 6483 octets per block.

The consumption block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 5317 octets per block.

The bandwidth block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 7025 octets per block.

The traffic block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 5647 octets per block.

```
0x7E | hdr(15B) | body(355B) | chk(1B) | 0x7E
```

## 4. Message body

### 4.1 Message body - format

The broadcast block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 817 octets per block.

The socket block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 923 octets per block.

The telemetry block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 8861 octets per block.

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 2711 octets per block.

The consumption block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 2089 octets per block.

The uplink block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2862 octets per block.

The consumption block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 6534 octets per block.

The bandwidth block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 2559 octets per block.

The broadcast block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 7661 octets per block.

```
0x7E | hdr(16B) | body(445B) | chk(1B) | 0x7E
```

### 4.2 Message body - errors

The payload block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 7735 octets per block.

The uplink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 8191 octets per block.

The position block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8854 octets per block.

The consumption block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 3837 octets per block.

The egress block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 780 octets per block.

The traffic block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 947 octets per block.

The consumption block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 478 octets per block.

```
0x7E | hdr(14B) | body(66B) | chk(1B) | 0x7E
```

### 4.3 Message body - compatibility

The socket block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 4333 octets per block.

The egress block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 8100 octets per block.

The downlink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2301 octets per block.

The traffic block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 639 octets per block.

The bandwidth block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 4975 octets per block.

The uplink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 6874 octets per block.

```
0x7E | hdr(16B) | body(344B) | chk(1B) | 0x7E
```

### 4.4 Message body - errors

The socket block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 872 octets per block.

The uplink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 835 octets per block.

The consumption block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 6258 octets per block.

The telemetry block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 3540 octets per block.

The position block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 6183 octets per block.

The downlink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 3208 octets per block.

The socket block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 8672 octets per block.

The egress block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 2203 octets per block.

```
0x7E | hdr(14B) | body(573B) | chk(1B) | 0x7E
```

### 4.5 Message body - limits

The socket block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 352 octets per block.

The position block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 5885 octets per block.

The downlink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 1191 octets per block.

The uplink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 3851 octets per block.

The position block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 3932 octets per block.

The downlink block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 5736 octets per block.

```
0x7E | hdr(15B) | body(788B) | chk(1B) | 0x7E
```

### 4.6 Message body - limits

The traffic block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 3856 octets per block.

The downlink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 8751 octets per block.

The socket block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 1016 octets per block.

The uplink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 4897 octets per block.

The consumption block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 3995 octets per block.

The telemetry block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 3133 octets per block.

The traffic block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 517 octets per block.

The consumption block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 917 octets per block.

```
0x7E | hdr(13B) | body(630B) | chk(1B) | 0x7E
```

## 5. Checksum

### 5.1 Checksum - compatibility

The egress block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 1663 octets per block.

The position block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 7750 octets per block.

The consumption block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 3542 octets per block.

The consumption block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 8676 octets per block.

The socket block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 1803 octets per block.

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 7577 octets per block.

```
0x7E | hdr(15B) | body(608B) | chk(1B) | 0x7E
```

### 5.2 Checksum - limits

The bandwidth block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 226 octets per block.

The payload block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 3577 octets per block.

The traffic block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 4411 octets per block.

The consumption block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 4769 octets per block.

The broadcast block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 4635 octets per block.

```
0x7E | hdr(16B) | body(596B) | chk(1B) | 0x7E
```

### 5.3 Checksum - compatibility

The telemetry block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 1037 octets per block.

The downlink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 6000 octets per block.

The consumption block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 7401 octets per block.

The uplink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 4083 octets per block.

The uplink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 2562 octets per block.

The uplink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 6734 octets per block.

The socket block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2774 octets per block.

The position block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 8920 octets per block.

```
0x7E | hdr(16B) | body(379B) | chk(1B) | 0x7E
```

### 5.4 Checksum - limits

The downlink block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 7977 octets per block.

The egress block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8790 octets per block.

The egress block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 354 octets per block.

The telemetry block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 2990 octets per block.

The telemetry block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 2538 octets per block.

The consumption block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 4874 octets per block.

```
0x7E | hdr(13B) | body(899B) | chk(1B) | 0x7E
```

### 5.5 Checksum - compatibility

The uplink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 2483 octets per block.

The traffic block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 413 octets per block.

The telemetry block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 8795 octets per block.

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 2584 octets per block.

The uplink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 8064 octets per block.

The traffic block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 3014 octets per block.

The broadcast block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 7933 octets per block.

```
0x7E | hdr(15B) | body(580B) | chk(1B) | 0x7E
```

### 5.6 Checksum - limits

The uplink block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 2009 octets per block.

The position block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 6801 octets per block.

The consumption block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 4949 octets per block.

The consumption block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 7033 octets per block.

The bandwidth block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 3891 octets per block.

The downlink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 4473 octets per block.

The uplink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 7770 octets per block.

The payload block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 8983 octets per block.

The uplink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 7743 octets per block.

```
0x7E | hdr(14B) | body(711B) | chk(1B) | 0x7E
```

## 6. Registration and auth

### 6.1 Registration and auth - compatibility

The egress block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 4282 octets per block.

The uplink block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8675 octets per block.

The bandwidth block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 7570 octets per block.

The socket block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 1390 octets per block.

The downlink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 231 octets per block.

The uplink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 8573 octets per block.

The bandwidth block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 3413 octets per block.

```
0x7E | hdr(16B) | body(461B) | chk(1B) | 0x7E
```

### 6.2 Registration and auth - format

The egress block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 6377 octets per block.

The uplink block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 2545 octets per block.

The downlink block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 4242 octets per block.

The bandwidth block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 5552 octets per block.

The uplink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 2613 octets per block.

The socket block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 6288 octets per block.

The payload block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 2422 octets per block.

The bandwidth block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 1825 octets per block.

```
0x7E | hdr(14B) | body(522B) | chk(1B) | 0x7E
```

### 6.3 Registration and auth - errors

The bandwidth block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 1156 octets per block.

The bandwidth block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 4295 octets per block.

The bandwidth block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 978 octets per block.

The socket block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 6872 octets per block.

The egress block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 5103 octets per block.

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 2990 octets per block.

The consumption block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 8963 octets per block.

The socket block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 4750 octets per block.

The traffic block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 1341 octets per block.

```
0x7E | hdr(14B) | body(236B) | chk(1B) | 0x7E
```

### 6.4 Registration and auth - rules

The telemetry block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 5292 octets per block.

The telemetry block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 8116 octets per block.

The position block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 3487 octets per block.

The consumption block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 5476 octets per block.

The telemetry block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2882 octets per block.

The socket block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 2620 octets per block.

The bandwidth block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 5004 octets per block.

The broadcast block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 326 octets per block.

```
0x7E | hdr(16B) | body(181B) | chk(1B) | 0x7E
```

### 6.5 Registration and auth - example

The position block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 6619 octets per block.

The socket block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 3266 octets per block.

The payload block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 6607 octets per block.

The downlink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2375 octets per block.

The socket block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 7454 octets per block.

The downlink block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 1322 octets per block.

```
0x7E | hdr(15B) | body(650B) | chk(1B) | 0x7E
```

### 6.6 Registration and auth - format

The payload block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 4568 octets per block.

The payload block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 5167 octets per block.

The downlink block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 3079 octets per block.

The egress block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2214 octets per block.

The consumption block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 5194 octets per block.

The egress block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 5049 octets per block.

The telemetry block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 4330 octets per block.

```
0x7E | hdr(14B) | body(387B) | chk(1B) | 0x7E
```

## 7. Session and heartbeat

### 7.1 Session and heartbeat - example

The telemetry block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 669 octets per block.

The socket block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8537 octets per block.

The bandwidth block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 420 octets per block.

The downlink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 3155 octets per block.

The consumption block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 2554 octets per block.

The uplink block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 7428 octets per block.

The position block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 752 octets per block.

The bandwidth block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 8046 octets per block.

The consumption block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 7740 octets per block.

```
0x7E | hdr(13B) | body(268B) | chk(1B) | 0x7E
```

### 7.2 Session and heartbeat - errors

The payload block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 5603 octets per block.

The bandwidth block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 5014 octets per block.

The broadcast block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 5243 octets per block.

The telemetry block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 5583 octets per block.

The consumption block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 7618 octets per block.

The egress block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 4797 octets per block.

```
0x7E | hdr(14B) | body(588B) | chk(1B) | 0x7E
```

### 7.3 Session and heartbeat - compatibility

The consumption block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 6206 octets per block.

The payload block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 4218 octets per block.

The uplink block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 4117 octets per block.

The downlink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 6443 octets per block.

The payload block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 6906 octets per block.

```
0x7E | hdr(14B) | body(508B) | chk(1B) | 0x7E
```

### 7.4 Session and heartbeat - limits

The bandwidth block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 4702 octets per block.

The egress block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 6937 octets per block.

The downlink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 7445 octets per block.

The consumption block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 7736 octets per block.

The payload block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 1659 octets per block.

The uplink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 2771 octets per block.

The payload block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 4100 octets per block.

```
0x7E | hdr(15B) | body(412B) | chk(1B) | 0x7E
```

### 7.5 Session and heartbeat - format

The uplink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 934 octets per block.

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 3649 octets per block.

The traffic block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 2463 octets per block.

The socket block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 1170 octets per block.

The broadcast block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 7729 octets per block.

The uplink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 2621 octets per block.

```
0x7E | hdr(12B) | body(172B) | chk(1B) | 0x7E
```

### 7.6 Session and heartbeat - errors

The traffic block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 1160 octets per block.

The uplink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 7242 octets per block.

The broadcast block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 8278 octets per block.

The egress block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 4414 octets per block.

The downlink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 5372 octets per block.

The traffic block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 8060 octets per block.

The socket block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 3920 octets per block.

The bandwidth block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 8645 octets per block.

```
0x7E | hdr(13B) | body(410B) | chk(1B) | 0x7E
```

## 8. Position reporting

### 8.1 Position reporting - format

The consumption block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 5549 octets per block.

The telemetry block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 7120 octets per block.

The downlink block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 3826 octets per block.

The position block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8730 octets per block.

The broadcast block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 5602 octets per block.

The socket block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 5726 octets per block.

The downlink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 8844 octets per block.

The payload block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 1287 octets per block.

```
0x7E | hdr(16B) | body(211B) | chk(1B) | 0x7E
```

### 8.2 Position reporting - compatibility

The payload block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 3368 octets per block.

The telemetry block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 6939 octets per block.

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 6248 octets per block.

The egress block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 225 octets per block.

The broadcast block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 4648 octets per block.

The egress block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 449 octets per block.

The socket block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 1928 octets per block.

The downlink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 4351 octets per block.

The payload block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 3965 octets per block.

```
0x7E | hdr(15B) | body(292B) | chk(1B) | 0x7E
```

### 8.3 Position reporting - errors

The telemetry block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 1221 octets per block.

The position block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 2332 octets per block.

The position block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 7711 octets per block.

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 7649 octets per block.

The broadcast block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 4402 octets per block.

The downlink block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 4757 octets per block.

The payload block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 6204 octets per block.

The traffic block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 325 octets per block.

```
0x7E | hdr(12B) | body(324B) | chk(1B) | 0x7E
```

### 8.4 Position reporting - limits

The position block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 6845 octets per block.

The payload block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 7543 octets per block.

The payload block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 2410 octets per block.

The consumption block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 8181 octets per block.

The broadcast block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 3109 octets per block.

```
0x7E | hdr(12B) | body(320B) | chk(1B) | 0x7E
```

### 8.5 Position reporting - format

The downlink block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 8034 octets per block.

The consumption block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 4817 octets per block.

The consumption block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 5486 octets per block.

The downlink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 1208 octets per block.

The telemetry block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 2889 octets per block.

The uplink block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 820 octets per block.

The traffic block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 7277 octets per block.

```
0x7E | hdr(14B) | body(508B) | chk(1B) | 0x7E
```

### 8.6 Position reporting - example

The payload block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 266 octets per block.

The downlink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 1774 octets per block.

The bandwidth block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 8758 octets per block.

The consumption block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 6384 octets per block.

The payload block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 7630 octets per block.

```
0x7E | hdr(12B) | body(148B) | chk(1B) | 0x7E
```

## 9. Batch reporting

### 9.1 Batch reporting - format

The payload block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 7531 octets per block.

The uplink block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 812 octets per block.

The egress block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 6274 octets per block.

The position block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 3254 octets per block.

The broadcast block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 3322 octets per block.

The broadcast block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 5480 octets per block.

The consumption block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 2859 octets per block.

The position block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 5238 octets per block.

```
0x7E | hdr(12B) | body(461B) | chk(1B) | 0x7E
```

### 9.2 Batch reporting - errors

The traffic block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2980 octets per block.

The payload block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 1167 octets per block.

The downlink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 5777 octets per block.

The egress block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 245 octets per block.

The downlink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 3318 octets per block.

The telemetry block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 4699 octets per block.

```
0x7E | hdr(15B) | body(230B) | chk(1B) | 0x7E
```

### 9.3 Batch reporting - format

The position block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 2428 octets per block.

The bandwidth block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 518 octets per block.

The uplink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 1157 octets per block.

The consumption block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 5842 octets per block.

The socket block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 5264 octets per block.

The position block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 2675 octets per block.

The socket block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 2649 octets per block.

The position block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 8992 octets per block.

The bandwidth block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 6346 octets per block.

```
0x7E | hdr(12B) | body(678B) | chk(1B) | 0x7E
```

### 9.4 Batch reporting - rules

The position block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 3329 octets per block.

The consumption block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 3270 octets per block.

The egress block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 5004 octets per block.

The position block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 4120 octets per block.

The bandwidth block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 1252 octets per block.

The broadcast block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8582 octets per block.

The egress block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 1594 octets per block.

```
0x7E | hdr(15B) | body(35B) | chk(1B) | 0x7E
```

### 9.5 Batch reporting - errors

The traffic block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 3122 octets per block.

The traffic block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 7492 octets per block.

The socket block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 2529 octets per block.

The socket block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 6512 octets per block.

The socket block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 665 octets per block.

The telemetry block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 1121 octets per block.

```
0x7E | hdr(14B) | body(123B) | chk(1B) | 0x7E
```

### 9.6 Batch reporting - compatibility

The payload block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 1272 octets per block.

The telemetry block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 3660 octets per block.

The bandwidth block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 3335 octets per block.

The egress block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 6782 octets per block.

The payload block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 2500 octets per block.

The position block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 2509 octets per block.

```
0x7E | hdr(13B) | body(608B) | chk(1B) | 0x7E
```

## 10. Bandwidth control

### 10.1 Bandwidth control - example

The downlink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 1776 octets per block.

The position block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 2295 octets per block.

The downlink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8914 octets per block.

The downlink block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 1007 octets per block.

The payload block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 8941 octets per block.

The broadcast block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 7089 octets per block.

```
0x7E | hdr(12B) | body(868B) | chk(1B) | 0x7E
```

### 10.2 Bandwidth control - rules

The consumption block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2119 octets per block.

The consumption block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 937 octets per block.

The bandwidth block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 1803 octets per block.

The downlink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 2491 octets per block.

The bandwidth block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 5587 octets per block.

```
0x7E | hdr(14B) | body(119B) | chk(1B) | 0x7E
```

### 10.3 Bandwidth control - errors

The telemetry block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 5936 octets per block.

The payload block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 5990 octets per block.

The traffic block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 5290 octets per block.

The telemetry block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 2570 octets per block.

The downlink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 7408 octets per block.

The uplink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 5580 octets per block.

The socket block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 4450 octets per block.

The telemetry block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 4750 octets per block.

```
0x7E | hdr(14B) | body(685B) | chk(1B) | 0x7E
```

### 10.4 Bandwidth control - rules

The position block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 4294 octets per block.

The position block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 8619 octets per block.

The broadcast block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 5485 octets per block.

The payload block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 609 octets per block.

The downlink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 3040 octets per block.

The socket block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 3362 octets per block.

The egress block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 2496 octets per block.

The telemetry block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 1405 octets per block.

The traffic block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 5767 octets per block.

```
0x7E | hdr(15B) | body(173B) | chk(1B) | 0x7E
```

### 10.5 Bandwidth control - example

The telemetry block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 302 octets per block.

The payload block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 6258 octets per block.

The telemetry block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 254 octets per block.

The position block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 8508 octets per block.

The traffic block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2599 octets per block.

The position block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 3955 octets per block.

The consumption block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 1955 octets per block.

```
0x7E | hdr(12B) | body(865B) | chk(1B) | 0x7E
```

### 10.6 Bandwidth control - compatibility

The payload block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 2297 octets per block.

The position block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 4556 octets per block.

The position block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 7616 octets per block.

The socket block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 6936 octets per block.

The traffic block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 4916 octets per block.

The telemetry block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 4179 octets per block.

```
0x7E | hdr(13B) | body(555B) | chk(1B) | 0x7E
```

## 11. Codec negotiation

### 11.1 Codec negotiation - errors

The telemetry block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 1556 octets per block.

The downlink block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 1233 octets per block.

The egress block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 7381 octets per block.

The payload block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 2021 octets per block.

The uplink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 1358 octets per block.

The bandwidth block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 7694 octets per block.

The payload block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 5872 octets per block.

The uplink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 2690 octets per block.

The downlink block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 1274 octets per block.

```
0x7E | hdr(12B) | body(316B) | chk(1B) | 0x7E
```

### 11.2 Codec negotiation - limits

The position block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2271 octets per block.

The telemetry block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 7287 octets per block.

The telemetry block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 7993 octets per block.

The position block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 3311 octets per block.

The uplink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 3476 octets per block.

The traffic block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 5818 octets per block.

The downlink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 3061 octets per block.

```
0x7E | hdr(14B) | body(556B) | chk(1B) | 0x7E
```

### 11.3 Codec negotiation - limits

The telemetry block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 2094 octets per block.

The broadcast block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 6388 octets per block.

The broadcast block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 8717 octets per block.

The downlink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 4060 octets per block.

The telemetry block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 3373 octets per block.

The telemetry block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 5350 octets per block.

```
0x7E | hdr(14B) | body(206B) | chk(1B) | 0x7E
```

### 11.4 Codec negotiation - example

The downlink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 6551 octets per block.

The payload block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 8469 octets per block.

The broadcast block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 3766 octets per block.

The uplink block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8871 octets per block.

The downlink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 5032 octets per block.

The socket block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 5955 octets per block.

```
0x7E | hdr(14B) | body(521B) | chk(1B) | 0x7E
```

### 11.5 Codec negotiation - compatibility

The position block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 233 octets per block.

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 5769 octets per block.

The socket block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 2170 octets per block.

The telemetry block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 7796 octets per block.

The traffic block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 5758 octets per block.

The uplink block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 4956 octets per block.

```
0x7E | hdr(14B) | body(668B) | chk(1B) | 0x7E
```

### 11.6 Codec negotiation - limits

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 2820 octets per block.

The payload block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 7774 octets per block.

The position block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 6301 octets per block.

The socket block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 4209 octets per block.

The downlink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 7402 octets per block.

```
0x7E | hdr(13B) | body(783B) | chk(1B) | 0x7E
```

## 12. Fragmentation

### 12.1 Fragmentation - example

The broadcast block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 3676 octets per block.

The traffic block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 4454 octets per block.

The broadcast block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 6415 octets per block.

The egress block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 8499 octets per block.

The traffic block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 5116 octets per block.

The telemetry block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 569 octets per block.

```
0x7E | hdr(12B) | body(199B) | chk(1B) | 0x7E
```

### 12.2 Fragmentation - example

The bandwidth block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 487 octets per block.

The traffic block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 7098 octets per block.

The uplink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 6539 octets per block.

The downlink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 4321 octets per block.

The bandwidth block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 2525 octets per block.

The consumption block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 5541 octets per block.

The socket block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 938 octets per block.

```
0x7E | hdr(13B) | body(624B) | chk(1B) | 0x7E
```

### 12.3 Fragmentation - compatibility

The payload block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 8850 octets per block.

The telemetry block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 1229 octets per block.

The payload block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 8970 octets per block.

The consumption block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 6189 octets per block.

The traffic block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 1955 octets per block.

The payload block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 2373 octets per block.

```
0x7E | hdr(15B) | body(66B) | chk(1B) | 0x7E
```

### 12.4 Fragmentation - format

The egress block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2270 octets per block.

The socket block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 4225 octets per block.

The uplink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 3921 octets per block.

The consumption block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8710 octets per block.

The uplink block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 4318 octets per block.

```
0x7E | hdr(14B) | body(853B) | chk(1B) | 0x7E
```

### 12.5 Fragmentation - format

The position block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 4795 octets per block.

The socket block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 5950 octets per block.

The consumption block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 6084 octets per block.

The bandwidth block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 1595 octets per block.

The broadcast block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 4648 octets per block.

The socket block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 315 octets per block.

The uplink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 7386 octets per block.

The payload block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 2908 octets per block.

The socket block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 3955 octets per block.

```
0x7E | hdr(14B) | body(496B) | chk(1B) | 0x7E
```

### 12.6 Fragmentation - limits

The telemetry block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 4236 octets per block.

The downlink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 7015 octets per block.

The telemetry block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 8450 octets per block.

The downlink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 2117 octets per block.

The broadcast block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 5276 octets per block.

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 2136 octets per block.

The downlink block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 8796 octets per block.

The broadcast block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 1127 octets per block.

```
0x7E | hdr(16B) | body(266B) | chk(1B) | 0x7E
```

## 13. Resend and acknowledgement

### 13.1 Resend and acknowledgement - limits

The uplink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 7553 octets per block.

The egress block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 8776 octets per block.

The payload block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 8356 octets per block.

The telemetry block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 5487 octets per block.

The broadcast block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 8154 octets per block.

The socket block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 916 octets per block.

The broadcast block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 649 octets per block.

The egress block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 2021 octets per block.

```
0x7E | hdr(14B) | body(579B) | chk(1B) | 0x7E
```

### 13.2 Resend and acknowledgement - format

The payload block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 497 octets per block.

The payload block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 7628 octets per block.

The consumption block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 1988 octets per block.

The traffic block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 5114 octets per block.

The consumption block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 5420 octets per block.

The uplink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2638 octets per block.

The downlink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 8488 octets per block.

The traffic block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 4404 octets per block.

```
0x7E | hdr(13B) | body(307B) | chk(1B) | 0x7E
```

### 13.3 Resend and acknowledgement - rules

The telemetry block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 7278 octets per block.

The downlink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 1791 octets per block.

The traffic block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 1312 octets per block.

The traffic block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 1129 octets per block.

The socket block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 3794 octets per block.

The egress block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 3851 octets per block.

The traffic block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 4156 octets per block.

```
0x7E | hdr(15B) | body(164B) | chk(1B) | 0x7E
```

### 13.4 Resend and acknowledgement - example

The telemetry block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 7885 octets per block.

The traffic block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 942 octets per block.

The egress block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 5518 octets per block.

The payload block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 3754 octets per block.

The consumption block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 2887 octets per block.

The bandwidth block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 4417 octets per block.

The payload block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 4651 octets per block.

```
0x7E | hdr(13B) | body(224B) | chk(1B) | 0x7E
```

### 13.5 Resend and acknowledgement - compatibility

The traffic block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 4962 octets per block.

The traffic block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 4505 octets per block.

The downlink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 8623 octets per block.

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 7810 octets per block.

The consumption block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 941 octets per block.

The egress block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 3062 octets per block.

The socket block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 371 octets per block.

The traffic block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 6338 octets per block.

```
0x7E | hdr(15B) | body(845B) | chk(1B) | 0x7E
```

### 13.6 Resend and acknowledgement - rules

The uplink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 4183 octets per block.

The position block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 1775 octets per block.

The payload block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 5729 octets per block.

The consumption block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8644 octets per block.

The uplink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 6178 octets per block.

```
0x7E | hdr(14B) | body(755B) | chk(1B) | 0x7E
```

## 14. Aggregation window

### 14.1 Aggregation window - compatibility

The bandwidth block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 7339 octets per block.

The telemetry block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 1501 octets per block.

The consumption block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 4960 octets per block.

The bandwidth block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 7265 octets per block.

The telemetry block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 7863 octets per block.

The egress block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 8954 octets per block.

```
0x7E | hdr(12B) | body(256B) | chk(1B) | 0x7E
```

### 14.2 Aggregation window - format

The broadcast block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 7102 octets per block.

The egress block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 7580 octets per block.

The uplink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 3142 octets per block.

The broadcast block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 336 octets per block.

The broadcast block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 2377 octets per block.

The socket block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 5748 octets per block.

```
0x7E | hdr(16B) | body(411B) | chk(1B) | 0x7E
```

### 14.3 Aggregation window - format

The position block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 1957 octets per block.

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 8603 octets per block.

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 6051 octets per block.

The socket block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 306 octets per block.

The consumption block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 6378 octets per block.

The broadcast block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 6710 octets per block.

The consumption block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 4649 octets per block.

```
0x7E | hdr(16B) | body(299B) | chk(1B) | 0x7E
```

### 14.4 Aggregation window - limits

The uplink block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 5725 octets per block.

The telemetry block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 8449 octets per block.

The broadcast block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 728 octets per block.

The traffic block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 8666 octets per block.

The uplink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 6584 octets per block.

The consumption block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 1621 octets per block.

The socket block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 2323 octets per block.

The traffic block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 7106 octets per block.

The position block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 2443 octets per block.

```
0x7E | hdr(13B) | body(484B) | chk(1B) | 0x7E
```

### 14.5 Aggregation window - limits

The telemetry block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 6331 octets per block.

The uplink block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 1964 octets per block.

The position block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 2297 octets per block.

The telemetry block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 4293 octets per block.

The downlink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 5698 octets per block.

The uplink block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 1278 octets per block.

```
0x7E | hdr(15B) | body(740B) | chk(1B) | 0x7E
```

### 14.6 Aggregation window - format

The telemetry block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 7109 octets per block.

The broadcast block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 4983 octets per block.

The socket block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 3575 octets per block.

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2506 octets per block.

The consumption block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 4222 octets per block.

The uplink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 6878 octets per block.

The position block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 6636 octets per block.

The payload block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 5957 octets per block.

```
0x7E | hdr(12B) | body(491B) | chk(1B) | 0x7E
```

## 15. Block compression

### 15.1 Block compression - format

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8811 octets per block.

The bandwidth block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 5114 octets per block.

The egress block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 6981 octets per block.

The telemetry block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 1822 octets per block.

The payload block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 1551 octets per block.

The broadcast block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 6366 octets per block.

The consumption block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 4661 octets per block.

The payload block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 4999 octets per block.

```
0x7E | hdr(12B) | body(607B) | chk(1B) | 0x7E
```

### 15.2 Block compression - example

The telemetry block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 696 octets per block.

The traffic block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 2740 octets per block.

The downlink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 5569 octets per block.

The uplink block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 5579 octets per block.

The bandwidth block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 5136 octets per block.

The consumption block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 3901 octets per block.

The telemetry block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 4576 octets per block.

The uplink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 1684 octets per block.

The position block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 1513 octets per block.

```
0x7E | hdr(16B) | body(190B) | chk(1B) | 0x7E
```

### 15.3 Block compression - rules

The socket block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 767 octets per block.

The position block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 691 octets per block.

The payload block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 2858 octets per block.

The uplink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 6624 octets per block.

The socket block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 3242 octets per block.

The position block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 4762 octets per block.

The traffic block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2575 octets per block.

The socket block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 1095 octets per block.

The broadcast block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 710 octets per block.

```
0x7E | hdr(16B) | body(790B) | chk(1B) | 0x7E
```

### 15.4 Block compression - compatibility

The position block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 1389 octets per block.

The position block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 6790 octets per block.

The payload block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 5333 octets per block.

The uplink block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 8478 octets per block.

The consumption block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 5087 octets per block.

```
0x7E | hdr(16B) | body(686B) | chk(1B) | 0x7E
```

### 15.5 Block compression - rules

The payload block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 3616 octets per block.

The egress block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 3577 octets per block.

The position block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 8515 octets per block.

The broadcast block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 6586 octets per block.

The position block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 2755 octets per block.

```
0x7E | hdr(15B) | body(607B) | chk(1B) | 0x7E
```

### 15.6 Block compression - format

The telemetry block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 1882 octets per block.

The socket block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 3137 octets per block.

The socket block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 7208 octets per block.

The payload block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 5752 octets per block.

The consumption block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 3495 octets per block.

The telemetry block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 833 octets per block.

The payload block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 5585 octets per block.

The position block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 1004 octets per block.

```
0x7E | hdr(15B) | body(131B) | chk(1B) | 0x7E
```

## 16. Uplink quota

### 16.1 Uplink quota - limits

The consumption block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 6493 octets per block.

The socket block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 3533 octets per block.

The uplink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 3715 octets per block.

The bandwidth block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 7710 octets per block.

The position block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 546 octets per block.

The egress block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 7582 octets per block.

The socket block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 7747 octets per block.

```
0x7E | hdr(13B) | body(251B) | chk(1B) | 0x7E
```

### 16.2 Uplink quota - errors

The traffic block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 8293 octets per block.

The payload block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 4220 octets per block.

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 6055 octets per block.

The downlink block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 2975 octets per block.

The broadcast block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 7684 octets per block.

The consumption block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 2577 octets per block.

The telemetry block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 8792 octets per block.

The broadcast block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 1307 octets per block.

```
0x7E | hdr(13B) | body(211B) | chk(1B) | 0x7E
```

### 16.3 Uplink quota - rules

The payload block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 8257 octets per block.

The traffic block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 7298 octets per block.

The socket block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 3135 octets per block.

The uplink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 7524 octets per block.

The uplink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 3730 octets per block.

The consumption block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 5876 octets per block.

The consumption block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 1570 octets per block.

The telemetry block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 5427 octets per block.

```
0x7E | hdr(15B) | body(839B) | chk(1B) | 0x7E
```

### 16.4 Uplink quota - format

The bandwidth block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 5677 octets per block.

The downlink block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 3937 octets per block.

The egress block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 3159 octets per block.

The consumption block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 3382 octets per block.

The uplink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 2349 octets per block.

```
0x7E | hdr(12B) | body(800B) | chk(1B) | 0x7E
```

### 16.5 Uplink quota - rules

The consumption block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 4938 octets per block.

The position block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 4356 octets per block.

The socket block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 4499 octets per block.

The egress block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 1544 octets per block.

The consumption block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 5088 octets per block.

The telemetry block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 7356 octets per block.

The broadcast block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 7908 octets per block.

The egress block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 3957 octets per block.

The socket block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 2252 octets per block.

```
0x7E | hdr(15B) | body(113B) | chk(1B) | 0x7E
```

### 16.6 Uplink quota - rules

The payload block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 7087 octets per block.

The egress block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 5035 octets per block.

The payload block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 3379 octets per block.

The consumption block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 8751 octets per block.

The uplink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 3035 octets per block.

The consumption block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 8846 octets per block.

```
0x7E | hdr(13B) | body(59B) | chk(1B) | 0x7E
```

## 17. Multicast and broadcast

### 17.1 Multicast and broadcast - errors

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 687 octets per block.

The socket block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 4210 octets per block.

The payload block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 1535 octets per block.

The position block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 890 octets per block.

The telemetry block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 5396 octets per block.

```
0x7E | hdr(13B) | body(50B) | chk(1B) | 0x7E
```

### 17.2 Multicast and broadcast - limits

The egress block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 3089 octets per block.

The bandwidth block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 8563 octets per block.

The broadcast block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 4075 octets per block.

The payload block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 4114 octets per block.

The egress block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 1859 octets per block.

The traffic block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 5828 octets per block.

The egress block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 5772 octets per block.

The position block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 3960 octets per block.

The broadcast block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 8429 octets per block.

```
0x7E | hdr(12B) | body(847B) | chk(1B) | 0x7E
```

### 17.3 Multicast and broadcast - rules

The position block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 7747 octets per block.

The egress block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 1537 octets per block.

The socket block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2661 octets per block.

The bandwidth block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 4281 octets per block.

The egress block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 7858 octets per block.

```
0x7E | hdr(16B) | body(509B) | chk(1B) | 0x7E
```

### 17.4 Multicast and broadcast - limits

The egress block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 2429 octets per block.

The broadcast block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 7779 octets per block.

The socket block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 7044 octets per block.

The egress block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 3487 octets per block.

The traffic block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 3716 octets per block.

```
0x7E | hdr(16B) | body(692B) | chk(1B) | 0x7E
```

### 17.5 Multicast and broadcast - rules

The bandwidth block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 2360 octets per block.

The position block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 3773 octets per block.

The position block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 1148 octets per block.

The consumption block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 7610 octets per block.

The downlink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 1839 octets per block.

```
0x7E | hdr(12B) | body(601B) | chk(1B) | 0x7E
```

### 17.6 Multicast and broadcast - rules

The consumption block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 6230 octets per block.

The position block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 5801 octets per block.

The uplink block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 6963 octets per block.

The telemetry block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 597 octets per block.

The uplink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 2794 octets per block.

The uplink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 6108 octets per block.

The bandwidth block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 7949 octets per block.

The bandwidth block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 2225 octets per block.

```
0x7E | hdr(16B) | body(528B) | chk(1B) | 0x7E
```

## 18. Link diagnostics

### 18.1 Link diagnostics - compatibility

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 2864 octets per block.

The uplink block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 7103 octets per block.

The socket block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 3046 octets per block.

The payload block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 202 octets per block.

The socket block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 1486 octets per block.

The socket block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 1555 octets per block.

```
0x7E | hdr(13B) | body(742B) | chk(1B) | 0x7E
```

### 18.2 Link diagnostics - format

The telemetry block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 3276 octets per block.

The telemetry block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 7254 octets per block.

The consumption block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 5774 octets per block.

The traffic block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 6113 octets per block.

The telemetry block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 5551 octets per block.

The position block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 2430 octets per block.

The position block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 1149 octets per block.

The downlink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 8817 octets per block.

```
0x7E | hdr(15B) | body(366B) | chk(1B) | 0x7E
```

### 18.3 Link diagnostics - limits

The broadcast block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 7630 octets per block.

The socket block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 2924 octets per block.

The egress block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 7447 octets per block.

The downlink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 5841 octets per block.

The downlink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 7688 octets per block.

The bandwidth block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 4261 octets per block.

The payload block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 5306 octets per block.

The traffic block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 4661 octets per block.

```
0x7E | hdr(16B) | body(665B) | chk(1B) | 0x7E
```

### 18.4 Link diagnostics - example

The broadcast block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 3051 octets per block.

The broadcast block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 5158 octets per block.

The position block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 8136 octets per block.

The socket block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 3957 octets per block.

The position block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 8716 octets per block.

```
0x7E | hdr(12B) | body(631B) | chk(1B) | 0x7E
```

### 18.5 Link diagnostics - rules

The telemetry block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 444 octets per block.

The broadcast block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 6348 octets per block.

The position block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 8195 octets per block.

The uplink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 8531 octets per block.

The downlink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 6097 octets per block.

The traffic block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 6099 octets per block.

```
0x7E | hdr(13B) | body(887B) | chk(1B) | 0x7E
```

### 18.6 Link diagnostics - rules

The socket block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 1450 octets per block.

The broadcast block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 7068 octets per block.

The uplink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 1856 octets per block.

The broadcast block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2226 octets per block.

The egress block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 4705 octets per block.

The telemetry block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 4040 octets per block.

The telemetry block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 8837 octets per block.

The telemetry block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 1529 octets per block.

```
0x7E | hdr(13B) | body(523B) | chk(1B) | 0x7E
```

## 19. Clock synchronisation

### 19.1 Clock synchronisation - example

The telemetry block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 8062 octets per block.

The traffic block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 1472 octets per block.

The bandwidth block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 3079 octets per block.

The payload block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 3220 octets per block.

The uplink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 6615 octets per block.

```
0x7E | hdr(12B) | body(822B) | chk(1B) | 0x7E
```

### 19.2 Clock synchronisation - format

The telemetry block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 7620 octets per block.

The telemetry block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 1314 octets per block.

The egress block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 4583 octets per block.

The telemetry block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 1210 octets per block.

The payload block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 5399 octets per block.

The bandwidth block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 7362 octets per block.

The payload block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 8930 octets per block.

The payload block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 3801 octets per block.

```
0x7E | hdr(16B) | body(245B) | chk(1B) | 0x7E
```

### 19.3 Clock synchronisation - errors

The bandwidth block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 4913 octets per block.

The consumption block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 1233 octets per block.

The downlink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 936 octets per block.

The broadcast block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 482 octets per block.

The traffic block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 6573 octets per block.

The consumption block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 3922 octets per block.

```
0x7E | hdr(14B) | body(372B) | chk(1B) | 0x7E
```

### 19.4 Clock synchronisation - limits

The telemetry block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 8991 octets per block.

The position block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 8644 octets per block.

The payload block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 1357 octets per block.

The downlink block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 8190 octets per block.

The position block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 4324 octets per block.

The position block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 6899 octets per block.

The traffic block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 3690 octets per block.

```
0x7E | hdr(16B) | body(536B) | chk(1B) | 0x7E
```

### 19.5 Clock synchronisation - limits

The payload block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 5891 octets per block.

The egress block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 7045 octets per block.

The downlink block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 4360 octets per block.

The telemetry block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 1741 octets per block.

The bandwidth block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 8815 octets per block.

The consumption block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 4632 octets per block.

The payload block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 2210 octets per block.

The bandwidth block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 4716 octets per block.

```
0x7E | hdr(13B) | body(300B) | chk(1B) | 0x7E
```

### 19.6 Clock synchronisation - rules

The position block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 2535 octets per block.

The consumption block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 6764 octets per block.

The broadcast block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 1091 octets per block.

The bandwidth block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 7028 octets per block.

The downlink block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 3374 octets per block.

```
0x7E | hdr(16B) | body(543B) | chk(1B) | 0x7E
```

## 20. Offline persistence

### 20.1 Offline persistence - example

The broadcast block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 2541 octets per block.

The bandwidth block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 8483 octets per block.

The bandwidth block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 8962 octets per block.

The bandwidth block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 1283 octets per block.

The traffic block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 5481 octets per block.

The broadcast block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 6319 octets per block.

```
0x7E | hdr(15B) | body(446B) | chk(1B) | 0x7E
```

### 20.2 Offline persistence - compatibility

The downlink block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 4105 octets per block.

The broadcast block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 1569 octets per block.

The bandwidth block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 932 octets per block.

The consumption block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 8174 octets per block.

The broadcast block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 4924 octets per block.

The downlink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 6489 octets per block.

```
0x7E | hdr(13B) | body(234B) | chk(1B) | 0x7E
```

### 20.3 Offline persistence - errors

The consumption block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 5673 octets per block.

The position block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 7840 octets per block.

The telemetry block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 491 octets per block.

The consumption block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 6756 octets per block.

The payload block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 2186 octets per block.

```
0x7E | hdr(15B) | body(747B) | chk(1B) | 0x7E
```

### 20.4 Offline persistence - format

The socket block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 4767 octets per block.

The consumption block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 563 octets per block.

The downlink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 1163 octets per block.

The uplink block is validated before entering the payload queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 7626 octets per block.

The broadcast block is validated before entering the consumption queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 5049 octets per block.

The egress block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 2124 octets per block.

The consumption block is validated before entering the egress queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 8 octets, and the collector corrects it silently. The negotiated ceiling is 800 octets per block.

```
0x7E | hdr(12B) | body(735B) | chk(1B) | 0x7E
```

### 20.5 Offline persistence - example

The broadcast block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 11 octets, and the collector corrects it silently. The negotiated ceiling is 2507 octets per block.

The consumption block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 7125 octets per block.

The position block is validated before entering the downlink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 4682 octets per block.

The uplink block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 8942 octets per block.

The socket block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 3442 octets per block.

The downlink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 3948 octets per block.

The egress block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 254 octets per block.

The downlink block is validated before entering the position queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 10 octets, and the collector corrects it silently. The negotiated ceiling is 2323 octets per block.

The broadcast block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 6 octets, and the collector corrects it silently. The negotiated ceiling is 4812 octets per block.

```
0x7E | hdr(16B) | body(554B) | chk(1B) | 0x7E
```

### 20.6 Offline persistence - rules

The telemetry block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 6268 octets per block.

The position block is validated before entering the telemetry queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 4 octets, and the collector corrects it silently. The negotiated ceiling is 6814 octets per block.

The traffic block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 5 octets, and the collector corrects it silently. The negotiated ceiling is 7937 octets per block.

The consumption block is validated before entering the traffic queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 3 octets, and the collector corrects it silently. The negotiated ceiling is 7045 octets per block.

The socket block is validated before entering the broadcast queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 4359 octets per block.

The downlink block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 12 octets, and the collector corrects it silently. The negotiated ceiling is 931 octets per block.

The payload block is validated before entering the uplink queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 9 octets, and the collector corrects it silently. The negotiated ceiling is 7107 octets per block.

The telemetry block is validated before entering the socket queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 2 octets, and the collector corrects it silently. The negotiated ceiling is 3935 octets per block.

The socket block is validated before entering the bandwidth queue. Terminals on firmware older than TK-919 rev. 4.2c report the field with an offset shifted by 7 octets, and the collector corrects it silently. The negotiated ceiling is 5173 octets per block.

```
0x7E | hdr(15B) | body(528B) | chk(1B) | 0x7E
```

