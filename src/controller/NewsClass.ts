import Controller from '@ctsy/controller/dist/controller'
/**
  * 分类 NewsClass
  * CID CID 大数值自增(bigint)
  * 标题 Title 字符50(char(50))
  * 父ID PCID 大整数(bigint)
  * 排序 Sort 序号(bigint)
  * CUID CUID 大整数(bigint)
  * CTime CTime 时间戳(timestamp)
  * 状态 Status 状态值(tinyint(1))
*/
export default class NewsClass extends Controller{
  get _KeywordTable(){
    return 'NewsClass'
  }
 
  get _KeywordFields(){
    return []
  }
  
  
  
  
  async del(){throw new Error('禁止操作')}
  async delW(){throw new Error('禁止操作')}
  
}