import { DbDataType } from "@ctsy/model";
/**
  * 附件 NewsAttach
  * NAID NAID 大数值自增(bigint)
  * AID AID 大整数(bigint)
  * 附件名称 Title 字符50(char(50))
  * 附件类型 Type 字符20(char(20))
  * 附件值 V 字符250(char(250))
*/
export default {    
    NAID:{
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
    Title:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:"",
        allowNull:false
    },    
    Type:{
        type:DbDataType.char(20),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:"",
        allowNull:false
    },    
    V:{
        type:DbDataType.char(250),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:"",
        allowNull:false
    },
}