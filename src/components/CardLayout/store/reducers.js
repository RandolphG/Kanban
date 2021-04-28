export const reducers = {
  addToCard: (state, action) => {
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
  onSave: (state, action) => {
    const { card } = action.payload;
    const tempInfo = { ...state.tempInfo };

    if (card.id === state.tempInfo.id) {
      tempInfo.isInEditMode = false;
      return { ...state, cards: { ...state.cards, [card.id]: tempInfo } };
    }
  },
  onTagRemove: (state, action) => {
    const { values: tag, index, card } = action.payload;
    const cards = { ...state.cards[card.id] };
    cards.tags = tag;
    return { ...state, cards: { ...state.cards, [card.id]: cards } };
  },
  onTagAdd: (state, action) => {
    const { tag, card } = action.payload;
    const tags = [...state.cards[card.id].tags, ...tag];
    const cards = { ...state.cards[card.id] };
    cards.tags = tags;

    return { ...state, cards: { ...state.cards, [card.id]: cards } };
  },
  setAllTags: (state, action) => {
    console.log(`SET ALL TAGS`, action.payload);
    const { uniqueTags: tags } = action.payload;

    return {
      ...state,
      tags,
    };
  },
};
