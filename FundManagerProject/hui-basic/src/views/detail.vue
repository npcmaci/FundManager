<template>
<div>
  <div class="product-detail">
    <h1 style="margin:10px">详情页---基金{{fundName}}</h1>
    <div style="display: flex">
    <h-button type="primary" style="margin-bottom: 20px;" @click="changeIsShow30">近30天</h-button>
    <h-button type="primary" style="margin-left: 10px; margin-bottom: 20px;" @click="changeIsShow90">近90天</h-button>
    <h-select 
    v-model="selectTime"
    @on-change="getSelectTime"
    label-in-value
    placeholder="选择显示时间"
    style="width: 200px; margin-left: 10px; margin-bottom: 20px;">
      <h-option
        v-for="item in dayList"
        :value="item.value"
        :key="item.value"
        >{{ item.label }}</h-option
      >
    </h-select>
    <h-button type = "primary" style = "margin-left: 150px; margin-bottom: 20px;" @click = "jump('/buy')">购买该基金</h-button>
    </div>
    <!-- <input type="button" value="显示近180天数据" @click="changeIsShow180">
    <input type="button" value="显示近1年数据" @click="changeIsShow365">
    <input type="button" value="显示成立以来数据" @click="changeIsShow0"> -->
    <div id="productLineEchart0" v-show="show0" class="line-echart"></div>
    <div id="productLineEchart30" v-show="show30" class="line-echart"></div>
    <div id="productLineEchart90" v-show="show90" class="line-echart"></div>
    <div id="productLineEchart180" v-show="show180" class="line-echart"></div>
    <div id="productLineEchart365" v-show="show365" class="line-echart"></div>
  <div class="mydiv">
    <h-card style="width: 150px;">
      <p slot="title">
        <h-icon name="ios-film-outline"></h-icon>
        基金价格
      </p>
      <ul>
    <h-icon name="ios-film-outline"></h-icon>
        {{this.data2[0].price}}
    </ul>
    </h-card>
  </div>
  <div class="mydiv">
      <h-card style="width: 150px;">
        <p slot="title">
          <h-icon name="ios-film-outline"></h-icon>
          涨跌幅度
        </p>
        <ul>
        <span style="this.judge()">
        <h-icon name="ios-film-outline" ></h-icon>
            {{this.data2[0].z0}}%
        </span>
      </ul>
      </h-card>
  </div>
    <div class="mydiv">
        <h-card style="width: 150px;">
          <p slot="title">
            <h-icon name="ios-film-outline"></h-icon>
            基金类型
          </p>
          <ul>
        <h-icon name="ios-film-outline"></h-icon>
            {{this.data2[0].fundType}}
        </ul>
        </h-card>
    </div>
    <div class="mydiv">
        <h-card style="width: 150px;">
          <p slot="title">
            <h-icon name="ios-film-outline"></h-icon>
            近1月涨跌幅
          </p>
          <ul>
        <h-icon name="ios-film-outline"></h-icon>
            {{this.data2[0].z1}}%
        </ul>
        </h-card>
    </div>
    <div class="mydiv">
        <h-card style="width: 150px;">
          <p slot="title">
            <h-icon name="ios-film-outline"></h-icon>
            近3月涨跌幅
          </p>
          <ul>
        <h-icon name="ios-film-outline"></h-icon>
            {{this.data2[0].z2}}%
        </ul>
        </h-card>
    </div>
    <div class="mydiv">
        <h-card style="width: 150px;">
          <p slot="title">
            <h-icon name="ios-film-outline"></h-icon>
            近1年涨跌幅
          </p>
          <ul>
        <h-icon name="ios-film-outline"></h-icon>
            {{this.data2[0].z3}}%
        </ul>
        </h-card>
    </div>
    <h-table stripe
      :data="data2"
      :columns="columns2"
      style="margin-bottom: 8px;"
      ></h-table>
  </div>

</div>
</template>

<script>

var columns = [
      {
        title: "价格",
        key: "unitNetWorth",
      },
      {
        title: "基金代码",
        key: "fundCode",
      },
      {
        title: "日期",
        key: "date",
      },
      {
        title: "ID",
        key: "ID",
      },
    ];
