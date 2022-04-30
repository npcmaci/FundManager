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
    <div>
    <h-button type="primary" @click="modal1 = true">显示对话框</h-button>
    <h-msg-box
      v-model="modal1"
      :escClose="true"
      title="普通的MsgBox对话框标题"
      @on-ok="ok"
      @on-cancel="cancel"
      :beforeEscClose="beforetest"
    >
    <h-form :model="formItem" :label-width="80">
      <h-form-item label="输入框">
        <h-input v-model="formItem.input" placeholder="请输入"></h-input>
      </h-form-item>
      <h-form-item label="选择器">
        <h-select v-model="formItem.select" placeholder="请选择">
          <h-option value="beijing">北京市</h-option>
          <h-option value="shanghai">上海市</h-option>
          <h-option value="shenzhen">深圳市</h-option>
        </h-select>
      </h-form-item>
      <h-form-item label="日期控件">
        <h-row>
          <h-col span="11">
            <h-date-picker
              type="date"
              placeholder="选择日期"
              v-model="formItem.date"
            ></h-date-picker>
          </h-col>
          <h-col span="2" style="text-align: center;">-</h-col>
          <h-col span="11">
            <h-time-picker
              type="time"
              placeholder="选择时间"
              v-model="formItem.time"
            ></h-time-picker>
          </h-col>
        </h-row>
      </h-form-item>
      <h-form-item label="单选框">
        <h-radio-group v-model="formItem.radio">
          <h-radio label="male">男</h-radio>
          <h-radio label="female">女</h-radio>
        </h-radio-group>
      </h-form-item>
      <h-form-item label="多选框">
        <h-checkbox-group v-model="formItem.checkbox">
          <h-checkbox label="吃饭"></h-checkbox>
          <h-checkbox label="睡觉"></h-checkbox>
          <h-checkbox label="跑步"></h-checkbox>
          <h-checkbox label="看电影"></h-checkbox>
        </h-checkbox-group>
      </h-form-item>
      <h-form-item label="开关">
        <h-switch v-model="formItem.switch" size="large">
          <span slot="open">开启</span>
          <span slot="close">关闭</span>
        </h-switch>
      </h-form-item>
      <h-form-item label="滑块">
        <h-slider v-model="formItem.slider" range></h-slider>
      </h-form-item>
      <h-form-item label="文本域">
        <h-input
          v-model="formItem.textarea"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="请输入..."
        ></h-input>
      </h-form-item>
      <h-form-item>
        <h-button type="primary">提交</h-button>
        <h-button type="ghost" style="margin-left: 8px;">取消</h-button>
      </h-form-item>
    </h-form>
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
    </h-msg-box>
  </div>
  </div>
</template>
<script>
import core from "@hsui/core";
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
      modal1: false,
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

    },
    beforetest() {
      return true;
    },
    ok() {
      this.$hMessage.info("点击了确定");
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