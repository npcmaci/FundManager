<template>
  <div class="box">
    <h-form
      :model="formItem"
      label-position="left"
      :label-width="100"
      style="max-width: 700px; padding-top: 50px; margin: 100px"
    >
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
          v-model="formItem.bankAccounts"
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
      <h-form-item label="购买金额">
        <h-typefield
          integerNum="6"
          type="money"
          placeholder="限制在10~100000元"
          v-model="formItem.money"
          bigTips
          style="margin-bottom: 8px"
        ></h-typefield>
      </h-form-item>
      <h-form-item>
        <router-link to="/buy"
          ><h-button type="ghost" size="large">上一步</h-button></router-link
        >
        <h-button
          type="primary"
          size="large"
          @click="modal1 = true"
          style="margin-left: 100px"
          >下一步</h-button
        >
        <h-msg-box
          v-model="modal1"
          :escClose="true"
          title="风险匹配提醒对话框"
          @on-ok="ok"
          @on-cancel="cancel"
        >
          <p style="font-size: 16px">您当前所处风险等级为：保守型</p>
          <br />
          <p style="font-size: 16px">申购基金的风险等级为：积极型</p>
        </h-msg-box>
      </h-form-item>
    </h-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: {
        bank: "",
        bankAccounts: "",
        password: "",
        money: "",
        ...this.$route.params.olddata,
      },
      modal1: false,
    };
  },
  methods: {
    onenter() {
      this.$hMessage.info("证件号有效");
    },
    beforetest() {
      return true;
    },
    ok() {
      this.$hMessage.success("交易成功");
      this.$router.push("/buy");
      this.instance("success");
    },
    cancel() {
      this.$hMessage.info("交易取消");
    },
    instance(type) {
      const title = "赎回成功！";
      const content =
        '<p style="font-size:16px">买入价格以15：00前净值确定</p><p style="font-size:16px">收益于T+1后可以查看</p>';
      switch (type) {
        case "success":
          this.$hMsgBox.success({
            title: title,
            content: content,
          });
      }
      this.$router.push("/buy");
    },
  },
  computed: {
    form() {
      return {
        transactionTime: "",
        userId: this.formItem.userId,
        userName: this.formItem.userName,
        transactionType: "buy",
        transactionAmount: "500",
        bankAccounts: this.formItem.bankAccounts,
        liquidateStatus: "on",
        fundCode: this.formItem.fundCode,
      };
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