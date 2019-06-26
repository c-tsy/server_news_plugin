import Controller from '@ctsy/controller/dist/controller'
/**
  * 文章内容 Content
  * AID AID 大整数(bigint)
  * Content Content 备注(text)
*/
export default class Content extends Controller{
  get _KeywordTable(){
    return 'Content'
  }
 
  get _KeywordFields(){
    return []
  }
  
  
  
  
  async del(){throw new Error('禁止操作')}
  async delW(){throw new Error('禁止操作')}
  
}