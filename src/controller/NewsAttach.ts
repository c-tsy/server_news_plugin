import Controller from '@ctsy/controller/dist/controller'
/**
  * 附件 NewsAttach
  * NAID NAID 大数值自增(bigint)
  * AID AID 大整数(bigint)
  * 附件名称 Title 字符50(char(50))
  * 附件类型 Type 字符20(char(20))
  * 附件值 V 字符250(char(250))
*/
export default class NewsAttach extends Controller{
  get _KeywordTable(){
    return 'NewsAttach'
  }
 
  get _KeywordFields(){
    return []
  }
  
  
  
  
  async del(){throw new Error('禁止操作')}
  async delW(){throw new Error('禁止操作')}
  
}