/**
  * 评论 NewsComment
  * CID CID 大数值自增(bigint)
  * 文章编号 AID 大整数(bigint)
  * CUID CUID 大整数(bigint)
  * CTime CTime 时间戳(timestamp)
  * 内容 Memo 字符250(char(250))
  * 状态 Status 状态值(tinyint(1))
*/
export default class NewsComment{
        
    public CID:number=0;    
    public AID:number=0;    
    public CUID:number=0;    
    public CTime:Date=new Date;    
    public Memo:string="";    
    public Status:number=0;
}