export const state = () => ({
  tests: [],
  questions: [],
  categories: [],
})

export const getters = {
  allTests: s => s.tests,
  oneTest: (state) => {
    return (id) => {
      return state.tests.find(el => el.id == id);
    };
  },
  allQuestions: s => s.questions,
  questionsByIds: (state) => {
    return (ids) => {
      return state.questions.filter(el => ids.includes(el.id))
    };
  },
  allCategories: s => s.categories,
}

export const actions = {
  async getTests(context) {
    const res = await this.$axios.$get(
      'tests/?page_size=10000',
    )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    const tests = res.results ? res.results : res;
    // console.log(tests)
    context.commit('addTests', tests)
  },

  async getCategories(context) {
    const res = await this.$axios.$get(
      'categories/',
    )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    // console.log(res)
    context.commit('addCategories', res)
  },

  async getTest(context, id) {
    const res = await this.$axios.$get(
      `tests/${id}/`,
    )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    context.commit('addTests', [res])
  },

  async createTest(context, payload) {
    const res = await this.$axios.$post(
      'tests/', payload
    )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    console.log(payload, res)
    context.commit('addTests', [res])
  },

  async getQuetions(context) {
    const res = await this.$axios.$get(
      'questions/',
    )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    context.commit('addQuestions', res)
  },

  async deleteTest(context, id) {
    await this.$axios.$delete(
      `tests/${id}/`,
    )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    context.commit('delTest', id)
  },
}

export const mutations = {
  addTests(state, tests) {
    state.tests = tests.filter(el => state.tests.findIndex(x => x.id == el.id) == -1).concat(state.tests);
  },
  addCategories(state, categories) {
    state.categories = categories.filter(el => state.categories.findIndex(x => x.id == el.id) == -1).concat(state.categories);
  },
  addQuestions(state, questions) {
    state.questions = questions.filter(el => state.questions.findIndex(x => x.id == el.id) == -1).concat(state.questions);
  },
  async delTest(state, id) {
    state.tests = state.tests.filter(el => el.id != id)
  },
}


