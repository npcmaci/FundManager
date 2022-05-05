<template>
  <div>
    <div>
      <h-button type = "primary" style="margin-top: 10px" @click = "jump('\Kaihu')">新增用户</h-button>
      <h-button type = "primary" style="margin-left: 5px; margin-top: 10px">编辑</h-button>
      <h-button type = "primary" style="margin-left: 5px; margin-top: 10px">导出</h-button>
    </div>
    <div>
      <h-input
        v-model="value"
        placeholder="请输入关键字..."
        style="width: 300px; margin-top: 10px; margin-bottom: 10px"
        clearable
      ></h-input>
      <h-button type = "primary" style="margin-left: 5px; margin-top: 10px; margin-bottom: 10px" @click = "load">查询</h-button>
      <!-- <p class="demo-data" v-show="this.value">{{ value }}</p> -->
    </div>
    <!-- <h-table stripe :columns="columns" :data="data"></h-table> -->
    <h-table stripe
    :data="data" 
    :columns="columns" 
    style="margin-bottom: 8px;"
    ></h-table>
    <h-page
      :total="totalNum"
      @on-change="load"
      show-elevator
      show-total
      :page-size="5"
      :current.sync="currentPage"
    ></h-page>
    <h-msg-box
      v-model="msgBoxVisible"
      :escClose="true"
      title="新建用户"
      @on-ok="ok"
      @on-cancel="cancel"
      :beforeEscClose="beforetest"
    >
    <h-form :model="formLeft" label-position="left" :label-width="120">
      <h-form-item label="标题">
        <h-input v-model="formLeft.input1"></h-input>
      </h-form-item>
      <h-form-item label="标题名称">
        <h-input v-model="formLeft.input2"></h-input>
      </h-form-item>
      <h-form-item label="标题名称对齐">
        <h-input v-model="formLeft.input3"></h-input>
      </h-form-item>
    </h-form>
    </h-msg-box>
  </div>
</template>

<script>
import core from "@hsui/core";

const USER_TYPE_ORM = {
    company: "企业",
    person: "个人",
};
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function handleEdit(params) {
  console.log(params);
  console.log('edit an user:', params.index);
}

