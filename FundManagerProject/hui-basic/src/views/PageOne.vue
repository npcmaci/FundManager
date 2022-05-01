<template>
  <div>
    <div>
      <h-tabs>
        <h-tab-pane label="基础信息" icon="headlines">
          <div>
            <h-form :model="formItem" :label-width="80">
              <h-form-item label="输入框">
                <h-input
                  v-model="formItem.input"
                  placeholder="请输入"
                ></h-input>
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
                <h-button type="ghost" style="margin-left: 8px">取消</h-button>
              </h-form-item>
            </h-form>
          </div>
        </h-tab-pane>
        <h-tab-pane label="绑定银行卡" icon="financial_fill">
          标签二的内容
        </h-tab-pane>
        <h-tab-pane label="填写问卷" icon="stealth">
          标签三的内容
        </h-tab-pane>
        <h-tab-pane label="开户成功" icon="t-b-correctinformati">
          标签二的内容
        </h-tab-pane>
      </h-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageOne",
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
};
</script>

<style scoped>
</style>
