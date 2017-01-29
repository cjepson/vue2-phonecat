<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <!--Sidebar content-->

          <p>
          Search: <input v-model="filterText">
          </p>

          <p>
          Sort by:
          <select v-model="dropDownSort">
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
          </p>
        </div>

        <div class="col-md-10">
          <!--Body content-->

          <ul class="phones">
            <li v-for="phone in phonesList" class="thumbnail phone-list-item" transition="expand">
              <a v-bind:href="'#/phones/' + phone.id" class="thumb"><img v-bind:src="'content\\' + phone.imageUrl"></a>
              <a v-bind:href="'#/phones/' + phone.id">{{phone.name}}</a>
              <p>{{phone.snippet}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        dropDownSort: 'age',
        filterText: ''
      }
    },

    watch: {
        dropDownSort: function (newDropDownSort) {
          this.$store.dispatch('setPhoneDropDownSort', newDropDownSort)
        },
        filterText: function (newFilterText) {
          this.$store.dispatch('setPhoneTextFilter', newFilterText)
        },
    },

    // Clear the search query field between views, in case is gets set in the
    // store during an earlier query.
    created: function () {
        this.$store.dispatch('setPhoneDropDownSort', "new")
        this.$store.dispatch('setPhoneTextFilter', "")
    },

    computed: {
      phonesList: {
        get: function () {
          return this.$store.getters.phones
        },
        set: function (newPhones) {
          this.$store.dispatch('setPhones', newPhones)
        }
      }
    }
  }
</script>

<style scoped>
</style>
