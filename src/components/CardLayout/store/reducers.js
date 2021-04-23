import { v4 as uuid, v4 as uuidv4 } from "uuid";
import { current } from "@reduxjs/toolkit";

export const reducers = {
  addCard: (state) => {
    const card = {
      id: `card-${uuid()}`,
      key: uuidv4(),
      list: "list-0",
      title: "",
      description: "",
      tags: [],
      reporter: "",
      assignee: "",
    };

    return {
      ...state,
      cardInfo: [...state.details, card],
    };
  },
  onEdit: (state, action) => {
    return {
      ...state,
      tempInfo: state.details.find((item) => item.key === action.payload),
      inEditMode: { status: true, rowKey: action.payload },
    };
  },
  onDelete: (state, action) => {
    state.details.splice(action.payload, 1);
  },
  onSave: (state) => {
    const data = state.details.map((item) =>
      item.key === state.tempInfo.key ? state.tempInfo : item
    );

    return {
      ...state,
      inEditMode: { status: false, rowKey: null },
      cardInfo: data,
    };
  },
  onCancel: (state) => {
    return {
      ...state,
      inEditMode: { status: false, rowKey: null },
    };
  },
  onInputChange: (state, action) => {
    const key = Object.keys(action.payload)[0];

    return {
      ...state,
      tempInfo: {
        ...state.tempInfo,
        [key]: action.payload[key],
      },
    };
  },

  onTagRemove: (state, action) => {
    return {
      ...state,
      cardInfo: current(state).details.map((task, idx) => {
        console.log(idx, action.payload.index);
        if (idx === action.payload.index) {
          return Object.entries(task).reduce((taskCopyAcc, [key, prop]) => {
            if (key === "tags") {
              return { ...taskCopyAcc, tags: [...action.payload.tags] };
            } else return { ...taskCopyAcc, [key]: prop };
          }, {});
        } else return task;
      }),
    };
  },
  onTagAdd: (state, action) => {
    const idx = action.payload.index;
    const tags = [...state.details[idx].tags, ...action.payload.tags];

    return {
      ...state,
      cardInfo: state.details.map((task, idx) => {
        if (idx === action.payload.index) {
          return Object.entries(task).reduce((taskCopyAcc, [key, prop]) => {
            if (key === "tags") {
              return { ...taskCopyAcc, tags };
            } else return { ...taskCopyAcc, [key]: prop };
          }, {});
        } else return task;
      }),
    };
  },

  setAllTags: (state, action) => {
    return {
      ...state,
      allTags: action.payload,
    };
  },
};
