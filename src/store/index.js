import Vue from "vue";
import Vuex from "vuex";

import { Admin, User1, User2 } from "@/roles";

import actions from "./actions";
import moda from "./moda";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    manualID: 3, 
    pageBlocker: false,
    allReceiveMaterial: [
      {
        vendorName: "Ramesh",
        material: "Pamplets",
        category: "Academic",
        subCategory: "Certificate",
        PoNo: "645121",
        PoDate: "12-10-2020",
        challanNo: "451205412",
        doReceipt: "10-10-2020",
        quantity: "10000",
        bSeries: "Dont know",
        pSeries: "Dont know",
        lSeries: "Dont know",
      },
    ],
    allVendor: [
      {
        id: "1",
        vendorName: "Ramesh",
        companyType: "Technology",
        panNumber: "123321468",
        accountNumber: "98745124551",
        organisationName: "MKCL",
        role: "RM",
        organisationMobile: "8451287454",
        address1: "Icc Trade Tower,Senapati Bapat Road,Pune",
        address2: "",
        state: "Maharashtra",
        district: "Pune",
        pincode: "411016",
        telephone1: "020-98452127",
        telephone2: "-",
        faxNumber: "020-98452127",
        email: "ram@gmail.com",
      },
      {
        id: "2",
        vendorName: "Suresh",
        companyType: "Industrial",
        panNumber: "6325851845",
        accountNumber: "6144524551",
        organisationName: "Mumbai LLC",
        role: "LLC",
        organisationMobile: "374787454",
        address1: "CST,Mumbai",
        address2: "",
        state: "Maharashtra",
        district: "Mumbai",
        pincode: "400001",
        telephone1: "022-6342127",
        telephone2: "132-4512445",
        faxNumber: "020-9452127",
        email: "sur@gmail.com",
      },
    ],
    user: {
      role: Admin,
    },
  },
  mutations: {
    CHANGE_ROLE: (state, role) => {
      state.user.role = role
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
        // console.log(newVendor, idx)
        state.allVendor[parseInt(data.id, 10)] = data.newVendor
        console.log(data)
        console.log(state.allVendor)
    }
  },
  getters: {
    getRole: (state) => state.user.role,
    getReceiveMaterial: state => {
      return state.allReceiveMaterial;
    },
    getAllVendor: state => {
      return state.allVendor;
    },
    getID: state => {
        return state.manualID;
    }
  },
  actions,
  modules: {
    moda
  },
})
