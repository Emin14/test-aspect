import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: [
    {
      type: 'panel',
      props: {
        width: 500,
        height: 200,
        visible: true
      },
    },
    {
      type: 'label',
      props: {
        caption: 'test',
        visible: true
      },
    },
    {
      type: 'button',
      props: {
        width: 100,
        height: 50,
        visible: true
      },
    },
    {
      type: 'label',
      props: {
        caption: 'test22',
        visible: true
      },
    },
    {
      type: 'panel',
      props: {
        width: 500,
        height: 200,
        visible: true
      },
      content: [
        {
          type: 'label',
          props: {
            caption: 'btttn',
            visible: true
          }
      },
      {
        type: 'button',
        props: {
          width: 140,
          height: 30,
          visible: true
        },
      }
    ]
    }
    
  ]
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    editContent(state, action) {
      state.content = action.payload
    },
  },
});

export const { editContent } = contentSlice.actions;
export default contentSlice.reducer;