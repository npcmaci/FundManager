<template>
  <div>
    <div>
      <h-button type = "primary" style="margin-top: 10px" @click = "add">新增交易</h-button>
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
      :page-size="10"
      :current.sync="currentPage"
    ></h-page>
    <h-msg-box 
    v-model="msgBoxVisible"
    :escClose="true"
    width="500">
      <p slot="header" style="color: #495060; text-align: center;">
        <h-icon name="addition_fill"></h-icon>
        <span>新增交易</span>
      </p>
      <h-button type="primary" size="large" style="height: 150px; width:150px; margin-left: 30px;" @click="jump('/buy')">申购</h-button>
      <h-button type="ghost" size="large" style="height: 150px; width: 150px; margin-left: 50px;" @click="jump('/sell')">赎回</h-button>
      <div slot="footer">
        <h-button
          long
          size="large"
          @click="del"
          style="margin-top: 30px; margin-bottom: 10px"
          >取消</h-button
        >
      </div>
    </h-msg-box>
  </div>
</template>

<script>
import core from "@hsui/core";
import request from "@/utils/request.js"

const TRANSACTION_TYPE_ORM = {
    buy: "申购",
    sell: "赎回",
    // withdraw: "撤销",
};
const TRANSACTION_CONDITION_ORM = {
    on: "待清算",
    off: "已完成"
};

function handleEdit(index) {
    console.log('@@@');
    console.log(index);
}
function ifban(state) {
  if (state === "on")
    return true;
  return false;
}
function deleteTransition(params) {
  console.log('delete an transaction:', params.index);
  request.delete("http://localhost:9090/Transaction/" + params.row.transactionId);
  window.load();
  window.load();
  window.load();
  window.load();
  alert("successfully delete!!!");
}
var kkk = true
var model1 = true
var columns = [
      {
        title: "业务单号",
        key: "transactionId",
        render: (h, { row: { transactionId } }) => h("span", {}, transactionId),
      },
      {
        title: "发起时间",
        key: "transactionTime",
        sortable: true,
        render: (h, { row: {transactionTime } }) => h("span", {}, new Date(transactionTime).toLocaleString()),
      },
      {
        title: "发起用户",
        key: "userName",
      },
      {
        title: "业务类型",
        key: "transactionType",
        render: (h, { row: { transactionType } }) => {
          return h("span", {}, TRANSACTION_TYPE_ORM[transactionType]);
        },
      },
      {
        title: "交易数额",
        key: "transactionAmount",
      },
      // {
      //   title: "基金名称",
      //   key: "productName",
      // },
      {
        title: "银行卡号",
        key: "bankAccounts",
      },
      {
        title: "清算状态",
        key: "liquidateStatus",
        render: (h, { row: { liquidateStatus } }) => {
          kkk = liquidateStatus == "on"?false:true;
          return h("span", {}, TRANSACTION_CONDITION_ORM[liquidateStatus]);
        },
      },
      {
        title: "操作",
        key: "action",
        render: (h, params, model1) => {
          return h("div", [
            h(
              "Button",
              {
                props: {
                  type: "info",
                  size: "small",
                },
                on: {
                  click: "model1 = true",
                },
              },
              "查看"
            ),
            h(
              "Button",
              {
                props: {
                  type: "error",
                  size: "small",
                  disabled: kkk,
                },
                style: {
                  marginLeft: "5px",
                },
                on: {
                  click: () => {
                    deleteTransition(params)
                  }
                },
              },
              "撤销"
            ),
          ]);
        },
      },
  ];
