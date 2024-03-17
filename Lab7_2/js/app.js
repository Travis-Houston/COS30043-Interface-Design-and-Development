const App = {
    data() {
      return {
        units: []
      }
    },
    created() {
      const url = 'units.json'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.units = data
        })
    },
    template: `
      <div class="container mt-5">
        <h1 class="mb-3">Units App</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Code</th>
              <th>Description</th>
              <th>CP</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="unit in units" :key="unit.code">
              <td>{{ unit.code }}</td>
              <td>{{ unit.desc }}</td>
              <td>{{ unit.cp }}</td>
              <td>{{ unit.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
  
  Vue.createApp(App).mount('#app')