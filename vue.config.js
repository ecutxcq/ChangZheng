const {
	defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
	devServer: { // 自定义服务配置
		port: 3000
	},
	lintOnSave: false,
	transpileDependencies: true
})
