import Relation, { R } from "@ctsy/relation";
/**
  * 文章内容 NewsContent
  * AID AID 大整数(bigint)
  * Content Content 备注(text)
*/
export default class NewsContent extends Relation{    
    constructor(ctx,table){
        super(ctx,table)
    }
}
