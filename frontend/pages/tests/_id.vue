<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-12 text-center my-3">
        <h1 class="font-weight-medium">
          {{ test?.title }}
        </h1>
      </div>
      <v-col>
        <v-card
          class="mx-auto"
          max-width="800"
          tile
          v-for="(q, i) in questions"
          :key="i"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ q.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-card>
      </v-col>
    </div>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: "View Recipe"
    };
  },
  methods: {
    oneQuestion(id) {
      return this.questions.find(el => el.id == id)
    }
  },
  computed: {
    test() {
      return this.$store.getters.oneTest(this.$nuxt.context.params.id);
    },
    questions() {
      console.log(this.test?.questions)
      return this.$store.getters.questionsByIds(this.test?.questions);
    },
  },
  async mounted() {
    await this.$store.dispatch('getTest', this.$nuxt.context.params.id)
    await this.$store.dispatch('getQuetions')
  },
};
</script>
<style scoped>
</style>

