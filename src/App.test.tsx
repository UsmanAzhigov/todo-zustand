import { render } from '@testing-library/react';
import App from './App';

jest.mock('./taskStore', () => ({
  __esModule: true,
  default: () => ({
    input: '',
    tasks: [],
    checkedTasks: [],
    sortOrder: 'asc',
    setInput: jest.fn(),
    addTask: jest.fn(),
    allClear: jest.fn(),
    onDelete: jest.fn(),
    onDeleteSelected: jest.fn(),
    onChecked: jest.fn(),
    toggleSortOrder: jest.fn(),
  }),
}));

describe('App Component', () => {
  it('renders without crashing', () => {
    try {
      const { container } = render(<App />);
      expect(container).toBeInTheDocument();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
