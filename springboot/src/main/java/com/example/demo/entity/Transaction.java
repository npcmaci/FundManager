package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.sql.Timestamp;

@TableName("transaction_request")//与数据库的表名进行对应
@Data
public class Transaction {
    @TableId(value = "transaction_id", type = IdType.AUTO)
    private String transactionId;
    private Timestamp transactionTime;
    private String userId;
    private String userName;
    private String transactionType;
    private Float transactionAmount;
    private String bankAccounts;
    private String liquidateStatus;
}