function deleteUser(params) {
  console.log('delete an user:', params.index);
  request.delete("http://localhost:9090/user/" + params.row.userId);
  window.load();
  window.load();
  window.load();
  window.load();
  alert("successfully delete!!!");
}
var columns = [
      {
        title: "用户编号",
        key: "userId",
        render: (h, { row: { userId} }) => h("span", {}, userId.slice(-10)),
      },
      {
        title: "用户名称",
        key: "userName",
      },
      {
        title: "用户类型",
        key: "userType",
        render: (h, { row: { userType } }) => {
          return h("span", {}, USER_TYPE_ORM[userType]);
        },
      },
      {
        title: "电话号码",
        key: "phoneNumber",
      },
      {
        title: "证件类型",
        key: "certificateType",
      },
      {
        title: "证件号",
        key: "certificateNumber",
      },
      {
        title: "风险等级",
        key: "riskLevel",
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
                  type: "info",
                  size: "small",
                },
                on: {
                  click: () => {
                    // handleEdit(params)
                    jump("/userDetail");
                  }
                },
              },
              "查看"
            ),
            h(
              "Button",
              {
                props: {
                  type: "ghost",
                  size: "small",
                },
                style: {
                  marginLeft: "5px",
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
    ];

    var Data = [
      {
        userID: "000001",
        userName: "张三一",
        userType: "person",
        phoneNumber: "130****5678",
        certificateType: "身份证",
        certificateNumber: "1233****1X",
        riskLevel: "0级",
      },
      {
        userID: "000002",
        userName: "张三二",
        userType: "person",
        phoneNumber: "150****1234",
        certificateType: "身份证",
        certificateNumber: "1132****10",
        riskLevel: "3级",
      },
      {
        userID: "000003",
        userName: "张三",
        userType: "company",
        phoneNumber: "185****5641",
        certificateType: "身份证",
        certificateNumber: "880****17",
        riskLevel: "3级",
      },
      {
        userID: "000004",
        userName: "张四",
        userType: "person",
        phoneNumber: "149****8088",
        certificateType: "身份证",
        certificateNumber: "315****88",
        riskLevel: "2级",
      },
      {
        userID: "000005",
        userName: "张五",
        userType: "person",
        phoneNumber: "198****2611",
        certificateType: "身份证",
        certificateNumber: "972****86",
        riskLevel: "1级",
      },
      {
        userID: "000006",
        userName: "张六",
        userType: "company",
        phoneNumber: "130****1234",
        certificateType: "身份证",
        certificateNumber: "6547****15",
        riskLevel: "0级",
      },
      {
        userID: "000007",
        userName: "张七",
        userType: "company",
        phoneNumber: "195****1910",
        certificateType: "身份证",
        certificateNumber: "7861****8X",
        riskLevel: "2级",
      },
      {
        userID: "000008",
        userName: "张八",
        userType: "person",
        phoneNumber: "143****9470",
        certificateType: "身份证",
        certificateNumber: "1841****95",
        riskLevel: "1级",
      },
      {
        userID: "000009",
        userName: "张九",
        userType: "company",
        phoneNumber: "177****5191",
        certificateType: "身份证",
        certificateNumber: "6050****87",
        riskLevel: "3级",
      },
      {
        userID: "000010",
        userName: "张十",
        userType: "person",
        phoneNumber: "130****5644",
        certificateType: "身份证",
        certificateNumber: "7451****08",
        riskLevel: "3级",
      },
      {
        userID: "000011",
        userName: "张十一",
        userType: "person",
        phoneNumber: "190****5678",
        certificateType: "身份证",
        certificateNumber: "1046****1X",
        riskLevel: "0级",
      },
      {
        userID: "000012",
        userName: "张十二",
        userType: "company",
        phoneNumber: "108****5451",
        certificateType: "身份证",
        certificateNumber: "1233****61",
        riskLevel: "2级",
      },
    ];

import request from "@/utils/request"
export default {
  data() {
    const router = this.$router;
    console.log(this.$route);
    // console.log('@@@', data)
    return {
      value: "",//搜索框
      formLeft: {//和数据库一一对应
        input1: "",
        input2: "",
        input3: "",
      },
      msgBoxVisible: false,
      data: Data.slice(0, 5),
      columns: columns,
      totalNum: Data.length,
      currentPage: 1,
    };
  },
  created() {
    this.load()
  },
  mounted() {
    //将Vue方法传到全局对象window中
    window.load = this.load;
    window.jump = this.jump;
  },
  methods: {
    load() {
      request.get("http://localhost:9090/user",{
        params: {
          pageNum: this.currentPage,
          pageSize: 5,
          search: this.value
        }
      }).then(res => {
        this.data = res.data.records
        this.totalNum = res.data.total
      })
    },
    add () {
      this.msgBoxVisible = true;
      this.formLeft = {};
    },
    beforetest() {
      return true;
    },
    ok() {
      request.post("http://localhost:9090/transaction", this.formLeft).then(res => {
        console.log(res)
      })
      this.$hMessage.info("点击了确定");
      console.log('点击了确定~');
    },
    cancel() {
      this.$hMessage.info("点击了取消");
      console.log('cancel to delete');
    },
    jump(path) {
      this.$hCore.navigate(path);
    },
    pageChange(index) {
      console.log(index);
    },
    numChange(value) {
      console.log(value);
    },
    dataChange(i) {
      this.data = Data.slice((i - 1) * 5, i * 5);
      // console.log(i);
    },
    getList() {
      core
        .fetch({
          method: "get",
          url: "http://localhost:2022/api/product",
          data: {
            current: 1,
            pageSize: 2,
          },
        })
        .then((res) => {
          console.log("res", res);
          if (res.code === 1) {
            this.data = res.data || [];
          }
        })
        .catch((err) => {
          throw Error(`接口报错 ${err}`);
        });
    },
  },
};


</script>