import { createRouter, createWebHistory } from 'vue-router';
// import routes from '~pages';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const route = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/index.vue'),
		children: [
			{
				path: '',
				name: 'index',
				component: () => import('@/views/index/index.vue'),
			},
		],
	},
	{
		path: '/:map',
		name: 'map',
		component: () => import('@/views/index.vue'),
		children: [
			{
				path: '',
				name: 'mapid',
				component: () => import('@/views/index/index.vue'),
			},
		],
	},
	{
		path: '/article',
		name: '文章详情',
		component: () => import('@/views/index.vue'),
		children: [
			{
				path: ':id',
				name: 'id',
				component: () => import('@/views/article/index.vue'),
			},
		],
	},
];

//导入生成的路由数据
const router = createRouter({
	history: createWebHistory(),
	routes: route,
});

router.beforeEach(async (_to, _from, next) => {
	NProgress.start();
	next();
});

router.afterEach((_to) => {
	NProgress.done();
});

export default router;
