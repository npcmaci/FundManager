package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import java.util.Date;

@TableName("product_information")//与数据库的表名进行对应
@Data
public class Product_information {
    @TableId(value = "fund_code", type = IdType.AUTO)
    private String fundCode;
    private String fundName;
    private String subscriptionStatus;
    private String redemptionStatus;
    private double handlingFee;
    private String fundType;
    private String fundRiskLevel;
    private double fundSize;
    private Date established;
    private Integer fundRating;
    private double z0;
    private double z1;
    private double z2;
    private double z3;
    private double price;
}
