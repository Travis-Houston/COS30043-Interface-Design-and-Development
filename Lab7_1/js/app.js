const App = {
    data() {
      return {
        posts: []
      }
    },
    created() {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      $.getJSON(url, (data) => {
        this.posts = data.map(post => ({ id: post.id, title: post.title }))
      })
    },
    template: `
    <div class="container mt-5">
      <h1 class="mb-3">JsonPlaceholder Vue App</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    `
  }
  
  Vue.createApp(App).mount('#app')