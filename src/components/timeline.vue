<template>

	<div id="time">
		<transition name="el-zoom-in-center" style="background-color: black;">
			<div v-show="show" class="transition-box">
				<el-steps :active="active" style="background-color: white;" simple>
					<el-step v-for="(obj,index) in item" :title="obj.title" :icon="obj.icon" :key="obj.id"
						@click.native="next(obj.id),addlayer(obj.url1,obj.url2,obj.positon,obj.color)"
						style="cursor: pointer;height: 60px;width: 110px;"></el-step>

				</el-steps>
				
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,

			}
		},
		methods: {
			//控制步骤条计数
			next(value) {
				this.active = value - 1;
			},
			//添加位置和事件图层
			addlayer(url1, url2, positon,layercolor) {
				this.$parent.removelayer();
				this.$parent.changeview(positon);
				if (url1 != " ") {
					this.$store.commit('setmap', url1);
					this.$parent.addLayer();
				}

				if (url2 != " ") {
					this.$store.commit('setcolor', layercolor);
					this.$store.commit('setmap', url2);
					this.$parent.addpoly();
				}

			}
		},
		watch: {
			//监听item刷新active
			item(){
				this.active = 0;
			}
		},
		computed: {
			show() {
				return this.$store.state.timeshow;
			},
			item() {
				return this.$store.state.timeitem;
			}
		}


	}
</script>

<style>
	#time {
		border-radius: 4px;
		display: flex;
		position: absolute;
		left: 35%;
		bottom: 0px;
	}
</style>
