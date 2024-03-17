const app = Vue.createApp({ })
app.component('app-mypost', // indicating the component tag
  { 
  // defining data to be used in the component
  data() {
    return {
      statPosts: [],
      strStatus: ''
    }
  },
  // define the template for the component
  template: `
  <div class="container">
    <h1 class="mt-5">Status Posting</h1>
    <div class="mb-3">
      <label for="status" class="form-label">Enter your status:</label>
      <input type="text" id="status" class="form-control" v-model="strStatus">
      <button @click="add(strStatus)" class="btn btn-primary mt-2">Post</button>
    </div>
    <div v-if="statPosts.length">
      <h2 class="mt-5">My Posts</h2>
      <ul class="list-group">
        <li v-for="(status, index) in statPosts" :key="index" class="list-group-item">
          {{ status }}
          <button @click="remove(index)" class="btn btn-danger btn-sm ms-3">Delete</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="mt-5">No posts yet.</p>
    </div>
  </div>
  `,
  // defining the methods for add and remove status 
  methods: {
    add(status) {
      //push status into statPosts array
      this.statPosts.push(status);
      this.strStatus = '';
    },
    remove(index) {
      //delete status from statPost using index
      this.statPosts.splice(index, 1);
    }
  }
});
app.mount('#app');