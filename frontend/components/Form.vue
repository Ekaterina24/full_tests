<template>
  <div class="col-md-4">
    <form @submit.prevent="addTestToList">
      <p v-if="errors.length">
        <b>Пожалуйста исправьте указанные ошибки:</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      </p>
      <v-text-field label="Заголовок" v-model="title"></v-text-field>
      <v-container fluid>
        <v-row align="center">
          <v-col
            cols="12"
            sm="6"
          >
            <v-select
              v-model="e6"
              :items="questions"
              :menu-props="{ maxHeight: '400' }"
              label="Select"
              multiple
              persistent-hint
              item-value="id"
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
      <v-btn type="submit">Добавить</v-btn>
    </form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  props: ["questions"],
  name: "Form",
  data() {
    return {
      title: '',
      errors: [],
      e6: [],
    }
  },

  methods: {
    ...mapMutations(['postTest']),
    addTestToList(e) {
      if (!this.checkForm(e)) {
        return false
      }
      this.$store.dispatch('createTest', {
        title: this.title,
        questions: this.e6
      })
      this.title = ''
      this.e6 = []
    },
    checkForm: function (e) {
      e.preventDefault();
      this.errors = [];
      if (this.title && this.e6.length) {
        return true;
      }

      if (!this.e6.length) {
        this.errors.push('Требуется выбрать хотя бы 1 вопрос.');
      }

      if (!this.title) {
        this.errors.push('Требуется указать заголовок.');
      }

      return false;
    }
  },

}
</script>

<style scoped>

</style>

