<!-- eslint-disable vue/prop-name-casing -->
<template>
	<template v-for="(item, index) in props.articleData" :key="index">
		<v-card class="mx-auto" max-width="400" elevation="0">
			<v-img class="align-end text-white" :src="item.imgUrl"> </v-img>
			<v-card-text>
				<div class="font-hyfgkt text-lg -mb-2 -mt-2">
					{{ item.submap }}:
					<span class="text-base">{{ item.sentence }}</span>
				</div>
			</v-card-text>
			<v-card-subtitle>
				<div class="ml-1 mb-4">
					{{ item.createTime }}
				</div>
			</v-card-subtitle>
		</v-card>
	</template>
</template>

<script lang="ts" setup>
const props = defineProps({
	articleData: {
		type: Object,
		default() {
			return {};
		},
	},
});
</script>
<style scoped></style>
