<template>
      <el-container>
        <el-header class="flex justify-items-center bg-slate-400 h-1/2" height="125px">
          <headeVue/>
        </el-header>
        <el-main class="main w-auto  mx-auto md:w-4/5">
          <el-row class="row-bg ">
            <siderBar/>
            <content/>
          </el-row>
        </el-main>
      </el-container>
  </template>
  
  
  <script lang="ts" setup>
  import headeVue from '@/pages/components/header.vue'
  import siderBar from '@/pages/components/siderBar.vue'
  import content from '@/pages/components/content.vue'

  </script>
  <style>
  body {
    background-color: #F7F8F9;
  }
  
  .page_col {
    display: flex !important;
    align-items: center !important;
  }
  
  .el-menu-mt-4 {
    margin-top: -1rem;
    margin-bottom: 1rem;
  }
  
  .time {
    font-size: 12px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  
  .flex-grow {
    flex-grow: 1;
  }
  
  .button {
    padding: 0;
    min-height: auto;
  
  }
  
  .image {
    width: 100%;
    display: block;
  }
  </style>
  