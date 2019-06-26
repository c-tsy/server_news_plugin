/**
  * 文章 NewsArticle
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
export default class NewsArticle{
        
    public AID:number=0;    
    public CID:number=0;    
    public CUID:number=0;    
    public CTime:Date=new Date;    
    public Title:string="";    
    public Memo:string="";    
    public Sort:number=0;    
    public Top:number=0;    
    public Status:number=0;    
    public Head:string="";    
    public STime:Date=new Date;    
    public Type:number=0;    
    public Comment:number=1;
}