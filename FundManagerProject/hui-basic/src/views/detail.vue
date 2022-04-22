<template>
  <div class="product-detail">
    <h2>详情页</h2>
    <div id="productLineEchart" class="line-echart"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawLineEchart();
  },
  methods: {
    drawLineEchart() {
      // 基于准备好的dom，初始化echarts实例
      const echart = this.$echarts.init(
        document.getElementById("productLineEchart")
      );

      // 指定图表的配置项和数据
      const option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["基金1", "基金2", "基金3", "基金4", "基金5"],
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
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "基金1",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "基金2",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "基金3",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "基金4",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "基金5",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      echart.setOption(option);
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
</style>