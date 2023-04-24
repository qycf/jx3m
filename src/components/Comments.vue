<template>
	<v-list lines="three">
		<template v-for="(item, index) in comments" :key="index">
			<v-list-item :prepend-avatar="item.avatar">
				<template #title>
					<span class="author">{{ item.author }}：</span>
				</template>
				<template #subtitle>
					<span>{{ item.content }}</span>
				</template>
				<template #append>
					<v-icon color="red-lighten-2 mt-6 mr-4">mdi-thumb-up</v-icon>
				</template>
				<div class="comment_date">{{ item.comment_info }}</div>
			</v-list-item>
			<v-divider class="border-opacity-25 mx-auto" inset length="385"></v-divider>
		</template>
	</v-list>
</template>

<script lang="ts" setup>
import { comments } from '@/store/mock';

const getImageUrl = (name: string) => {
	return new URL(`../assets/${name}`, import.meta.url).href;
};

const MyComment = [
	{
		author: '秋月的暗恋者',
		avatar: getImageUrl('whdi.jpg'),
		content: '秋月giegie真帅！',
		comment_info: '22-12-18 18:42 来自三星望月',
	},
	{
		author: '秋月的追求者',
		avatar: getImageUrl('whdi.jpg'),
		content: '秋月giegie真帅！',
		comment_info: '22-12-18 18:42 来自七秀坊',
	},
	{
		author: '秋月的追求者',
		avatar: getImageUrl('qy.jpg'),
		content: '秋月giegie真帅！',
		comment_info: '22-12-18 18:42 来自五毒',
	},
];
</script>
<style>
.comment_date {
	margin-top: 0.5rem;
	/* float: right; */
	font-size: xx-small;
	color: #a1a1a1;
}
</style>
