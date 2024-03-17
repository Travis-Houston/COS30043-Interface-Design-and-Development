<template>
  <div class="tasks-container">
    <!-- Heading and input form -->
    <h1 class="mt-5">Status Posting</h1>
    <div class="mb-3">
      <label for="status" class="form-label">Enter your status:</label>
      <input type="text" id="status" class="form-control" v-model="strStatus">
      <button @click="add(strStatus)" class="btn btn-primary mt-2">Post</button>
    </div>

    <!-- List of status posts -->
    <div v-if="statPosts.length">
      <h2 class="mt-5">My Posts</h2>
      <ul class="list-group">
        <li v-for="(status, index) in statPosts" :key="index" class="list-group-item">
          {{ status }}
          <button @click="remove(index)" class="btn btn-danger btn-sm ms-3">Delete</button>
        </li>
      </ul>
    </div>

    <!-- Placeholder message if there are no posts -->
    <div v-else>
      <p class="mt-5">No posts yet.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksView',
  data() {
    return {
      statPosts: [], // Array to hold status posts
      strStatus: '' // Variable to hold user input for status post
    }
  },
  methods: {
    add(status) { // Method to add status post to array
      this.statPosts.push(status);
      this.strStatus = ''; // Clear input field after posting
    },
    remove(index) { // Method to remove status post from array
      this.statPosts.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.tasks-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.tasks-container h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
}

.tasks-container .mb-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tasks-container .form-label {
  font-weight: bold;
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.tasks-container .form-control {
  max-width: 300px;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: none;
}

.tasks-container .btn-primary {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.tasks-container .btn-primary:hover {
  background-color: #555;
}

.tasks-container h2 {
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #333;
}

.tasks-container .list-group {
  max-width: 500px;
  margin: 0 auto;
}

.tasks-container .list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.tasks-container .list-group-item:hover {
  background-color: #f2f2f2;
}

.tasks-container .btn-danger {
  padding: 5px 10px;
  font-size: 14px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.tasks-container .btn-danger:hover {
  background-color: #c82333;
}
</style>