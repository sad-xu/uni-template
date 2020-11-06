<template>
  <view>
    <!--  -->
    <text class="line-title">
      平台 - 语言 - 框架
    </text>
    <view class="img-wrapper platform-img">
      <image mode="aspectFit" src="@/static/platform.png" @tap="openPlatform"></image>
    </view>
    <!--  -->
    <text class="line-title">
      框架对比
    </text>
    <view id="chart-wrapper"></view>
    <!--  -->
    <view class="line-title">
      Taro 和 uni-app 对比
    </view>
    <view class="img-wrapper">
      <image mode="aspectFit" src="@/static/baiduzhishu.png" @tap="openBaiduZhishu"></image>
    </view>
    <view class="compare-table">
      <view class="row table-header">
        <view></view>
        <view>Taro</view>
        <view>uni-app</view>
      </view>
      <view class="row">
        <view>跨端</view>
        <view>ALL</view>
        <view>ALL</view>
      </view>
      <view class="row">
        <view>移动端容器</view>
        <view>React Native</view>
        <view>Weex</view>
      </view>
      <view class="row">
        <view>框架语法</view>
        <view>React/Vue</view>
        <view>Vue</view>
      </view>
      <view class="row">
        <view>多端编译</view>
        <view>文件条件编译</view>
        <view>条件编译</view>
      </view>
      <view class="row">
        <view>Star</view>
        <view>27.4k</view>
        <view>26.7k</view>
      </view>
      <view class="row">
        <view>commits</view>
        <view>6318</view>
        <view>6435</view>
      </view>
      <view class="row">
        <view>Opened Issues</view>
        <view>741</view>
        <view>631</view>
      </view>
      <view class="row">
        <view>Closed Issues</view>
        <view>5560</view>
        <view>1416</view>
      </view>
      <view class="row">
        <view>背景</view>
        <view>京东·凹凸实验室</view>
        <view>DCloud公司</view>
      </view>
      <view class="row">
        <view>社区</view>
        <view>活跃</view>
        <view>活跃</view>
      </view>
      <view class="row">
        <view>第三方库</view>
        <view>多</view>
        <view>多</view>
      </view>
      <view class="row">
        <view>案例</view>
        <view>多</view>
        <view>多</view>
      </view>
      <view class="row">
        <view>文档</view>
        <view>详细</view>
        <view>更详细</view>
      </view>
    </view>
  </view>
</template>

<script>
import F2 from '@antv/f2'

