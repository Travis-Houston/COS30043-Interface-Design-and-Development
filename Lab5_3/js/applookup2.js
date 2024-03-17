// Creating a component for the unit detail view
const Unit = {
    data() {
      return { units: [] };
    },
    computed: {
      // Filter function that returns the selected unit object
      filteredUnits: function() {
        let id = this.$route.params.id;
        return this.units.filter(function(unit) {
          return unit.code === id;
        })[0];
      }
    },
    template: `
      <div class="container my-5">
        <h2 class="mb-4">Unit Detail View</h2>
        <table class="table table-hover table-bordered">
          <tbody>
            <tr>
              <th class="w-25">Code</th>
              <td>{{ filteredUnits.code }}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{{ filteredUnits.desc }}</td>
            </tr>
            <tr>
              <th>Credit Points</th>
              <td>{{ filteredUnits.cp }}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{{ filteredUnits.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    created() {
      fetch("course.json")
        .then(response => response.json())
        .then(data => (this.units = data))
        .catch(error => console.log(error));
    }
};

// Creating a new app instance
const app = Vue.createApp({});

// Creating the VueRouter
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: {
        template: `
          <div class="container my-5">
            <h2 class="mb-4">Unit Lookup Table</h2>
            <div class="table-responsive">
              <table class="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th class="w-25">Code</th>
                    <th>Name</th>
                    <th>Credit Points</th>
                    <th>Type</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="unit in units" :key="unit.code">
                    <td>{{ unit.code }}</td>
                    <td>{{ unit.desc }}</td>
                    <td>{{ unit.cp }}</td>
                    <td>{{ unit.type }}</td>
                    <td><router-link :to="'/unit/' + unit.code" class="btn btn-primary btn-sm">More Details</router-link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
        data() {
          return { units: [] };
        },
        created() {
          fetch("course.json")
            .then(response => response.json())
            .then(data => (this.units = data))
            .catch(error => console.log(error));
        }
      }
    },
    {
      path: "/unit/:id",
      component: Unit
    }
  ]
});

// Using the router and mounting the app
app.use(router);
app.mount("#app");