<template>
  <view class="afa-skeleton-wrapper">
    <view>
      <slot></slot>
    </view>
    <transition name="fade">
      <view
        v-if="loading" class="afa-skeleton"
        :class="{ absolute: isAbsolute }">
        <template v-for="(row, i) in skeleton">
          <!-- 一行多个 -->
          <view v-if="Array.isArray(row)" :key="i" class="afa-skeleton-row">
            <view
              v-for="(item, j) in row" :key="j"
              class="afa-skeleton-item" :style="[item]">
            </view>
          </view>
          <!-- 单个 -->
          <view
            v-else :key="i"
            class="afa-skeleton-item" :style="[row]">
          </view>
        </template>
      </view>
    </transition>
  </view>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true
    },
    /*
      [
        [
          {},
          {}
        ]
      ]
      // OR
      [
        {},{},{}
      ]
    */
    skeleton: {
      type: Array,
      required: true
    },
    // 是否绝对定位
    isAbsolute: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.afa-skeleton-wrapper {
  position: relative;
}
.afa-skeleton {
  .afa-skeleton-row {
    display: flex;
  }
  .afa-skeleton-item {
    width: 100%;
    height: 40rpx;
    background-color: #f2f3f5;
    margin-top: 20rpx;
    border-radius: 10rpx;
    animation-duration: 1.5s;
    animation-name: blink;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
}
.absolute {
  position: absolute;
  width: 100%;
  top: 0;
}

@keyframes blink {
  0% {
    background-color: #d9d9d9;
  }
  50% {
    background-color: #f2f2f2;
  }
  100% {
    background-color: #d9d9d9;
  }
}

.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
