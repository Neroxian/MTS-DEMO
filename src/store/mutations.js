
const mutations = {
  'app/MUTATE_PAGE_BLOCKER': (state, show) => {
    state.pageBlocker = show
  },
  addReceiveMaterial(state,vendor){
    state.allReceiveMaterial.push(vendor)
  },
  addVendor(state,vendor){
    state.allVendor.push(vendor)
    state.manualID++
    console.log(state.manualID)
  },
  deleteVendor(state,id){
      state.allVendor.splice(state.allVendor.findIndex(i => i.id === id),1)
  },
  editVendor(state, data) {
      state.allVendor[parseInt(data.id, 10)] = data.newVendor
      console.log(state.allVendor)
      console.log(data)
  }
}

export default mutations
