function initi18(){
    var lans
   if(lan=='zh-cn'){
    lans='cn'
   }else if(lan=='zh-tw'){
    lans='tw'
   }else{lans=lan}
   $('#lanshow').html(lans.toUpperCase())
    i18next.init({
        // debug: true,
        lng: lans, 
        resources: { 
          en: {
            translation: {
              all:{
                title:'2025 Asian Original Character Festival',
                index1:'organizer',
                index2:'execution unit',
                index3:'Event date',
                footer1:'Customer service hours: Monday ~ Friday 9:00 - 18:00',
                footer2:'Organizer: 同人誌數位有限公司'
              },
              nav:{
                n0:'Introduction',
                n1:'Ticket',
                n2:'NEWS',
                n3:'Exhibit',
                n4:'FAQ',
                n5:'Exhibitor List'
              },
              footer:{
                txt:'<p>台北總公司  23586 新北市中和區中正路880號14樓之5</p><p>電話：02-8227-7999</p><p>客服專線：0800-221-228</p>'
              }
              ,forms: {
                f1:'Business Undertaken Personnel',
                f2:'Name of person in charge',
                f3:'Contact number',
                f4:'Email',
                f5:'Line ID',
                f6:'Brand name',
                f7:'Type of goods/services sold',
                f8:'Want to inquire about the number of stalls',
                f9:'3mx3m pure land NT 39,500 (early bird discount NT 35,550)',
                f10:'3mx3m standard stall NT 44,500 (early bird discount NT 40,050)',
                f11:'3mx3m outdoor stall NT 15,000 (early bird discount NT 13,500)',
                f12:'1.5mx1m market stall NT 9,000 (early bird discount NT 8,100)',
                f13:'Submit',
                f14:'Please enter',
                f15:'Please check',
                f16:'Registration information',
                f17: "Please fill in the registration information and the sales specialist will contact you within two working days. Thank you.",
                f18:'Want to inquire about stall specifications',
                f19:'Please enter a valid email address',
                f20:'Please enter a valid contact number',
                f21:'Registration successful!'
              }
            }
          },
          tw: {
            translation: {
              all:{
                title:'2025亞洲原創角色節',
                index1:'主辦單位',
                index2:'執行單位',
                index3:'活動日期' ,
                footer1:'客服時間：周一 ~ 周五 9:00 - 18:00',
                footer2:'主辦單位：同人誌數位有限公司'
              },
              nav:{
                n0:'展會介紹',
                n1:'購票資訊',
                n2:'消息中心',
                n3:'參展報名',
                n4:'FAQ',
                n5:'展商名單'
              
              },
              footer:{
                txt:'<p>台北總公司  23586 新北市中和區中正路880號14樓之5</p><p>電話：02-8227-7999</p><p>客服專線：0800-221-228</p>'
              },
              forms: {
                f1:'業務承辦人員',
                f2:'負責人姓名',
                f3:'聯絡電話 ',
                f4:'電子信箱',
                f5:'Line ID',
                f6:'品牌名稱',
                f7:'販售商品/服務類型',
                f8:'欲洽詢攤位格數',
                f9:'3mx3m 淨地 NT 39,500（早鳥優惠 NT 35,550）',
                f10:'3mx3m 標準攤位 NT 44,500（早鳥優惠 NT 40,050）',
                f11:'3mx3m 戶外攤位 NT 15,000（早鳥優惠 NT 13,500）',
                f12:'1.5mx1m 市集攤位 NT 9,000（早鳥優惠 NT 8,100）',
                f13:'提交',
                f14:'請輸入',
                f15:'請勾選',
                f16:'報名資訊',
                f17:"請填寫報名資訊，業務專員將於兩個工作日內與您聯繫，謝謝。",
                f18:'欲洽詢攤位規格',
                f19:'請輸入有效的電子郵件地址',
                f20:'請輸入有效的聯絡電話',
                f21:'報名成功!'
              }
            }
          },
        }
      }, function(err, t) {
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
        $('.i18lan').localize();
       /* var f13Text = i18next.t('forms.f13');
        alert(f13Text); // 彈出對應語系的翻譯內容*/
      
      });
}