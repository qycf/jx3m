import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ConfigPagesPlugin } from './pages';
import { eslintPluginConfig } from './exlint';
import { ConfigCompressPlugin } from './compress';
import { ConfigProgressPlugin } from './progress';
import { VuetifyVitePlugin } from './vuetify';

export function createVitePlugins(isBuild: boolean) {
	const vitePlugins: (PluginOption | PluginOption[])[] = [
		// vue支持
		vue(),
	];

	// vitePlugins.push(ConfigPagesPlugin());
	vitePlugins.push(eslintPluginConfig());
	// vitePlugins.push(ConfigCompressPlugin());
	vitePlugins.push(ConfigProgressPlugin());
	vitePlugins.push(VuetifyVitePlugin());
	return vitePlugins;
}
