<template>
  <div class="home-container">
    <!-- Heading and welcome message -->
    <h2>Home</h2>
    <p>Welcome, <span v-if="firstName || lastName" class="full-name">{{ fullName }}!</span></p>

    <!-- First Name -->
    <div class="input-container">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName">
    </div>

    <!-- Last Name -->
    <div class="input-container">
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName">
    </div>

    <!-- Image Select -->
    <div class="input-container">
      <label for="imageSelection">Select an image:</label>
      <div id="imageSelection" class="radio-container">
        <label>
          <input type="radio" value="mountain" v-model="selectedImage">
          Mountain
        </label>
        <label>
          <input type="radio" value="ocean" v-model="selectedImage">
          Ocean
        </label>
      </div>
    </div>

    <!-- Welcome Message and Image Display -->
    <div class="image-container">
      <img v-if="selectedImage === 'mountain'" src="../../img/mountain.jpg" alt="Mountain" class="image">
      <img v-if="selectedImage === 'ocean'" src="../../img/ocean.png" alt="Ocean" class="image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      firstName: '', // Variable to hold first name
      lastName: '', // Variable to hold last name
      selectedImage: '', // Variable to hold selected image
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`; // Computed property to combine first and last name
    },
  },
};
</script>

<style scoped>
.home-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.full-name {
  font-weight: bold;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: left;
}

.input-container label {
  font-weight: bold;
  margin-bottom: 5px;
}

.radio-container {
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
}

.image-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.image {
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
</style>