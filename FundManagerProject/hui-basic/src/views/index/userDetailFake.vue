<template>
    <div>
        <h1 style="margin-top:10px;">详细信息---用户{{userName}}</h1>
        <div style="position: absolute; left: 15%;">
        <h-form :model="formItem" :label-width="100" label-position="left" style="max-width: 700px; margin-top: 30px;">
            <h-row :gutter="8">
                <h-col span="12">
            <h-form-item label="用户名称：">
                <p>{{formItem.userName}}</p>
            </h-form-item>
                </h-col>
                <h-col span = "12">
            <h-form-item label="用户类型：">
                <p>{{formItem.userType}}</p>
            </h-form-item>
                </h-col>
            </h-row>
            <h-row :gutter="8">
                <h-col span="12">
            <h-form-item label="电话号码：">
                <p>{{formItem.phoneNumber}}</p>
            </h-form-item>
                </h-col>
                <h-col span="12">
            <h-form-item label="风险等级：">
                <p>{{formItem.riskLevel}}</p>
            </h-form-item>
                </h-col>
            </h-row>
            <h-row :gutter="8">
                <h-col span = "12">
            <h-form-item label="证件类型：">
                <p>{{formItem.certificateType}}</p>
            </h-form-item>
                </h-col>
                <h-col span = "12">
            <h-form-item label="证件号码：">
                <p>{{formItem.certificateNumber}}</p>
            </h-form-item>
                </h-col>
            </h-row>
            <h-form-item label="绑定银行卡：">
            </h-form-item>
        </h-form>
        <h-table stripe :columns="columns1" :data="data1" height = "200" style="width: 700px; margin-left: 10px; margin-top: -10px;"></h-table>
        <h-button type = "primary" style="margin-top: 50px; position: relative; left: 50%;" @click = "jump('/editUserDetail')">编辑</h-button>
    </div>
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
                certificateType: "444",
                certificateNumber: "1243t5",
                riskLevel: "0",
            },
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
        {
          series: "5",
          number: "1234567890",
          amount: "0",
        },
      ],
        };
    },
    methods: {
        jump(path) {
            this.$hCore.navigate(path);
        },
    }
}

</script>

<style scoped>

</style>
