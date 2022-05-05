<template>
  <div>
    <h1 style="margin-top: 10px">详细信息---用户{{ userName }}</h1>
    <h-form
      :model="formItem"
      :label-width="100"
      label-position="left"
      style="max-width: 700px; margin-left: 30px; margin-top: 30px"
    >
      <h-row :gutter="8">
        <h-col span="12">
          <h-form-item label="用户名称：">
            <h-input
              v-model="formItem.userName"
              clearable
              style="width: 200px"
            ></h-input>
          </h-form-item>
        </h-col>
        <h-col span="12">
          <h-form-item label="用户类型：">
            <h-input
              v-model="formItem.userType"
              disabled
              style="width: 200px"
            ></h-input>
          </h-form-item>
        </h-col>
      </h-row>
      <h-row :gutter="8">
        <h-col span="12">
          <h-form-item label="电话号码：">
            <h-input
              v-model="formItem.phoneNumber"
              clearable
              style="width: 200px"
            ></h-input>
          </h-form-item>
        </h-col>
        <h-col span="12">
          <h-form-item label="风险等级：">
            <h-input
              v-model="formItem.riskLevel"
              disabled
              style="width: 200px"
            ></h-input>
          </h-form-item>
        </h-col>
      </h-row>
      <h-row :gutter="8">
        <h-col span="12">
          <h-form-item label="证件类型：" style="width: 250px">
            <h-select v-model="formItem.certificateType">
              <h-option value="身份证">身份证</h-option>
              <h-option value="护照">护照</h-option>
              <h-option value="港澳通行证">港澳通行证</h-option>
              <h-option value="其它证件">其它证件</h-option>
            </h-select>
          </h-form-item>
        </h-col>
        <h-col span="12">
          <h-form-item label="证件号码：">
            <h-input
              v-model="formItem.certificateNumber"
              style="width: 250px"
            ></h-input>
          </h-form-item>
        </h-col>
      </h-row>
      <h-form-item label="绑定银行卡：">
        <h-button type="info" size="small" @click="add">添加</h-button>
        <h-msg-box
          v-model="msgBoxVisible"
          :escClose="true"
          title="新增银行卡"
          @on-ok="ok"
          @on-cancel="cancel"
          :beforeEscClose="beforetest"
        >
          <h-form :model="bankCard" :label-width="80">
            <h-form-item label="银行卡号">
              <h-input
                v-model="bankCard.cardNumber"
                placeholder="请输入银行卡号"
              ></h-input>
            </h-form-item>
            <h-form-item label="密码">
              <h-input
                v-model="bankCard.cardPassword"
                placeholder="请输入银行卡密码"
              ></h-input>
            </h-form-item>
          </h-form>
        </h-msg-box>
      </h-form-item>
    </h-form>
    <h-table
      stripe
      :columns="columns1"
      :data="data1"
      style="width: 700px; margin-left: 60px; margin-top: -10px"
    ></h-table>
    <h-button
      type="primary"
      style="margin-top: 50px; position: relative; left: 50%"
      @click="jump('/UserDetail')"
      >保存</h-button
    >
  </div>
</template>

<script>
export default {
  name: "userDetail",
  data() {
    return {
      formItem: {
        userName: "123",
        userType: "1234",
        phoneNumber: "%$&@15",
        certificateType: "身份证",
        certificateNumber: "1243t5",
        riskLevel: "0",
      },
      bankCard: {
          cardNumber: "",
          cardPassword: "",
      },
      msgBoxVisible: false,
      userName: "123",
      columns1: [
        {
          title: "序号",
          key: "series",
        },
        {
          title: "卡号",
          key: "number",
        },
        {
          title: "余额",
          key: "amount",
        },
        {
          title: "操作",
          key: "action",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                  },
                  style: {
                    marginLeft: "5px",
                    color: "red",
                  },
                  on: {
                    click: () => {
                      deleteUser(params);
                      console.log(params);
                    },
                  },
                },
                "删除"
              ),
            ]);
          },
        },
      ],
      data1: [
        {
          series: "1",
          number: "1528710063851",
          amount: "-43264",
        },
        {
          series: "2",
          number: "1528710063851",
          amount: "3264",
        },
        {
          series: "3",
          number: "1528710063851",
          amount: "869098",
        },
        {
          series: "4",
          number: "1528710063851",
          amount: "8984",
        },
      ],
    };
  },
  methods: {
    jump(path) {
      this.$hCore.navigate(path);
    },
    add() {
      this.msgBoxVisible = true;
      this.bankCard = {};
    },
    beforetest() {
      return true;
    },
    ok() {
      this.$hMessage.success("新增成功");
    },
    cancel() {
      this.$hMessage.info("取消新增银行卡");
    },
  },
};
</script>

<style scoped>
</style>
