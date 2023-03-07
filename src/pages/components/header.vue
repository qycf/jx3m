<template>
    <img class="my-auto" src="@/assets/img1665227758649.png" alt="">
    <div class="flex-grow" />
    <el-button class="my-auto" :icon="Search" circle />
    <el-button class="my-auto" :icon="FolderAdd" circle @click="dialogVisible = true" />
    <el-dialog v-model="dialogVisible" title="新建图片" width="30%" :before-close="handleClose">
        <el-upload ref="uploadRef" class="upload-demo" action="" :http-request="uploadAction" list-type="picture"
            :auto-upload="false" :limit="1">
            <el-button type="primary">Click to upload</el-button>
            <template #tip>
                <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                </div>
            </template>
        </el-upload>
        <el-form label-position="left" label-width="100px" :model="formData" style="max-width: 460px">
            <el-form-item label="标题">
                <el-input v-model="formData.title" placeholder="愁心逐月" />
            </el-form-item>
            <el-form-item label="分类">
                <el-cascader v-model="selectId" :options="options" clearable @change="menuchange" />
            </el-form-item>

        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="submitUpload">
                    确认
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang='ts' setup>
import { Search, Star, FolderAdd, SoldOut } from '@element-plus/icons-vue'
import axios from 'axios';
import { UploadInstance } from 'element-plus';
import { reactive, ref } from 'vue';
import { options, map } from '@/ListData'

const uploadRef = ref<UploadInstance>()

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
    done()
    clearData()
}

const selectId = ref([])
const formData = reactive({
    title: '',
    map: -1,
    mapChildren: "",
})

const clearData = () => {
    formData.map = -1
    formData.mapChildren = ""
    formData.title = ""
    selectId.value = []
    uploadRef.value?.clearFiles()
}
const newTitle = ref('')

const menuchange = (value: any) => {
    formData.map = value[0]
    formData.mapChildren = value[1]
    newTitle.value = value[1] + '﹒'
    console.log(newTitle.value);
}

const uploadAction = (option: any) => {

    console.log(formData);


    // picture 转blob
    const blob = new Blob([JSON.stringify(formData)], {
        type: 'application/json',
    })

    let httpData = new FormData()
    httpData.append('file', option.file)
    httpData.append('picture', blob)
    axios.post('http://localhost:8080/jx3m/picture', httpData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(res => {

        clearData()

    }).catch(err => {
        console.log("err");

        console.log(err);

    })
}

const submitUpload = () => {
    dialogVisible.value = false
    formData.title = newTitle.value + formData.title
    console.log(formData.title);

    uploadRef.value!.submit()
}

</script>
<style>

</style>