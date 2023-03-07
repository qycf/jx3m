<template>
  <div class="common-layout">
    <el-container>
      <el-header class="flex justify-items-center bg-slate-400 h-1/2" height="125px">
        <img class="my-auto" src="./assets/img1665227758649.png" alt="">
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
              <el-cascader  v-model="selectId" :options="options" clearable @change="menuchange" />
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
      </el-header>
      <el-main class="main w-auto  mx-auto md:w-4/5">

        <el-row class="row-bg ">
          <el-col :span="3" class="rounded-md hidden-sm-and-down">
            <el-affix :offset="20">
              <el-menu class="rounded-md p-3" default-active="-1">
                <el-menu-item index="-1">
                  <span class="mx-auto">首页</span>
                </el-menu-item>
                <el-menu-item v-for="item in map" :index="item.id + ''">
                  <span class="mx-auto">{{ item.name }}</span>
                </el-menu-item>
              </el-menu>
            </el-affix>
          </el-col>

          <el-col :md="20" class=" mx-auto md:ml-4 rounded-md bg-white md:p-10">
            <el-row :gutter="20">
              <el-col v-for="(o, index) in data" :key="o" :span="12" :xs="24" class="flex justify-center mb-2">
                <el-card>
                  <el-image style="width: 100%; height: 70%" :src="o.img" fit="scale-down" />
                  <!-- <el-image style="width: 100%; height: 70%" src="https://s6.jpg.cm/2022/10/08/P1rIF2.png"
                    fit="scale-down" /> -->
                  <span class="text-lg font-bold">&nbsp;&nbsp;{{ o.title }}</span>
                  <div class="flex  justify-between">
                    <el-tag class="ml-2 mt-2" type="success">{{ o.time }}</el-tag>
                    <el-button class=" float-right" type="warning" :icon="Star" circle />
                  </div>
                </el-card>
              </el-col>
            </el-row>

            <!-- 分页 -->
            <el-col :md="20" class="page_col mx-auto mt-3">
              <el-pagination class="mx-auto" background layout="prev, pager, next" :total="100" />
            </el-col>

          </el-col>

        </el-row>
        <v-router></v-router>
      </el-main>
    </el-container>
  </div>
</template>


<script lang="ts" setup>
import { reactive, ref, Ref } from 'vue'
import axios from 'axios'
import {
  Search, Star, FolderAdd, SoldOut
} from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'
import type { UploadInstance } from 'element-plus'
import { options, map } from './ListData'

const uploadRef = ref<UploadInstance>()
const selectId = ref([])
const dialogVisible = ref(false)
const handleClose = (done: () => void) => {

  done()
  clearData()
}

const formData = reactive({
  title: '',
  map: -1,
  mapChildren: "",
})

const newTitle = ref('')

const menuchange = (value: any) => {
  formData.map = value[0]
  formData.mapChildren = value[1]
  newTitle.value = value[1] + '﹒'
  console.log(newTitle.value);
  
}

