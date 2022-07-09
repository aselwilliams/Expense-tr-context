export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newTransactions = state.transactions.map((t) => {
        return { ...t };
      });
      newTransactions.push(action.payload);
      return {
        ...state,
        transactions: newTransactions,
      };
    case "DELETE_ITEM":
      const newList = state.transactions.filter((t) => t.id !== action.payload);
      return {
        ...state,
        transactions: newList,
      };
    default:
      return state;
  }
};
