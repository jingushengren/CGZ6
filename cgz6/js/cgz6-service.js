const cgz6Data = {
    result: {
        option : {
            title : {
                text: '冷态升温升压曲线'
            },
            //提示语
            tooltip : {
                trigger: 'item',
                formatter: "{a}<br/>{c}"
            },
            //calculable : true,
            xAxis : [//x轴
                {
                    type: 'value',
                    min:0,
                    max:280,
                    splitNumber:7,
                    axisLabel: {
                        formatter: '{value} min'
                    }
                }
            ],
            yAxis : [//y轴
                {
                    name:'主蒸汽温度（ °C）',
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#ff0000'
                        }
                    },
                    min:0,
                    max:600,
                    splitNumber:10,
                },
                {
                    name:'主蒸汽压力(MPa)',
                    type : 'value',
                    min:0,
                    max:15,
                    splitNumber:10,
                    axisLine: {
                        lineStyle: {
                            color: "#00b0f0"
                        }
                    }
                }
            ],
            series : [
                {
                    name: '主蒸汽温度',
                    type: 'line',
                    yAxis: 1,
                    showAllSymbol: true,
                    symbol: 'droplet',
                    data: [
                        [0, 0]
                    ],
                },
                {
                    name:'主蒸汽压力',
                    type:'line',
                    yAxisIndex:1,
                    symbol: 'heart',
                    showAllSymbol:true,

                    data:[
                        [0, 0]
                    ]
                },
                {
                    name: '主蒸汽温度',
                    type: 'line',
                    data: [
                        [20, 50],[43,149],[70,188],[108,278],[152,310],[185,355],[238,550],[280,550]
                    ],
                },
                {
                    name:'主蒸汽压力',
                    type:'line',
                    yAxisIndex:1,
                    data:[
                        [3, 0],[40,0.3],[70,1.1],[120,3.0],[200,4.5],[230,6.75],[240,10.6],[280,10.6]
                    ]
                },
            ]
        },
        gasWater:[
            {gasWaterComboImgUrl:"images/cgz6-combo0.png",gasWaterID:"gasWater-1"}
        ],
        combustionRegulationComboImg:"images/cgz6-combo1.png",
        Combustionregulationsystem:[
            {systemUrl:"images/cgz6-part0.png",top:"110px",left:"230px",systemID:"part0"},
            {systemUrl:"images/cgz6-part1.png",top:"110px",left:"580px",systemID:"part1"},
            {systemUrl:"images/cgz6-part15.png",top:"355px",left:"103px",systemID:"part15"},
            {systemUrl:"images/cgz6-part16.png",top:"347px",left:"535px",systemID:"part16"},
        ],
        FuelAerobics:[
            {FuelAerobicUrl:"images/cgz6-part18.png",top:"0px",left:"50px",FuelAerobicID:"part18"},
            {FuelAerobicUrl:"images/cgz6-part19.png",top:"0px",left:"90px",FuelAerobicID:"part19"},
        ],
        doubleNums:[
            {doubleNumUrl:"images/cgz6-part2.png",top:"100px",left:"0px",doubleNumID:"double1",doubleNumname:"启动6倍速度",display:"true"},
            {doubleNumUrl:"images/cgz6-part3.png",top:"140px",left:"0px",doubleNumID:"double2",doubleNumname:"启动8倍速度",display:"true"},
            {doubleNumUrl:"images/cgz6-part4.png",top:"180px",left:"0px",doubleNumID:"double3",doubleNumname:"启动10倍速度",display:"true"},
        ],
        blueBtns:[
            {blueBtnUrl:"images/cgz6-part5.png",top:"30px",left:"15px",blueBtnID:"btn1",blueBtnname:"排污"},
            {blueBtnUrl:"images/cgz6-part5.png",top:"30px",left:"65px",blueBtnID:"btn2",blueBtnname:"冲洗水位计"},
            {blueBtnUrl:"images/cgz6-part5.png",top:"30px",left:"110px",blueBtnID:"btn3",blueBtnname:"热紧螺栓"},
            {blueBtnUrl:"images/cgz6-part5.png",top:"30px",left:"155px",blueBtnID:"btn4",blueBtnname:"连排"},
            {blueBtnUrl:"images/cgz6-part5.png",top:"30px",left:"200px",blueBtnID:"btn5",blueBtnname:"膨胀指示"},
            {blueBtnUrl:"images/cgz6-part5.png",top:"30px",left:"240px",blueBtnID:"btn6",blueBtnname:"暖管"},
            {blueBtnUrl:"images/cgz6-part13.png",top:"460px",left:"125px",blueBtnID:"btn7",blueBtnname:"壁温"},
            {blueBtnUrl:"images/cgz6-part12.png",top:"120px",left:"130px",blueBtnID:"part12",blueBtnname:"汽包"},

        ],
        assemblys:[
            {assemblyUrl:"images/cgz6-part6.png",top:"420px",left:"880px",assemblyID:"part6",assemblyname:"侧包过热器下",airValve:true,trap:true,display:false},
            {assemblyUrl:"images/cgz6-part7.png",top:"93px",left:"880px",assemblyID:"part7",assemblyname:"侧包过热器上",airValve:true,trap:true,display:false},
            {assemblyUrl:"images/cgz6-part8.png",top:"230px",left:"790px",assemblyID:"part8",assemblyname:"低温过热器",airValve:true,trap:true,display:false},
            {assemblyUrl:"images/cgz6-part9.png",top:"220px",left:"505px",assemblyID:"part9",assemblyname:"高温过热器热段",airValve:true,trap:true,display:false},
            {assemblyUrl:"images/cgz6-part10.png",top:"120px",left:"525px",assemblyID:"part10",assemblyname:"高温过热器冷段上",airValve:true,trap:true,display:false},
            {assemblyUrl:"images/cgz6-part20.png",top:"360px",left:"525px",assemblyID:"part13",assemblyname:"高温过热器冷段下",airValve:true,trap:true,display:false},
            {assemblyUrl:"images/cgz6-part11.png",top:"162px",left:"943px",assemblyID:"part11",assemblyname:"后包墙过热器",airValve:true,trap:true,display:false},

        ],
        feedwater:{feedwaterUrl:"images/cgz6-part17.png",top:"530px",left:"410px",feedwaterID:"part17",feedwatername:"给水",display:false},

        hotComboImg:[
            {hotComboImgUrl:"images/cgz6-combo2.png",hotID:"hot-1",hotname:"点火装置"}
        ],
        hotpartImgs:[
            {hotpartImgUrl:"images/cgz6-part14.png",top:"90px",left:"125px",hotID:"hot-2",hotname:"点火枪"},
            {hotpartImgUrl:"images/cgz6-part14.png",top:"260px",left:"125px",hotID:"hot-2",hotname:"点火枪"},
            {hotpartImgUrl:"images/cgz6-part14.png",top:"90px",left:"840px",hotID:"hot-2",hotname:"点火枪"},
            {hotpartImgUrl:"images/cgz6-part14.png",top:"260px",left:"840px",hotID:"hot-2",hotname:"点火枪"},
            {hotpartImgUrl:"images/cgz6-part24.png",top:"120px",left:"202px",hotID:"hot-2",hotname:"点火枪"},
            {hotpartImgUrl:"images/cgz6-part24.png",top:"340px",left:"202px",hotID:"hot-2",hotname:"点火枪"},
            {hotpartImgUrl:"images/cgz6-part24.png",top:"165px",left:"202px",hotID:"hot-2",hotname:"点火枪"},
            {hotpartImgUrl:"images/cgz6-part24.png",top:"295px",left:"202px",hotID:"hot-2",hotname:"点火枪"},
            {hotpartImgUrl:"images/cgz6-part23.png",top:"120px",left:"750px",hotID:"hot-2",hotname:"点火枪"},
            {hotpartImgUrl:"images/cgz6-part23.png",top:"165px",left:"750px",hotID:"hot-2",hotname:"点火枪"},
            {hotpartImgUrl:"images/cgz6-part23.png",top:"295px",left:"750px",hotID:"hot-2",hotname:"点火枪"},
            {hotpartImgUrl:"images/cgz6-part23.png",top:"340px",left:"750px",hotID:"hot-2",hotname:"点火枪"},
        ],
        hotpic:[
            {hotpartImgUrl:"images/cgz6-part25.png",top:"150px",left:"320px",hotID:"part25",hotname:"火",display:false,},
            {hotpartImgUrl:"images/cgz6-part25.png",top:"295px",left:"320px",hotID:"part25",hotname:"火",display:false,},
            {hotpartImgUrl:"images/cgz6-part26.png",top:"150px",left:"570px",hotID:"part26",hotname:"火",display:false,},
            {hotpartImgUrl:"images/cgz6-part26.png",top:"295px",left:"570px",hotID:"part26",hotname:"火",display:false,},
        ],
        btnCheckboxs:[
            {btnname:"第一次排污",btnCheckboxID:"checkbox1",display:false,checked:false},
            {btnname:"第二次排污",btnCheckboxID:"checkbox2",display:false,checked:false},
            {btnname:"检修",btnCheckboxID:"checkbox3",display:false,checked:false},
            {btnname:"冲洗压力表管",btnCheckboxID:"checkbox4",display:false,checked:false},
            {btnname:"冲洗水位计",btnCheckboxID:"checkbox5",display:false,checked:false},
            {btnname:"点火前检查膨胀指示器",btnCheckboxID:"checkbox6",display:false,checked:false},
            {btnname:"正常后检查膨胀指示器",btnCheckboxID:"checkbox7",display:false,checked:false},
            {btnname:"升压第一次检查膨胀指示器",btnCheckboxID:"checkbox8",display:false,checked:false},
            {btnname:"升压第二次检查膨胀指示器",btnCheckboxID:"checkbox9",display:false,checked:false},
            {btnname:"点火前检查汽包",btnCheckboxID:"checkbox10",display:false,checked:false},
            {btnname:"正常后检查汽包",btnCheckboxID:"checkbox11",display:false,checked:false},
            {btnname:"升压第一次检查汽包",btnCheckboxID:"checkbox12",display:false,checked:false},
            {btnname:"升压第二次检查汽包",btnCheckboxID:"checkbox13",display:false,checked:false},
            {btnname:"暖管工作",btnCheckboxID:"checkbox14",display:false,checked:false},

        ],
        inputTextarea:[
            {placeholder:"第一次记录",textareaID:"textarea1",inputText:"",textareashow:false},
            {placeholder:"第二次记录",textareaID:"textarea2",inputText:"",textareashow:false},
            {placeholder:"第三次记录",textareaID:"textarea3",inputText:"",textareashow:false},
            {placeholder:"第一次记录",textareaID:"textarea4",inputText:"",textareashow:false},
            {placeholder:"第二次记录",textareaID:"textarea5",inputText:"",textareashow:false},
            {placeholder:"第三次记录",textareaID:"textarea6",inputText:"",textareashow:false},
        ],
    }
};
var ktChange;var waters;var H20;var QiBao;var GuoRe;var QuXian;
var randoms = Math.random()+Math.random() * 1 + 1;
var dttrue=0;var dt=120;var randomcount;var H;var G;var P;var lutangPz;
var guminterval;var ZhengFa;var PaiYan;var sendBtnTimer;
function randomcout(min,max) {
    randomcount=parseInt(Math.random()*(max-min+1)+min);
}
new Vue({
    el: '#cgz6',
    data: {
        D:0,//主蒸汽流量
        Pz:0.1,//主蒸汽压力
        T:100,//主蒸汽温度
        P:-5,//炉膛负压
        Tpy:85,//排烟温度
        O2:0,//过剩氧量
        G:0,//给水流量
        H:0,//汽包水位
        QT:0,//上下壁温差
        Tu:0,//炉膛出口烟温
        Tgb:0,//过热器壁温
        Tgs:0,
        d:1017.5,
        a:2.5,
        b:10,
        gum:44,
        Ht:0,//焓值
        g:0,//排粉机总转速
        B:0,
        B1:0,
        B2:0,
        Q:0,
        Qd:4000,//燃料低位发热量
        D:0,//锅炉蒸发量
        v:0.1,
        n:63,
        Af1n:0,//送风机阀门开度
        Af2n:0,//引风机阀门开度
        h:100,
        option:cgz6Data.result.option,
        gasWaterComboImg:cgz6Data.result.gasWater,
        combustionRegulationComboImg:cgz6Data.result.combustionRegulationComboImg,
        blueBtns:cgz6Data.result.blueBtns,
        assemblys:cgz6Data.result.assemblys,
        hotComboImg:cgz6Data.result.hotComboImg,
        doubleNums:cgz6Data.result.doubleNums,
        hotpartImgs: cgz6Data.result.hotpartImgs,
        Combustionregulationsystem:cgz6Data.result.Combustionregulationsystem,
        hotpic:cgz6Data.result.hotpic,
        inputTextarea:cgz6Data.result.inputTextarea,
        btnCheckboxs:cgz6Data.result.btnCheckboxs,
        FuelAerobics:cgz6Data.result.FuelAerobics,
        feedwater:cgz6Data.result.feedwater,
        /*
        燃油器
         */
        ky:0,
        kt:0,
        youkai:false,
        openColor:false,
        closeColor:true,
        /*
        燃烧调节系统
         */
        kb:0,
        dialogmillFan1:false,//排粉机模态框
        dialogmillFan2:false,
        g1:0.8,//排粉机阀门开度
        paifens1:"64px",
        paifens2:"64px",
        Sonfens:"0px",
        Yinfens:"0px",
        g2:0.8,
        Paifen1:false,
        Paifen2:false,//排粉机模态内容显隐
        Af1:0,
        Songfen:false,
        systemTitle:"",
        Yinfen:false,
        Af2:0,
        /*
        锅炉汽水
         */

        AssemblyTitle:"",
        evenyoneTitle:"",
        dialogAssembly:false,//部件
        checkboxSelct:[],
        checkDisplay:false,
        evenyoneTitleshow:false,
        continuousBlowdown:false,//连续排污
        Blowdownshow:false,
        textareashow:false,
        assemblyConfirmNum:0,//判断是否点击确定（没有清除内容）
        displayairValve:true,
        displaytrap:true,
        btnDiv:false,//按钮部件模态框内容是否出现
        picDiv:false,
        airCondition:"",
        waterCondition:"",
        /*
        壁温/给水调节
         */
        Feedwaters:"64px",
        f:0.8,
        waterStop:0,
        displaytiaojie:false,
        /*
        点火枪
         */
        hotblack:true,
        hotred:false,
        dialogHotpart:false,//点火枪
        radioHotpart:false,
        inputtext:false,
        radioHotpartNum:0,
        echardouble:0,
        changeTime:false,
        displayFeedwater:false,
        Feedwatertitle:"",
        counts:0,//累计分数
        score:"",//扣分
        countsfun:"",
        displayWallTemperature:false,
        radioHotpartshow:false,//点火枪显示/隐藏
        Hotparttitle:"",//点火枪标题
        hotsRadiotitle:"",
        gasWaterShow:false,
        hotComboShow:false,
        combusShow:true,
        burngreens:true,
        watergreens:false,
        hotgreens:false,
        toufen:false,
        doublestop:0,
        /*
        汽包壁温调节
         */
        QAf:15,
        wallWidth:"40px",
        times:"",
        tiaojieTitle:"",
        displaywell:false,
        bbb:0,
    },
    mounted:function(){
        const that = this;
        this.$nextTick(function () {
            this.curveShow();

        });
        //监控屏幕的变化和div的宽度变化

    },
    methods: {
        scorefun:function () {
            var scoreset=setInterval(()=>{
                var scoreJs=this.score.split(",");
                var tongji;
                var counts=0;
                tongji=scoreJs.map(function(data){
                    return +data;
                });
                for(var i=0;i<tongji.length;i++){
                    counts=counts+tongji[i];
                }
                if(counts<=-100){
                    clearInterval(guminterval);
                    clearInterval(ZhengFa);
                    clearInterval(ktChange);
                    clearInterval(waters);
                    clearInterval(H20);
                    clearInterval(PaiYan);
                    clearInterval(lutangPz);
                    clearInterval(QiBao);
                    clearInterval(GuoRe);
                    clearInterval(sendBtnTimer);
                    this.$message({
                        message:'扣分已达100，请提交！',
                        type:'error',
                        duration:5000,
                        showClose:true,
                    });
                    clearInterval(scoreset);
                }
                console.log(counts);
            },1000);


        },
        /*
        燃油器
         */
        horOpenorClose:function (kai) {
            if(kai=='open'){
                this.openColor=true;
                this.closeColor=false;
                this.ky=1;
                this.youkai=true;
            }
            if(kai=='close'){
                this.openColor=false;
                this.closeColor=true;
                this.youkai=false;
                this.ky=0;
                clearInterval(ktChange);
            }
        },
        /*
        切换系统
         */
        changeSys:function(sysName){
                if(sysName == 'water'){
                    this.gasWaterShow=true;
                    this.hotComboShow=false;
                    this.combusShow=false;
                    //按纽
                    this.burngreens=false;
                    this.watergreens=true;
                    this.hotgreens=false;
                }else if(sysName == 'burn'){
                    this.gasWaterShow=false;
                    this.hotComboShow=false;
                    this.combusShow=true;
                    //按纽
                    this.burngreens=true;
                    this.watergreens=false;
                    this.hotgreens=false;
                }else{
                    this.gasWaterShow=false;
                    this.hotComboShow=true;
                    this.combusShow=false;
                    //按纽
                    this.burngreens=false;
                    this.watergreens=false;
                    this.hotgreens=true;
                }
        },
        /**
         * 速度的方法
         */
        doubleIndex:function(doubleImg){
            this.doubleNumID=doubleImg.doubleNumID;
            this.doublestop+=1;
            if(this.doubleNumID=="double1"&&this.doublestop==1){
                cgz6Data.result.option.xAxis[0].max=40;
                cgz6Data.result.option.xAxis[0].splitNumber=5;
                for(var i=0;i<this.option.series[2].data.length;i++){
                    this.option.series[2].data[i][0]=this.option.series[2].data[i][0]/6;
                    this.option.series[3].data[i][0]=this.option.series[3].data[i][0]/6;
                }
                this.echardouble=1;
                this.doubleNums[1].display=false;
                this.doubleNums[2].display=false;
                this.$message({
                    message:"启动6倍速度",
                    type:"warning",
                    duration:5000,
                    showClose:true,
                })
            }
            if(this.doubleNumID=="double2"&&this.doublestop==1){
                cgz6Data.result.option.xAxis[0].max=30;
                cgz6Data.result.option.xAxis[0].splitNumber=6;
                for(var i=0;i<this.option.series[2].data.length;i++){
                    this.option.series[2].data[i][0]=this.option.series[2].data[i][0]/8;
                    this.option.series[3].data[i][0]=this.option.series[3].data[i][0]/8;
                }
                this.echardouble=2;
                this.doubleNums[0].display=false;
                this.doubleNums[2].display=false;
                this.$message({
                    message:"启动8倍速度",
                    type:"warning",
                    duration:5000,
                    showClose:true,
                })


            }
            if(this.doubleNumID=="double3"&&this.doublestop==1){
                cgz6Data.result.option.xAxis[0].max=24;
                cgz6Data.result.option.xAxis[0].splitNumber=6;
                for(var i=0;i<this.option.series[2].data.length;i++){
                    this.option.series[2].data[i][0]=this.option.series[2].data[i][0]/10;
                    this.option.series[3].data[i][0]=this.option.series[3].data[i][0]/10;
                }
                this.echardouble=3;
                this.doubleNums[1].display=false;
                this.doubleNums[0].display=false;
                this.$message({
                    message:"启动10倍速度",
                    type:"warning",
                    duration:5000,
                    showClose:true,
                })
            }
            this.curveShow();
        },
        /**
         * 折线图的方法
         */
        curveShow: function () {
            let myChart1= document.getElementById('curve');
            this.curveWidth=600+"px";
            this.curveHeight=300+"px";
            myChart1.style.width = this.curveWidth;
            myChart1.style.height =this.curveHeight;

            //折图的数据加载
            let myChart = echarts.init(myChart1);
            myChart.setOption(cgz6Data.result.option);
            /*
            var ClickOnce=0;
            myChart.on('click', function (params) {

                for(var i=0;i<cgz6Data.result.option.series.length;i++){
                    if (params.seriesIndex === i) {
                        //seriesIndex第一个data
                        if(i==0){
                            for(var j=0;j< cgz6Data.result.option.series[i].data.length;j++)
                            if(params.dataIndex===j) {
                                if(j==0&&ClickOnce==0){
                                    cgz6Data.result.option.series[0].data.push([20,70]);
                                    cgz6Data.result.option.series[1].data.push([30,0.3]);
                                    ClickOnce=+1;
                                }
                                if(j==1&&ClickOnce==1){
                                    cgz6Data.result.option.series[0].data.push([40,90]);
                                    ClickOnce+=1;
                                }

                            }
                        }
                        //seriesIndex第二个data
                        if(i==1){
                            for(var j=0;j< cgz6Data.result.option.series[i].data.length;j++)
                                if(params.dataIndex===j) {
                                    if(j==1)
                                        cgz6Data.result.option.series[1].data.push([40,0.75]);
                                }
                        };
                    };
                }
                //获取并更新图表
                            myChart.setOption(
                                cgz6Data.result.option)

                        console.log(cgz6Data.result.option.series[0].data)
                        // 点击到了 index 为 5 的 series 的 markPoint 上。

            });*/

        },
        /*
        燃料同操器
         */
        FuelAerobicfun:function (Fuel) {
            this.FuelAerobicID=Fuel.FuelAerobicID;
            if(this.FuelAerobicID=="part18"){
                this.gum=Math.floor((this.gum+4.4)*10)/10;
                if(this.Tu>=350){
                    this.toufen=true;
                }
            }
            if(this.FuelAerobicID=="part19"){
                this.gum=Math.floor((this.gum-4.4)*10)/10;
                if(this.gum<0)
                    this.gum=0;
            }
        },
        /**
         * 排粉机的方法
         */
        portalIndex:function(item){
            this.dialogmillFan1=true;
          this.systemID=item.systemID;
          switch(this.systemID){
              case "part0":
                  this.systemTitle="#1排粉机";
                  this.Paifen1=true;
                  this.Paifen2=false;
                  this.Yinfen=false;
                  this.Songfen=false;
                  break;
              case "part1":
                  this.systemTitle="#2排粉机";
                  this.Paifen2=true;
                  this.Paifen1=false;
                  this.Yinfen=false;
                  this.Songfen=false;
                  break;
              case "part15":
                  this.systemTitle="送风阀门";
                  this.Paifen1=false;
                  this.Paifen2=false;
                  this.Songfen=true;
                  this.Yinfen=false;
                  break;
              case "part16":
                  this.systemTitle="引风阀门";
                  this.Paifen1=false;
                  this.Paifen2=false;
                  this.Songfen=false;
                  this.Yinfen=true;
                  break;

          }
        },
        /*
        数据计算
         */
        Numcount:function () {
            if(this.T<=30)
                this.Ht=5000;
            if(this.T<=60&&this.T>30)
                this.Ht=4500;
            if(this.T<=120&&this.T>60)
                this.Ht=3500;
            if(this.T>120)
                this.Ht=2000;
            if(this.ky==1){
                this.B2=this.ky*10;
            }else{
                this.B2=0;
            }
            this.B1=this.g1*44+this.g2*44;
            this.B=this.B1+this.B2;
            this.Q=this.B*this.Qd;
            randomcout(1,1);
            /*
            锅炉蒸发量
             */
            var D=Math.floor((this.Q/this.Ht)*100)/100;
            ZhengFa=setInterval(()=>{
                if(this.D<=D){
                    this.D=Math.floor((this.D+randoms)*100)/100;
                }else{
                    this.D=D*randomcount;
                }
            },1000);
            /*
            炉膛出口烟温
             */
                ktChange=setInterval(()=>{
                    this.kt=Math.floor((this.kt+0.1)*100)/100;
                    this.kb=Math.floor((this.kb+0.1)*100)/100;
                    var Tus=Math.floor((this.ky*10*this.kt+this.kb*this.B1*5+10)*100)/100;
                    var chao=0;
                    if(Tus>=this.B*20){
                        Tus=this.B*20;
                        if(this.Tu<=Tus){
                            this.Tu=Math.floor((this.Tu+10*randoms)*100)/100;
                        }else {
                            this.Tu=Math.floor((Tus*randomcount)*100)/100;
                        }
                    }else if(Tus<this.B*20){
                        if(this.Tu<=Tus){
                            this.Tu=Math.floor((this.Tu+10*randoms)*100)/100;
                        }else {
                            this.Tu=Math.floor((Tus*randomcount)*100)/100;
                        }
                    }
                },6000);
                if(this.Tu>=350&&this.toufen==false){
                    this.score+="-5,";
                }
            /*
            给水流量
             */
            G=210*this.f;
            waters=setInterval(()=>{
                if(this.G<=G){
                    this.G=Math.floor((this.G+randoms)*100)/100;
                }else{
                    this.G=Math.floor(G*randomcount*100)/100;
                }
            },700);
            /*
            水位
             */
            H=this.a*(G-D)- this.b*this.Pz/9.8;
            H20=setInterval(()=>{
                if(this.H<=H){
                    this.H=Math.floor((this.H+randoms)*100)/100;
                }else{
                    this.H=Math.floor(H*randomcount*100)/100;
                }
                if(this.H>50||this.H<-50){
                    this.waterStop+=1;
                }
                if(this.waterStop==1){
                    this.score+="-5,";
                    this.$message({
                        message:'操作错误！请控制水位在-50mm-50mm',
                        type:'error',
                        duration:5000,
                        showClose:true,
                    })
                }
            },1000);
            /*
            排烟温度
             */
            PaiYan=setInterval(()=>{
                if(this.B==0&&G==0){
                    if(this.Tpy>=35){
                        this.Tpy=Math.floor((this.Tpy-randoms)*100)/100;
                    }else if(this.Tpy<=35){
                        this.Tpy=Math.floor((this.Tpy+randoms)*100)/100;
                    }else {
                        this.Tpy=Math.floor(this.Tpy*randomcount*100)/100
                    }
                }
                if(this.B>0&&G==0){
                    if(this.Tpy>=135){
                        this.Tpy=Math.floor((this.Tpy-randoms)*100)/100;
                    }else if(this.Tpy<=135){
                        this.Tpy=Math.floor((this.Tpy+randoms)*100)/100;
                    }else {
                        this.Tpy=Math.floor((this.Tpy+10*randomcount)*100)/100;
                    }
                }
                if(this.B>0&&G>0){
                    this.Tgs=80+0.329*G;
                    if(this.Tpy<=this.Tgs){
                        this.Tpy=Math.floor((this.Tpy+randoms)*100)/100;
                    }else if(this.Tpy>=this.Tgs){
                        this.Tpy=Math.floor((this.Tpy-randoms)*100)/100;
                    }else {
                        this.Tpy=Math.floor((this.Tpy+20*randomcount)*100)/100
                    }
                }
            },1000);
            /*
            炉膛压力
             */
            P=this.h*(this.Af1/48-this.Af2/63+this.B/44);
            lutangPz=setInterval(()=>{
                if(this.P<=P){
                    this.P=Math.floor((this.P+randoms)*100)/100;
                }else if(this.P>P){
                    this.P=Math.floor((this.P-randoms)*100)/100;
                }else {
                    this.P=Math.floor(this.P*randomcount*100)/100;
                }
            },1000);
            /*
            汽包上下壁温
             */
            QiBao=setInterval(()=>{
                    var QT=10*D/this.QAf;
                    if(this.QT<=QT){
                        this.QT=Math.floor((this.QT+5*randoms)*100)/100;
                    }else {
                        this.QT = Math.floor(QT * randomcount * 100) / 100;
                    }
            },1000);
            /*
            过热器壁温
             */
            GuoRe=setInterval(()=>{
                var Tgb=25+800*this.Q/(D*this.Ht)+2*this.Af1;
                if(this.Tgb<=Tgb){
                    this.Tgb=Math.floor((this.Tgb+20*randoms)*100)/100;
                }else{
                    this.Tgb=Math.floor((Tgb*randomcount)*100)/100;
                }
            },4000);
            //燃料同操器煤粉变化
            this.g=this.g1+this.g2;
            guminterval=setInterval(()=>{
                if(this.gum<=0){
                    this.score="-100,";
                    this.$message({
                       message:'燃料不足，引起MFT动作，本题不得分，请提交！',
                        type:'error',
                        duration:5000,
                        showClose:true,
                    });
                    this.gum=0;
                    clearInterval(guminterval);
                    clearInterval(ZhengFa);
                    clearInterval(ktChange);
                    clearInterval(waters);
                    clearInterval(H20);
                    clearInterval(PaiYan);
                    clearInterval(lutangPz);
                    clearInterval(QiBao);
                    clearInterval(GuoRe);
                    return false;
                }
                if(dttrue>12){
                    clearInterval(guminterval);
                    return false;
                }
                this.gum=Math.floor((this.gum-this.g * 0.44)*100)/100;
            },10000);
        },
        /*
        锅炉汽水系统部件事件(
         */
        assemblyIndex:function (assemblySelct) {
            this.dialogAssembly=true;
            this.blueBtnID=assemblySelct.blueBtnID;
            this.assemblyID=assemblySelct.assemblyID;
            this.feedwaterID=assemblySelct.feedwaterID;
            //蓝色按钮+汽包
            //记录
            for(var k=0;k<this.inputTextarea.length;k++){
                switch (this.blueBtnID){
                    case "btn5":
                        this.inputtext=true;
                        if(k<3)
                            this.inputTextarea[k].textareashow=true;
                        else this.inputTextarea[k].textareashow=false;
                        break;
                    case "part12":
                        this.inputtext=true;
                        if(k>=3)
                            this.inputTextarea[k].textareashow=true;
                        else this.inputTextarea[k].textareashow=false;
                        break;
                }
            }
            if(this.blueBtnID)
            for(var i=0;i<this.btnCheckboxs.length;i++){
                this.displayFeedwater=false;
                this.displayWallTemperature=false;
                this.btnDiv=true;
                this.picDiv=false;
                this.inputtext=false;
                this.Blowdownshow=false;
                this.evenyoneTitleshow=false;
                switch(this.blueBtnID){
                    //id为btn1时模态框标题、多选框出现的变化
                    case "btn1":
                        this.AssemblyTitle="排污处理";
                        if(i<=1)
                            this.btnCheckboxs[i].display=true;
                        else
                            this.btnCheckboxs[i].display=false;
                        break;
                    case "btn2":
                        this.AssemblyTitle="冲洗水位计";

                        if(i==4)
                            this.btnCheckboxs[i].display=true;
                        else
                            this.btnCheckboxs[i].display=false;
                        break;
                    case "btn3":
                        this.AssemblyTitle="热紧螺栓";

                        if(i>1&&i<4)
                            this.btnCheckboxs[i].display=true;
                        else
                            this.btnCheckboxs[i].display=false;
                        break;
                    case "btn4":
                        this.AssemblyTitle="连排";
                        this.evenyoneTitle="连排开关状态："
                        this.btnCheckboxs[i].display=false;
                        this.evenyoneTitleshow=true;
                        this.Blowdownshow=true;
                        break;
                    case "btn5":
                        this.inputtext=true;
                        this.AssemblyTitle="膨胀指示";
                        if(i>4&&i<9){
                            this.btnCheckboxs[i].display=true;
                            this.evenyoneTitleshow=true;
                            this.evenyoneTitle="记录：";
                        }
                        else
                            this.btnCheckboxs[i].display=false;
                        break;
                    case "btn6":
                        this.AssemblyTitle="过热器出囗联箱空气阀";
                        if(i==13)
                            this.btnCheckboxs[i].display=true;
                        else
                            this.btnCheckboxs[i].display=false;
                        break;
                    case "part12":
                        this.inputtext=true;
                        this.AssemblyTitle="汽包";
                        if(i>=9&&i<13){
                            this.btnCheckboxs[i].display=true;
                            this.evenyoneTitleshow=true;
                            this.evenyoneTitle="记录：";
                        }
                        else
                            this.btnCheckboxs[i].display=false;
                        break;
                    case "btn7":
                        this.tiaojieTitle="汽包壁温";
                        this.displaytiaojie=true;
                        this.dialogAssembly=false;
                        this.displaywell=true;
                        this.displayFeedwater=false;
                        break;
                }
            }
            //给水操作
            if(this.feedwaterID=="part17"){
                this.tiaojieTitle="给水阀";
                this.displayFeedwater=true;
                this.displaytiaojie=true;
                this.dialogAssembly=false;
                this.displaywell=false;
            };
            //图片（汽包除外）
            if(this.assemblyID)
            for(var j=0;j<this.assemblys.length;j++){
                this.displayFeedwater=false;
                this.btnDiv=false;
                this.picDiv=true;
                this.airCondition="空气阀状态:";
                this.waterCondition="疏水阀状态:";
                switch (this.assemblyID){
                    case "part6":
                        this.AssemblyTitle="侧包墙过热器";
                        if(j==0)
                            this.assemblys[j].display=true;
                        else
                            this.assemblys[j].display=false;
                        break;
                    case"part7":
                        this.AssemblyTitle="侧包墙过热器";
                        if(j==1)
                            this.assemblys[j].display=true;
                        else
                            this.assemblys[j].display=false;
                        break;
                    case"part8":
                        this.AssemblyTitle="低温过热器";
                        if(j==2)
                            this.assemblys[j].display=true;
                        else
                            this.assemblys[j].display=false;
                        break;
                    case"part9":
                        this.AssemblyTitle="高温过热器热段";
                        if(j==3)
                            this.assemblys[j].display=true;
                        else
                            this.assemblys[j].display=false;
                        break;
                    case"part10":
                        this.AssemblyTitle="高温过热器冷段";
                        if(j==4)
                            this.assemblys[j].display=true;
                        else
                            this.assemblys[j].display=false;
                        break;
                    case"part11":
                        this.AssemblyTitle="后包墙过热器";
                        if(j==6)
                            this.assemblys[j].display=true;
                        else
                            this.assemblys[j].display=false;
                        break;
                    case"part13":
                        this.AssemblyTitle="高温过热器冷段";
                        if(j==5)
                            this.assemblys[j].display=true;
                        else
                            this.assemblys[j].display=false;
                        break;
                }
            };


        },
        /*
        锅炉系统确定
         */
        assemblyConfirms:function () {
            this.dialogAssembly=false;
        },
        /*
        点火枪模态框
         */
        dialogHotparts:function (hots) {
            this.dialogHotpart=true;
            this.hotID=hots.hotID;
            if(this.hotID=="hot-2"){
                this.Oilgunshow=false;
                this.radioHotpartshow=true;
                this.Hotparttitle="点火枪操作";
                this.hotsRadiotitle="点火枪状态："
            }
        },
        /*
        点火枪确定按钮
         */
        hotpartfun:function () {
            this.scorefun();
            this.dialogHotpart=false;
            var randomNum;
            var echarXais=1;
            //随机数公共函数
            function randomfun(min,max) {
                randomNum=Math.floor((Math.random()*(max-min+1)+min)*100)/100;
            }
            if(this.echardouble==1)
                echarXais=6;
            if(this.echardouble==2)
                echarXais=8;
            if(this.echardouble==3)
                echarXais=10;
            //点火前检查
                if(this.radioHotpart==true&&this.youkai==true){
                    if(this.btnCheckboxs[5].checked==false){
                        this.score+="-5,";
                    }else {
                        this.score+="0,";
                    }
                    if(this.btnCheckboxs[9].checked==false){
                        this.score+="-5,";
                    }else {
                        this.score+="0,";
                    }
                    if(this.inputTextarea[0].inputText==""||this.inputTextarea[3].inputText==""){
                        this.score+="-5,";
                    }else{
                        this.score+="0,";
                    }
                    if(this.inputTextarea[0].inputText==""||this.inputTextarea[3].inputText==""
                    ||this.btnCheckboxs[5].checked==false||this.btnCheckboxs[9].checked==false){
                        this.$message({
                            message:'操作错误，点火前请先进行相关检查和记录！',
                            type:'error',
                            duration:5000,
                            showClose:true,
                        })
                    }
                }
            //点火
            if(this.youkai==false&&this.radioHotpart==true){
                this.score+="-5,";
                this.$message({
                    message:'操作错误，请开启燃油器！',
                    type:'error',
                    duration:5000,
                    showClose:true,
                })
            }else{
                this.score+="0,";
            }
            if(this.radioHotpart==true&&this.radioHotpartNum==0
                &&this.youkai==true){
                if(this.gum<=0) {
                    this.score="-100,";
                    this.$message({
                        message: '燃料不足，引起MFT动作，本题不得分，请提交！',
                        type: 'error',
                        duration:5000,
                        showClose:true,
                    });
                }
                for(var i=0;i<this.hotpic.length;i++){
                    this.hotpic[i].display=true;
                }
                this.hotblack=false;
                this.hotred=true;
                this.Numcount();
                this.radioHotpartNum=1;
                dttrue=0;
                this.changeTime=true;
                if(dttrue==0){
                    randomfun(100,120);
                    cgz6Data.result.option.series[0].data.push([parseInt(13/echarXais),randomNum]);
                    cgz6Data.result.option.series[1].data.push({value:[parseInt(13/echarXais),0.2],symbolSize: 6});
                    QuXian=setInterval(()=>{
                        if(this.T<randomNum){
                            this.T=Math.floor((this.T+randoms)*100)/100;
                        }else{
                            this.T=Math.floor((randomNum*randomcount)*100)/100;
                        }
                    },1000);
                    this.Pz=0.2;
                    dttrue=1;
                }
                this.curveShow();
                sendBtnTimer = setInterval(()=>{
                    dt--;
                    if(dttrue>12||this.gum==0){
                        //正常和升压检查
                        for(var i=0;i<this.btnCheckboxs.length;i++){
                            if(i==6||i==10){
                                if(this.btnCheckboxs[i].checked!=true){
                                    this.score+="-5,";
                                    break;
                                }else {
                                    this.score+="0,";
                                }
                            }
                            if(i==7||i==11){
                                if(this.btnCheckboxs[i].checked!=true){
                                    this.score+="-5,";
                                    break;
                                }else {
                                    this.score+="0,";
                                }
                            }
                            if(i==8||i==12){
                                if(this.btnCheckboxs[i].checked!=true){
                                    this.score+="-5,";
                                    break;
                                }else {
                                    this.score+="0,";
                                }
                            }
                        }
                        //升压记录
                        if(this.inputTextarea[1].inputText!=""&&this.inputTextarea[4].inputText!=""){
                            this.score+="0,";
                        }else{
                            this.score+="-5,";
                        }
                        if(this.inputTextarea[2].inputText!=""&&this.inputTextarea[5].inputText!=""){
                            this.score+="0,";
                        }else{
                            this.score+="-5,";
                        }
                        //控制炉膛出口烟温和过热器壁温
                        if(this.g1==0.8&&this.g2==0.8){
                            this.score+="-5,";
                            this.score+="-5,";
                        }
                        clearInterval(sendBtnTimer);
                        this.changeTime=false;
                        return false;
                    }
                    this.times=dt+'秒';
                    if(dttrue==1&&dt==0){
                        for(var i=0;i<this.assemblys.length;i++) {
                            if (this.assemblys[i].airValve != false) {
                                this.score+="-5,";
                                break;
                            }else{
                                this.score+="0,";
                            }
                            if (this.assemblys[i].trap != true) {
                                this.score+="-5,";
                                break;
                            }
                        }
                        for(var i=0;i<this.btnCheckboxs.length;i++){
                            if(i!=5&&i!=9){
                                if(this.btnCheckboxs[i].checked==true){
                                    this.score+="-5,";
                                    break;
                                }
                            }
                        }
                        randomfun(120,125);
                        cgz6Data.result.option.series[0].data.push([parseInt(30/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push({value:[parseInt(30/echarXais),0.26],symbolSize: 6});
                        dttrue=2;
                        dt=120;
                        this.curveShow();
                        setInterval(QuXian);
                        this.Pz=0.26;

                    }
                    if(dttrue==2&&dt==0){
                        for(var i=0;i<this.btnCheckboxs.length;i++){
                            if(i==0||i==13){
                                if(this.btnCheckboxs[i].checked==false){
                                    this.score+="-5,";
                                }else{
                                    this.score+="0,";
                                }
                            }
                            if(i>1&&i<5){
                                if(this.btnCheckboxs[i].checked==true){
                                    this.score+="-5,";
                                    break;
                                }
                            }
                        }
                        for(var i=0;i<this.assemblys.length;i++) {
                            if (this.assemblys[i].trap != true) {
                                this.score+="-5,";
                                break;
                            }
                        }
                        randomfun(125,133);
                        this.curveShow();
                        setInterval(QuXian);
                        cgz6Data.result.option.series[0].data.push([parseInt(40/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push([parseInt(40/echarXais),0.3]);
                        dttrue=3;
                        dt=4;
                        this.Pz=0.3;
                    }
                    if(dttrue==3&&dt==0){
                        randomfun(133,150);
                        this.curveShow();
                        setInterval(QuXian);
                        cgz6Data.result.option.series[0].data.push([parseInt(47/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push({value:[parseInt(47/echarXais),0.35],symbolSize: 6});
                        dt=120;
                        dttrue=4;
                        gasqiya=0.35;
                        this.Pz=0.35;
                    }
                    if(dttrue==4&&dt==0){
                        for(var i=0;i<this.btnCheckboxs.length;i++){
                            if(i>1&&i<4){
                                if(this.btnCheckboxs[i].checked==false){
                                    this.score+="-5,";
                                    break;
                                }else{
                                    this.score+="0,";
                                }
                            }
                        }
                        if(this.btnCheckboxs[4].checked==true){
                            this.score+="-5,";
                        }
                        for(var i=0;i<this.assemblys.length;i++) {
                            if (this.assemblys[i].trap != true) {
                                this.score+="-5,";
                                break;
                            }
                        }
                        randomfun(150,168);
                        this.curveShow();
                        setInterval(QuXian);
                        cgz6Data.result.option.series[0].data.push([parseInt(55/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push({value:[parseInt(55/echarXais),0.5],symbolSize: 6});
                        dt=120;
                        dttrue=5;
                        this.Pz=0.5;
                    }
                    if(dttrue==5&&dt==0){
                        for(var i=0;i<this.assemblys.length;i++) {
                            if (this.assemblys[i].trap == true||this.btnCheckboxs[4].checked!=true) {
                                this.score+="-5,";
                                break;
                            }else{
                                this.score+="0,";
                            }
                        }
                        if(this.continuousBlowdown==true||this.btnCheckboxs[1].checked==true){
                            this.score+="-5,";
                        }
                        randomfun(168,183);
                        this.curveShow();
                        setInterval(QuXian);
                        cgz6Data.result.option.series[0].data.push([parseInt(70/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push({value:[parseInt(70/echarXais),1],symbolSize: 6});
                        dt=4;
                        dttrue=6;
                        this.Pz=1;
                    }
                    if(dttrue==6&&dt==0){
                        randomfun(183,235);
                        this.curveShow();
                        setInterval(QuXian);
                        cgz6Data.result.option.series[0].data.push([parseInt(120/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push([parseInt(120/echarXais),3]);
                        dt=4;
                        dttrue=7;
                        this.Pz=3;
                    }
                    if(dttrue==7&&dt==0){
                        randomfun(235,258);
                        cgz6Data.result.option.series[0].data.push([parseInt(195/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push([parseInt(195/echarXais),4.5]);
                        dt=4;
                        dttrue=8;
                        this.curveShow();
                        setInterval(QuXian);
                        this.Pz=4.5;
                    }
                    if(dttrue==8&&dt==0){
                        randomfun(258,270);
                        
                        cgz6Data.result.option.series[0].data.push([parseInt(200/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push({value:[parseInt(200/echarXais),5],symbolSize: 6});
                        dt=4;
                        dttrue=9;
                        this.curveShow();
                        setInterval(QuXian);
                        this.Pz=5;
                    }
                    if(dttrue==9&&dt==0){
                        if(this.btnCheckboxs[1].checked!=true){
                            this.score+="-5,";
                        }else{
                            this.score+="0,";
                        }
                        randomfun(270,285);
                        this.curveShow();
                        setInterval(QuXian);
                        cgz6Data.result.option.series[0].data.push([parseInt(215/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push([parseInt(215/echarXais),7]);
                        dt=4;
                        dttrue=10;
                        this.Pz=7;
                    }
                    if(dttrue==10&&dt==0){
                        randomfun(285,303);

                        cgz6Data.result.option.series[0].data.push([parseInt(222/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push([parseInt(222/echarXais),8.3]);
                        dt=4;
                        dttrue=11;
                        this.curveShow();
                        setInterval(QuXian);
                        this.Pz=8.3;
                    }
                    if(dttrue==11&&dt==0){
                        randomfun(303,315);
                        this.curveShow();
                        setInterval(QuXian);
                        cgz6Data.result.option.series[0].data.push([parseInt(240/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push([parseInt(240/echarXais),9]);
                        dt=4;
                        dttrue+=1;
                        this.Pz=9;
                    }
                    if(dttrue==12&&dt==0){
                        randomfun(303,315);
                        setInterval(QuXian);
                        cgz6Data.result.option.series[0].data.push([parseInt(280/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push([parseInt(280/echarXais),9]);
                        dt=4;
                        dttrue+=1;
                        this.curveShow();
                        this.Pz=9;
                    }
                },1000);
            };

        },
        /*
        计分
        */
        countsFF:function () {
        var assemblytrue=false;
        var assemblytrap=false;
        var Checkboxtrue=false;
        var inputtrue=false;
        for(var i=0;i<this.assemblys.length;i++){
            if(this.assemblys[i].airValve!=true){
                assemblytrue=true;
            }
            if(this.assemblys[i].trap!=true){
                assemblytrap=true;
            }
        }
        for(var i=0;i<this.btnCheckboxs.length;i++){
            if(this.btnCheckboxs[i].checked!=false){
                Checkboxtrue=true;
            }
        }
        for(var i=0;i<this.inputTextarea.length;i++){
            if(this.inputTextarea[i].inputText!=""){
                inputtrue=true;
            }
        }
        /*
        操作或交白卷
         */
        if(this.youkai!=false||this.radioHotpart!=false||this.QAf!=15
        ||this.f!=0.8||this.Af1!=0||this.Af2!=0||assemblytrue==true
        ||Checkboxtrue==true||inputtrue==true||assemblytrap==true){
            if(this.youkai==false){
                this.score+="-5,";
            }
            if(this.radioHotpart==false){
                this.score+="-5,";
            }
            if(this.f==0.8){
                this.score+="-5,";
            }
            if(this.Af1==0){
                this.score+="-5,";
            }
            if(this.Af2==0){
                this.score+="-5,";
            }
            if(assemblytrue==false){
                this.score+="-5,";
            }
            for(var i=0;i<this.btnCheckboxs.length;i++){
                if(this.btnCheckboxs[i].checked!=false){
                    this.score+="-5,";
                }
            }
            if(inputtrue==false){
                this.score+="-5,";
                this.score+="-5,";
                this.score+="-5,";
            }
            if(assemblytrap==false){
                this.score+="-5,";
            }

        }else{
            this.score+="-100,";
        }
        },
        /*
        阀门调节
         */
        changNumber:function (val) {
            /*
            #1排粉机
             */
            if(val==1){
                this.g1=Math.floor((this.g1-0.05)*100)/100;
                this.paifens1=this.g1*80+"px";
                if(this.g1<0){
                    this.g1=0;
                    this.paifens1=0+"px";
                }
            }
            if(val==2){
                this.g1=Math.floor((this.g1+0.05)*100)/100;
                this.paifens1=this.g1*80+"px";
                if(this.g1>1){
                    this.g1=1;
                    this.paifens1=80+"px";
                }
            }
            if(val==1||val==2){
                if(this.g1<=0){
                    this.Combustionregulationsystem[0].systemUrl="images/cgz6-part-red0.png";
                }else if(this.g1>0){
                    this.Combustionregulationsystem[0].systemUrl="images/cgz6-part0.png";

                }
                if(this.radioHotpart==true){
                    this.P=Math.floor(this.h*(this.Af1/48-this.Af2/63+this.B/44)*100)/100;
                    clearInterval(ktChange);
                    clearInterval(lutangPz);
                    this.B1=this.g1*44+this.g2*44;
                    this.Tu=Math.floor((this.ky*10*this.kt+this.kb*this.B1*5+10)*100)/100;
                    this.Tgb=Math.floor((this.Tu+15)*100)/100;
                    setInterval(()=>{
                        this.P=this.P*randomcount;
                        this.Tu=this.Tu*randomcount;
                        this.Tgb=this.Tgb*randomcount;
                    },1000);
                }
            }
            /*
            #2排粉机
             */
            if(val==3){
                this.g2=Math.floor((this.g2-0.05)*100)/100;
                this.paifens2=this.g2*80+"px";
                if(this.g2<0){
                    //this.temperatureReducing="images/SGR1_part-red6.png";
                    this.g2=0;
                    this.paifens2=0+"px";
                }
            }
            if(val==4){
                this.g2=Math.floor((this.g2+0.05)*100)/100;
                this.paifens2=this.g2*80+"px";
                if(this.g2>1){
                    this.g2=1;
                    this.paifens2=80+"px";
                }
            }
            if(val==3||val==4){
                if(this.g2<=0){
                    this.Combustionregulationsystem[1].systemUrl="images/cgz6-part-red1.png";
                }else if(this.g2>0){
                    this.Combustionregulationsystem[1].systemUrl="images/cgz6-part1.png";

                }
                if(this.radioHotpart==true){
                    clearInterval(ktChange);
                    this.B1=this.g1*44+this.g2*44;
                    this.Tu=Math.floor((this.ky*10*this.kt+this.kb*this.B1*5+10)*100)/100;
                    this.P=Math.floor(this.h*(this.Af1/48-this.Af2/63+this.B/44)*100)/100;
                }

            }
            /*
            送风机
             */
            if(val==5){
                this.Af1=Math.floor((this.Af1-0.05)*100)/100;
                this.Sonfens=this.Af1*80+"px";
                if(this.Af1<=0){
                    this.Af1=0;
                    this.Sonfens=0+"px";
                }
            }
            if(val==6){
                this.Af1=Math.floor((this.Af1+0.05)*100)/100;
                this.Sonfens=this.Af1*80+"px";
                if(this.Af1>=1){
                    this.Af1=1;
                    this.Sonfens=80+"px";
                }
            }
            if(val==5||val==6){
                /*
           氧量
            */
                this.O2=Math.floor((20*((this.Af1/48)*(44/this.B)))*100)/100;
                if(this.O2<=0||this.B==0){
                    this.O2=0;
                }
                if(this.Af1<=0){
                    this.Combustionregulationsystem[2].systemUrl="images/cgz6-part15.png";
                }else if(this.Af1>0){
                    this.Combustionregulationsystem[2].systemUrl="images/cgz6-part-green15.png";

                }
                if(this.radioHotpart==true){
                    this.P=Math.floor(this.h*(this.Af1/48-this.Af2/63+this.B/44)*100)/100;
                }

            }
            /*
            引风机
             */
            if(val==7){
                this.Af2=Math.floor((this.Af2-0.05)*100)/100;
                this.Yinfens=this.Af2*80+"px";
                if(this.Af2<0){
                    this.Af2=0;
                    this.Yinfens=0+"px";
                }
            }
            if(val==8){
                this.Af2=Math.floor((this.Af2+0.05)*100)/100;
                this.Yinfens=this.Af2*80+"px";
                if(this.Af2>1){
                    this.Af2=1;
                    this.Yinfens=80+"px";
                }
            }
            if(val==7||val==8){
                this.P=Math.floor((this.h*(this.Af1/48-this.Af2/63+this.B/44))*100)/100;
                if(this.Af2<=0){
                    this.Combustionregulationsystem[3].systemUrl="images/cgz6-part16.png";
                }else if(this.Af2>0){
                    this.Combustionregulationsystem[3].systemUrl="images/cgz6-part-green16.png";

                }

            }
            /*
            给水
             */
            if(val==9){
                this.f=Math.floor((this.f-0.05)*100)/100;
                this.Feedwaters=this.f*80+"px";
                if(this.f<0){
                    this.f=0;
                    this.Feedwaters=0+"px";
                }
            }
            if(val==10){
                this.f=Math.floor((this.f+0.05)*100)/100;
                this.Feedwaters=this.f*80+"px";
                if(this.f>1){
                    this.f=1;
                    this.Feedwaters=80+"px";
                }
            }
            if(val==9||val==10){
                if(this.FeedwaterNumbe<=0){
                    this.feedwater.feedwaterUrl="images/cgz6-part-red17.png";
                }else if(this.FeedwaterNumbe>0){
                    this.feedwater.feedwaterUrl="images/cgz6-part17.png";

                }
                if(this.radioHotpart==true){
                    this.$message({
                        message:'水位将达到：'+H+'mm',
                        type:'info',
                        duration:5000,
                        showClose:true,
                    });
                    this.D=Math.floor(this.Q/this.Ht*100)/100;
                    this.G=Math.floor((210*this.f)*100)/100;
                    H=Math.floor((this.a*(this.G-this.D)- this.b*this.Pz/9.8)*100)/100;
                }
            }
            /*
            汽包壁温
             */
            if(val==11){
                this.QAf=Math.floor((this.QAf-1)*100)/100;
                this.wallWidth=(this.QAf-10)*8+"px";
                if(this.QAf<10){
                    this.QAf=10;
                    this.wallWidth=0+"px";
                }
            }
            if(val==12){
                this.QAf=Math.floor((this.QAf+1)*100)/100;
                this.wallWidth=(this.QAf-10)*8+"px";
                if(this.QAf>20){
                    this.QAf=20;
                    this.wallWidth=80+"px";
                }
            }
            if(val==11||val==12){
                if(this.radioHotpart==true){
                    clearInterval(QiBao);
                    this.QT=Math.floor((10*this.D/this.QAf)*100)/100;
                    if(this.QT>50){
                        this.score+="-5,";
                    }
                }
            }

        },

    }
});