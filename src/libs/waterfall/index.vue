<template>
  <div
    class="relative"
    ref="containerTarget"
    :style="{
      height: containerHeight + 'px'
    }"
  >
    <template v-if="columnWidth && data.length">
      <div
        v-for="(item, index) in data"
        :key="nodeKey ? item[nodeKey] : index"
        class="m-waterfall-item absolute duration-300"
        :style="{
          width: columnWidth + 'px',
          left: item._style?.left + 'px',
          top: item._style?.top + 'px'
        }"
      >
        <slot :item="item" :width="columnWidth" :index="index"></slot>
      </div>
    </template>
    <div v-else>加载中。。。</div>
  </div>
</template>
<script>
export default {
  name: 'waterfall'
}
</script>
<script setup>
import { ref, computed, onMounted, watch, nextTick, onUnmounted } from 'vue'
import {
  getImgElements,
  getAllImg,
  onComplateImgs,
  getMinHeightColumn,
  getMinHeight,
  getMaxHeight
} from './utils'
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  nodeKey: {
    type: String
  },
  column: {
    default: 2,
    type: Number
  },
  columnSpacing: {
    default: 20,
    type: Number
  },
  rowSpacing: {
    default: 20,
    type: Number
  },
  picturePreReading: {
    default: true,
    type: Boolean
  }
})

const containerHeight = ref(0)
const columnHeightObj = ref({})
// 创建每列高度集合
const useColumnHeightObj = () => {
  columnHeightObj.value = {}
  for (let i = 0; i < props.column; i++) {
    columnHeightObj.value[i] = 0
  }
  // console.log('columnHeightObj', columnHeightObj)
}
// 容器实例
const containerTarget = ref(null)
// 容器总宽度
const containerWidth = ref(0)
const containerLeft = ref(0)
const useContainerWidth = () => {
  const { paddingLeft, paddingRight } = getComputedStyle(
    containerTarget.value,
    null
  )
  containerLeft.value = parseFloat(paddingLeft)
  containerWidth.value =
    containerTarget.value.offsetWidth -
    parseFloat(paddingLeft) -
    parseFloat(paddingRight)
  // console.log('containerWidth.value', containerWidth.value) // 1260
}
// 列宽
const columnWidth = ref(0)
// 列间距的合计
const columnSpacingTotal = computed(() => {
  return (props.column - 1) * props.columnSpacing
})
// 计算列宽
const useColumnWidth = () => {
  useContainerWidth()
  columnWidth.value =
    (containerWidth.value - columnSpacingTotal.value) / props.column
  // console.log('columnWidth.value', columnWidth.value) // 236
}
onMounted(() => {
  useColumnWidth()
})

// item 高度集合
let itemHeights = []
// 监听图片加载完成
const waitImgComplate = () => {
  itemHeights = []
  let itemElements = [...document.getElementsByClassName('m-waterfall-item')]
  const imgElements = getImgElements(itemElements)
  const allImgs = getAllImg(imgElements)
  onComplateImgs(allImgs).then(() => {
    // 图片加载完成
    itemElements.forEach((el) => {
      itemHeights.push(el.offsetHeight)
    })
    // console.log('itemHeights', itemHeights) // 获取没个item的高度
    useItemLocation()
  })
}
const useItemHeight = () => {
  itemHeights = []
  let itemElements = [...document.getElementsByClassName('m-waterfall-item')]
  itemElements.forEach((el) => {
    itemHeights.push(el.offsetHeight)
  })
  useItemLocation()
}
/**
 * 渲染位置
 */
const useItemLocation = () => {
  props.data.forEach((item, index) => {
    if (item._style) {
      return
    }
    item._style = {}
    item._style.left = getItemLeft()
    item._style.top = getItemTop()
    // 指定的列进行高度的自增
    increasingHeight(index)
  })
  containerHeight.value = getMaxHeight(columnHeightObj.value)
}
onUnmounted(() => {
  props.data.forEach((item) => {
    delete item._style
  })
})

const getItemLeft = () => {
  const column = getMinHeightColumn(columnHeightObj.value)
  // console.log('column', column)
  return (
    column * (columnWidth.value + props.columnSpacing) + containerLeft.value
  )
}
const getItemTop = () => {
  return getMinHeight(columnHeightObj.value)
}
const increasingHeight = (index) => {
  const minHeightColumn = getMinHeightColumn(columnHeightObj.value)
  columnHeightObj.value[minHeightColumn] +=
    itemHeights[index] + props.rowSpacing
  // console.log('columnHeightObj.value', columnHeightObj.value)
}
watch(
  () => props.data,
  (newVal) => {
    const resetColumnHeight = newVal.every((item) => !item._style)
    // console.log('resetColumnHeight', resetColumnHeight)
    if (resetColumnHeight) {
      useColumnHeightObj()
    }
    nextTick(() => {
      if (props.picturePreReading) {
        waitImgComplate()
      } else {
        useItemHeight()
      }
    })
  },
  {
    immediate: true,
    deep: true
  }
)
/**
 * 重新构建瀑布流
 */
const reset = () => {
  setTimeout(() => {
    useColumnWidth()
    // 重置所有定位数据
    props.data.forEach((item) => {
      item._style = null
    })
  }, 200)
}
/**
 * 监听列数的变化
 *
 */
watch(
  () => props.column,
  (newVal) => {
    if (props.picturePreReading) {
      columnWidth.value = 0
      reset()
    } else {
      reset()
    }
    // nextTick(() => {
    // })
  }
)
</script>
<style scope></style>
