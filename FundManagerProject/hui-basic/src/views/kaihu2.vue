<template>
  <div>
    <h-steps
      :current="current"
      processIcon="brush"
      waitIcon="more"
      finishIcon="checkmark"
      style="margin-top: 10px; margin-bottom: 50px"
    >
      <h-step title="填写信息"> </h-step>
      <h-step title="绑定银行卡"></h-step>
      <h-step title="填写问卷"></h-step>
      <h-step title="完成开户"></h-step>
    </h-steps>
    <div style="display: flex; justify-content: center">
      <h-form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
        label-position="left"
        style="min-width: 800px; padding-top: 30px; margin: 10px"
      >
        <h-form-item label="发卡银行" required>
          <h-select v-model="formValidate.bank" placeholder="请选择">
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
            v-model="formValidate.bankcard"
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
            v-model="formValidate.phone"
            placeholder="请输入银行预留手机号"
            bigTips
          ></h-typefield>
        </h-form-item>
        <h-form-item label="验证码" required>
          <h-input
            v-model="formValidate.captcha"
            placeholder="请输入收到的验证码"
            type="text"
          ></h-input>
        </h-form-item>
      </h-form>
    </div>
    <div>
      <h-row type="flex" justify="space-between" class="demo-row code-row-bg">
        <h-col span="4"></h-col>
        <h-col span="4"
          ><h-button type="ghost"
            ><router-link to="/Kaihu">上一步</router-link></h-button
          ></h-col
        >
        <h-col span="4"
          ><h-button type="primary" @click="handleSubmit('formValidate')"
            >下一步</h-button
          ></h-col
        >
        <h-col span="4"></h-col>
      </h-row>
    </div>
  </div>
</template>
<script>
import request from "@/utils/request.js";
export default {
  data() {
    return {
      current: 1,
      formValidate: {
        bank: "",
        bankcard: "",
        name: "",
        phone: "",
        captcha: "",
        ...this.$route.params.olddata,
        //下面是上一个页面传过来的数据
        // passwd: "",
        // passwdCheck: "",
        // type: "",
        // mail: "",
        // gender: "",
        // job: [],
        // date: "",
        // card: "",
        // cardnumber: "",
      },
      ruleValidate: {
        bank: [{ required: true, message: "银行不能为空", trigger: "blur" }],
        name: [{ required: true, message: "名字不能为空", trigger: "blur" }],
        city: [{ required: true, message: "请选择城市", trigger: "change" }],
      },
      // form1: {
      //   userName: this.formValidate.name,
      //   userType: this.formValidate.type,
      //   phoneNumber: this.formValidate.phone,
      //   certificateType: this.formValidate.card,
      //   certificateNumber: this.formValidate.cardnumber,
      //   risklevel: "保守型",
      // },
    };
  },
  methods: {
    handleSubmit(name) {
      request
        .post("/rssd", {
          card: this.formValidate.card,
        })
        .then((res) => {
          console.log(res.data);
        });
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
  computed: {
    form() {
      return {
        userName: this.formValidate.name,
        userType: this.formValidate.type,
        phoneNumber: this.formValidate.phone,
        certificateType: this.formValidate.card,
        certificateNumber: this.formValidate.cardnumber,
        risklevel: "保守型",
      };
    },
  },
};
</script>
<style scoped>
</style>