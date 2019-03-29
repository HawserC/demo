
export default {
  namespace: 'container',
  state: {

  },
  reducers: {
    //保存
    save(state, {payload}) {
      return {
        ...state,
        ...payload
      };
    },

  },
  effects: {
    * saveData({params}, {select, call, put}) {
      yield put({
        type: 'save',
        payload: params
      })
    }
  }
};
