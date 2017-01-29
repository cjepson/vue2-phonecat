import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// containsString returns true is the phone passed contains the string
// passed.
function containsString (phone, str) {
  var key = ''
  for (key in phone) {
    if (typeof (phone[key]) === 'object') {
      return containsString(phone[key], str)
    } else if (JSON.stringify(phone).indexOf(str) !== -1) {
      return true
    }
  }
  return false
}

export default new Vuex.Store({
  state: {
    phones: [],
    phoneTextFilter: '',
    phoneDropDownSort: ''
  },
  mutations: {
    SET_PHONES (state, phones) {
      state.phones = phones
    },
    SET_PHONE_TEXT_FILTER (state, textFilter) {
      state.phoneTextFilter = textFilter
    },
    SET_PHONE_DROP_DOWN_SORT (state, dropSort) {
      state.phoneDropDownSort = dropSort
    }
  },
  actions: {
    setPhones ({commit}, phones) {
      commit('SET_PHONES', phones)
    },
    setPhoneTextFilter ({commit}, text) {
      commit('SET_PHONE_TEXT_FILTER', text)
    },
    setPhoneDropDownSort ({commit}, text) {
      commit('SET_PHONE_DROP_DOWN_SORT', text)
    }
  },
  getters: {
    phones: function (state) {
      var filterFunction = phone => containsString(phone, state.phoneTextFilter)
      var localPhones = state.phones.filter(filterFunction)

      console.log(state.phoneDropDownSort)
      switch (state.phoneDropDownSort) {
        case 'name':
          return localPhones.sort((prev, next) => prev.name.localeCompare(next.name))
        case 'age':
          return localPhones.sort((prev, next) => +(prev.age > next.age) || +(prev.age === next.age) - 1)
        default:
          return localPhones
      }
    }
  }
})
