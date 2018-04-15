<template>
	<div class="searchCon">
		<searchBox :newval="val" @searchVal="search" @getautoCompleteList="getcomList"></searchBox>
		<searchHot @searchHot="search" :ishow="ishow"></searchHot>
		<searchAutoComplete @searchAutoComplete="search" :searchList="autoCompleteList" :boolshow="boolshow"></searchAutoComplete>
		<searchHistory :ishow="ishow"></searchHistory>
		<searchList :searchList="searchList" :listshow="listshow"></searchList>
	</div>	
</template>
<script>
import searchBox from '@/components/search/searchBox'
import searchHot from '@/components/search/searchHot'
import searchAutoComplete from '@/components/search/searchAutoComplete'
import searchHistory from '@/components/search/searchHistory'	
import searchList from '@/components/search/searchList'
export default {
	data() {
		return {
			ishow: true,
			boolshow: true,
			listshow: true,
			isquery: true,
			val: '',
			autoCompleteList: [],
			searchList: []
		}
	},
	methods:{
		getcomList(array){
			this.autoCompleteList = array
			if(array.length) {
				this.ishow = false
				this.boolshow = true
				this.listshow = false	
			}
			else{
				this.ishow = true
				this.boolshow = false
				this.listshow = false	
			}
		},
		search(data) {
			this.ishow = false
			this.boolshow = false
			this.listshow = true

			let query;
			let type = typeof(data)
			if(type === 'string') {
				query = data
			}else if(type === 'object') {
				query = data.word
			}

			this.val = query

			this.searchList = []
			
			this.$http.get('api/book/fuzzy-search', {
	      params: {query: query}
	    }).then(res => {
        if(res.data.ok = true){
        	this.searchList = res.data.books      	
        }
      })

		}
	},
	components: {
		searchBox,
		searchHot,
		searchAutoComplete,
		searchHistory,
		searchList
	}
}

</script>
<style lang="stylus">
	
</style>