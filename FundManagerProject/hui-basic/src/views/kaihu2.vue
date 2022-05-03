<template>
  <div>
    <h-steps
      :current="current"
      processIcon="t-b-Warning"
      waitIcon="more"
      finishIcon="t-b-correctinformati"
      style="margin-bottom: 85px"
    >
      <h-step title="填写个人信息"> </h-step>
      <h-step title="关联银行卡"></h-step>
      <h-step title="投资者风险能力评价"></h-step>
      <h-step title="开户成功"></h-step>
    </h-steps>
    <div style="display: flex;justify-content: center;">
      <h-form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
        label-position="left"
         style="max-width: 1300px; padding-top: 30px; margin: 10px；"
      >
        <h-form-item label="发卡银行" required>
          <h-select v-model="formValidate.name" placeholder="请选择">
            <h-option value="中国工商银行">中国工商银行</h-option>
            <h-option value="中国农业银行">中国农业银行</h-option>
            <h-option value="中国银行">中国银行</h-option>
            <h-option value="中国建设银行">中国建设银行</h-option>
            <h-option value="中国交通银行">中国交通银行</h-option>
            <h-option value="其它银行">其它银行</h-option>
          </h-select>
        </h-form-item>
        <h-form-item label="银行卡号" required>
          <h-typefield
            type="cardNo"
            v-model="formValidate.name"
            placeholder="请输入卡号"
            bigTips
          ></h-typefield>
        </h-form-item>
        <h-form-item label="姓名" prop="name">
          <h-input
            v-model="formValidate.name"
            placeholder="请输入真实持卡人姓名"
          ></h-input>
        </h-form-item>
        <h-form-item label="手机号" required>
          <h-typefield
            type="text"
            placeholder="请输入银行预留手机号"
            bigTips
          ></h-typefield>
        </h-form-item>
        <h-form-item label="验证码" required>
            <h-input
          v-model="formValidate.name"
          placeholder="请输入收到的验证码"
          type="text"
        ></h-input>

        </h-form-item>
        <h-form-item>
          <h-button type="primary" @click="handleSubmit('formValidate')"
            >下一步</h-button
          >
          <h-button
            type="ghost"
            style="margin-left: 188px"
            ><router-link to="/kaihu1">上一步</router-link></h-button
          >
        </h-form-item>
      </h-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 1,
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        desc: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
        city: [{ required: true, message: "请选择城市", trigger: "change" }],
        gender: [{ required: true, message: "请选择性别", trigger: "change" }],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "至少选择一个爱好",
            trigger: "change",
          },
          {
            type: "array",
            max: 2,
            message: "最多选择两个爱好",
            trigger: "change",
          },
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "请选择日期",
            trigger: "change",
          },
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "请选择时间",
            trigger: "change",
          },
        ],
        desc: [
          { required: true, message: "请输入个人介绍", trigger: "blur" },
          {
            type: "string",
            min: 20,
            message: "介绍不能少于20字",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$hMessage.success("提交成功!");
      this.$router.push("/kaihu3");
      // this.$refs[name].validate((valid) => {
      //   if (valid) {

      //   } else {
      //     this.$hMessage.error("表单验证失败!");
      //   }
      //});
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>
<style scoped>
</style>