export interface TodoFilter {
  status: 'all' | 'active' | 'completed';
  query: string;
  onStatusChange: (status: 'all' | 'active' | 'completed') => void;
  onQueryChange: (query: string) => void;
  onReset: () => void;
}
