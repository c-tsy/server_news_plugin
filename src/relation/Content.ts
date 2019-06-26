import Relation, { R } from "@ctsy/relation";
/**
  * 文章内容 Content
  * AID AID 大整数(bigint)
  * Content Content 备注(text)
*/
export default class Content extends Relation{    
    constructor(ctx,table){
        super(ctx,table)
    }
}
