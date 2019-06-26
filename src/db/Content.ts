import { DbDataType } from "@ctsy/model";
/**
  * 文章内容 Content
  * AID AID 大整数(bigint)
  * Content Content 备注(text)
*/
export default {    
    AID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },    
    Content:{
        type:DbDataType.text,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:"",
        allowNull:false
    },
}