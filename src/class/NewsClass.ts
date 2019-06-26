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
export default class NewsClass{
        
    public CID:number=0;    
    public Title:string="";    
    public PCID:number=0;    
    public Sort:number=0;    
    public CUID:number=0;    
    public CTime:Date=new Date;    
    public Status:number=0;
}