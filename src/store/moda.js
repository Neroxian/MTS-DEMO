export default {
    namespaced: true,
    state: {
      name: 'Ahtesham',
      data: JSON.parse(window.localStorage.getItem("data")) || [],
      // data: [],
      disData: JSON.parse(window.localStorage.getItem("disData")) || [],
      task: [],
      packingPattern: []
    },
    mutations: {
       changeName(state, name) {
       state.name = name
       },
      addMatData(state, material) {
        state.data.push(material);
        window.localStorage.setItem("data", JSON.stringify(state.data))
      },
      addDisData(state, disdata) {
        state.disData.push(disdata);
        window.localStorage.setItem("disData", JSON.stringify(state.disData))
  
      },
      markAsRecieved(state, idx) {
        console.log(idx)
        state.disData = state.disData.map((d, i) => {
          if (i === idx) {
            d.isReceived = true
          }
          return d
        })
        window.localStorage.setItem("disData", JSON.stringify(state.disData))
      },
      addMaterial(state, values) {
        // console.log("Bhai")
        state.task.unshift(values);
      },
      changeTask(state, upValues) {
        //    state.task.find(arr => arr.id === upValues)
        state.task = state.task.map(t => {
          if (t.id === upValues.id) {
            t.material = upValues.material
            t.details = upValues.details
          }
          return t
        })
      },
      deteteTask(state, x) {
        state.task.splice(state.task.findIndex(a => a.id === x), 1)
      },
      addPackagingpattern(state, info) {
        state.packingPattern.unshift(info);
      },
      editPackagingDataMutation(state, data) {
        state.packingPattern = state.packingPattern.map(t => {
          if (t.id === data.id) {
            t.category = data.category,
              t.subCategory = data.subCategory,
              t.material = data.material,
              t.packet = data.packet,
              t.loose = data.loose
          }
        })
      },
      DeletePackagingDataMutation(state, data) {
        let i = state.packingPattern.findIndex(t => t.id === data.id)
        state.packingPattern.splice(i, 1);
      }
    }
  
  }