var Data = [
      {
        transactionID: "000001",
        transactionTime: "2022/5/2",
        userName: "张三",
        transactionType: "buy",
        transactionAmount: "100",
        productName: "ababa",
        productName: "ababa",
        bankAccounts: "123456789",
        liquidateStatus: "on",
        operation: "NULL",
      },
      {
        transactionID: "000002",
        transactionTime: "2022/5/2",
        userName: "张四",
        transactionType: "buy",
        transactionAmount: "1000",
        productName: "ababa",
        bankAccounts: "12345645",
        liquidateStatus: "off",
        operation: "NULL",
      },
      {
        transactionID: "000003",
        transactionTime: "2022/5/1",
        userName: "张三二",
        transactionType: "buy",
        transactionAmount: "10",
        productName: "ababa",
        bankAccounts: "123456789",
        liquidateStatus: "off",
        operation: "NULL",
      },
      {
        transactionID: "000004",
        transactionTime: "2022/5/1",
        userName: "张三一",
        transactionType: "buy",
        transactionAmount: "100000",
        productName: "ababa",
        bankAccounts: "123456789",
        liquidateStatus: "on",
        operation: "NULL",
      },
      {
        transactionID: "000005",
        transactionTime: "2022/5/1",
        userName: "张五",
        transactionType: "buy",
        transactionAmount: "101",
        productName: "ababa",
        bankAccounts: "123456789",
        liquidateStatus: "off",
        operation: "NULL",
      },
      {
        transactionID: "000006",
        transactionTime: "2022/5/1",
        userName: "张六",
        transactionType: "buy",
        transactionAmount: "1880",
        productName: "ababa",
        bankAccounts: "123456789",
        liquidateStatus: "off",
        operation: "NULL",
      },
      {
        transactionID: "000007",
        transactionTime: "2022/5/2",
        userName: "张七",
        transactionType: "buy",
        transactionAmount: "1",
        productName: "ababa",
        bankAccounts: "123456789",
        liquidateStatus: "on",
        operation: "NULL",
      },
      {
        transactionID: "000008",
        transactionTime: "2022/5/1",
        userName: "张八",
        transactionType: "buy",
        transactionAmount: "100",
        productName: "ababa",
        bankAccounts: "123456789",
        liquidateStatus: "on",
        operation: "NULL",
      },
      {
        transactionID: "000009",
        transactionTime: "2022/5/2",
        userName: "张九",
        transactionType: "buy",
        transactionAmount: "100",
        productName: "ababa",
        bankAccounts: "123456789",
        liquidateStatus: "off",
        operation: "NULL",
      },
      {
        transactionID: "000010",
        transactionTime: "2022/5/1",
        userName: "张十",
        transactionType: "buy",
        transactionAmount: "100",
        productName: "ababa",
        bankAccounts: "123456789",
        liquidateStatus: "on",
        operation: "NULL",
      },
      {
        transactionID: "000011",
        transactionTime: "2022/5/2",
        userName: "张十一",
        transactionType: "buy",
        transactionAmount: "100",
        productName: "ababa",
        bankAccounts: "123456789",
        liquidateStatus: "off",
        operation: "NULL",
      },
      {
        transactionID: "000012",
        transactionTime: "2022/5/1",
        userName: "张十二",
        transactionType: "buy",
        transactionAmount: "100",
        productName: "ababa",
        bankAccounts: "123456789",
        liquidateStatus: "on",
        operation: "NULL",
      },
  ];
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
      data: Data.slice(0, 10),
      columns: columns,
      totalNum: Data.length,
      currentPage: 1,
      model1: false,
    };
  },
  created() {
    this.load()
  },
  mounted() {
    //将Vue方法传到全局对象window中
    window.load = this.load;
  },
  methods: {
    load() {
      request.get("http://localhost:9090/Transaction",{
        params: {
          pageNum: this.currentPage,
          pageSize: 5,
          search: this.value
        }
      }).then(res => {
        console.log(res.data)
        this.data = res.data.records
        this.totalNum = res.data.total
      })
    },
    tanchuang() {
      v
    },
    jump(path) {
      this.$hCore.navigate(path);
    },
    add () {
      this.msgBoxVisible = true;
      this.formLeft = {};
    },
    del() {
      this.msgBoxVisible = false;
      this.$hMessage.success("取消新增业务！");
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
      console.log('点击了取消~');
    },
    pageChange(index) {
      console.log(index);
    },
    numChange(value) {
      console.log(value);
    },
    dataChange(i) {
      this.data = Data.slice((i - 1) * 10, i * 10);
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