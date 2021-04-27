export const reducers = {
  add: (state, action) => {
    const { listID, titleText: title, id } = action.payload;
    const card = {
      id: `card-${id}`,
      key: id,
      list: listID,
      title,
      description: "type something here..",
      tags: ["one", "two", "three"],
      reporter: "Anton",
      assignee: "Marija",
      isInEditMode: { status: false },
    };

    return {
      ...state,
      cards: { ...state.cards, [`card-${id}`]: card },
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
  onEdit: (state, action) => {
    const { card } = action.payload;
    const cards = { ...state.cards[card.id] };

    if (cards.id === card.id) {
      cards.isInEditMode = true;
      return {
        ...state,
        tempInfo: cards,
        cards: { ...state.cards, [card.id]: cards },
      };
    }
  },
  onCancel: (state, action) => {
    const { card } = action.payload;
    const cards = { ...state.cards[card.id] };

    if (cards.id === card.id) {
      cards.isInEditMode = false;
      return {
        ...state,
        tempInfo: null,
        cards: { ...state.cards, [card.id]: cards },
      };
    }
  },
  onDelete: (state, action) => {
    const { card } = action.payload;
    const cards = { ...state.cards };

    const { [card.id]: _, ...rest } = cards;

    return { ...state, cards: rest };
  },
  onSave: (state) => {
    const data = state.cards.map((item) =>
      item.key === state.tempInfo.key ? state.tempInfo : item
    );

    return {
      ...state,
      inEditMode: { status: false, rowKey: null },
      cards: data,
    };
  },

  onTagRemove: (state, action) => {
    return {
      cardInfo: state.cards.map((task, idx) => {
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
