import Relation, { R } from "@ctsy/relation";
/**
  * 文章 Article
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
export default class Article extends Relation{    
    constructor(ctx,table){
        super(ctx,table)
    }
}
