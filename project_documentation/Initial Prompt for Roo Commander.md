---
type: Page
title: Initial Prompt for Roo Commander
description: null
icon: null
createdAt: "2025-05-11T05:35:09.654Z"
creationDate: 2025-05-11 00:35
modificationDate: 2025-05-11 00:38
tags: []
coverImage: null
---

# Initial Prompt for Roo Commander

## **Bunny Warren Digital Adaptation Technical Specification**

_Create a browser-based card game implementation using the following stack and requirements:_

### **Core Game Loop Priorities**

#### **Card Flow System**:

- Implement deck management with clean draw/discard mechanics

#### **Warren Building Logic**:

- Color matching system with protection states (Bunny Bond)

#### **Card Abilities Engine**:

- Fox (instant play), Carrot (delayed/stored), Bunny Bond (protection)

#### Card Types & Numbers

**Bunnies**

- 4 #E5484D | #191111
- 4 #F76B15 | #12110F
- 4 #46A758 | #0E1511
- 4 #5B5BD6 | #13131E

**Special Cards**

- 5 carrots
- 1 fox
- 2 bunny bond

**B&W**

- 4 sheep
- 4 chicken
- 4 cow
- 4 pigs
- 4 horses
- 4 llama
- 4 tusay trees

#### **Win Condition Check**:

- Immediate victory detection on 4-of-a-color warren creation

### **Visual Tech Stack Requirements**

#### **3D Card System**:

**Three.js + React Three Fiber + Drei for:**

- Physically accurate card flipping/rotation

- Stack visualization for deck/discard piles

- Bunny Warren 3D particle effects on win

#### **UI Layer**:

- Radix UI for accessible dialogs/overlays

- TailwindCSS for responsive player boards

- Framer Motion for card transitions/draw animations

#### **Special FX**:

- Anime.js synchronized animations for:

  - Fox attacks (card disintegration effect)

  - Carrot steals (color transfer animations)

  - Warren completion sequences

### **Critical Interaction Patterns**

1. Card drag/hand physics with collision boundaries

2. Context-sensitive right-click menu for Carrot/Bunny Bond

3. Real-time opponent state indicators (protected groups)

4. Dynamic card highlight states for playable actions

### **Architecture Constraints**

- Next.js 14 App Router with RSC patterns

- Game state management via Zustand

- Three.js scene composition with Drei helpers

- Mobile-first responsive layout system

### **Optimization Requirements**

- WebGL performance profile for 50+ card instances

- Asset preloading strategy for card textures

- Animation LOD system for mobile/desktop

- WebSocket-ready architecture (future multiplayer)

### **First Milestone Scope**

Single-player MVP against AI opponents demonstrating:

- Core card flow mechanics

- Basic special card interactions

- Warren victory condition

- Mobile/desktop responsive canvas

### **Art Direction Notes**

- Playful aesthetic with soft shadows

- Card designs emphasizing color differentiation

- Subtle ambient animations in bunny cards

- Clear visual states for protected groups
