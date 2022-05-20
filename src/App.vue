<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>



<script>
	import navbar from '../src/components/navbar.vue';
	import timeline from '../src/components/timeline.vue';

	export default {
		data(){
			return{

			}
		},
		name: 'app',
		components: {
			navbar,
			timeline
		}
	}
</script>

<style>
</style>
