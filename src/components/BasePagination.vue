<template>
  <div class="base-pagination">
    <BaseButton
      :disabled="isPreviousButtonDisabled"
      @click.native="previousPage"
    >
      ←
    </BaseButton>
    <BasePaginationTrigger
      class="base-pagination__description"
      :pageNumber="currentPage"
      @loadPage="onLoadPage"
    />
    <BaseButton
      :disabled="isNextButtonDisabled"
      @click.native="nextPage"
    >
      →
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import BasePaginationTrigger from "./BasePaginationTrigger.vue";
export default {
  components: {
    BaseButton,
    BasePaginationTrigger
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    isPreviousButtonDisabled() {
      return this.currentPage === 1
    },
    isNextButtonDisabled() {
      return this.currentPage === this.pageCount
    }
  },
  methods: {
    nextPage() {
      this.$emit('nextPage')
    },
    previousPage() {
      this.$emit('previousPage')
    },
    onLoadPage(value) {
      this.$emit("loadPage", value)
    }
  }
}
</script>
