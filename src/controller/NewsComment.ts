import Controller from '@ctsy/controller/dist/controller'
/**
  * 评论 NewsComment
  * CID CID 大数值自增(bigint)
  * 文章编号 AID 大整数(bigint)
  * CUID CUID 大整数(bigint)
  * CTime CTime 时间戳(timestamp)
  * 内容 Memo 字符250(char(250))
  * 状态 Status 状态值(tinyint(1))
*/
export default class NewsComment extends Controller{
  get _KeywordTable(){
    return 'NewsComment'
  }
 
  get _KeywordFields(){
    return []
  }
  
  
  
  
  async del(){throw new Error('禁止操作')}
  async delW(){throw new Error('禁止操作')}
  
}