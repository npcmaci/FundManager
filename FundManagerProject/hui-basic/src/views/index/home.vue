<template>
  <div>
    <div>
      <h-button type = "primary" style="margin-top: 10px" @click = "jump2('/newProduct')">新建</h-button>
      <h-button type = "primary" style="margin-left: 5px; margin-top: 10px">编辑</h-button>
      <h-button type = "primary" style="margin-left: 5px; margin-top: 10px">导出</h-button>
    </div>
    <div>
      <h-input
        v-model="value"
        placeholder="请输入关键字..."
        style="width: 300px; margin-top: 10px; margin-bottom: 10px"
      ></h-input>
      <h-button type = "primary" style="margin-left: 5px; margin-top: 10px; margin-bottom: 10px" @click="load">搜索</h-button>
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
function deleteEntry (params) {
  console.log('delete an entry', params.index);
  request.delete("http://localhost:9090/Product_i/" + params.row.fundCode);
  window.load();
  window.load();
  window.load();
  window.load();
  alert("successfully delete!!!");
};
function handleEdit(params) {
  console.log('edit a product:', params.index);
  console.log(params);
  this.formLeft = JSON.parse(JSON.stringify(params))
}
var columns = [
      {
        title: "基金代码",
        key: "fundCode",
      },
      {
        title: "基金名称",
        key: "fundName",
      },
      {
        title: "基金价格",
        key: "price",
      },
      {
        title: "涨跌幅",
        key: "z0",
      },
      {
        title: "近1月涨跌幅",
        key: "z1",
      },
      {
        title: "近3月涨跌幅",
        key: "z2",
      },
      {
        title: "近1年涨跌幅",
        key: "z3",
      },
      {
        title: "申购状态",
        key: "subscriptionStatus",
      },
      {
        title: "赎回状态",
        key: "redemptionStatus",
      },
      {
          title: "成立时间",
          key: "established",
          render: (h, { row: {established } }) => h("span", {}, new Date(established).toLocaleString()),
      },
      {
          title: "基金评级",
          key: "fundRating",
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
                    console.log(params);
                    //console.log(params.row.fundCode);
                    jump('\detail',params.row.fundCode);
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
                      handleEdit(params);
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
                      deleteEntry(params);
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
        fundCode: "001",
        productName: "AAaaaa",
        productType: "special",
        productCategory: "基金",
        address: "HZ",
      },
      {
        fundCode: "002",
        productName: "BBaaaa",
        productType: "normal",
        productCategory: "基金",
        address: "HZ",
      },
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
      currentPage: 1,
      msgBoxVisible: false,
      data: Data.slice(0, 10),
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
      request.get("http://localhost:9090/Product_i",{
        params: {
          pageNum: this.currentPage,
          pageSize: 10,
          search: this.value
        }
      }).then(res => {
        console.log(res)
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
    jump(path,id) {
      console.log(id)
      this.$router.push({
          name: path,
          params: { id: id },
        });
    },
    jump2(path) {
      this.$hCore.navigate(path);
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
      this.data = Data.slice((i - 1) * 10, i * 10);
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