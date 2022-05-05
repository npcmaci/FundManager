<template>
<div>
    <h1 style="margin-top: 10px">新建基金</h1>
    <div>
      <h-tabs>
        <h-tab-pane label="基础信息" icon="ios-list-outline">
          <div>
            <h-form :model="formItem" :label-width="80" label-position="left" style="max-width: 700px; margin-left: 30px">
              <h-form-item label="基金代码">
                <h-input v-model="formItem.code" disabled placeholder="00004643"></h-input>
              </h-form-item>
              <h-form-item label="基金名称">
                <h-input v-model="formItem.name" placeholder="请输入基金名称"></h-input>
              </h-form-item>
              <h-row :gutter="8">
                <h-col span = "14">
              <h-form-item label="基金价格">
                <h-input v-model="formItem.price" placeholder="请输入基金价格" style="width: 300px"></h-input>
              </h-form-item>
                </h-col>
                <h-col span = "10">
                <h-form-item label="手续费">
                <h-input v-model="formItem.handleFee" placeholder="请输入手续费" style="width: 170px"></h-input>
              </h-form-item>
                </h-col>
              </h-row>
              <h-row :gutter="8">
              <h-col span="12">
              <h-form-item label="申购状态">
                <h-switch v-model="formItem.subscriptStatus" size="large">
                  <span slot="open">开启</span>
                  <span slot="close">关闭</span>
                </h-switch>
              </h-form-item>
              </h-col>
              <h-col span="12">
              <h-form-item label="赎回状态">
                <h-switch v-model="formItem.redemptionStatus" size="large">
                  <span slot="open">开启</span>
                  <span slot="close">关闭</span>
                </h-switch>
              </h-form-item>
            </h-col>
              </h-row>
              <h-form-item label="成立时间">
                <h-row>
                  <h-col span="11">
                    <h-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="formItem.date"
                    ></h-date-picker>
                  </h-col>
                  <h-col span="2" style="text-align: center">-</h-col>
                  <h-col span="11">
                    <h-time-picker
                      type="time"
                      placeholder="选择时间"
                      v-model="formItem.time"
                    ></h-time-picker>
                  </h-col>
                </h-row>
              </h-form-item>
              <h-form-item label="风险等级">
                <h-radio-group v-model="formItem.radio">
                  <h-radio label="low">低风险</h-radio>
                  <h-radio label="mid">中风险</h-radio>
                  <h-radio label="high">高风险</h-radio>
                </h-radio-group>
              </h-form-item>
              <h-form-item label="基金类型">
                <h-checkbox-group v-model="formItem.checkbox">
                  <h-checkbox label="股票型"></h-checkbox>
                  <h-checkbox label="混合型"></h-checkbox>
                  <h-checkbox label="债券型"></h-checkbox>
                  <h-checkbox label="指数型"></h-checkbox>
                  <h-checkbox label="EFT联接"></h-checkbox>
                  <h-checkbox label="QDII"></h-checkbox>
                  <h-checkbox label="LOF"></h-checkbox>
                  <h-checkbox label="FOF"></h-checkbox>
                </h-checkbox-group>
              </h-form-item>
              <h-form-item label="提交人">
                <h-input v-model="formItem.person" placeholder="请输入提交者名称"></h-input>
              </h-form-item>
              <h-form-item label="基金介绍">
                <h-input
                  v-model="formItem.textarea"
                  type="textarea"
                  :autosize="{ minRows: 1, maxRows: 5 }"
                  placeholder="请输入该基金的介绍..."
                  style="width: 400px"
                ></h-input>
              </h-form-item>
              <h-form-item>
                <h-button type="ghost">下一步</h-button>
                <h-button type="primary" style="margin-left: 200px">提交</h-button>
                <h-button type="ghost" style="margin-left: 30px">取消</h-button>
              </h-form-item>
            </h-form>
          </div>
        </h-tab-pane>
        <h-tab-pane label="申购限制" icon="financial_fill">
          <h-form :model="formItem" :label-width="100" label-position="left" style="max-width: 700px; margin-left: 30px; margin-top:20px">
              <h-form-item label = "申购者限制">
                  <h-radio-group v-model="formItem.radio2">
                  <h-radio label="all">全部</h-radio>
                  <h-radio label="person">个人</h-radio>
                  <h-radio label="company">企业</h-radio>
                </h-radio-group>
              </h-form-item>
              <h-form-item label="最低申购份额">
                <h-row :gutter="8">
                <h-col span="2">
                <p>{{formItem.slider}}</p>
                </h-col>
                <h-col span="20">
                <h-slider v-model="formItem.slider" :step="10" :min="0" :max="100"></h-slider>
                </h-col>
                </h-row>
              </h-form-item>
              <h-form-item label="用户风险等级" style="width: 400px">
                  <h-select v-model="formItem.select" placeholder="请选择用户风险等级">
                    <h-option value="all">全部</h-option>
                    <h-option value="low">低风险</h-option>
                    <h-option value="mid">中风险</h-option>
                    <h-option value="high">高风险</h-option>
                    </h-select>
              </h-form-item>
              <h-form-item>
                <h-button type="primary" style="margin-left: 200px; margin-top: 100px">提交</h-button>
                <h-button type="ghost" style="margin-left: 30px; margin-top: 100px">取消</h-button>
              </h-form-item>
          </h-form>
        </h-tab-pane>
      </h-tabs>
    </div>
</div>
</template>

<script>
export default {
    name: "newProduct",
    data() {
        return {
            formItem: {
                input: "",
                select: "",
                radio: "male",
                checkbox: [],
                switch: true,
                date: "",
                time: "",
                slider: [20, 50],
                textarea: "",
            },
        };
    },
}

</script>

<style scoped>

</style>