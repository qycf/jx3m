<template>
	<v-layout>
		<v-container fluid>
			<v-row align="center">
				<v-col v-for="item in article_list?.data" :key="item.id" cols="12" xs="12" sm="6" md="4" lg="4" xl="3">
					<v-card
						border
						class="mb-2"
						density="compact"
						:prepend-avatar="getLogo(item.map + '.png')"
						elevation="0"
						variant="text"
						:to="'/article/' + item.id"
					>
						<v-img :src="item.cover" height="200" cover></v-img>
						<template #title>
							<span class="text-black">{{ item.title }}</span>
						</template>
						<template #subtitle>
							<span>{{ item.map }}-{{ item.submap }}</span>
						</template>
						<v-card-text> 我真帅！ </v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<v-pagination v-if="length > 1" v-model="page" active-color="blue" class="my-4" :length="length"></v-pagination>
		</v-container>
	</v-layout>
</template>

<script lang="ts" setup>
import { ArticleData, articleList } from '@/api/article';
import { getLogo } from '@/utils/imageUtil';
import router from '@/router';
import { ref, watch } from 'vue';

const page = ref(1);
const length = ref();

const getArticleList = (newPage: number, newMap?: string) => {
	articleList(newPage, newMap).then((res) => {
		article_list.value = res;
		length.value = res.pages;
	});
};

getArticleList(1, router.currentRoute.value.params.map as string);

const article_list = ref<ArticleData>();

watch(page, (newPage) => {
	getArticleList(newPage);
});
</script>
