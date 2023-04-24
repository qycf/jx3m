/**
 * @name VuetifyVitePlugin
 * @description vuetifyVite插件
 */

// plugins/vuetify.js
// import 'vuetify/styles';
import vuetify from 'vite-plugin-vuetify';

export const VuetifyVitePlugin = () => {
	return vuetify({
		autoImport: true,
		// styles: {
		// 	configFile: 'src/styles/settings.scss',
		// },
	});
};
