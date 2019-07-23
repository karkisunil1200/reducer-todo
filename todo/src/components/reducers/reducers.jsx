export const ADD_TASK = 'ADD_TASK';
export const TOOGLE = 'TOOGLE';
export const CLEAR = 'CLEAR';

export const initialState = {
  items: [
    {
      task: 'Take out trash',
      completed: false,
      id: 1
    },
    {
      task: 'Walk the dog',
      completed: false,
      id: 2
    },
    {
      task: 'Learn reducers',
      completed: false,
      id: 3
    }
  ]
};

export const reducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_TASK:
      const newItem = {
        task: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        items: [...state.items, newItem]
      };
    case TOOGLE:
      return {
        ...state,
        items: state.items.map(item => {
          if (action.payload === item.id) {
            return {...item, completed: !item.completed};
          } else {
            return item;
          }
        })
      };
    case CLEAR:
      return {
        ...state,
        items: state.items.filter(item => !item.completed)
      };
  }
};
