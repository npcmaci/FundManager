package com.example.demo.entity;

import lombok.Data;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.util.Date;

@TableName("product_price")//与数据库的表名进行对应
@Data
public class Product_price {
    @TableId(value = "ID", type =IdType.AUTO)
    private Integer ID;
    private Integer fundCode;
    private double unitNetWorth;
    private Date date;

}
