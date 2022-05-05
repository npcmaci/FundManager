<template>
  <div>
    <div>
      <h-steps
        :current="current"
        processIcon="brush"
        waitIcon="more"
        finishIcon="checkmark"
        style="margin-top: 10px"
      >
        <h-step title="填写信息"> </h-step>
        <h-step title="绑定银行卡"></h-step>
        <h-step title="填写问卷"></h-step>
        <h-step title="完成开户"></h-step>
      </h-steps>
    </div>
    <div style="display: flex; justify-content: center">
      <h-form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
        label-position="left"
        style="max-width: 700px; padding-top: 20px"
      >
        <h-form-item label="身份选择" required>
          <h-radio-group v-model="formValidate.type">
            <h-radio label="person">个人</h-radio>
            <h-radio label="company">企业</h-radio>
          </h-radio-group>
        </h-form-item>
        <h-form-item label="性别" prop="gender">
          <h-radio-group v-model="formValidate.gender">
            <h-radio label="male">男</h-radio>
            <h-radio label="female">女</h-radio>
            <h-radio label="unknown">未知</h-radio>
          </h-radio-group>
        </h-form-item>
        <h-form-item label="证件选择" required>
          <h-select v-model="formValidate.card" placeholder="请选择">
            <h-option value="身份证">身份证</h-option>
            <h-option value="护照">护照</h-option>
            <h-option value="港澳通行证">港澳通行证</h-option>
            <h-option value="其它证件">其它证件</h-option>
          </h-select>
        </h-form-item>
        <h-form-item label="证件号码" required>
          <h-input
            v-model="formValidate.cardnumber"
            placeholder="输入相关证件号按下回车键查询"
            @on-enter="onenter"
          ></h-input>
        </h-form-item>
        <h-form-item label="密码" prop="passwd" required>
          <h-input
            type="password"
            v-model="formValidate.passwd"
            placeholder="请输入六位数字密码"
          ></h-input>
        </h-form-item>
        <h-form-item label="确认密码" prop="passwdCheck" required>
          <h-input
            type="password"
            v-model="formValidate.passwdCheck"
            placeholder="再次输入密码请确认"
          ></h-input>
        </h-form-item>
        <h-form-item label="出生日期">
          <h-row>
            <h-col span="11">
              <h-form-item prop="date">
                <h-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="formValidate.date"
                ></h-date-picker>
              </h-form-item>
            </h-col>
          </h-row>
        </h-form-item>
        <h-form-item label="邮箱" prop="mail">
          <h-input
            v-model="formValidate.mail"
            placeholder="请输入邮箱"
          ></h-input>
        </h-form-item>
        <h-form-item label="职业" prop="job">
          <h-checkbox-group v-model="formValidate.job">
            <h-checkbox label="学生"></h-checkbox>
            <h-checkbox label="政府人员"></h-checkbox>
            <h-checkbox label="老师"></h-checkbox>
            <h-checkbox label="医生"></h-checkbox>
            <h-checkbox label="律师"></h-checkbox>
            <h-checkbox label="企业工作者"></h-checkbox>
            <h-checkbox label="个体经营户"></h-checkbox>
            <h-checkbox label="其它"></h-checkbox>
          </h-checkbox-group>
        </h-form-item>
        <!-- <h-form-item label="介绍" prop="desc">
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
            >重置</h-button
          ></h-col
        >
        <h-col span="4"
          ><h-button type="primary" @click="handleSubmit('formValidate')"
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
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.formValidate.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formValidate.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formValidate.passwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      current: 0,
      formValidate: {
        passwd: "",
        passwdCheck: "",
        type: "",
        mail: "",
        gender: "",
        job: [],
        date: "",
        card: "",
        cardnumber: "",
      },
      ruleValidate: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }],
        mail: [
          { required: false, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
        gender: [{ required: true, message: "请选择性别", trigger: "change" }],
        job: [
          {
            required: false,
            type: "array",
            min: 1,
            message: "至少选择一个职业",
            trigger: "change",
          },
          {
            type: "array",
            max: 2,
            message: "最多选择两个职业",
            trigger: "change",
          },
        ],
        date: [
          {
            required: false,
            type: "date",
            message: "请选择日期",
            trigger: "change",
          },
        ],
        desc: [
          { required: false, message: "请输入个人介绍", trigger: "blur" },
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
      this.$router.push({
        name: "kaihu2",
        params: { olddata: this.formValidate },
      });
      // this.$refs[name].validate((valid) => {
      //   if (valid) {
      //   } else {
      //     this.$hMessage.error("表单验证失败!");
      //   }
      //});
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    onenter() {
      this.$hMessage.info("证件号有效");
    },
  },
};
</script>

<style scoped>
</style>
