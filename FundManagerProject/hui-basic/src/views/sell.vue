<template>
  <div class="box" style="background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F0a2482313224x869104310b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654354569&t=be9a58a2cbb9043e647ba64b91b4dad4); background-size: cover;">
    <h-form
      :model="formItem"
      :label-width="100"
      style="max-width: 700px; margin: 40px"
      label-position="left"
    >
      <h-form-item label="身份选择">
        <h-radio-group v-model="formItem.radio">
          <h-radio label="person">个人用户</h-radio>
          <h-radio label="enterprise">企业用户</h-radio>
        </h-radio-group>
      </h-form-item>
      <h-form-item label="用户编号">
        <h-input
          v-model="form.userId"
          placeholder="输入赎回的用户编号"
          style="font size:16px"
        ></h-input>
      </h-form-item>
      <h-form-item label="用户姓名">
        <h-input
          v-model="form.userName"
          placeholder="请输入真实持卡人姓名"
          style="font size:16px"
        ></h-input>
      </h-form-item>
      <h-form-item label="证件选择">
        <h-select v-model="formItem.certificateType" placeholder="请选择">
          <h-option value="身份证">身份证</h-option>
          <h-option value="护照">护照</h-option>
          <h-option value="港澳通行证">港澳通行证</h-option>
          <h-option value="其它证件">其它证件</h-option>
        </h-select>
      </h-form-item>
      <h-form-item label="证件号码">
        <h-input
          v-model="formItem.certificateNumber"
          placeholder="输入证件号"
          @on-enter="onenter"
          style="font size:16px"
        ></h-input>
      </h-form-item>
      <h-form-item label="基金选择">
        <h-input
          v-model="form.fundCode"
          placeholder="输入赎回基金代码"
          style="font size:16px"
        ></h-input>
      </h-form-item>
      <h-form-item label="赎回份额">
        <h-input-number
          :max="100000"
          :min="10"
          :precision="2"
          :step="10"
          v-model="form.transactionAmount"
          size="large"
          style="width: 150px"
        ></h-input-number>
      </h-form-item>
      <h-form-item label="存管银行">
        <h-select v-model="formItem.bank" placeholder="请选择">
          <h-option value="中国工商银行">中国工商银行</h-option>
          <h-option value="中国农业银行">中国农业银行</h-option>
          <h-option value="中国银行">中国银行</h-option>
          <h-option value="中国建设银行">中国建设银行</h-option>
          <h-option value="中国交通银行">中国交通银行</h-option>
          <h-option value="其它银行">其它银行</h-option>
        </h-select>
      </h-form-item>
      <h-form-item label="银行卡号">
        <h-typefield
          type="cardNo"
          placeholder="请输入卡号"
          v-model="form.bankAccounts"
          bigTips
        ></h-typefield>
      </h-form-item>
      <h-form-item prop="password" label="银行卡密码">
        <h-input
          type="password"
          v-model="formItem.password"
          placeholder="请输入六位数字"
        >
          <h-icon name="locked" slot="prepend"></h-icon>
        </h-input>
      </h-form-item>

      <h-button
        type="info"
        long
        @click="instance('success')"
        style="font-size: 16px; margin-top: 30px"
        >提交</h-button
      >
    </h-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: {
        bank: "",
        password: "",
        radio: "person",
        certificateType: "",
        certificateNumber: "",
      },
      form: {
        transactionTime: "",
        userId: "",
        userName: "",
        transactionType: "sell",
        transactionAmount: "10",
        bankAccounts: "",
        liquidateStatus: "on",
        fundCode: "",
      },
    };
  },
  methods: {
    onenter() {
      this.$hMessage.info("证件号有效");
    },
    instance(type) {
      const title = "赎回成功！";
      const content =
        '<p style="font-size:16px">卖出价格以15：00前净值确定</p><p style="font-size:16px">收入于T+1后到账</p>';
      switch (type) {
        case "success":
          this.$hMsgBox.success({
            title: title,
            content: content,
          });
      }
      this.$router.push("/sell");
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