<template>
  <div>
    <div>
      <h-button type = "primary" style="margin-top: 10px" @click = "add">新建</h-button>
      <h-button type = "primary" style="margin-left: 5px; margin-top: 10px">编辑</h-button>
      <h-button type = "primary" style="margin-left: 5px; margin-top: 10px">导出</h-button>
    </div>
    <div>
      <h-input
        v-model="value"
        placeholder="请输入关键字..."
        style="width: 300px; margin-top: 10px; margin-bottom: 10px"
      ></h-input>
      <h-button type = "primary" style="margin-left: 5px; margin-top: 10px; margin-bottom: 10px">搜索</h-button>
      <p class="demo-data" v-show="this.value">{{ value }}</p>
    </div>
    <!-- <h-table stripe :columns="columns" :data="data"></h-table> -->
    <h-table stripe
    :data="data" 
    :columns="columns" 
    style="margin-bottom: 8px;"
    ></h-table>
    <h-page
      :total="totalNum"
      @on-change="dataChange"
      show-elevator
      show-total
      :page-size="5"
    ></h-page>
    <h-msg-box
      v-model="msgBoxVisible"
      :escClose="true"
      title="新建产品"
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
import request from "@/utils/request.js"

const PRODUCT_TYPE_ORM = {
  special: "专户产品",
  normal: "普通",
};

function deleteEntry (index) {
  console.log('delete an entry');
  alert("successfully delete!!!");
};

var columns = [
      {
        title: "产品代码",
        key: "id",
        render: (h, { row: { id } }) => h("span", {}, id.slice(-10)),
      },
      {
        title: "产品名称",
        key: "productName",
      },
      {
        title: "产品类型",
        key: "productType",
        render: (h, { row: { productType } }) => {
          return h("span", {}, PRODUCT_TYPE_ORM[productType]);
        },
      },
      {
        title: "证件大类",
        key: "productCategory",
      },
      {
        title: "地址",
        key: "address",
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
                on: {
                  click: () => {
                    //this.show(params.index);
                    console.log(params.index);
                  },
                },
              },
              "查看"
            ),
            h(
              "Button",
              {
                props: {
                  type: "text",
                  size: "small",
                },
                on: {
                    click: () => {
                      // this.show(params.index);
                      console.log(params.index);
                    },
                  },
              },
              "编辑"
            ),
            h(
              "Button",
              {
                props: {
                  type: "text",
                  size: "small",
                },
                style: {
                  color: "red",
                },
                on: {
                    click: () => {
                      console.log(params);
                      deleteEntry(params.index);
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
        id: "C001",
        productName: "AAaaaa",
        productType: "special",
        productCategory: "基金",
        address: "HZ",
      },
      {
        id: "C002",
        productName: "BBaaaa",
        productType: "normal",
        productCategory: "基金",
        address: "HZ",
      },
      {
        id: "C003",
        productName: "CCaaaa",
        productType: "normal",
        productCategory: "基金",
        address: "HZ",
      },
      {
        id: "C004",
        productName: "DDaaaa",
        productType: "special",
        productCategory: "基金",
        address: "HZ",
      },
      {
        id: "C005",
        productName: "DDaaaa",
        productType: "special",
        productCategory: "基金",
        address: "HZ",
      },
      {
        id: "C006",
        productName: "DDaaaa",
        productType: "special",
        productCategory: "基金",
        address: "HZ",
      },
      {
        id: "C007",
        productName: "DDaaaa",
        productType: "special",
        productCategory: "基金",
        address: "HZ",
      },
      {
        id: "C008",
        productName: "DDaaaa",
        productType: "special",
        productCategory: "基金",
        address: "HZ",
      },
      {
        id: "C009",
        productName: "DDaaaa",
        productType: "special",
        productCategory: "基金",
        address: "HZ",
      },
      {
        id: "C010",
        productName: "DDaaaa",
        productType: "special",
        productCategory: "基金",
        address: "HZ",
      },
      {
        id: "C011",
        productName: "AAaaaa",
        productType: "special",
        productCategory: "基金",
        address: "HZ",
      },
      {
        id: "C0012",
        productName: "AAaaaa",
        productType: "special",
        productCategory: "基金",
        address: "HZ",
      }
    ];

export default {
  data() {
    const router = this.$router;
    console.log(this.$route);
    // console.log('@@@', Data);
    return {
      value: "",
      formLeft: {//和数据库一一对应
        input1: "",
        input2: "",
        input3: "",
      },
      msgBoxVisible: false,
      data: Data.slice(0, 5),
      columns: columns,
      totalNum: Data.length,
    };
  },
  // created() {
  //   if (MOCK) {
  //     this.data = [
  //       {
  //         name: "王小明",
  //         age: 18,
  //         address: "北京市朝阳区芍药居",
  //       },
  //       {
  //         name: "张小刚",
  //         age: 25,
  //         address: "北京市海淀区西二旗",
  //       },
  //       {
  //         name: "李小红",
  //         age: 30,
  //         address: "上海市浦东新区世纪大道",
  //       },
  //       {
  //         name: "周小伟",
  //         age: 26,
  //         address: "深圳市南山区深南大道",
  //       },
  //     ];
  //   } else {
  //     this.getList();
  //   }
  // },
  methods: {
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
    },
    pageChange(index) {
      // console.log(index);
    },
    numChange(value) {
      console.log(value);
    },
    dataChange(i) {
      this.data = Data.slice((i - 1) * 5, i * 5);
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