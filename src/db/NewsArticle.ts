import { DbDataType } from "@ctsy/model";
/**
  * 文章 NewsArticle
  * AID AID 大数值自增(bigint)
  * CID CID 大整数(bigint)
  * 创建人 CUID 大整数(bigint)
  * 创建时间 CTime 时间戳(timestamp)
  * 标题 Title 字符50(char(50))
  * 摘要 Memo 字符250(char(250))
  * 排序 Sort 序号(bigint)
  * 置顶 Top 布尔(tinyint(1))
  * 状态 Status 状态值(tinyint(1))
  * 首图 Head 字符250(char(250))
  * 定时发布 STime 时间戳(timestamp)
  * 类型 Type 状态值(tinyint(1))
  * 允许评论 Comment 布尔(tinyint(1))
*/
export default {    
    AID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:0,
        allowNull:false
    },    
    CID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },    
    CUID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },    
    CTime:{
        type:DbDataType.timestamp,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:new Date,
        allowNull:false
    },    
    Title:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:"",
        allowNull:false
    },    
    Memo:{
        type:DbDataType.char(250),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:"",
        allowNull:false
    },    
    Sort:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },    
    Top:{
        type:DbDataType.tinyint(1),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },    
    Status:{
        type:DbDataType.tinyint(1),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },    
    Head:{
        type:DbDataType.char(250),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:"",
        allowNull:false
    },    
    STime:{
        type:DbDataType.timestamp,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:new Date,
        allowNull:false
    },    
    Type:{
        type:DbDataType.tinyint(1),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },    
    Comment:{
        type:DbDataType.tinyint(1),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:1,
        allowNull:false
    },
}