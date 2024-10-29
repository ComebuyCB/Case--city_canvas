var selectlan
function initi18(){
    
   if(lan=='zh-cn'){
    selectlan='cn'
   }else if(lan=='zh-tw'){
    selectlan='tw'
   }else{selectlan=lan}
   $('#lanshow').html(selectlan.toUpperCase())
    i18next.init({
        // debug: true,
        lng: selectlan,
        
        interpolation: {
          escapeValue: false // 允許 HTML 標籤
        },
        resources: { 
          en: {
            translation: {
              all:{
                title:'2025 Asian Original Character Festival',
                index1:'organizer',
                index2:'execution unit',
                index3:'Event date',
                index4:'March 14 (Friday) – March 16 (Sunday), 2025',
                footer1:'Customer service hours: Mon ~ Fri 9:00 - 18:00',
                footer2:'Organizer: 同人誌數位有限公司 / 台灣角色品牌授權協會',
                news:'Exhibition News',
                index_tip:"The 'Asian Character Original Festival' co-organized by the 'Taiwan Character Brand Licensing Association' integrates the experience and resources accumulated by the Taiwan Character Brand Association over the years to bring more opportunities for Taiwan's original characters. Starting from introducing a more professional matchmaking mechanism and establishing the concept of character brand licensing, we will accompany Taiwan's original characters to the international market."
              },
              nav:{
                n0:'Introduction',
                n1:'Ticket',
                n2:'NEWS',
                n3:'Exhibit',
                n4:'FAQ',
                n5:'Exhibitor List'
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
              },
              intro:{
                t1:'「Asian Character Original Festival」',
                t2:'In 2022, the "Taiwan Original Show" will be held for the first time to bring together many Taiwanese original characters and illustration brands. In 2024, their experience will be re-transformed and absorbed, focusing more on "original characters". In 2024, the "Asia Original Character Festival" will be launched. , the new look will meet you in March 2025!',
                t3:'Three Major Goals',
                t4:' brings together original works from various fields in Taiwan and provides a platform for creators to display, communicate and sell. ',
 t5: "Professional escort, establishing the licensing concept of Taiwan's character brand, matchmaking tools and matchmaking negotiation skills, etc.",
 t6:"Leveraging years of authorized resources from markets like Malaysia, Japan, and South Korea to support Taiwan's original characters in entering the international market. ",
 t7:"In order to encourage early stage character creators to join, the 'Asia Original Character Festival' will use economic benefits that are more in line with the needs of exhibitors as an exhibition plan, becoming an important platform to promote the sustainable development of Taiwan's original characters in domestic and foreign markets. , and looks forward to joining hands with Taiwan IP to participate in more overseas exhibitions and licensing exchange activities in the future. ",
 t8:'Origin of the exhibition',
 t9:'The 「Asian Character Original Festival」 is jointly organized by the Taiwan Character Brand Licensing Association and Liang Integrated Marketing Co., Ltd. We hope to integrate the licensing experience and international resources accumulated by the Taiwan Character Association over the years to bring more opportunities and perspectives to Taiwanese creators and character brands. ',
 t10:'About us',
 t11:"The 「Asian Character Original Festival」 was initiated by Chairman Zheng Wenfu, Chairman of the Taiwan Character Association and the person in charge of CWT Doujinshi. Chairman Zheng has been committed to promoting the development of Taiwan's original works for many years and helping Taiwan's original works establish a solid reputation in the country. business foundation, and through the Taiwan Corner Association, various professional forums and exchange activities are held to stimulate industrial development and quality improvement. ",
                t12:'',
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
                index4:'2025年03月14日(五) – 03月16日(日)' ,
                footer1:'客服時間：周一 ~ 周五 9:00 - 18:00',
                footer2:'主辦單位：同人誌數位有限公司 / 台灣角色品牌授權協會',
                news:'大會消息',
                index_tip:"由「台灣角色品牌授權協會」共同舉辦的「亞洲角色原創節」，整合台灣角協多年累積的經驗與資源，替台灣原創角色帶來更多機會。從導入更專業的媒合機制，建立角色品牌授權觀念開始，陪著台灣的原創角色一起邁向國際市場。"
              },
              nav:{
                n0:'展會介紹',
                n1:'購票資訊',
                n2:'消息中心',
                n3:'參展報名',
                n4:'常見問題',
                n5:'展商名單'
              
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
              },
              intro:{
                t1:'「亞洲角色原創節」',
                t2:'2022年首度舉辦「台灣原創匯」將許多台灣原創角色與插畫品牌齊聚一堂，2024年將其經驗重新轉化吸收，更聚焦於「原創角色」於2024年宣告「亞洲原創角色節」開跑，嶄新面貌將於2025年三月與大家見面！',
                t3:'三大目標',
                t4:'匯集台灣各領域的原創作品，為創作者提供了一個展示、交流與銷售的平台。',
                t5:'專業陪跑，建立台灣角色品牌的授權觀念，媒合工具與媒合洽談技巧等。',
                t6:'整合多年累積「馬來西亞」「日本」「韓國」等授權市場資源，陪著台灣的原創角色一起邁向國際市場。',
                t7:'為鼓勵更前期的角色創作者加入，「亞洲原創角色節」將以更符合參展者需求的經濟效益，來做為展覽規劃，成為推動台灣原創角色在國內外市場持續發展的重要平台，並期待未來能攜手台灣IP參與更多海外展會與授權交流活動。',
                t8:'展會起源',
                t9:'「亞洲角色原創節」為台灣角色品牌授權協會與和靚整合行銷有限公司聯手舉辦。期望整合台灣角協多年累積的授權經驗與國際資源，替台灣創作者與角色品牌帶來更多機會與視野。',
                t10:'關於我們',
                t11:'「亞洲角色原創節」由台灣角協理事長、同時也是CWT同人誌負責人—鄭文福理事長發起，鄭理事長多年來致力推動台灣原創作品發展，協助台灣原創作品在國內建立穩固的商業基礎，並透過台灣角協，舉辦各種專業論壇與交流活動，刺激產業發展與質量提升。',
                t12:'',
              },
            }
          },
        }
      }, function(err, t) {
        jqueryI18next.init(i18next, $, { useOptionsAttr: true});
        $('.i18lan').localize();
    
       /* var f13Text = i18next.t('forms.f13');
        alert(f13Text); // 彈出對應語系的翻譯內容*/
      
      });
}