<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
	<div id="app">
		<v-app id="inspire">
			<v-app-bar app clipped-left color="#a1a1a1">
				<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
				<!-- <v-icon class="mx-4" large> mdi-youtube </v-icon> -->
				<!-- <v-img src="../assets/us.jpg" class="mx-4" contain height="32"></v-img> -->
				<!-- <v-avatar size="32">
					<v-img :src="getUrl('us.jpg')"></v-img>
				</v-avatar> -->
				<v-toolbar-title class="mr-12 align-center">
					<span class="title">江湖游</span>
				</v-toolbar-title>
			</v-app-bar>
			<v-navigation-drawer v-model="drawer" app clipped>
				<v-list nav>
					<v-list-item key="home" value="index" nav link to="/">
						<template #prepend>
							<v-avatar>
								<v-icon color="black">mdi-home</v-icon>
							</v-avatar>
						</template>
						<v-list-item-title>
							<span class="font-hyfgkt text-xl">首页</span>
						</v-list-item-title>
					</v-list-item>
					<v-list-item v-for="menu in menus" :key="menu.path" :value="menu.path" nav link :to="'/' + menu.path">
						<template #prepend>
							<v-avatar>
								<v-img :src="getUrl('logo/' + menu.name + '.png')"></v-img>
							</v-avatar>
						</template>
						<v-list-item-title>
							<span class="font-hyfgkt text-xl">{{ menu.name }}</span>
						</v-list-item-title>
					</v-list-item>
					<v-list-item class="mt-4" link>
						<template #prepend>
							<v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
						</template>
						<v-list-item-title class="grey--text text--darken-1">上传</v-list-item-title>
					</v-list-item>

					<v-list-item link>
						<template #prepend>
							<v-icon color="grey darken-1">mdi-cog</v-icon>
						</template>
						<v-list-item-title class="grey--text text--darken-1">管理</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>

			<v-main>
				<!-- <v-container class="fill-height"> </v-container> -->
				<RouterView :key="$route.path" />
			</v-main>
		</v-app>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const getUrl = (name: string) => {
	return new URL(`../assets/${name}`, import.meta.url).href;
};

const drawer = ref(false);

const menus = [
	{
		path: 'cy',
		name: '纯阳',
		icon: 'https://jx3.xoyo.com/gn/assets/images/page3/school-logo/chunyang.8edc9373.png',
	},
	{
		path: 'wh',
		name: '万花',
		icon: 'https://jx3.xoyo.com/gn/assets/images/page3/school-logo/wanhua.5bb90dbc.png',
	},
	{
		path: 'qx',
		name: '七秀',
		icon: 'https://jx3.xoyo.com/gn/assets/images/page3/school-logo/qixiu.67927e76.png',
	},
	{
		path: 'sl',
		name: '少林',
		icon: 'https://jx3.xoyo.com/gn/assets/images/page3/school-logo/shaolin.00df782c.png',
	},
	{
		path: 'tc',
		name: '天策',
		icon: 'https://jx3.xoyo.com/gn/assets/images/page3/school-logo/tiance.b35177ed.png',
	},
	{
		path: 'cj',
		name: '藏剑',
		icon: 'https://jx3.xoyo.com/gn/assets/images/page3/school-logo/cangjian.683193c5.png',
	},
	{
		path: 'wd',
		name: '五毒',
		icon: 'https://jx3.xoyo.com/gn/assets/images/page3/school-logo/wudu.ef167741.png',
	},
	{
		path: 'dxc',
		name: '稻香村',
	},
];
</script>
<style scoped></style>
