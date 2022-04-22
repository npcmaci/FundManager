<template>
  <div>
    <Header></Header>
    <div class="layout">
      <h-row name="flex">
        <h-col span="5" class="layout-menu-left">
          <h-menu
            active-name="1-0"
            theme="dark"
            width="auto"
            :open-names="['1', '4']"
          >
            <div class="layout-logo-left"></div>
            <h-submenu name="1">
              <template slot="title">
                <h-icon name="mail"></h-icon>
                产品管理
              </template>
              <router-link to="/home"><h-menu-item name="1-0">主页</h-menu-item></router-link>
              <router-link to="/PageOne"><h-menu-item name="1-1">产品列表</h-menu-item></router-link>
              <router-link to="/PageTwo"><h-menu-item name="1-2">新建基金</h-menu-item></router-link>
              <router-link to="/PageThree"><h-menu-item name="1-3">编辑产品</h-menu-item></router-link>
              <router-link to="/detail"><h-menu-item name="1-4">详情页</h-menu-item></router-link>
            </h-submenu>

            <h-submenu name="2">
              <template slot="title">
                <h-icon name="mail"></h-icon>
                用户管理
              </template>
              <h-menu-item name="2-1"><router-link to="/PageThree">用户列表</router-link></h-menu-item>
              <h-menu-item name="2-2"><router-link to="/PageThree">开户</router-link></h-menu-item>
              <h-menu-item name="2-3"><router-link to="/PageThree">编辑信息</router-link></h-menu-item>
            </h-submenu>

            <h-submenu name="3">
              <template slot="title">
                <h-icon name="mail"></h-icon>
                业务查询
              </template>
              <router-link to="/searchTransaction"><h-menu-item name="3-1">业务列表</h-menu-item></router-link>
              <router-link to="/PageTwo"><h-menu-item name="3-2">撤销业务</h-menu-item></router-link>
            </h-submenu>

            <h-submenu name="4">
              <template slot="title">
                <h-icon name="mail"></h-icon>
                交易管理
              </template>
              <h-menu-item name="4-1">申购</h-menu-item>
              <h-menu-item name="4-2">赎回</h-menu-item>
              <h-menu-item name="4-3">个人账户</h-menu-item>
            </h-submenu>

          </h-menu>
        </h-col>
        <h-col span="19">
          <div class="layout-content">
            <div class="layout-content-main">
              <div>
                <h-button type = "ghost" @click = "jump('/home')">回到主页</h-button>
              </div>
            </div>
            <router-view></router-view>
          </div>
          <div class="layout-footer">2017-2030 &copy; HUNDSUN</div>
        </h-col>
      </h-row>
    </div>
  </div>
</template>



<style lang="less">
.h-menu-vertical {
  height: 100vh;
}
.h-menu-item-active {
  > a {
    color: #fff;
  }
}
.layout-content {
  height: calc(100vh - 30px);
}
.layout-content {
  padding: 24px;
}
.layout-footer {
  text-align: center;
  height: 30px;
}
</style>

<script>
import Header from '@/components/Header.vue'

export default{
  name:"Head",
  components: {
    Header
  },
  methods: {
    jump(path) {
      this.$hCore.navigate(path);
    },
  },
}
</script>
