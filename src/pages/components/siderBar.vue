<template>
  <el-col :span="3" class="rounded-md hidden-sm-and-down">
              <el-affix :offset="20">
                <el-menu class="rounded-md p-3" default-active="-1" @select="handeleSelect">
                  <el-menu-item index="-1">
                    <span class="mx-auto">首页</span>
                  </el-menu-item>
                  <el-menu-item v-for="item in map" :index="item.id + ''">
                    <span class="mx-auto">{{ item.name }}</span>
                  </el-menu-item>
                </el-menu>
              </el-affix>
            </el-col>
</template>

<script lang='ts' setup>
import {map} from '@/ListData'
import axios from 'axios';
import { useCurrentPageStore } from '@/stores/currentPage';
import { usecontentStore } from '@/stores/content';

import { ref } from 'vue';

const CurrentPageStore = useCurrentPageStore();
const contentStore = usecontentStore();

const handeleSelect = (index: number) => {
  axios.get('http://localhost:8080/jx3m/picture/map', {
    params: {
      page_num: CurrentPageStore.currentPage||1,
      map: index
    }
  }).then(res => {
    contentStore.setData(res.data.data)
  })
  }
</script>
<style scoped>
</style>