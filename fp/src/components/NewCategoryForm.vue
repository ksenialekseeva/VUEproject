<template>
  <div>
    <input v-show="addNewCategory" v-model="text" placeholder="New Category" />
    <button @click="AddCategory(text)">Add new category</button>
  </div>
</template>

<script>
export default {
  name: "NewCategoryForm",
  data() {
    return {
      text: "",
      newCategoryList: [],
      addNewCategory: false
    };
  },
  methods: {
    AddCategory(text) {
        this.addNewCategory =! this.addNewCategory
        if (text !== "") {
            this.newCategoryList.push(text);
            this.$store.commit("setNewCategory", this.newCategoryList);
            this.newCategoryList.length = 0;
        }
    },
  },
};
</script>