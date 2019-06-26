import Relation, { R } from "@ctsy/relation";
/**
  * 评论 Comment
  * CID CID 大数值自增(bigint)
  * 文章编号 AID 大整数(bigint)
  * CUID CUID 大整数(bigint)
  * CTime CTime 时间戳(timestamp)
  * 内容 Memo 字符250(char(250))
  * 状态 Status 状态值(tinyint(1))
*/
export default class Comment extends Relation{    
    constructor(ctx,table){
        super(ctx,table)
    }
}