var columns2 = [
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
        title: "手续费",
        key: "handlingFee",
    },
    {
        title: "基金类型",
        key: "fundType",
    },
    {
        title: "基金风险等级",
        key: "fundRiskLevel",
    },
    {
        title: "基金规模",
        key: "fundSize",
    },
    {
        title: "成立时间",
        key: "established",
    },
    {
        title: "基金评级",
        key: "fundRating",
    },
    ];
var Data = [
    {
        unitNetWorth:1,
        date:"2",
    },
    {
        unitNetWorth:2,
        date:"3",
    },
];

var Data2 = [
    {
        fundCode:1,
        fundName:"基金1号",
        subscriptionStatus:"开放",
        redemptionStatus:"开放",
        handlingFee:0.5,
        fundType:"股票型",
        fundRiskLevel:"高风险",
        fundSize:10.22,
        established:"2022-1-1",
        fundRating:5,
        z0:3.0398,
        z1:-4.9936,
        z2:-14.1876,
        z3:38.6321,
        price:29.49,
    },
];


import request from "@/utils/request"
export default {
  async mounted() {
    await this.drawLineEchart();
  },
  data(){
    const router = this.$router;
    console.log(this.$route);
    // console.log('@@@', data)
    return {
      formItem: {
        ...this.$route.params,
      },
      show0:true,
      show30:false,
      show90:false,
      show180:false,
      show365:false,
      value: "",
      data: Data.slice(0, 5),
      columns: columns,
      totalNum: Data.length,
      data2: Data2.slice(0, 5),
      fundName :"xxx",
      columns2: columns2,
      selectTime: "",
      dayList: [
        {
          value: "30",
          label: "显示近30天数据",
        },
        {
          value: "90",
          label: "显示近90天数据",
        },
        {
          value: "180",
          label: "显示近180天数据",
        },
        {
          value: "365",
          label: "显示近1年数据",
        },
        {
          value: "ever",
          label: "显示成立以来数据",
        },
      ],
    };
  },
  created() {
    this.load1();
    this.load2();
  },
  methods: {
    load1() {
    request.get("http://localhost:9090/Pp",{
      params: {
        pageNum: this.$route.params.id,
        pageSize: this.pageSize,
        search: this.value
      }
    }).then(res => {
      console.log(this.$route)
      console.log(res)
      this.data = res.data
      this.totalNum = res.data.total
      this.Data = res.data
      if (this.unitarr === undefined){
        this.unitarr = []
      }
      this.Data.forEach(e => {
            this.unitarr.push(e.unitNetWorth)
        })
      console.log(this.Data[0].unitNetWorth)
      console.log(this.unitarr)
      if (this.datearr === undefined){
          this.datearr = []
        }
        this.Data.forEach(e => {
              this.datearr.push(e.date.substring(0,10))//截取前10位
          })
        console.log(this.datearr)
    })
    },
    load2() {
        request.get("http://localhost:9090/Product_i",{
          params: {
            fondId: this.$route.params.id,
          }
        }).then(res => {
          console.log(res)
          this.fundName=res.data[0].fundName
          this.data2 = res.data
          this.data2[0].established=this.data2[0].established.substring(0,10)})

    },
    drawLineEchart() {
        request.get("http://localhost:9090/Pp",{
              params: {
                pageNum: this.$route.params.id,
                pageSize: this.pageSize,
                search: this.value
              }
            }).then(res => {
            this.Data = res.data
            const datearr = []
            const unitarr = []
            this.Data.forEach(e => {
                unitarr.push(e.unitNetWorth)
            })
            this.Data.forEach(e => {
                datearr.push(e.date.substring(0,10))//截取前10位
            })
            const unitarr30 = this.unitarr.slice(-30,-1)
            const datearr30 = this.datearr.slice(-30,-1)
            const unitarr90 = this.unitarr.slice(-90,-1)
            const datearr90 = this.datearr.slice(-90,-1)
            const unitarr180 = this.unitarr.slice(-180,-1)
            const datearr180 = this.datearr.slice(-180,-1)
            const unitarr365 = this.unitarr.slice(-365,-1)
            const datearr365 = this.datearr.slice(-365,-1)
            const echart = this.$echarts.init(
                document.getElementById("productLineEchart0")
            );
            const echart2 = this.$echarts.init(
                document.getElementById("productLineEchart30")
            );
            const echart3 = this.$echarts.init(
                document.getElementById("productLineEchart90")
            );
            const echart4 = this.$echarts.init(
                document.getElementById("productLineEchart180")
            );
            const echart5 = this.$echarts.init(
                document.getElementById("productLineEchart365")
            );
            const option = {
            tooltip: {
              trigger: "axis",
            },
            legend: {
              data: ["基金"],
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true,
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: datearr,
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                name: "基金",
                type: "line",
                stack: "Total",
                data: unitarr,
              },
            ],
          };
            const option2 = {
            tooltip: {
              trigger: "axis",
            },
            legend: {
              data: ["基金"],
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true,
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: datearr30,
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                name: "基金",
                type: "line",
                stack: "Total",
                data: unitarr30,
              },
            ],
          };
        const option3 = {
            tooltip: {
              trigger: "axis",
            },
            legend: {
              data: ["基金"],
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true,
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: datearr90,
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                name: "基金",
                type: "line",
                stack: "Total",
                data: unitarr90,
              },
            ],
          };
        const option4 = {
            tooltip: {
              trigger: "axis",
            },
            legend: {
              data: ["基金"],
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true,
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: datearr180,
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                name: "基金",
                type: "line",
                stack: "Total",
                data: unitarr180,
              },
            ],
          };
        const option5 = {
            tooltip: {
              trigger: "axis",
            },
            legend: {
              data: ["基金"],
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true,
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: datearr365,
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                name: "基金",
                type: "line",
                stack: "Total",
                data: unitarr365,
              },
            ],
          };
            echart.setOption(option);
            echart2.setOption(option2);
            echart3.setOption(option3);
            echart4.setOption(option4);
            echart5.setOption(option5);
            })
        },
    changeIsShow0: function(){
        this.show0=true;
        this.show30=false;
        this.show90=false;
        this.show180=false;
        this.show365=false;
    },
    changeIsShow30:function(){
      console.log('!@#$##%@$#^$%');
        this.show0=false;
        this.show30=true;
        this.show90=false;
        this.show180=false;
        this.show365=false;
    },
    changeIsShow90:function(){
        this.show0=false;
        this.show30=false;
        this.show90=true;
        this.show180=false;
        this.show365=false;
    },
    changeIsShow180:function(){
        this.show0=false;
        this.show30=false;
        this.show90=false;
        this.show180=true;
        this.show365=false;
    },
    changeIsShow365:function(){
        this.show0=false;
        this.show30=false;
        this.show90=false;
        this.show180=false;
        this.show365=true;
    },
    getSelectTime(currentValue) {
      console.log('select value: ',currentValue);
      if(currentValue.value === '30') {
        this.changeIsShow30()
      }else if(currentValue.value === '90') {
        // console.log("点击了90！！");
        this.changeIsShow90()
      }else if(currentValue.value === '180') {
        this.changeIsShow180()
      }else if(currentValue.value === '365') {
        this.changeIsShow365()
      }else {
        this.changeIsShow0()
      }
    },
    jump(path) {
      this.$hCore.navigate(path);
    },
    judge(){
        if (this.data2[0].z0 <=0){
            return {'color':'red'}
        }
        if (this.data2[0].z0 >0){
            return {'color':'green'}
        }
    },
  },
};

</script>

<style lang="less">
.product-detail {
  h2 {
    font-size: 18px;
    margin-bottom: 24px;
  }
  ul {
    margin-bottom: 24px;
  }
  li {
    line-height: 30px;
  }
}
.line-echart {
  width: 600px;
  height: 400px;
}
.h-card p {
  margin: 0;
}
.h-card ul {
  padding: 0 !important;
  li {
    list-style: none;
    span {
      float: right;
      color: #ffac2d;
      i:last-child {
        margin-right: 5px;
      }
    }
  }
}
.h-card img {
  height: 85px;
}
.mydiv{
  display: inline-block;
}
</style>