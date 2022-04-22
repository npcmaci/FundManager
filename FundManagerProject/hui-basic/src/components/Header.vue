<template>
    <div style="height: 50px; line-height: 50px; background-color: #e9eaec; border-bottom: 1px solid #ccc; display:flex">
      <div @click = "jump('/home')" style="width:200px; padding-left: 30px; font-size: large; font-weight: bold; color: #0275d8;" id="logo">基金管理系统</div>
      <div style="flex:1"></div>
      <div style="width:100px">
        <h-dropdown>
          <a href="javascript:void(0)">
            用户001
            <h-icon name="unfold"></h-icon>
          </a>
          <h-dropdown-menu slot="list">
            <h-dropdown-item>用户信息</h-dropdown-item>
            <h-dropdown-item>登出</h-dropdown-item>
            <h-dropdown-item disabled>注销</h-dropdown-item>
          </h-dropdown-menu>
        </h-dropdown>
      </div>
    </div>
</template>

<style scoped>
#logo:hover {
  cursor: pointer;
}
</style>

<script>
export default {
    name: "Header",
    methods: {
    jump(path) {
      this.$hCore.navigate(path);
    },
  },
}
</script>