const chartData = [{ date: '2018-06-08', value: 810, name: 'NervJS/taro' }, { date: '2018-06-09', value: 1710, name: 'NervJS/taro' }, { date: '2018-06-12', value: 2580, name: 'NervJS/taro' }, { date: '2018-06-15', value: 3480, name: 'NervJS/taro' }, { date: '2018-06-27', value: 4350, name: 'NervJS/taro' }, { date: '2018-07-12', value: 5250, name: 'NervJS/taro' }, { date: '2018-08-09', value: 6120, name: 'NervJS/taro' }, { date: '2018-09-04', value: 6990, name: 'NervJS/taro' }, { date: '2018-09-20', value: 7890, name: 'NervJS/taro' }, { date: '2018-10-12', value: 8760, name: 'NervJS/taro' }, { date: '2018-11-07', value: 9660, name: 'NervJS/taro' }, { date: '2018-11-17', value: 10530, name: 'NervJS/taro' }, { date: '2018-12-07', value: 11430, name: 'NervJS/taro' }, { date: '2018-12-28', value: 12300, name: 'NervJS/taro' }, { date: '2019-01-22', value: 13200, name: 'NervJS/taro' }, { date: '2019-02-20', value: 14070, name: 'NervJS/taro' }, { date: '2019-03-04', value: 14940, name: 'NervJS/taro' }, { date: '2019-03-19', value: 15840, name: 'NervJS/taro' }, { date: '2019-04-09', value: 16710, name: 'NervJS/taro' }, { date: '2019-05-08', value: 17610, name: 'NervJS/taro' }, { date: '2019-06-09', value: 18480, name: 'NervJS/taro' }, { date: '2019-07-05', value: 19380, name: 'NervJS/taro' }, { date: '2019-08-08', value: 20250, name: 'NervJS/taro' }, { date: '2019-09-09', value: 21120, name: 'NervJS/taro' }, { date: '2019-11-04', value: 22020, name: 'NervJS/taro' }, { date: '2019-12-18', value: 22890, name: 'NervJS/taro' },
  { date: '2020-02-28', value: 23790, name: 'NervJS/taro' }, { date: '2020-04-17', value: 24660, name: 'NervJS/taro' }, { date: '2020-06-15', value: 25560, name: 'NervJS/taro' }, { date: '2020-07-27', value: 26430, name: 'NervJS/taro' }, { date: '2020-07-30', value: 26480, name: 'NervJS/taro' }, { date: '2020-08-12', value: 26606, name: 'NervJS/taro' }, { date: '2020-09-01', value: 26785, name: 'NervJS/taro' }, { date: '2020-09-09', value: 26845, name: 'NervJS/taro' }, { date: '2020-09-29', value: 27022, name: 'NervJS/taro' }, { date: '2020-10-12', value: 27104, name: 'NervJS/taro' }, { date: '2020-10-27', value: 27280, name: 'NervJS/taro' }, { date: '2020-11-05', value: 27353, name: 'NervJS/taro' }, { date: '2018-11-28', value: 750, name: 'dcloudio/uni-app' }, { date: '2019-01-07', value: 1530, name: 'dcloudio/uni-app' }, { date: '2019-02-24', value: 2340, name: 'dcloudio/uni-app' }, { date: '2019-03-17', value: 3150, name: 'dcloudio/uni-app' }, { date: '2019-03-24', value: 3930, name: 'dcloudio/uni-app' }, { date: '2019-04-05', value: 4740, name: 'dcloudio/uni-app' }, { date: '2019-04-22', value: 5550, name: 'dcloudio/uni-app' }, { date: '2019-05-10', value: 6330, name: 'dcloudio/uni-app' }, { date: '2019-05-29', value: 7140, name: 'dcloudio/uni-app' }, { date: '2019-06-16', value: 7950, name: 'dcloudio/uni-app' }, { date: '2019-07-04', value: 8730, name: 'dcloudio/uni-app' }, { date: '2019-07-24', value: 9540, name: 'dcloudio/uni-app' }, { date: '2019-08-11', value: 10350, name: 'dcloudio/uni-app' }, { date: '2019-08-27', value: 11130, name: 'dcloudio/uni-app' }, { date: '2019-09-16', value: 11940, name: 'dcloudio/uni-app' }, { date: '2019-10-08', value: 12750, name: 'dcloudio/uni-app' }, { date: '2019-10-22', value: 13530, name: 'dcloudio/uni-app' },
  { date: '2019-11-07', value: 14340, name: 'dcloudio/uni-app' }, { date: '2019-11-26', value: 15150, name: 'dcloudio/uni-app' }, { date: '2019-12-13', value: 15930, name: 'dcloudio/uni-app' }, { date: '2020-01-03', value: 16740, name: 'dcloudio/uni-app' }, { date: '2020-02-03', value: 17550, name: 'dcloudio/uni-app' },
  { date: '2020-03-05', value: 18330, name: 'dcloudio/uni-app' }, { date: '2020-03-29', value: 19140, name: 'dcloudio/uni-app' }, { date: '2020-04-17', value: 19950, name: 'dcloudio/uni-app' }, { date: '2020-05-07', value: 20730, name: 'dcloudio/uni-app' }, { date: '2020-05-26', value: 21540, name: 'dcloudio/uni-app' }, { date: '2020-06-16', value: 22350, name: 'dcloudio/uni-app' }, { date: '2020-07-06', value: 23130, name: 'dcloudio/uni-app' }, { date: '2020-07-29', value: 23940, name: 'dcloudio/uni-app' }, { date: '2020-07-30', value: 23997, name: 'dcloudio/uni-app' }, { date: '2020-08-12', value: 24424, name: 'dcloudio/uni-app' }, { date: '2020-08-19', value: 24644, name: 'dcloudio/uni-app' }, { date: '2020-09-01', value: 25070, name: 'dcloudio/uni-app' }, { date: '2020-09-09', value: 25303, name: 'dcloudio/uni-app' }, { date: '2020-09-29', value: 25869, name: 'dcloudio/uni-app' }, { date: '2020-10-09', value: 25998, name: 'dcloudio/uni-app' }, { date: '2020-10-27', value: 26466, name: 'dcloudio/uni-app' }, { date: '2020-11-05', value: 26699, name: 'dcloudio/uni-app' }, { date: '2018-03-09', value: 1920, name: 'Meituan-Dianping/mpvue' }, { date: '2018-03-10', value: 2610, name: 'Meituan-Dianping/mpvue' }, { date: '2018-03-12', value: 3270, name: 'Meituan-Dianping/mpvue' }, { date: '2018-03-13', value: 3930, name: 'Meituan-Dianping/mpvue' }, { date: '2018-03-15', value: 4590, name: 'Meituan-Dianping/mpvue' }, { date: '2018-03-19', value: 5250, name: 'Meituan-Dianping/mpvue' }, { date: '2018-03-26', value: 5910, name: 'Meituan-Dianping/mpvue' }, { date: '2018-04-08', value: 6570, name: 'Meituan-Dianping/mpvue' }, { date: '2018-04-18', value: 7230, name: 'Meituan-Dianping/mpvue' }, { date: '2018-05-02', value: 7920, name: 'Meituan-Dianping/mpvue' }, { date: '2018-05-17', value: 8580, name: 'Meituan-Dianping/mpvue' },
  { date: '2018-05-29', value: 9240, name: 'Meituan-Dianping/mpvue' }, { date: '2018-06-17', value: 9900, name: 'Meituan-Dianping/mpvue' }, { date: '2018-07-06', value: 10560, name: 'Meituan-Dianping/mpvue' }, { date: '2018-07-27', value: 11220, name: 'Meituan-Dianping/mpvue' }, { date: '2018-08-24', value: 11880, name: 'Meituan-Dianping/mpvue' }, { date: '2018-09-24', value: 12570, name: 'Meituan-Dianping/mpvue' }, { date: '2018-10-31', value: 13230, name: 'Meituan-Dianping/mpvue' }, { date: '2018-12-05', value: 13890, name: 'Meituan-Dianping/mpvue' }, { date: '2019-01-10', value: 14550, name: 'Meituan-Dianping/mpvue' }, { date: '2019-02-20', value: 15210, name: 'Meituan-Dianping/mpvue' }, { date: '2019-03-25', value: 15870, name: 'Meituan-Dianping/mpvue' }, { date: '2019-05-08', value: 16530, name: 'Meituan-Dianping/mpvue' }, { date: '2019-06-25', value: 17190, name: 'Meituan-Dianping/mpvue' }, { date: '2019-08-19', value: 17880, name: 'Meituan-Dianping/mpvue' }, { date: '2019-11-06', value: 18540, name: 'Meituan-Dianping/mpvue' }, { date: '2020-02-25', value: 19200, name: 'Meituan-Dianping/mpvue' }, { date: '2020-07-15', value: 19860, name: 'Meituan-Dianping/mpvue' }, { date: '2020-07-30', value: 19916, name: 'Meituan-Dianping/mpvue' }, { date: '2020-08-12', value: 19934, name: 'Meituan-Dianping/mpvue' }, { date: '2020-09-01', value: 19968, name: 'Meituan-Dianping/mpvue' }, { date: '2020-09-09', value: 19984, name: 'Meituan-Dianping/mpvue' }, { date: '2020-09-29', value: 20017, name: 'Meituan-Dianping/mpvue' }, { date: '2020-10-09', value: 20026, name: 'Meituan-Dianping/mpvue' }, { date: '2020-10-27', value: 20056, name: 'Meituan-Dianping/mpvue' }, { date: '2020-11-05', value: 20058, name: 'Meituan-Dianping/mpvue' },
  { date: '2016-10-19', value: 330, name: 'Tencent/omi' }, { date: '2017-03-21', value: 690, name: 'Tencent/omi' }, { date: '2017-07-17', value: 1080, name: 'Tencent/omi' }, { date: '2018-05-21', value: 1440, name: 'Tencent/omi' }, { date: '2018-10-18', value: 1830, name: 'Tencent/omi' }, { date: '2018-10-19', value: 2580, name: 'Tencent/omi' }, { date: '2018-10-20', value: 2940, name: 'Tencent/omi' }, { date: '2018-10-22', value: 3330, name: 'Tencent/omi' }, { date: '2018-10-23', value: 3690, name: 'Tencent/omi' }, { date: '2018-10-25', value: 4080, name: 'Tencent/omi' }, { date: '2018-10-30', value: 4440, name: 'Tencent/omi' }, { date: '2018-11-07', value: 4830, name: 'Tencent/omi' }, { date: '2018-11-14', value: 5190, name: 'Tencent/omi' }, { date: '2018-11-27', value: 5580, name: 'Tencent/omi' }, { date: '2018-12-07', value: 5940, name: 'Tencent/omi' }, { date: '2018-12-24', value: 6330, name: 'Tencent/omi' }, { date: '2019-01-28', value: 6690, name: 'Tencent/omi' }, { date: '2019-03-01', value: 7080, name: 'Tencent/omi' }, { date: '2019-03-08', value: 7440, name: 'Tencent/omi' }, { date: '2019-03-27', value: 7830, name: 'Tencent/omi' }, { date: '2019-04-18', value: 8190, name: 'Tencent/omi' }, { date: '2019-05-16', value: 8580, name: 'Tencent/omi' }, { date: '2019-06-30', value: 8940, name: 'Tencent/omi' }, { date: '2019-08-19', value: 9330, name: 'Tencent/omi' }, { date: '2019-10-17', value: 9690, name: 'Tencent/omi' }, { date: '2019-11-14', value: 10080, name: 'Tencent/omi' },
  { date: '2020-01-07', value: 10440, name: 'Tencent/omi' }, { date: '2020-04-02', value: 10830, name: 'Tencent/omi' }, { date: '2020-07-12', value: 11190, name: 'Tencent/omi' }, { date: '2020-07-30', value: 11249, name: 'Tencent/omi' }, { date: '2020-08-12', value: 11278, name: 'Tencent/omi' }, { date: '2020-09-07', value: 11330, name: 'Tencent/omi' }, { date: '2020-09-29', value: 11387, name: 'Tencent/omi' }, { date: '2020-10-09', value: 11401, name: 'Tencent/omi' }, { date: '2020-10-27', value: 11431, name: 'Tencent/omi' }, { date: '2020-11-05', value: 11444, name: 'Tencent/omi' }, { date: '2019-01-23', value: 210, name: 'didi/chameleon' }, { date: '2019-01-29', value: 720, name: 'didi/chameleon' }, { date: '2019-01-30', value: 1230, name: 'didi/chameleon' }, { date: '2019-02-01', value: 1470, name: 'didi/chameleon' }, { date: '2019-02-12', value: 1740, name: 'didi/chameleon' }, { date: '2019-02-14', value: 2010, name: 'didi/chameleon' }, { date: '2019-02-15', value: 2250, name: 'didi/chameleon' }, { date: '2019-02-21', value: 2520, name: 'didi/chameleon' }, { date: '2019-02-25', value: 2760, name: 'didi/chameleon' }, { date: '2019-02-27', value: 3030, name: 'didi/chameleon' }, { date: '2019-03-02', value: 3270, name: 'didi/chameleon' }, { date: '2019-03-07', value: 3540, name: 'didi/chameleon' }, { date: '2019-03-19', value: 3810, name: 'didi/chameleon' }, { date: '2019-03-29', value: 4050, name: 'didi/chameleon' }, { date: '2019-04-11', value: 4320, name: 'didi/chameleon' }, { date: '2019-04-30', value: 4560, name: 'didi/chameleon' },
  { date: '2019-05-17', value: 4830, name: 'didi/chameleon' }, { date: '2019-06-06', value: 5070, name: 'didi/chameleon' }, { date: '2019-07-11', value: 5340, name: 'didi/chameleon' }, { date: '2019-08-05', value: 5580, name: 'didi/chameleon' }, { date: '2019-08-29', value: 5850, name: 'didi/chameleon' }, { date: '2019-09-04', value: 6120, name: 'didi/chameleon' }, { date: '2019-09-17', value: 6360, name: 'didi/chameleon' }, { date: '2019-10-28', value: 6630, name: 'didi/chameleon' }, { date: '2019-12-10', value: 6870, name: 'didi/chameleon' }, { date: '2020-03-13', value: 7140, name: 'didi/chameleon' }, { date: '2020-04-24', value: 7380, name: 'didi/chameleon' }, { date: '2020-07-17', value: 7650, name: 'didi/chameleon' }, { date: '2020-07-30', value: 7698, name: 'didi/chameleon' }, { date: '2020-08-12', value: 7736, name: 'didi/chameleon' }, { date: '2020-09-01', value: 7776, name: 'didi/chameleon' }, { date: '2020-10-09', value: 7832, name: 'didi/chameleon' }, { date: '2020-10-27', value: 7859, name: 'didi/chameleon' }, { date: '2020-11-05', value: 7905, name: 'didi/chameleon' }, { date: '2019-01-14', value: 30, name: 'remaxjs/remax' }, { date: '2019-06-28', value: 150, name: 'remaxjs/remax' }, { date: '2019-07-26', value: 240, name: 'remaxjs/remax' }, { date: '2019-08-22', value: 330, name: 'remaxjs/remax' }, { date: '2019-08-26', value: 540, name: 'remaxjs/remax' }, { date: '2019-08-27', value: 630, name: 'remaxjs/remax' }, { date: '2019-08-29', value: 750, name: 'remaxjs/remax' }, { date: '2019-09-06', value: 840, name: 'remaxjs/remax' }, { date: '2019-09-18', value: 930, name: 'remaxjs/remax' }, { date: '2019-09-23', value: 1050, name: 'remaxjs/remax' }, { date: '2019-09-29', value: 1140, name: 'remaxjs/remax' }, { date: '2019-10-14', value: 1230, name: 'remaxjs/remax' }, { date: '2019-10-26', value: 1350, name: 'remaxjs/remax' }, { date: '2019-11-06', value: 1440, name: 'remaxjs/remax' }, { date: '2019-11-18', value: 1530, name: 'remaxjs/remax' },
  { date: '2019-12-04', value: 1650, name: 'remaxjs/remax' }, { date: '2019-12-18', value: 1740, name: 'remaxjs/remax' }, { date: '2019-12-28', value: 1830, name: 'remaxjs/remax' }, { date: '2020-01-09', value: 1950, name: 'remaxjs/remax' }, { date: '2020-01-15', value: 2040, name: 'remaxjs/remax' }, { date: '2020-02-03', value: 2130, name: 'remaxjs/remax' }, { date: '2020-03-09', value: 2250, name: 'remaxjs/remax' }, { date: '2020-04-01', value: 2340, name: 'remaxjs/remax' }, { date: '2020-04-20', value: 2430, name: 'remaxjs/remax' }, { date: '2020-05-09', value: 2550, name: 'remaxjs/remax' }, { date: '2020-05-26', value: 2640, name: 'remaxjs/remax' }, { date: '2020-06-07', value: 2730, name: 'remaxjs/remax' }, { date: '2020-07-02', value: 2850, name: 'remaxjs/remax' }, { date: '2020-07-21', value: 2940, name: 'remaxjs/remax' }, { date: '2020-07-30', value: 2982, name: 'remaxjs/remax' }, { date: '2020-08-12', value: 3033, name: 'remaxjs/remax' }, { date: '2020-09-01', value: 3107, name: 'remaxjs/remax' }, { date: '2020-09-09', value: 3128, name: 'remaxjs/remax' }, { date: '2020-09-29', value: 3186, name: 'remaxjs/remax' }, { date: '2020-10-09', value: 3200, name: 'remaxjs/remax' }, { date: '2020-10-27', value: 3272, name: 'remaxjs/remax' }, { date: '2020-11-05', value: 3308, name: 'remaxjs/remax' }, { date: '2018-12-10', value: 30, name: 'didi/mpx' }, { date: '2018-12-11', value: 180, name: 'didi/mpx' }, { date: '2018-12-12', value: 330, name: 'didi/mpx' }, { date: '2018-12-13', value: 480, name: 'didi/mpx' }, { date: '2018-12-18', value: 570, name: 'didi/mpx' }, { date: '2018-12-22', value: 630, name: 'didi/mpx' },
  { date: '2019-01-21', value: 720, name: 'didi/mpx' }, { date: '2019-03-19', value: 810, name: 'didi/mpx' }, { date: '2019-05-14', value: 870, name: 'didi/mpx' }, { date: '2019-06-04', value: 960, name: 'didi/mpx' }, { date: '2019-06-05', value: 1020, name: 'didi/mpx' }, { date: '2019-06-18', value: 1110, name: 'didi/mpx' }, { date: '2019-07-05', value: 1200, name: 'didi/mpx' }, { date: '2019-07-10', value: 1260, name: 'didi/mpx' }, { date: '2019-07-19', value: 1410, name: 'didi/mpx' }, { date: '2019-07-22', value: 1500, name: 'didi/mpx' }, { date: '2019-08-03', value: 1590, name: 'didi/mpx' }, { date: '2019-08-21', value: 1650, name: 'didi/mpx' }, { date: '2019-09-24', value: 1740, name: 'didi/mpx' }, { date: '2019-11-07', value: 1800, name: 'didi/mpx' }, { date: '2019-12-24', value: 1890, name: 'didi/mpx' }, { date: '2020-03-13', value: 1980, name: 'didi/mpx' }, { date: '2020-04-07', value: 2040, name: 'didi/mpx' }, { date: '2020-05-14', value: 2130, name: 'didi/mpx' }, { date: '2020-06-03', value: 2190, name: 'didi/mpx' }, { date: '2020-07-01', value: 2280, name: 'didi/mpx' }, { date: '2020-07-30', value: 2331, name: 'didi/mpx' }, { date: '2020-08-12', value: 2356, name: 'didi/mpx' }, { date: '2020-09-01', value: 2375, name: 'didi/mpx' }, { date: '2020-09-09', value: 2392, name: 'didi/mpx' }, { date: '2020-09-29', value: 2425, name: 'didi/mpx' }, { date: '2020-10-09', value: 2432, name: 'didi/mpx' }, { date: '2020-10-27', value: 2463, name: 'didi/mpx' }, { date: '2020-11-05', value: 2472, name: 'didi/mpx' }]

