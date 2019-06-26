import Relation, { R } from "@ctsy/relation";
/**
  * 附件 Attach
  * NAID NAID 大数值自增(bigint)
  * AID AID 大整数(bigint)
  * 附件名称 Title 字符50(char(50))
  * 附件类型 Type 字符20(char(20))
  * 附件值 V 字符250(char(250))
*/
export default class Attach extends Relation{    
    constructor(ctx,table){
        super(ctx,table)
    }
}
