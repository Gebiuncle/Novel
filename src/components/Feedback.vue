<template>
  <div class="feedback">
    <HeaderTop :title="title" :backIcon="backIcon"></HeaderTop>
    {{ $store.state.count }}
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
  </div>
</template>
<script>
import HeaderTop from "@/components/HeaderTop";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "意见反馈",
      backIcon: true
    };
  },
  // methods: mapActions(["increment", "decrement"]),
  // methods: {
  //   ...mapActions(["increment", "decrement"])
  // },
  methods: {
    ...mapActions({
      increment: "increment",
      decrement: "decrement"
    })
  },
  components: {
    HeaderTop
  }
};
</script>
<style lang="stylus">
.feedback {
  padding: 1.306667rem 0.266667rem;
}
</style>