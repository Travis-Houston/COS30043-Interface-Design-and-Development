<template>
  <div class="units-container">
    <!-- Heading and introduction text -->
    <h2>Units</h2>
    <p>Welcome to the Units page</p>

    <!-- Table of units -->
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Description</th>
          <th>Credit Points</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through units and display them in the table -->
        <tr v-for="unit in units" :key="unit.code" @click="selectUnit(unit)">
          <td>{{ unit.code }}</td>
          <td>{{ unit.desc }}</td>
          <td>{{ unit.cp }}</td>
          <td>{{ unit.type }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Selected unit information -->
    <div v-if="selectedUnit" class="selected-unit">
      <h3>{{ selectedUnit.desc }}</h3>
      <p>{{ selectedUnit.code }} - {{ selectedUnit.type }} - {{ selectedUnit.cp }} CP</p>
    </div>
  </div>
</template>

<script>
import Units from "../assets/units.json"; // Import JSON data

export default {
  name: 'UnitsView',
  data() {
    return {
      units: [], // Array to hold units
      selectedUnit: null, // Variable to hold selected unit
    };
  },
  mounted() {
    this.units = Units; // Assign JSON data to units array
  },
  methods: {
    selectUnit(unit) {
      this.selectedUnit = unit; // Set selected unit
    },
  },
};
</script>

<style scoped>
.units-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 20px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
}

th, td {
  text-align: left;
  padding: 12px;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

th:first-child, td:first-child {
  padding-left: 20px;
}

th:last-child, td:last-child {
  border-right: none;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
}

td {
  font-size: 14px;
}

tr:hover {
  background-color: #f5f5f5;
}

.selected-unit {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.selected-unit h3 {
  margin-top: 0;
}
</style>