const submitUpload = () => {
  dialogVisible.value = false
  formData.title = newTitle.value + formData.title
  console.log(formData.title);
  
  uploadRef.value!.submit()
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

const clearData = () => {
  formData.map = -1
  formData.mapChildren = ""
  formData.title = ""
  selectId.value=[]
  uploadRef.value?.clearFiles()
}


const data = ref([
  {
    title: '溪山渡·九落沉璧', time: '2022-10-04', img: 'https://s6.jpg.cm/2022/10/08/P1rIF2.png'
    , imglist: ['src/assets/DFC93AE9861ECC7C47C1572D382856A9.png', 'src/assets/IMG_6664.png'
    ]
  },
  {
    title: '百尺峡·贯月楼', time: '2021-01-01', img: 'src/assets/DFC93AE9861ECC7C47C1572D382856A9.png'
    , imglist: ['src/assets/DFC93AE9861ECC7C47C1572D382856A9.png', 'src/assets/IMG_6664.png'
    ]
  },
  {
    title: '百尺峡·学仙亭', time: '2021-01-01', img: 'src/assets/809A8FFFD904004C0702F3C39B0D833C.png'
    , imglist: ['src/assets/809A8FFFD904004C0702F3C39B0D833C.png', 'src/assets/IMG_6663.png'
    ]
  },
  {
    title: '百尺峡·语仙楼', time: '2021-01-01', img: 'src/assets/A2D0431036A196B0C46193DDC1A0DC1B.png'
    , imglist: ['src/assets/A2D0431036A196B0C46193DDC1A0DC1B.png', 'src/assets/IMG_6665.png'
    ]
  }, {
    title: '百尺峡·语仙楼', time: '2021-01-01', img: 'src/assets/A2D0431036A196B0C46193DDC1A0DC1B.png'
    , imglist: ['src/assets/A2D0431036A196B0C46193DDC1A0DC1B.png', 'src/assets/IMG_6665.png'
    ]
  }, {
    title: '百尺峡·语仙楼', time: '2021-01-01', img: 'src/assets/A2D0431036A196B0C46193DDC1A0DC1B.png'
    , imglist: ['src/assets/A2D0431036A196B0C46193DDC1A0DC1B.png', 'src/assets/IMG_6665.png'
    ]
  }, {
    title: '百尺峡·语仙楼', time: '2021-01-01', img: 'src/assets/A2D0431036A196B0C46193DDC1A0DC1B.png'
    , imglist: ['src/assets/A2D0431036A196B0C46193DDC1A0DC1B.png', 'src/assets/IMG_6665.png'
    ]
  }, {
    title: '百尺峡·语仙楼', time: '2021-01-01', img: 'src/assets/A2D0431036A196B0C46193DDC1A0DC1B.png'
    , imglist: ['src/assets/A2D0431036A196B0C46193DDC1A0DC1B.png', 'src/assets/IMG_6665.png'
    ]
  }, {
    title: '百尺峡·语仙楼', time: '2021-01-01', img: 'src/assets/A2D0431036A196B0C46193DDC1A0DC1B.png'
    , imglist: ['src/assets/A2D0431036A196B0C46193DDC1A0DC1B.png', 'src/assets/IMG_6665.png'
    ]
  },
])

const srcList = [
  'src/assets/DFC93AE9861ECC7C47C1572D382856A9.png',
]
// const options = [
//   {
//     value: '0',
//     label: '纯阳宫',
//     children: [
//       {
//         value: 'baichixia',
//         label: '百尺峡',
//       },
//       {
//         value: 'lunjianfeng',
//         label: '论剑锋',
//       },
//     ],
//   }, {
//     value: 1, label: '万花谷', children: [
//       {
//         value: 1,
//         label: '拦星潭',
//       },
//       {
//         value: 1,
//         label: '落星湖',
//       }, { value: 1, label: '黄梁村' }, 
//       { value: 1, label: '聋哑村' }, 
//       { value: 1, label: '晴昼海' }
//     ]
//   },
//   {
//     value: 'wudu',
//     label: '五毒教',
//     children: [
//       {
//         value: 'xishandu',
//         label: '溪山渡',

//       },
//       {
//         value: 'form',
//         label: 'Form',
//         children: [
//           {
//             value: 'radio',
//             label: 'Radio',
//           },
//           {
//             value: 'checkbox',
//             label: 'Checkbox',
//           },
//           {
//             value: 'input',
//             label: 'Input',
//           },
//           {
//             value: 'input-number',
//             label: 'InputNumber',
//           },
//           {
//             value: 'select',
//             label: 'Select',
//           },
//           {
//             value: 'cascader',
//             label: 'Cascader',
//           },
//           {
//             value: 'switch',
//             label: 'Switch',
//           },
//           {
//             value: 'slider',
//             label: 'Slider',
//           },
//           {
//             value: 'time-picker',
//             label: 'TimePicker',
//           },
//           {
//             value: 'date-picker',
//             label: 'DatePicker',
//           },
//           {
//             value: 'datetime-picker',
//             label: 'DateTimePicker',
//           },
//           {
//             value: 'upload',
//             label: 'Upload',
//           },
//           {
//             value: 'rate',
//             label: 'Rate',
//           },
//           {
//             value: 'form',
//             label: 'Form',
//           },
//         ],
//       },
//       {
//         value: 'data',
//         label: 'Data',
//         children: [
//           {
//             value: 'table',
//             label: 'Table',
//           },
//           {
//             value: 'tag',
//             label: 'Tag',
//           },
//           {
//             value: 'progress',
//             label: 'Progress',
//           },
//           {
//             value: 'tree',
//             label: 'Tree',
//           },
//           {
//             value: 'pagination',
//             label: 'Pagination',
//           },
//           {
//             value: 'badge',
//             label: 'Badge',
//           },
//         ],
//       },
//       {
//         value: 'notice',
//         label: 'Notice',
//         children: [
//           {
//             value: 'alert',
//             label: 'Alert',
//           },
//           {
//             value: 'loading',
//             label: 'Loading',
//           },
//           {
//             value: 'message',
//             label: 'Message',
//           },
//           {
//             value: 'message-box',
//             label: 'MessageBox',
//           },
//           {
//             value: 'notification',
//             label: 'Notification',
//           },
//         ],
//       },
//       {
//         value: 'navigation',
//         label: 'Navigation',
//         children: [
//           {
//             value: 'menu',
//             label: 'Menu',
//           },
//           {
//             value: 'tabs',
//             label: 'Tabs',
//           },
//           {
//             value: 'breadcrumb',
//             label: 'Breadcrumb',
//           },
//           {
//             value: 'dropdown',
//             label: 'Dropdown',
//           },
//           {
//             value: 'steps',
//             label: 'Steps',
//           },
//         ],
//       },
//       {
//         value: 'others',
//         label: 'Others',
//         children: [
//           {
//             value: 'dialog',
//             label: 'Dialog',
//           },
//           {
//             value: 'tooltip',
//             label: 'Tooltip',
//           },
//           {
//             value: 'popover',
//             label: 'Popover',
//           },
//           {
//             value: 'card',
//             label: 'Card',
//           },
//           {
//             value: 'carousel',
//             label: 'Carousel',
//           },
//           {
//             value: 'collapse',
//             label: 'Collapse',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'resource',
//     label: 'Resource',
//     children: [
//       {
//         value: 'axure',
//         label: 'Axure Components',
//       },
//       {
//         value: 'sketch',
//         label: 'Sketch Templates',
//       },
//       {
//         value: 'docs',
//         label: 'Design Documentation',
//       },
//     ],
//   },
// ]

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
