<template>
  <div class="overflow-auto flex flex-col items-center">
    <my-svg-icon
      v-if="isMobileTerminal"
      name="close"
      class="w-3 h-3 p-0.5 m-1 ml-auto"
      fillClass="fill-zinc-900 dark:fill-zinc-200"
      @click="close"
    ></my-svg-icon>
    <img :src="blob" ref="imageTarget" alt="" />
    <my-button
      class="mt-4 w-[80%] xl:1/2"
      @click="onConfirmClick"
      :loading="loading"
    >
      确定</my-button
    >
  </div>
</template>
<script>
const EMITS_CLOSE = 'close'
// pc
const pcOptions = {
  aspectRatio: 1
}
// mobile
const mobileOptions = {
  aspectRatio: 1,
  viewMode: 1,
  dragMode: 'move',
  cropBoxMovable: false,
  cropBoxResizable: false
}
</script>
<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import { onMounted, ref } from 'vue'
import { getOSSClient } from '@/utils/sts'
defineProps({
  blob: {
    type: String,
    required: true
  }
})
const imageTarget = ref(null)
const emits = defineEmits([EMITS_CLOSE])
const close = () => {
  // console.log(123)
  emits(EMITS_CLOSE)
}
const loading = ref(false)
const onConfirmClick = () => {
  loading.value = true
  cropper.getCroppedCanvas().toBlob((blob) => {
    console.log(URL.createObjectURL(blob))
    putObjectToOSS(blob)
  })
}
let cropper
onMounted(() => {
  cropper = new Cropper(
    imageTarget.value,
    isMobileTerminal.value ? mobileOptions : pcOptions
  )
})

/**
 * 进行 OSS 上传
 */
let ossClient = null
let store = useStore()
const putObjectToOSS = async (file) => {
  if (!ossClient) {
    ossClient = await getOSSClient()
  }
  try {
    // 因为当前凭证只具备 images 文件夹下的访问权限，所以图片需要上传到 images/xxx.xx 。否则你将得到一个 《AccessDeniedError: You have no right to access this object because of bucket acl.》 的错误
    const fileTypeArr = file.type.split('/')
    const fileName = `${store.getters.userInfo.username}/${Date.now()}.${
      fileTypeArr[fileTypeArr.length - 1]
    }`
    // 文件存放路径，文件
    const res = await ossClient.put(`images/${fileName}`, file)
    // 通知服务器
    onChangeProfile(res.url)
  } catch (e) {
    message('error', e)
  }
}

/**
 * 上传新头像到服务器
 */
const onChangeProfile = async (avatar) => {
  // 更新本地数据
  store.commit('user/setUserInfo', {
    ...store.getters.userInfo,
    avatar
  })
  // 更新服务器数据
  await putProfile(store.getters.userInfo)
  // 通知用户
  message('success', '用户头像修改成功')
  // 关闭 loading
  loading.value = false
  // 关闭 dialog
  close()
}
</script>
<style scope></style>
