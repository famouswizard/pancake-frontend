import type { WormholeConnectTheme } from '@wormhole-foundation/wormhole-connect'

function darkenColor(color: string, factor: number) {
  const match = color.match(/\w\w/g)
  if (!match) return color
  const [r, g, b] = match.map((x) => Number.parseInt(x, 16))
  const newR = Math.max(0, Math.min(255, Math.round(r * factor)))
  const newG = Math.max(0, Math.min(255, Math.round(g * factor)))
  const newB = Math.max(0, Math.min(255, Math.round(b * factor)))
  // Convert RGB back to hex
  return `#${newR.toString(16)}${newG.toString(16)}${newB.toString(16)}`
}

function lightenColor(color: string, factor: number) {
  const match = color.match(/\w\w/g)
  if (!match) return color
  const [r, g, b] = match.map((x) => Number.parseInt(x, 16))
  const newR = Math.max(0, Math.min(255, Math.round(r + (255 - r) * factor)))
  const newG = Math.max(0, Math.min(255, Math.round(g + (255 - g) * factor)))
  const newB = Math.max(0, Math.min(255, Math.round(b + (255 - b) * factor)))
  return `#${newR.toString(16)}${newG.toString(16)}${newB.toString(16)}`
}

export const wormHoleDarkTheme: WormholeConnectTheme = {
  primary: {
    '50': lightenColor('#27262c', 0.9),
    '100': lightenColor('#27262c', 0.8),
    '200': lightenColor('#27262c', 0.7),
    '300': lightenColor('#27262c', 0.6),
    '400': lightenColor('#27262c', 0.5),
    '500': lightenColor('#27262c', 0.4),
    '600': lightenColor('#27262c', 0.3),
    '700': lightenColor('#27262c', 0.2),
    '800': lightenColor('#27262c', 0.1),
    '900': '#27262c',
    A100: lightenColor('#27262c', 0.8),
    A200: lightenColor('#27262c', 0.7),
    A400: lightenColor('#27262c', 0.5),
    A700: lightenColor('#27262c', 0.2),
  },
  secondary: {
    '50': lightenColor('#372f46', 0.9),
    '100': lightenColor('#372f46', 0.8),
    '200': lightenColor('#372f46', 0.7),
    '300': lightenColor('#372f46', 0.6),
    '400': lightenColor('#372f46', 0.5),
    '500': lightenColor('#372f46', 0.4),
    '600': lightenColor('#372f46', 0.3),
    '700': lightenColor('#372f46', 0.2),
    '800': lightenColor('#372f46', 0.1),
    '900': '#372f46',
    A100: lightenColor('#372f46', 0.8),
    A200: lightenColor('#372f46', 0.7),
    A400: lightenColor('#372f46', 0.5),
    A700: lightenColor('#372f46', 0.2),
  },
  divider: '#383241',
  background: { default: 'rgb(53,54,88)' },
  text: { primary: '#ffffff', secondary: '#b8acd2' },
  error: {
    '50': lightenColor('#ED4B9E', 0.9),
    '100': lightenColor('#ED4B9E', 0.8),
    '200': lightenColor('#ED4B9E', 0.7),
    '300': lightenColor('#ED4B9E', 0.6),
    '400': lightenColor('#ED4B9E', 0.5),
    '500': lightenColor('#ED4B9E', 0.4),
    '600': lightenColor('#ED4B9E', 0.3),
    '700': lightenColor('#ED4B9E', 0.2),
    '800': lightenColor('#ED4B9E', 0.1),
    '900': '#ED4B9E',
    A100: lightenColor('#ED4B9E', 0.8),
    A200: lightenColor('#ED4B9E', 0.7),
    A400: lightenColor('#ED4B9E', 0.5),
    A700: lightenColor('#ED4B9E', 0.2),
  },
  info: {
    '50': darkenColor('#3c3742', 0.9),
    '100': darkenColor('#3c3742', 0.8),
    '200': darkenColor('#3c3742', 0.7),
    '300': darkenColor('#3c3742', 0.6),
    '400': darkenColor('#3c3742', 0.5),
    '500': darkenColor('#3c3742', 0.4),
    '600': darkenColor('#3c3742', 0.3),
    '700': darkenColor('#3c3742', 0.2),
    '800': darkenColor('#3c3742', 0.1),
    '900': '#3c3742',
    A100: darkenColor('#3c3742', 0.8),
    A200: darkenColor('#3c3742', 0.7),
    A400: darkenColor('#3c3742', 0.5),
    A700: darkenColor('#3c3742', 0.2),
  },
  success: {
    '50': lightenColor('#31D0AA', 0.9),
    '100': lightenColor('#31D0AA', 0.8),
    '200': lightenColor('#31D0AA', 0.7),
    '300': lightenColor('#31D0AA', 0.6),
    '400': lightenColor('#31D0AA', 0.5),
    '500': lightenColor('#31D0AA', 0.4),
    '600': lightenColor('#31D0AA', 0.3),
    '700': lightenColor('#31D0AA', 0.2),
    '800': lightenColor('#31D0AA', 0.1),
    '900': '#31D0AA',
    A100: lightenColor('#31D0AA', 0.8),
    A200: lightenColor('#31D0AA', 0.7),
    A400: lightenColor('#31D0AA', 0.5),
    A700: lightenColor('#31D0AA', 0.2),
  },
  warning: {
    '50': lightenColor('#FFB237', 0.9),
    '100': lightenColor('#FFB237', 0.8),
    '200': lightenColor('#FFB237', 0.7),
    '300': lightenColor('#FFB237', 0.6),
    '400': lightenColor('#FFB237', 0.5),
    '500': darkenColor('#FFB237', 0.4),
    '600': lightenColor('#FFB237', 0.3),
    '700': lightenColor('#FFB237', 0.2),
    '800': lightenColor('#FFB237', 0.1),
    '900': '#FFB237',
    A100: lightenColor('#FFB237', 0.8),
    A200: lightenColor('#FFB237', 0.7),
    A400: lightenColor('#FFB237', 0.5),
    A700: lightenColor('#FFB237', 0.2),
  },
  button: {
    primary: '#1FC7D4',
    primaryText: '#27262c',
    disabled: '#3c3742',
    disabledText: '#666171',
    action: '#0098A1',
    actionText: '#27262c',
    hover: '#53DEE9',
  },
  options: { hover: '#3c3742', select: 'rgb(83,84,118, 0.3)' },
  card: { background: '#27262c', secondary: 'rgb(93,94,128, 0.3)', elevation: '5px 5px 15px 5px rgb(33,34,68)' },
  popover: { background: '#27262c', secondary: '#372f46', elevation: '5px 5px 15px 5px rgb(33,34,68)' },
  modal: { background: 'rgb(53,54,88)' },
  font: { primary: 'Kanit', header: 'Kanit' },
  mode: 'dark',
}

