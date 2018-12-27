<template>
	<div class="aboutUs">
		<HeaderTop :title="title" :backIcon="backIcon"></HeaderTop>
		<ul>
			<li v-for="(item,index) in historyList" :key="index">{{ item.title }}</li>
		</ul>
	</div>
</template>
<script>
import HeaderTop from "@/components/HeaderTop";
// import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  data() {
    return {
      title: "浏览记录",
      backIcon: true
    };
  },
  computed: {
    // ...mapGetters(["historyList"])
    ...mapState(["historyList"])
  },
  created() {
    console.dir(this.historyList);
  },
  components: {
    HeaderTop
  }
};
</script>
<style lang="stylus">
.aboutUs {
	padding: 1.306667rem 0.266667rem;

	p {
		color: #333;
		font-size: 0.426667rem;
		line-height: 0.8rem;
	}
}
</style>