<template>
  <view>
    <view>
      <uni-tag class="tag" mark text="通过 HBuilder 创建" type="primary"></uni-tag>
    </view>
    <text class="line-text">
      项目依赖本地 HBuilder，后端无法自动打包发布
    </text>
    <view>
      <uni-tag class="tag" mark text="通过 cli 创建" type="primary"></uni-tag>
    </view>
    <text class="line-text">
      所有依赖都在项目下，可手动管理，具有一致性
    </text>
    <!--  -->
    <uni-card title="项目结构" @click="toggleTree">
      <transition-group name="list-complete" tag="div">
        <view
          v-for="item in treeData" :key="item.t"
          class="line" :style="item.c ? 'color: #4cd964' : ''">
          <text space="nbsp" class="name">
            {{ item.t }}
          </text>
          <text class="desc" :style="item.c ? 'color: #4cd964' : ''">
            {{ item.desc ? '# ' + item.desc : '' }}
          </text>
        </view>
      </transition-group>
    </uni-card>
    <!--  -->
    <view class="title">
      准备工作
    </view>
    <view class="sub-box">
      <view class="sub-title">
        依赖安装前
      </view>
      <text class="line-code">
        npm config set registry https://registry.npm.taobao.org/ -g
      </text>
      <text class="line-code">
        npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ -g
      </text>
    </view>

    <view class="sub-box">
      <view class="sub-title">
        VSCode 相关
      </view>
      <text class="line-code">
        必装插件 <b>Vetur</b>, <b>ESlint</b>, <b>stylelint</b>, <b>EditorConfig for VS Code</b>
      </text>
      <text class="line-code" space="nbsp">
        {{ vscodeConfig }}
      </text>
    </view>

    <view class="sub-box">
      <view class="sub-title">
        开发环境额外依赖
      </view>
      <text class="line-code">
        stylelint-config-standard => css样式规范
      </text>
      <text class="line-code">
        @vue/eslint-config-standard + eslint-plugin-vue + babel-eslint + eslint-plugin-import + eslint-plugin-node + eslint-plugin-promise + eslint-plugin-standard + @vue/cli-plugin-eslint => js、vue代码规范
      </text>
      <text class="line-code">
        node-sass + sass-loader => scss编译
      </text>
    </view>
  </view>
</template>

<script>
const fullTree = [
  { t: '├── .editorconfig', desc: '统一编辑器风格', c: '1' },
  { t: '├── .eslintrc.js', desc: 'eslint配置', c: '1' },
  { t: '├── .gitignore', desc: '', c: '' },
  { t: '├── .stylelintrc.js', desc: 'css格式配置', c: '1' },
  { t: '├── api', desc: '接口', c: '1' },
  { t: '├── babel.config.js', desc: 'js编译配置', c: '' },
  { t: '├── dist', desc: '打包产物', c: '' },
  { t: '├── package.json', desc: '依赖', c: '' },
  { t: '├── postcss.config.js', desc: 'css转换', c: '' },
  { t: '├── public', desc: '', c: '' },
  { t: '│   └── index.html', desc: '', c: '' },
  { t: '└── src', desc: '开发目录', c: '' },
  { t: '    ├── App.vue', desc: '配置全局样式及监听生命周期', c: '' },
  { t: '    ├── main.js', desc: '初始化入口文件', c: '' },
  { t: '    ├── manifest.json', desc: '多端配置', c: '' },
  { t: '    ├── pages', desc: '页面', c: '' },
  { t: '    │   └── camelCase', desc: '', c: '' },
  { t: '    │       └── CamelCase.vue', desc: '', c: '' },
  { t: '    ├── pages.json', desc: '路由、导航条等页面类信息', c: '' },
  { t: '    └── utils', desc: '', c: '1' },
  { t: '    │   ├── filter.js', desc: '过滤器', c: '1' },
  { t: '    │   ├── index.js', desc: '通用函数', c: '1' },
  { t: '    │   └── request.js', desc: '请求封装', c: '1' },
  { t: '    ├── static', desc: '静态资源', c: '' },
  { t: '    │   └── logo.png', desc: '', c: '' },
  { t: '    └── uni.scss', desc: '全局scss变量', c: '' }
]

export default {
  data() {
    return {
      toggleStatus: true,
      treeData: [],
      vscodeConfig: `// 保存时自动校验
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
}
// 忽略node_modules
"files.exclude": {
   "**/node_modules": true
}`
    }
  },
  created() {
    this.toggleTree()
  },
  methods: {
    toggleTree() {
      if (this.toggleStatus) {
        this.treeData = fullTree.filter(item => !item.c)
      } else {
        this.treeData = fullTree
      }
      this.toggleStatus = !this.toggleStatus
    }
  }
}
</script>

<style lang="scss" scoped>
.line {
  transition: all 0.3s;
  font-size: 24rpx;

  .name {
    margin-right: 40rpx;
  }
  .desc {
    color: #999;
  }
}

.title {
  font-size: 32rpx;
  font-weight: bold;
  text-align: center;
  padding: 10rpx 0;
}
.sub-box {
  padding: 20rpx;
  .sub-title {
    font-size: 26rpx;
  }
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
