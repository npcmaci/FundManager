<template>
  <div>
    <h-steps
      :current="current"
      processIcon="brush"
      waitIcon="more"
      finishIcon="checkmark"
      style="margin-bottom: 15px; margin-top: 10px"
    >
      <h-step title="填写信息"> </h-step>
      <h-step title="绑定银行卡"></h-step>
      <h-step title="填写问卷"></h-step>
      <h-step title="完成开户"></h-step>
    </h-steps>
    <div style="display: flex; justify-content: center">
      <h-form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
        style="max-width: 1200px; padding-top: 0px; margin: 50px；"
      >
        <h-form-item prop="gender">
          <div class="ques">1 请问您的年龄处于：</div>
          <h-radio-group v-model="formValidate.q1">
            <h-radio label="c11">A．30岁以下；</h-radio>
            <h-radio label="c12">B．31-40岁；</h-radio>
            <h-radio label="c13">C．41-50岁；</h-radio>
            <h-radio label="c14">D．51-60岁；</h-radio>
            <h-radio label="c15">E．60岁以上</h-radio>
          </h-radio-group>
        </h-form-item>
        <h-form-item prop="gender">
          <div class="ques">
            2
            您家庭预计进行证券投资的资金占家庭现有总资产(不含自住、自用房产及汽车等固定资
            产)的比例是：
          </div>
          <h-radio-group v-model="formValidate.q2">
            <h-radio label="c21">A．70%以上；</h-radio>
            <h-radio label="c22">B．50%-70% ；</h-radio>
            <h-radio label="c23">C．30%－50%；</h-radio>
            <h-radio label="c24">D．10%－30%；</h-radio>
            <h-radio label="c25">E．10%以下</h-radio>
          </h-radio-group>
        </h-form-item>
        <h-form-item prop="gender">
          <div class="ques">3 进行一项重大投资后，您通常会觉得：</div>
          <h-radio-group v-model="formValidate.q3">
            <h-radio label="c31">A．很高兴，对自己的决定很有信心</h-radio>
            <h-radio label="c32">B．轻松，基本持乐观态度；</h-radio>
            <h-radio label="c33">C．基本没什么影响；</h-radio>
            <h-radio label="c34">D．比较担心投资结果；</h-radio>
            <h-radio label="c35">E．非常担心投资结果</h-radio>
          </h-radio-group>
        </h-form-item>
        <h-form-item prop="gender">
          <div class="ques">
            4 如果您需要把大量现金整天携带在身的话，您是否会感到：
          </div>
          <h-radio-group v-model="formValidate.q4">
            <h-radio label="c41">A．非常焦虑；</h-radio>
            <h-radio label="c42">B．有点焦虑； </h-radio>
            <h-radio label="c43">C．完全不会焦虑</h-radio>
          </h-radio-group>
        </h-form-item>
        <h-form-item prop="gender">
          <div class="ques">5 您是否了解证券市场的相关知识：</div>
          <h-radio-group v-model="formValidate.q5">
            <h-radio label="c51"
              >A．从来没有参与过证券交易，对投资知识完全不了解；</h-radio
            >
            <h-radio label="c52"
              >B．学习过证券投资知识，但没有实际操作经验，不懂投资技巧
            </h-radio>
            <h-radio label="c53"
              >C．了解证券市场的投资知识，并且有过实际操作经验，懂得一些投资技巧</h-radio
            >
            <h-radio label="c54"
              >D．参与过多年的证券交易，投资知识丰富，具有一定的专业水平
            </h-radio>
          </h-radio-group>
        </h-form-item>
        <!-- <h-form-item label="投资期望结果" prop="desc">
          <h-input
            v-model="formValidate.desc"
            type="textarea"
            :autosize="{ minRows: 1, maxRows: 5 }"
            placeholder="请输入..."
          ></h-input>
        </h-form-item> -->
      </h-form>
    </div>
    <div>
      <h-row type="flex" justify="space-between" class="demo-row code-row-bg">
        <h-col span="4"></h-col>
        <h-col span="4"
          ><h-button type="ghost" @click="handleReset('formValidate')"
            >上一步</h-button
          ></h-col
        >
        <h-col span="4"
          ><h-button
            type="primary"
            @click="instance('success')"
            style="margin-bottom: 30px"
            >下一步</h-button
          ></h-col
        >
        <h-col span="4"></h-col>
      </h-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 2,
      formValidate: {
        gender: "",
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        desc: "",
      },
      ruleValidate: {
        city: [{ required: true, message: "请选择城市", trigger: "change" }],
        gender: [{ required: false, message: "请选择", trigger: "change" }],
        desc: [
          { required: true, message: "请输入个人介绍", trigger: "blur" },
          {
            type: "string",
            min: 20,
            message: "介绍不能少于20字",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$hMessage.success("提交成功!");
      this.$router.push("/kaihu4");
    },
    handleReset(name) {
      this.$hMessage.success("返回成功!");
      this.$router.push("/kaihu2");
    },
    instance(type) {
      const title = "开户成功！";
      const content =
        '<p style="font-size:16px">您的风险评估类型为：保守型</p><p style="font-size:16px">祝您万事顺心，财源广进！</p>';
      switch (type) {
        case "success":
          this.$hMsgBox.success({
            title: title,
            content: content,
          });
      }
      this.$router.push("/Kaihu");
    },
  },
};
</script>
<style scoped>
.ques {
  font-size: 14px;
}
</style>