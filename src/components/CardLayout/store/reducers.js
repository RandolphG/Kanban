import { v4 as uuidv4 } from "uuid";
import { add, remove } from "../../../utils";
import { current } from "@reduxjs/toolkit";

export const reducers = {
  addEntry: (state) => {
    const entry = {
      key: uuidv4(),
      title: "",
      description: "",
      tags: [],
      reporter: "",
      assignee: "",
      blocked: [],
    };

    return {
      ...state,
      cardInfo: [...state.cardInfo, entry],
    };
  },
  onSetSortedList: (state, action) => {
    return {
      ...state,
      cardInfo: action.payload,
    };
  },
  onEdit: (state, action) => {
    return {
      ...state,
      tempInfo: state.cardInfo.find((item) => item.key === action.payload),
      inEditMode: { status: true, rowKey: action.payload },
    };
  },
  onDelete: (state, action) => {
    state.cardInfo.splice(action.payload, 1);
  },
  onSave: (state) => {
    const data = state.cardInfo.map((item) =>
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
  onAddNotification: (state, action) => {
    const message = action.payload.message;

    return {
      ...state,
      notifications: add(state.notifications, message),
    };
  },
  onRemoveNotification: (state, action) => {
    return {
      ...state,
      notifications: remove(state.notifications, action.payload),
    };
  },
  onTagRemove: (state, action) => {
    return {
      ...state,
      cardInfo: current(state).cardInfo.map((task, idx) => {
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
    const tags = [...state.cardInfo[idx].tags, ...action.payload.tags];

    return {
      ...state,
      cardInfo: state.cardInfo.map((task, idx) => {
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
  onToggleControlPanel: (state) => {
    return {
      ...state,
      controlPanel: !state.controlPanel,
    };
  },
  setAllTags: (state, action) => {
    return {
      ...state,
      allTags: action.payload,
    };
  },
};
