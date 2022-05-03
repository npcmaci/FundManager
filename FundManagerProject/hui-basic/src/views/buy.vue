<template>
  <div class="box">
    <h-form
      :model="formItem"
      label-position="left"
      :label-width="100"
      style="max-width: 700px; padding-top: 50px; margin: 100px"
    >
      <h-form-item label="身份选择">
        <h-radio-group v-model="formItem.radio">
          <h-radio label="person">个人用户</h-radio>
          <h-radio label="enterprise">企业用户</h-radio>
        </h-radio-group>
      </h-form-item>
      <h-form-item label="证件选择">
        <h-select v-model="formItem.select1" placeholder="请选择">
          <h-option value="身份证">身份证</h-option>
          <h-option value="护照">护照</h-option>
          <h-option value="港澳通行证">港澳通行证</h-option>
          <h-option value="其它证件">其它证件</h-option>
        </h-select>
      </h-form-item>
      <h-form-item label="证件号码">
        <h-input
          v-model="formItem.input"
          placeholder="输入证件号"
          @on-enter="onenter"
          style="font size:16px"
        ></h-input>
      </h-form-item>
      <h-form-item label="基金选择">
        <h-input
          v-model="formItem.fund"
          placeholder="输入申购基金代码"
          style="font size:16px"
        ></h-input>
      </h-form-item>
    <router-link to="/decidebuy"><h-button type = "primary" long style="font-size:16px">下一步</h-button></router-link>
    </h-form>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: {
        input: "",
        fund: "",
        select1: "",
        select2: "",
        radio: "person",
        checkbox: [],
        switch: true,
        textarea: "",
        password:"",
      },
      modal1: false,
    };
  },
  methods: {
    onenter() {
      this.$hMessage.info("证件号有效");
    },
  },
};
</script>
<style>
.box {
  display: flex;
  justify-content: center;
}
.box .h-form {
  width: 50%;
}
.box .h-form .h-form-item-label {
  font-size: 16px;
}
.box .h-form .h-select-placeholder {
  font-size: 16px;
}
.h-radio-wrapper {
  font-size: 16px;
  vertical-align: middle;
  display: inline-block;
  line-height: 1;
  position: relative;
  white-space: nowrap;
  margin-right: 100px;
  cursor: pointer;
}
.h-typefield input {
  width: 100%;
  height: 32px;
  line-height: 32px;
  padding-left: 8px;
  padding-right: 8px;
  outline: 0;
  font-size: 16px;
}
.h-input {
  font-size: 16px;
}
</style>