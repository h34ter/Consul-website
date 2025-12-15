export type StaircaseCardType = {
  id: string;
  type: 'problem' | 'solution' | 'final';
  text: string;
  icon?: string;
};

export const staircaseCards: StaircaseCardType[] = [
  { id: 'card-1', type: 'problem', text: 'Current chaos', icon: '⚠️' },
  { id: 'card-2', type: 'problem', text: 'Lost opportunities', icon: '⚠️' },
  { id: 'card-3', type: 'solution', text: 'Lead pipeline', icon: '✓' },
  { id: 'card-4', type: 'problem', text: 'Churning clients', icon: '⚠️' },
  { id: 'card-5', type: 'solution', text: 'Client lifecycle', icon: '✓' },
  { id: 'card-6', type: 'problem', text: 'Compliance chaos', icon: '⚠️' },
  { id: 'card-7', type: 'solution', text: 'Audit automation', icon: '✓' },
  { id: 'card-8', type: 'final', text: 'Autonomous Operations', icon: '🎯' },
];