export const wormHoleLightTheme: WormholeConnectTheme = {
  primary: {
    '50': '#161718',
    '100': '#2d2e30',
    '200': '#444548',
    '300': '#5b5c60',
    '400': '#727479',
    '500': '#898b91',
    '600': '#a0a2a9',
    '700': '#b7b9c1',
    '800': '#ced0d9',
    '900': '#E5E8F2',
    A100: '#ceced1',
    A200: '#9d9ea4',
    A400: '#535660',
    A700: '#0a0e1c',
  },
  secondary: {
    '50': lightenColor('#edeaf4', 0.9),
    '100': lightenColor('#edeaf4', 0.8),
    '200': lightenColor('#edeaf4', 0.7),
    '300': lightenColor('#edeaf4', 0.6),
    '400': lightenColor('#edeaf4', 0.5),
    '500': lightenColor('#edeaf4', 0.4),
    '600': lightenColor('#edeaf4', 0.3),
    '700': lightenColor('#edeaf4', 0.2),
    '800': lightenColor('#edeaf4', 0.1),
    '900': '#edeaf4',
    A100: lightenColor('#edeaf4', 0.8),
    A200: lightenColor('#edeaf4', 0.7),
    A400: lightenColor('#edeaf4', 0.5),
    A700: lightenColor('#edeaf4', 0.2),
  },
  divider: '#E7E3EB',
  background: { default: 'rgb(233,247,255)' },
  text: { primary: '#280D5F', secondary: '#7A6EAA' },
  error: {
    '50': lightenColor('#ED4B9E', 0.9),
    '100': lightenColor('#ED4B9E', 0.8),
    '200': lightenColor('#ED4B9E', 0.7),
    '300': lightenColor('#ED4B9E', 0.6),
    '400': lightenColor('#ED4B9E', 0.5),
    '500': lightenColor('#ED4B9E', 0.4),
    '600': lightenColor('#ED4B9E', 0.3),
    '700': lightenColor('#ED4B9E', 0.2),
    '800': lightenColor('#ED4B9E', 0.1),
    '900': '#ED4B9E',
    A100: lightenColor('#ED4B9E', 0.8),
    A200: lightenColor('#ED4B9E', 0.7),
    A400: lightenColor('#ED4B9E', 0.5),
    A700: lightenColor('#ED4B9E', 0.2),
  },
  info: {
    '50': lightenColor('rgb(233,247,255)', 0.9),
    '100': lightenColor('rgb(233,247,255)', 0.8),
    '200': lightenColor('rgb(233,247,255)', 0.7),
    '300': lightenColor('rgb(233,247,255)', 0.6),
    '400': lightenColor('rgb(233,247,255)', 0.5),
    '500': lightenColor('rgb(233,247,255)', 0.4),
    '600': lightenColor('rgb(233,247,255)', 0.3),
    '700': lightenColor('rgb(233,247,255)', 0.2),
    '800': lightenColor('rgb(233,247,255)', 0.1),
    '900': 'rgb(233,247,255)',
    A100: lightenColor('rgb(233,247,255)', 0.8),
    A200: lightenColor('rgb(233,247,255)', 0.7),
    A400: lightenColor('rgb(233,247,255)', 0.5),
    A700: lightenColor('rgb(233,247,255)', 0.2),
  },
  success: {
    '50': lightenColor('#31D0AA', 0.9),
    '100': lightenColor('#31D0AA', 0.8),
    '200': lightenColor('#31D0AA', 0.7),
    '300': lightenColor('#31D0AA', 0.6),
    '400': lightenColor('#31D0AA', 0.5),
    '500': lightenColor('#31D0AA', 0.4),
    '600': lightenColor('#31D0AA', 0.3),
    '700': lightenColor('#31D0AA', 0.2),
    '800': lightenColor('#31D0AA', 0.1),
    '900': '#31D0AA',
    A100: lightenColor('#31D0AA', 0.8),
    A200: lightenColor('#31D0AA', 0.7),
    A400: lightenColor('#31D0AA', 0.5),
    A700: lightenColor('#31D0AA', 0.2),
  },
  warning: {
    '50': lightenColor('#FFB237', 0.9),
    '100': lightenColor('#FFB237', 0.8),
    '200': lightenColor('#FFB237', 0.7),
    '300': lightenColor('#FFB237', 0.6),
    '400': lightenColor('#FFB237', 0.5),
    '500': lightenColor('#FFB237', 0.4),
    '600': lightenColor('#FFB237', 0.3),
    '700': lightenColor('#FFB237', 0.2),
    '800': lightenColor('#FFB237', 0.1),
    '900': '#FFB237',
    A100: lightenColor('#FFB237', 0.8),
    A200: lightenColor('#FFB237', 0.7),
    A400: lightenColor('#FFB237', 0.5),
    A700: lightenColor('#FFB237', 0.2),
  },
  button: {
    primary: '#1FC7D4',
    primaryText: '#ffffff',
    disabled: '#e9eaeb',
    disabledText: '#edeaf4',
    action: '#0098A1',
    actionText: '#ffffff',
    hover: '#53DEE9',
  },
  options: { hover: '#edeaf4', select: 'rgb(193,207,215, 0.3)' },
  card: { background: '#edeaf4', secondary: '#ffffff', elevation: '5px 5px 10px 5px #CCD2E7' },
  popover: { background: '#edeaf4', secondary: '#ffffff', elevation: '5px 5px 10px 5px #CCD2E7' },
  modal: { background: 'rgb(233,247,255)' },
  font: { primary: 'Kanit', header: 'Kanit' },
  mode: 'light',
}

enum Modes {
  light = 'light',
  dark = 'dark',
}

export const Themes: { [mode in Modes]: WormholeConnectTheme } = {
  light: wormHoleLightTheme,
  dark: wormHoleDarkTheme,
}
