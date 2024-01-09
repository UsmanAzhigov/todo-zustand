import create from 'zustand';
import { TaskStore } from '../types/task.types';

const useTaskStore = create<TaskStore>((set) => ({
  input: '',
  tasks: [],
  checkedTasks: [],
  sortOrder: 'asc',

  setInput: (value) => set({ input: value }),
  setTasks: (newTasks) => set({ tasks: newTasks }),
  setCheckedTasks: (newCheckedTasks) => set({ checkedTasks: newCheckedTasks }),
  setSortOrder: (order) => set({ sortOrder: order }),

  addTask: () => {
    set((state) => {
      if (state.input.trim() !== '') {
        return { tasks: [...state.tasks, state.input], input: '' };
      }
      return state;
    });
  },

  allClear: () => {
    if (window.confirm('Вы действительно хотите очистить все?')) {
      set({ tasks: [], checkedTasks: [] });
    }
  },

  onDelete: (index) => {
    if (window.confirm('Вы действительно хотите удалить задачу?')) {
      set((state) => {
        const updatedTasks = state.tasks.filter((_, i) => i !== index);
        const updatedCheckedTasks = state.checkedTasks.filter((taskIndex) => taskIndex !== index);

        return { tasks: updatedTasks, checkedTasks: updatedCheckedTasks };
      });
    }
  },

  onDeleteSelected: () => {
    if (window.confirm('Вы действительно хотите удалить выбранные задачи?')) {
      set((state) => {
        const updatedTasks = state.tasks.filter((_, index) => !state.checkedTasks.includes(index));
        const updatedCheckedTasks: any = [];
        return { tasks: updatedTasks, checkedTasks: updatedCheckedTasks };
      });
    }
  },

  onChecked: (index) => {
    set((state) => {
      const isChecked = state.checkedTasks.includes(index)
        ? state.checkedTasks.filter((taskIndex) => taskIndex !== index)
        : [...state.checkedTasks, index];

      return { checkedTasks: isChecked };
    });
  },

  toggleSortOrder: () => {
    set((state) => ({ sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc' }));
  },
}));

export default useTaskStore;
