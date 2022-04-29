package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("person_user")//与数据库的表名进行对应
@Data
public class User {
     @TableId(value = "person_Id", type =IdType.AUTO)
     private String personId;
     private String personName;
     private String phoneNumber;
     private String personCertificateType;
     private String personCertificateNumber;
     private String personRisk;
}
