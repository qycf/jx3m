<template>
	<v-layout>
		<v-main>
			<v-card border class="pt-3 pb-6 mt-4 v-card-border" density="compact" variant="text">
				<v-list-item :prepend-avatar="getUrl('us.jpg')">
					<template #title>
						<span class="font-hyfgkt text-xl">咕咕 & 秋月</span>
					</template>
					<template #subtitle>
						<span class="font-hyfgkt text-black">傻鸟叽喳唤月出，月上枝头照咕咕</span>
					</template>
					<template #append>
						<v-icon color="green">mdi-circle</v-icon>
					</template>
				</v-list-item>
				<div class="ml-4 mt-2 font-hyfgkt text-2xl">{{ article_head?.title }}</div>
				<div class="ml-4 mt-2">
					<div class="d-flex align-center font-hyfgkt">
						<v-icon size="small">mdi-laptop</v-icon>
						<span class="">来自神威·太湖之光</span>
						<v-icon class="ml-4" size="small">mdi-map-marker</v-icon>
						<span>{{ article_head?.submap }} </span>
					</div>
				</div>
				<v-divider class="border-opacity-25 mx-auto mt-2 mb-6" inset length="385"></v-divider>
				<Content :article-data="articleData" />

				<v-divider class="border-opacity-25 mx-auto mt-6" inset length="385"></v-divider>

				<div class="mt-4">
					<div class="ml-7">
						<v-icon color="blue-lighten-2" class="ml-2">mdi-thumb-up</v-icon>
						<span> 999+ </span>
						<v-icon color="red-lighten-2" class="mx-2">mdi-thumb-down</v-icon>
						<span> -9999 </span>
						<v-icon class="mx-2">mdi-comment</v-icon>
						<span> 4 </span>
						<v-icon color="pink-lighten-2" class="mx-2">mdi-share</v-icon>
						<span> 9999+ </span>
					</div>
				</div>

				<Comments />
			</v-card>
		</v-main>
	</v-layout>
</template>

<script lang="ts" setup>
import Content from '@/components/Content.vue';
import Comments from '@/components/Comments.vue';
import { getUrl } from '@/utils/imageUtil';
import { ref } from 'vue';
import router from '@/router';
import { article } from '@/api/article';

const id = ref(router.currentRoute.value.params.id);

interface Article {
	id: number;
	article_id: number;
	title: string;
	imgUrl: string;
	submap: string;
	sentence: string;
	createTime: string;
}

const articleData = ref();
const article_head = ref<Article>();
article(id.value as unknown as number).then((res: any) => {
	articleData.value = res;
	article_head.value = res[0];
});
</script>
<style scoped></style>
