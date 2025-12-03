import * as THREE from 'three';

export enum AppState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE'
}

export interface ParticleData {
  id: number;
  treePos: THREE.Vector3;
  scatterPos: THREE.Vector3;
  color: THREE.Color;
  size: number;
  speed: number;
  phase: number;
}

export interface OrnamentData {
  id: number;
  treePos: THREE.Vector3;
  scatterPos: THREE.Vector3;
  rotation: THREE.Euler;
  scale: number;
  type: 'box' | 'bauble' | 'light' | 'gem' | 'bell' | 'ring' | 'ribbon';
  weight: number;
  color: string;
}

export const THEME = {
  emerald: '#004225',      // Deeper, more expensive looking green
  emeraldDark: '#001a0d',  // Almost black green for depth
  gold: '#FFD700',         // Classic Gold
  goldLight: '#FFF8E7',    // Champagne / White Gold
  goldDark: '#C5A000',     // Deep Gold
  gemRed: '#720e1e',       // Deep Ruby/Burgundy
  gemGreen: '#005C29',     // Jewel Green
  blackGold: '#0F0F0F',    // Luxury packaging black
  white: '#FFFFFF',
};