export default {
  data() {
    return {

    }
  },
  mounted() {
    this.$nextTick(() => {
      const chartWrapper = this.$el.querySelector('#chart-wrapper')
      const canvas = document.createElement('canvas')
      canvas.id = 'canvas'
      chartWrapper.appendChild(canvas)
      this.initChart(canvas)
    })
  },
  methods: {
    openBaiduZhishu() {
      uni.previewImage({
        urls: [require('@/static/baiduzhishu.png')]
      })
    },
    openPlatform() {
      uni.previewImage({
        urls: [require('@/static/platform.png')]
      })
    },
    initChart(canvas) {
      // console.log(uni.createSelectorQuery().select('#aaa').context())
      const chartWrapper = this.$el.querySelector('#chart-wrapper')
      const chart = new F2.Chart({
        el: canvas,
        pixelRatio: window.devicePixelRatio,
        width: chartWrapper.offsetWidth,
        height: chartWrapper.offsetHeight
      })
      chart.source(chartData, {
        value: {
          tickCount: 5,
          min: 0,
          formatter: function formatter(val) {
            if (val === 0) return 0
            return Math.floor(val / 1000) + 'k'
          }
        },
        date: {
          type: 'timeCat',
          tickCount: 3
        }
      })
      chart.legend('name', {
        position: 'bottom'
      })
      chart.tooltip({
        custom: true,
        snap: false,
        showXTip: true
      })
      chart.axis('date', {
        label(text, index, total) {
          const textCfg = {}
          if (index === 0) {
            textCfg.textAlign = 'left'
          } else if (index === total - 1) {
            textCfg.textAlign = 'right'
          }
          return textCfg
        }
      })
      chart.line().position('date*value').color('name').shape('smooth')
      // chart.area()
      //   .position('date*value')
      //   .color('l(90) 0:#1890FF 1:#f7f7f7')
      //   .shape('smooth')
      chart.render()
    }
  }
}
</script>

<style lang="scss" scoped>
#chart-wrapper {
  width: 100%;
  height: 400px;
  margin-bottom: 30rpx;
}

.platform-img {
  margin: 30rpx 0 40rpx;
}

.compare-table {
  // display: flex;
  margin: 0 20rpx;
  border: 1px solid $uni-border-color;
  border-bottom: 0;
  border-left: 0;
  margin-bottom: 60rpx;
  .row {
    display: flex;
    > view {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      padding: 10rpx;
      border-bottom: 1px solid $uni-border-color;
      border-left: 1px solid $uni-border-color;
      &:first-child {
        background-color: #f5f6f8;
      }
    }
  }
  .table-header {
    background-color: #f5f6f8;
    font-weight: bold;
  }
}
</style>
