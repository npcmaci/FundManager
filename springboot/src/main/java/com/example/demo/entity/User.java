package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("person_user")//与数据库的表名进行对应
@Data
public class User {
     @TableId(value = "user_id", type =IdType.AUTO)
     private String userId;
     private String userName;
     private String userType;
     private String phoneNumber;
     private String certificateType;
     private String certificateNumber;
     private String riskLevel;

}
