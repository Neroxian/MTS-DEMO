const getters = {
  isPageBlocked: state => !!state.pageBlocker,
  getReceiveMaterial: state => {
    return state.allReceiveMaterial;
  },
  getAllVendor: state => {
    return state.allVendor;
  },
  getID: state => {
      return state.manualID;
  }
}

export default getters
