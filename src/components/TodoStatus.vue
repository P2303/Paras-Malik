<template>
  <div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  
  methods: {
    ...mapActions(["changeCompleted"]),
    changeTab() {
      this.changeCompleted();
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
}
button {
  outline: none;
  border: none;
  padding: 10px 20px;
  color: #000;
}
button:hover {
  outline: none;
  background-color: rgb(194, 243, 227);
}
.active {
  outline: none;
  color: white;
  background-color: rgb(0, 202, 135);
}
.active:hover {
  outline: none;
  border: none;
  padding: 10px 20px;
  color: white;
  background-color: rgb(0, 202, 135);
}
</style>