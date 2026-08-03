export interface Modem {
  name: string;
  family: string;
  tested?: boolean;
  popular?: boolean;
  arch: 'router' | 'mifi';
  note?: string;
}

export const modems: Modem[] = [
  { name: 'B310', family: 'LTE Router', arch: 'router' },
  { name: 'B311', family: 'LTE Router', arch: 'router' },
  { name: 'B312', family: 'LTE Router', arch: 'router', tested: true, popular: true, note: 'B312-929 · Orbit Star 2' },
  { name: 'B525', family: 'LTE Router', arch: 'router' },
  { name: 'B535', family: 'LTE Router', arch: 'router' },
  { name: 'B818', family: 'LTE Router', arch: 'router' },
  { name: 'E5573', family: 'Mobile WiFi', arch: 'mifi' },
  { name: 'E5577', family: 'Mobile WiFi', arch: 'mifi' },
];
