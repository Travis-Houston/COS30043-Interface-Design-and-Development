const App = {
  data() {
    return {
      // Array of units to display in the table
      units: [],
      // Current page of the table
      currentPage: 1,
      // Number of units to display per page
      perPage: 5
    }
  },
  // Fetch the units data
  created() {
    const url = 'units.json'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Update the units data property with the fetched data
        this.units = data
      })
  },
  // Define computed properties
  computed: {
    // Calculate the units to display on the current page
    paginatedUnits() {
      const startIndex = (this.currentPage - 1) * this.perPage
      const endIndex = startIndex + this.perPage
      return this.units.slice(startIndex, endIndex)
    },
    // Calculate the total number of pages based on the number of units and units per page
    totalPages() {
      return Math.ceil(this.units.length / this.perPage)
    }
  },
  // Define methods
  methods: {
    // Update the current page of the table
    goToPage(page) {
      this.currentPage = page
    }
  },
  // Template
  template: `
    <div class="container mt-5">
      <h1 class="mb-3">My Table</h1>
      <table class="table table-striped">
        <caption>Units Table</caption>
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Description</th>
            <th scope="col">CP</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through the paginated units and display them in the table -->
          <tr v-for="unit in paginatedUnits" :key="unit.code">
            <td>{{ unit.code }}</td>
            <td>{{ unit.desc }}</td>
            <td>{{ unit.cp }}</td>
            <td>{{ unit.type }}</td>
          </tr>
        </tbody>
      </table>
      <!-- Display pagination links -->
      <nav>
        <ul class="pagination">
          <li class="page-item" :class="{ 'active': currentPage === page }" v-for="page in totalPages" :key="page">
            <a class="page-link" @click="goToPage(page)">{{ page }}</a>
          </li>
        </ul>
      </nav>
    </div>
  `
}

// Mount the app to an HTML element with the ID "app"
Vue.createApp(App).mount('#app')