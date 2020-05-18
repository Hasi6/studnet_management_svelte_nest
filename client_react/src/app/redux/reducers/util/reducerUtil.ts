export const createReducer = (initialState: any, fnMap: any) => {
  return (state = initialState, { type, payload }: { type: any, payload: any }) => {
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state;
  };
};
