import { DbDataType } from "@ctsy/model";
/**
  * 评论 Comment
  * CID CID 大数值自增(bigint)
  * 文章编号 AID 大整数(bigint)
  * CUID CUID 大整数(bigint)
  * CTime CTime 时间戳(timestamp)
  * 内容 Memo 字符250(char(250))
  * 状态 Status 状态值(tinyint(1))
*/
export default {    
    CID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:0,
        allowNull:false
    },    
    AID:{
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
    Memo:{
        type:DbDataType.char(250),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:"",
        allowNull:false
    },    
    Status:{
        type:DbDataType.tinyint(1),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },
}