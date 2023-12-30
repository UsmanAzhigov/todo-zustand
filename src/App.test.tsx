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
  
  test('should return the default object with empty values and mocked functions', () => {
    const result = default();

    expect(result.input).toBe('');
    expect(result.tasks).toEqual([]);
    expect(result.checkedTasks).toEqual([]);
    expect(result.sortOrder).toBe('asc');
    expect(result.setInput).toHaveBeenCalled();
    expect(result.addTask).toHaveBeenCalled();
    expect(result.allClear).toHaveBeenCalled();
    expect(result.onDelete).toHaveBeenCalled();
    expect(result.onDeleteSelected).toHaveBeenCalled();
    expect(result.onChecked).toHaveBeenCalled();
    expect(result.toggleSortOrder).toHaveBeenCalled();
  });
});
