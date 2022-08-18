<template>
	<div id="legend">
		<transition name="el-zoom-in-center" style="background-color: black;">
			<div v-show="show" class="transition-box">
				
				<el-image style="width: 200px; height: 200px" :src="url"></el-image>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				url: require('../assets/img/legend.png')
			}
		},
		computed: {
			show() {
				return this.$store.state.legendshow;
			}
		},
	}
</script>

<style>
	#legend{
		border-radius: 4px;
		position: absolute;
		display: flex;
		right: 30px;
		bottom: 30px;
	}

</style>
