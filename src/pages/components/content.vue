<template>
    <el-col :md="20" class=" mx-auto md:ml-4 rounded-md bg-white md:p-10">
        <el-row :gutter="20">
            <el-col v-for="(o, index) in data.pageList" :key="o" :span="12" :xs="24" class="flex justify-center mb-2">
                <el-card>
                    <el-image style="width: 100%; height: 70%" :src="o.pic_url" fit="scale-down" />
                    <span class="text-lg font-bold">&nbsp;&nbsp;{{ o.title }}</span>
                    <div class="flex  justify-between">
                        <el-tag class="ml-2 mt-2" type="success">{{ o.create_time }}</el-tag>
                        <el-button class=" float-right" type="warning" :icon="Star" circle />
                    </div>
                </el-card>
            </el-col>
        </el-row>
        
        <!-- 分页 -->
        <el-col :md="20" class="page_col mx-auto mt-3">
            <el-pagination class="mx-auto" 
            @current-change="handleCurrentChange"
            :current-page="currentPage" 
            background layout="prev, pager, next" 
            :total="total" 
            :page-size="10" />
        </el-col>
    </el-col>

</template>

<script lang='ts' setup>
import { onMounted, ref, watch } from 'vue';
import { Star } from '@element-plus/icons-vue'
import axios from 'axios';
import { useCurrentPageStore } from '@/stores/currentPage';

const CurrentPageStore = useCurrentPageStore();

const total = ref(0);
onMounted(() => {
    currentPage.value = CurrentPageStore.currentPage||1;
    axios.get('http://localhost:8080/jx3m/picture',
        {
            params: {
                page: currentPage.value,
            }
        }
    ).then(res => {
        data.value = res.data.data
        total.value = res.data.data.total
    })
})

const data = ref([
    {
        pageList:[],title: '', create_time: '', pic_url: '', map: -1,map_children: ''
    },
])

const currentPage = ref(CurrentPageStore.currentPage||1);

const handleCurrentChange = (val:number) => {
    CurrentPageStore.setCurrentPage(val)
    currentPage.value = val;
    axios.get('http://localhost:8080/jx3m/picture', {
        params: {
            page_num: val
        }
    }).then(res => {
        data.value = res.data.data
    })
}

</script>
<style scoped>

</style>