<template>
  <div>
    <div>Тесты</div>
    <v-btn @click="toggleForm">Форма</v-btn>
    <Form v-if="isVisible" :questions="questions"/>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col>
            <div>Фильтрация по категориям:</div>
            <div class="d-flex">
              <v-btn color="primary" class="space" @click="chooseCat()">Все</v-btn>
              <div
                v-for="item in categories"
                :key="item.id"
              >
                <v-btn color="primary" class="space" @click="chooseCat(item.id)">{{ item.title }}</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="item in paginatedTests"
            :key="item.id"
            cols="12"
            md="4"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="200"
                @click="toggle"
              >
                <v-card-text>
                  <div> {{ item.title }}</div>
                  <div class="action-buttons">
                    <v-btn
                      color="success"
                      :to="`/tests/${item.id}/`"
                    >
                      View
                    </v-btn>
                    <v-btn @click="deleteTest(item.id)" color="error">Delete</v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-item>
          </v-col>
        </v-row>

        <div class="text-center v-table__pagination">
          <div class="page"
               v-for="page in pages"
               :key="page"
               @click="pageClick(page)"
               :class="{'page__selected': page === pageNumber}"
          >{{ page }}
          </div>
        </div>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import Form from "../../components/Form";

export default {
  name: "index",
  components: {Form},
  data() {
    return {
      isVisible: false,
      testsPerPage: 9,
      pageNumber: 1,
      category: null
    }
  },
  methods: {
    toggleForm() {
      this.isVisible = !this.isVisible
    },
    pageClick(page) {
      this.pageNumber = page;
    },
    chooseCat(id = null) {
      this.category = id;
    },
    deleteTest(id) {
      this.$store.dispatch('deleteTest', id);
    },
  },
  computed: {
    tests() {
      console.log(this.category)
      const cat = this.categories.find(x => x.id == this.category)
      console.log(cat)
      if (cat) return this.$store.state.tests.filter(el => cat.test?.includes(el.id))
      return this.$store.state.tests;
    },
    questions() {
      return this.$store.state.questions;
    },
    categories() {
      return this.$store.state.categories;
    },
    pages() {
      return Math.ceil(this.tests.length / this.testsPerPage)
    },
    paginatedTests() {
      let from = (this.pageNumber - 1) * this.testsPerPage;
      let to = from + this.testsPerPage;
      return this.tests.slice(from, to)
    }
  },
  async mounted() {
    await this.$store.dispatch('getTests')
    await this.$store.dispatch('getQuetions')
    await this.$store.dispatch('getCategories')
  },
}
</script>

<style scoped>
.v-table__pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}

.page {
  padding: 8px;
  border: solid 1px #e7e7e7;
  margin-right: 10px;
}

.page:hover {
  background: #aeaeae;
  cursor: pointer;
  color: #ffffff;
}

.page__selected {
  background: #aeaeae;
  cursor: pointer;
  color: #ffffff;
}
.space {
  margin: 10px;
}
</style>
