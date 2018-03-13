const cgz6Data = {
    result: {
        parameters:{
            gasQuantity:0,//主蒸汽流量
            pressure:0,//主蒸汽压力
            gasTemperature:0,//主蒸汽温度
            WallTemperature:0,//上下壁温差
            exportTemperature:0,//炉膛出口烟温
            Superheater:0,//过热器壁温
            e:0.1,//文档为给，自定义
            d:1017.5,
            drawdown:0,//汽包水位
            a:2.5,
            b:10,
            negativePressure:0,//炉膛负压
            smokeTemperature:0,//排烟温度
            gas:0,//过剩氧量
            waterQuantity:0,//给水流量
            gum:30,
            Ht:5000,//焓值
            g:0.1,//排粉机转速
            Qd:4000,//燃料低位发热量
            D:0,//锅炉蒸发量
            T:0,
            Q:0,
            v:0.1,
            Pz:0,
            n:63,
            Af1n:0.8,//送风机阀门开度
            Af2n:0.8,//引风机阀门开度
            h:100,


        },
        option : {
            title : {
                text: '冷态升温升压曲线'
            },
            //提示语
            tooltip : {
                trigger: 'item',
                formatter: "{a}<br/>{c}"
            },
            //图例名
            legend: {
                data:['主蒸汽温度','主蒸汽压力']
            },
            //calculable : true,
            xAxis : [//x轴
                {
                    type: 'value',
                    min:0,
                    max:240,
                    splitNumber:6,
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
                    max:320,
                    splitNumber:10,
                },
                {
                    name:'主蒸汽压力(MPa)',
                    type : 'value',
                    min:0,
                    max:9.0,
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
            ]
        },
        gasWater:[
            {gasWaterComboImgUrl:"images/cgz6-combo0.png",gasWaterID:"gasWater-1"}
        ],
        combustionRegulationComboImg:"images/cgz6-combo1.png",
        Combustionregulationsystem:[
            {systemUrl:"images/cgz6-part0.png",top:"110px",left:"130px",systemID:"part0"},
            {systemUrl:"images/cgz6-part1.png",top:"110px",left:"480px",systemID:"part1"},
            {systemUrl:"images/cgz6-part15.png",top:"305px",left:"142px",systemID:"part15"},
            {systemUrl:"images/cgz6-part16.png",top:"300px",left:"238px",systemID:"part16"},
        ],
        FuelAerobics:[
            {FuelAerobicUrl:"images/cgz6-part18.png",top:"0px",left:"50px",FuelAerobicID:"part18"},
            {FuelAerobicUrl:"images/cgz6-part19.png",top:"0px",left:"90px",FuelAerobicID:"part19"},
        ],
        FeedwaterOption:[{
            optionsValue: 0,
            label: 0
        }, {
            optionsValue: 0.1,
            label: 0.1
        }, {
            optionsValue: 0.2,
            label: 0.2
        }, {
            optionsValue: 0.3,
            label: 0.3
        }, {
            optionsValue: 0.4,
            label: 0.4
        },{
            optionsValue: 0.5,
            label: 0.5
        },{
            optionsValue:0.6,
            label: 0.6
        },{
            optionsValue: 0.7,
            label: 0.7
        },{
            optionsValue: 0.8,
            label: 0.8
        },{
            optionsValue: 0.9,
            label: 0.9
        },{
            optionsValue: 1,
            label: 1
        },

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
        feedwater:{feedwaterUrl:"images/cgz6-part17.png",top:"584px",left:"861px",feedwaterID:"part17",feedwatername:"给水",display:false},

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
            {hotpartImgUrl:"images/cgz6-part22.png",top:"122px",left:"114px",hotID:"Oilgun",hotname:"停油枪阀-红"},
            {hotpartImgUrl:"images/cgz6-part22.png",top:"298px",left:"114px",hotID:"Oilgun",hotname:"停油枪阀-红"},
            {hotpartImgUrl:"images/cgz6-part22.png",top:"126px",left:"876px",hotID:"Oilgun",hotname:"停油枪阀-红"},
            {hotpartImgUrl:"images/cgz6-part22.png",top:"295px",left:"877px",hotID:"Oilgun",hotname:"停油枪阀-红"},

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
var airvaluenum=0;
var randoms = Math.floor((Math.random() * 10 + 1) / 10 * 10) / 10;
var gaswendu=0;
var gasqiya=0;
var dttrue=0;
var dt=120;
new Vue({
    el: '#cgz6',
    data: {
        curveWidth:"",
        curveHeight:"",
        parameters:cgz6Data.result.parameters,
        gasWaterComboImg:cgz6Data.result.gasWater,
        combustionRegulationComboImg:cgz6Data.result.combustionRegulationComboImg,
        blueBtns:cgz6Data.result.blueBtns,
        assemblys:cgz6Data.result.assemblys,
        hotComboImg:cgz6Data.result.hotComboImg,
        doubleNums:cgz6Data.result.doubleNums,
        hotpartImgs: cgz6Data.result.hotpartImgs,
        Combustionregulationsystem:cgz6Data.result.Combustionregulationsystem,
        inletValveBaffle:cgz6Data.result.inletValveBaffle,//入口挡板
        inputTextarea:cgz6Data.result.inputTextarea,
        btnCheckboxs:cgz6Data.result.btnCheckboxs,
        FuelAerobics:cgz6Data.result.FuelAerobics,
        feedwater:cgz6Data.result.feedwater,
        FeedwaterOption:cgz6Data.result.FeedwaterOption,
        optionsValue:0.6,
        optionsExport:0.6,
        displayExport:false,
        dialogmillFan1:false,//排粉机模态框
        dialogmillFan2:false,
        displaySelect:false,
        dialogcontent:"",
        systemTitle:"",
        AssemblyTitle:"",
        evenyoneTitle:"",
        optionsMillFan1:0.1,
        radioMillFan2:false,
        displayMillFan1:true,//单选框1
        displayRadio2:false,
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
        dialogHotpart:false,//点火枪
        radioHotpart:false,
        inputtext:false,
        radioHotpartNum:0,
        echardouble:0,
        changeTime:false,
        optionsFeedwater:0.6,//给水
        displayFeedwater:false,
        Feedwatertitle:"",
        counts:0,//累计分数
        score:"",//扣分
        countsfun:"",
        countsFFnum:0,
        WallTemperaturetitle:"",
        displayWallTemperature:false,
        WallTemperatureNum:0.1,
        radioHotpartshow:false,//点火枪显示/隐藏
        Hotparttitle:"",//点火枪标题
        radioOilgun:true,//油枪
        Oilgunshow:false,
        hotsRadiotitle:"",
    },
    mounted:function(){
        const that = this;
        this.$nextTick(function () {
            this.curveShow();
        });
        //监控屏幕的变化和div的宽度变化
        /*window.onresize = function temp() {
            let chartBox = document.getElementsByClassName('charts')[0];
            that.curveWidth=chartBox.offsetWidth/10+"rem";
            that.curveHeight=((chartBox.offsetWidth*189)/385)/10+"rem";

            let myChart1= document.getElementById('curve');
            myChart1.style.width = that.curveWidth;
            myChart1.style.height =that.curveHeight;

            //折图的数据加载
            let myChart = echarts.init(myChart1);
            myChart.setOption(cgz6Data.result.option);
        };*/
    },
    methods: {
        /**
         * 速度的方法
         */
        doubleIndex:function(doubleImg){
            this.doubleNumID=doubleImg.doubleNumID;
            if(this.doubleNumID=="double1"){
                cgz6Data.result.option.xAxis[0].max=40;
                cgz6Data.result.option.xAxis[0].splitNumber=5;
                this.echardouble=1;
                this.doubleNums[1].display=false;
                this.doubleNums[2].display=false;
                this.$message({
                    message:"启动6倍速度",
                    type:"warning"
                })
            }
            if(this.doubleNumID=="double2"){
                cgz6Data.result.option.xAxis[0].max=30;
                cgz6Data.result.option.xAxis[0].splitNumber=6;
                this.echardouble=2;
                this.doubleNums[0].display=false;
                this.doubleNums[2].display=false;
                this.$message({
                    message:"启动8倍速度",
                    type:"warning"
                })


            }
            if(this.doubleNumID=="double3"){
                cgz6Data.result.option.xAxis[0].max=24;
                cgz6Data.result.option.xAxis[0].splitNumber=6;
                this.echardouble=3;
                this.doubleNums[1].display=false;
                this.doubleNums[0].display=false;
                this.$message({
                    message:"启动10倍速度",
                    type:"warning"
                })
            }
            this.curveShow();
        },
        /**
         * 折线图的方法
         */
        curveShow: function () {
            let myChart1= document.getElementById('curve');
            this.curveWidth=800+"px";
            this.curveHeight=400+"px";
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
                this.parameters.gum=Math.floor((this.parameters.gum+4.4)*10)/10;
            }
            if(this.FuelAerobicID=="part19"){
                this.parameters.gum=Math.floor((this.parameters.gum-4.4)*10)/10;
                if(this.parameters.gum<0)
                    this.parameters.gum=0;
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
                  this.systemTitle="排粉机";
                  this.dialogcontent="排粉机阀门开度:";
                  this.displaySelect=false;
                  this.displayMillFan1=true;
                  this.displayRadio2=false;
                  this.displayExport=false;
                  break;
              case "part1":
                  this.systemTitle="排粉机";
                  this.dialogcontent="排粉机阀门开度:";
                  this.displaySelect=false;
                  this.displayMillFan1=true;
                  this.displayRadio2=false;
                  this.displayExport=false;
                  break;
              case "part15":
                  this.systemTitle="送风挡板";
                  this.dialogcontent="送风挡板开度：";
                  this.displaySelect=true;
                  this.displayExport=false;
                  this.displayRadio2=false;
                  this.displayMillFan1=false;
                  break;
              case "part16":
                  this.systemTitle="引风挡板";
                  this.dialogcontent="引风挡板开度：";
                  this.displayRadio2=false;
                  this.displayExport=true;
                  this.displaySelect=false;
                  this.displayMillFan1=false;
                  break;

          }
        },
        /*
        燃烧调节系统确定方法
         */
        millImgconfirms:function(){
            this.dialogmillFan1=false;
            this.deleteDetermine();
            this.Numcount();
            /*
            主蒸汽温度变化
             */
                this. parameters.gasTemperature =gaswendu+Math.floor(((this.parameters.v * this.optionsMillFan1*this.parameters.Qd*44) / this.parameters.Ht)*100)/100;
            /*
            主蒸汽压力
            */
                this.parameters.pressure =Math.floor((gasqiya+(this.parameters.Q / this.parameters.Ht) / 1500 )* 1000)/ 1000;


        },
        /*
        数据计算
         */
        Numcount:function () {
            var guncount=0;
            this.parameters.Q = this.optionsMillFan1 * this.parameters.Qd * 44;
            this.parameters.waterQuantity = 410 * this.optionsFeedwater;
            //燃料同操器煤粉变化
            var gums=this.optionsMillFan1 * 4.4;
            var guminterval=setInterval(gumfun,10000);
            function gumfun() {
                if(cgz6Data.result.parameters.gum<0){
                    cgz6Data.result.parameters.gum=0;
                    clearInterval(guminterval);
                    return false;
                }
                if(dttrue>11){
                    clearInterval(guminterval);
                    return false;
                }
                cgz6Data.result.parameters.gum-=gums;
                var ran = Math.floor((Math.random() * 10 + 1) / 10 * 10) / 10;
            }
            /*
            主蒸汽流量
             */
            this.parameters.gasQuantity = Math.floor(this.parameters.Q / this.parameters.Ht * 100) / 100;
            if (this.optionsValue != "") {
                this.parameters.Af1n = this.optionsValue;
            } else this.parameters.Af1n = 0;
            /*
            过剩氧量输出
             */
            if (this.optionsMillFan1 == 0)
                this.parameters.gas = 0;
            else this.parameters.gas = Math.floor(20 * (this.parameters.Af1n * 48 / 48) * (44 / 44 * this.optionsMillFan1) * 100) / 100;
            /*
           出口烟温
            */
            if(this.parameters.gas>5){
                this.parameters.exportTemperature=350+10* randoms;
            }else{
                this.parameters.exportTemperature=1110-this.parameters.gas*25;
            }

            /*
            过热器壁温
             */
            this.parameters.Superheater=Math.floor(((this.parameters.v * this.parameters.Q) / this.parameters.Ht)*100)/100+15*randoms;
            /*
            排烟温度
             */
            this.parameters.D = this.parameters.Q / this.parameters.Ht;
            this.parameters.Pz = this.parameters.D /1500;
            if (this.optionsMillFan1 == 0 && this.optionsFeedwater == 0) {
                this.parameters.smokeTemperature = 35;

            }
            if (this.optionsMillFan1 > 0) {
                this.parameters.smokeTemperature = Math.floor((135 + 10 * randoms)*100)/100 ;
            }
            if (this.optionsMillFan1 > 0 && this.optionsFeedwater > 0) {
                this.parameters.smokeTemperature = Math.floor((80 + 0.329 * this.optionsMillFan1 + 20 * randoms)*100)/100 ;

            }
            /*
            水位
             */
            this.parameters.drawdown = Math.floor(( (this.parameters.waterQuantity - this.parameters.D) - this.parameters.b * this.parameters.Pz / 9.8) * 100) / 100 ;

            /*
            炉膛负压
             */
            this.parameters.Af2n = this.optionsExport;
            this.parameters.negativePressure = Math.floor(this.parameters.h * (this.parameters.Af1n * 48 / 48 - this.parameters.n * this.parameters.Af2n / 63 + this.optionsMillFan1 * 44 / 44) * 100) / 100 ;
            /*
            汽包上下壁温
             */
            this.parameters.WallTemperature=44*this.parameters.Qd*this.WallTemperatureNum/5000*10;
        },
        /*
        燃烧调节系统取消方法
         */
        millImgdisconfirms:function () {
            this.dialogmillFan1=false;

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
                        this.AssemblyTitle="暖管操作";
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
                        this.btnCheckboxs[i].display=false;
                        this.AssemblyTitle="壁温操作";
                        this.WallTemperaturetitle="汽包上下壁温:";
                        this.displayWallTemperature=true;
                        break;
                }
            }
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
            //给水操作
            if(this.feedwaterID=="part17"){
                this.AssemblyTitle="给水操作";
                this.Feedwatertitle="给水阀门开度：";
                this.displayFeedwater=true;
                this.btnDiv=false;
                this.picDiv=false;
                this.displayWallTemperature=false;
            };

        },
        /*
        锅炉系统确定
         */
        assemblyConfirms:function () {
            this.dialogAssembly=false;
            this.deleteDetermine();
            this.Numcount();
            /*
            完成步骤曲线出现判定*/
            var a=0;
            var b=0;
            var confir=0;
            //累计空气阀关闭数量（第一步骤）
            for(var i=0;i<this.assemblys.length;i++){
                if(this.assemblys[i].airValve==false){
                    a++;
                }
                if(a==7){
                    airvaluenum=1;
                };
            }
            console.log(b)
            //第二步骤
            if(confir==0)
            if(this.checkboxSelct[1]==["第一次排污"]&&this.checkboxSelct[0]==["暖管工作"]||
                this.checkboxSelct[1]==["暖管工作"]&&this.checkboxSelct[0]==["第一次排污"]){
                airvaluenum=2;
                confir+=1;
            }
            //第三步骤
            if(confir==1)
            if(this.checkboxSelct[2]==["检修"]&&this.checkboxSelct[3]==["冲洗压力表管"]||
                this.checkboxSelct[3]==["冲洗压力表管"]&&this.checkboxSelct[2]==["检修"]){
                airvaluenum=3;
                confir+=1;

            }
            //第四步骤
            for(var j=0;j<this.assemblys.length;j++)
            if(this.assemblys[j].trap==false){
                b++;
            }
            if(b==7){
                airvaluenum=4;
            };

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
            if(this.hotID=="Oilgun"){
                this.Oilgunshow=true;
                this.radioHotpartshow=false;
                this.Hotparttitle="停油枪操作";
                this.hotsRadiotitle="停油枪阀门状态：";
            }
        },
        /*
        点火枪取消按钮
         */
        dishotpartfun:function () {
            this.deleteContent();

        },
        /*
        点火枪确定按钮
         */
        hotpartfun:function () {
            this.dialogHotpart=false;
            this.Numcount();
            var randomNum;
            var echarXais=1;
            //更新图标数据函数
            function daoshus() {
                let myChart1= document.getElementById('curve');
                this.curveWidth=800+"px";
                this.curveHeight=400+"px";
                myChart1.style.width = this.curveWidth;
                myChart1.style.height =this.curveHeight;

                //折图的数据加载
                let myChart = echarts.init(myChart1);
                myChart.setOption(cgz6Data.result.option);
            }
            //随机数公共函数
            function randomfun(min,max) {
                randomNum=parseInt(Math.random()*(max-min+1)+min);
            }
            if(this.echardouble==1)
                echarXais=6;
            if(this.echardouble==2)
                echarXais=8;
            if(this.echardouble==3)
                echarXais=10;
            //点火
            if(this.radioHotpart==true&&this.radioHotpartNum==0){
                this.radioHotpartNum=1;
                dttrue=0;
                if(this.echardouble==0){
                    this.doubleNums[0].display=false;
                    this.doubleNums[1].display=false;
                    this.doubleNums[2].display=false;
                    this.$message({
                        message:"启动1倍速度",
                        type:"warning"
                    })
                }
                this.changeTime=true;
                if(dttrue==0){
                    randomfun(100,120)
                    cgz6Data.result.option.series[0].data.push([parseInt(13/echarXais),randomNum]);
                    cgz6Data.result.option.series[1].data.push({value:[parseInt(13/echarXais),0.2],symbolSize: 6});
                    cgz6Data.result.parameters.gasTemperature=randomNum;
                    gaswendu=randomNum;
                    gasqiya=0.2;
                    cgz6Data.result.parameters.pressure=0.2;
                    dttrue=1;
                }
                this.curveShow();
                daoshus();
                var sendBtnTimer = setInterval(changeSendBtn,1000);
                function changeSendBtn() {
                    dt--;
                    if(dttrue>11||cgz6Data.result.parameters.gum==0){
                        hh=1;
                        clearInterval(sendBtnTimer);
                        this.changeTime=false;
                        return false;
                    }
                    document.getElementById('times').innerHTML=dt+'秒';
                    if(dttrue==1&&dt==0){
                        this.countsfun=1;//计算前一步
                        randomfun(120,125);
                        cgz6Data.result.option.series[0].data.push([parseInt(30/echarXais),randomNum]);
                        cgz6Data.result.option.series[1].data.push({value:[parseInt(30/echarXais),0.26],symbolSize: 6});
                        daoshus();
                        dttrue=2;
                        dt=60;
                        gaswendu=randomNum;
                        gasqiya=0.26;
                        cgz6Data.result.parameters.gasTemperature=randomNum;
                        cgz6Data.result.parameters.pressure=0.26;

                    }
                        if(dttrue==2&&dt==0){
                            this.countsfun=2;//计算前一步
                            randomfun(125,133);
                            gaswendu=randomNum;
                            cgz6Data.result.option.series[0].data.push([parseInt(40/echarXais),randomNum]);
                            cgz6Data.result.option.series[1].data.push([parseInt(40/echarXais),0.3]);
                            daoshus();
                            dttrue=3;
                            dt=4;
                            gaswendu=randomNum;
                            gasqiya=0.3;
                            cgz6Data.result.parameters.gasTemperature=randomNum;
                            cgz6Data.result.parameters.pressure=0.3;
                        }
                        if(dttrue==3&&dt==0){
                            randomfun(133,150);
                            gaswendu=randomNum;
                            cgz6Data.result.option.series[0].data.push([parseInt(47/echarXais),randomNum]);
                            cgz6Data.result.option.series[1].data.push({value:[parseInt(47/echarXais),0.35],symbolSize: 6});
                            daoshus();
                            dt=60;
                            dttrue=4;
                            gasqiya=0.35;
                            cgz6Data.result.parameters.gasTemperature=randomNum;
                            cgz6Data.result.parameters.pressure=0.35;
                        }
                        if(dttrue==4&&dt==0){
                            this.countsfun=3;//计算前一步
                            randomfun(150,168);
                            gaswendu=randomNum;
                            cgz6Data.result.option.series[0].data.push([parseInt(55/echarXais),randomNum]);
                            cgz6Data.result.option.series[1].data.push({value:[parseInt(55/echarXais),0.5],symbolSize: 6});
                            daoshus();
                            dt=120;
                            dttrue=5;
                            gasqiya=0.5;
                            cgz6Data.result.parameters.gasTemperature=randomNum;
                            cgz6Data.result.parameters.pressure=0.5;
                        }
                        if(dttrue==5&&dt==0){
                            randomfun(168,183);
                            gaswendu=randomNum;
                            cgz6Data.result.option.series[0].data.push([parseInt(70/echarXais),randomNum]);
                            cgz6Data.result.option.series[1].data.push({value:[parseInt(70/echarXais),1],symbolSize: 6});
                            daoshus();
                            dt=30;
                            dttrue=6;
                            gasqiya=1;
                            cgz6Data.result.parameters.gasTemperature=randomNum;
                            cgz6Data.result.parameters.pressure=1;
                        }
                        if(dttrue==6&&dt==0){
                            randomfun(183,235);
                            gaswendu=randomNum;
                            cgz6Data.result.option.series[0].data.push([parseInt(120/echarXais),randomNum]);
                            cgz6Data.result.option.series[1].data.push([parseInt(120/echarXais),3]);
                            daoshus();
                            dt=4;
                            dttrue+=1;
                            gasqiya=3;
                            cgz6Data.result.parameters.gasTemperature=randomNum;
                            cgz6Data.result.parameters.pressure=3;
                        }
                        if(dttrue==7&&dt==0){
                            randomfun(235,258);
                            gaswendu=randomNum;
                            cgz6Data.result.option.series[0].data.push([parseInt(195/echarXais),randomNum]);
                            cgz6Data.result.option.series[1].data.push([parseInt(195/echarXais),4.5]);
                            daoshus();
                            dt=4;
                            dttrue+=1;
                            gasqiya=4.5;
                            cgz6Data.result.parameters.gasTemperature=randomNum;
                            cgz6Data.result.parameters.pressure=4.5;
                        }
                        if(dttrue==8&&dt==0){
                            randomfun(258,270);
                            gaswendu=randomNum;
                            cgz6Data.result.option.series[0].data.push([parseInt(200/echarXais),randomNum]);
                            cgz6Data.result.option.series[1].data.push({value:[parseInt(200/echarXais),5],symbolSize: 6});
                            daoshus();
                            dt=30;
                            dttrue+=1;
                            gasqiya=5;
                            cgz6Data.result.parameters.gasTemperature=randomNum;
                            cgz6Data.result.parameters.pressure=5;
                        }
                        if(dttrue==9&&dt==0){
                            randomfun(270,285);
                            gaswendu=randomNum;
                            cgz6Data.result.option.series[0].data.push([parseInt(215/echarXais),randomNum]);
                            cgz6Data.result.option.series[1].data.push([parseInt(215/echarXais),7]);
                            daoshus();
                            dt=4;
                            dttrue+=1;
                            gasqiya=7;
                            cgz6Data.result.parameters.gasTemperature=randomNum;
                            cgz6Data.result.parameters.pressure=7;
                        }
                        if(dttrue==10&&dt==0){
                            randomfun(285,303);
                            gaswendu=randomNum;
                            cgz6Data.result.option.series[0].data.push([parseInt(222/echarXais),randomNum]);
                            cgz6Data.result.option.series[1].data.push([parseInt(222/echarXais),8.3]);
                            daoshus();
                            dt=4;
                            dttrue+=1;
                            gasqiya=8.3;
                            cgz6Data.result.parameters.gasTemperature=randomNum;
                            cgz6Data.result.parameters.pressure=8.3;
                        }
                        if(dttrue==11&&dt==0){
                            randomfun(303,315);
                            gaswendu=randomNum;
                            cgz6Data.result.option.series[0].data.push([parseInt(240/echarXais),randomNum]);
                            cgz6Data.result.option.series[1].data.push([parseInt(240/echarXais),9]);
                            daoshus();
                            dt=4;
                            dttrue+=1;
                            gasqiya=9;
                            cgz6Data.result.parameters.gasTemperature=randomNum;
                            cgz6Data.result.parameters.pressure=9;
                        }

                };
            };
            //停油枪
            for(var i=0;i<this.hotpartImgs.length;i++)
                if(i>=12) {
                    if (this.radioOilgun == false) {

                        this.hotpartImgs[i].hotpartImgUrl = "images/cgz6-part21.png";
                    }else {
                        this.hotpartImgs[i].hotpartImgUrl = "images/cgz6-part22.png";
                    }
                }

        },
        /*
        计分
        */
        countsFF:function () {
        /*
        点火
         */
            if(this.radioHotpart==true){
                //MFT值
                if(this.parameters.gum<=0||this.radioOilgun==false||this.parameters.drawdown>300||this.parameters.drawdown<-300){
                    this.counts+=0;
                }
                /*
                不达到MFT值
                 */
                else{
                    //正常后检查
                    if(this.btnCheckboxs[6].checked==true)
                        this.counts+=5;
                    if(this.btnCheckboxs[10].checked==true)
                        this.counts+=5;
                    //水位
                    if(cgz6Data.result.parameters.drawdown>=-50&&
                        cgz6Data.result.parameters.drawdown<=50){
                        this.counts+=5;
                    }
                    //汽包上下壁温
                    if(cgz6Data.result.parameters.WallTemperature<=50)
                        this.counts+=5;
                    //记录
                    if(cgz6Data.result.inputTextarea[0]!=""&&
                        cgz6Data.result.inputTextarea[3]!="")
                        this.counts+=5;
                    if(cgz6Data.result.inputTextarea[1]!=""&&
                        cgz6Data.result.inputTextarea[4]!="")
                        this.counts+=5;
                    if(cgz6Data.result.inputTextarea[2]!=""&&
                        cgz6Data.result.inputTextarea[5]!="")
                        this.counts+=5;
                    //空气阀
                    if(cgz6Data.result.parameters.pressure==0.26)
                    for(var i=0;i<this.assemblys.length;i++){
                            if(this.assemblys[i].airValve==false){
                                this.counts+=5;
                                break;
                            }
                        };
                    if(cgz6Data.result.parameters.pressure==0.3){
                        if(this.btnCheckboxs[0].checked==true&&
                            this.btnCheckboxs[13].checked==true)
                            this.counts+=5;
                    }
                    if(cgz6Data.result.parameters.pressure==0.5){
                        if(this.btnCheckboxs[2].checked==true&&
                            this.btnCheckboxs[3].checked==true)
                            this.counts+=5;
                    }
                    //关闭疏水阀
                    if(cgz6Data.result.parameters.pressure==1){
                        for(var i=0;i<this.assemblys.length;i++)
                        if(this.assemblys[i].trap==false||
                        this.btnCheckboxs[4].checked==true){
                            this.counts+=5;
                            break;
                        }
                    }
                    if(cgz6Data.result.parameters.pressure==3){
                        if(this.continuousBlowdown==true){
                            this.counts+=5;
                        }
                    }
                    if(cgz6Data.result.parameters.pressure==4.5){
                        if(this.btnCheckboxs[0].checked==true)
                            this.counts+=5;
                    }
                    if(this.radioOilgun==false){
                        this.counts+=5;
                    }
                }
            }
            //点火前检查
            if(this.btnCheckboxs[5].checked==true){
                this.counts+=5;
            }
            if(this.btnCheckboxs[9].checked==true){
                this.counts+=5;
            }
            this.score="-"+(100-this.counts);

console.log(this.counts)
        },
        /*
        判定
         */
        deleteDetermine:function () {
            for(var i=0;i<this.inputTextarea.length;i++){
                if(this.inputTextarea[i].inputText!=""){
                    this.assemblyConfirmNum=1;
                }
            };
            for(var i=0;i<this.assemblys.length;i++){
                if(this.assemblys[i].airValve!=true||
                    this.assemblys[i].trap!=true){
                    this.assemblyConfirmNum=1;
                }
            };
                if(this.checkboxSelct!=[]||
                    this.continuousBlowdown!=false||
                    this.radioMillFan2!=false||
                    this.radioHotpart!=false){
                    this.assemblyConfirmNum=1;
                }
        },
        /*
        取消或关闭dialog清空内容（没有点击确定）
         */
        deleteContent:function () {
            this.dialogAssembly=false;
            this.dialogmillFan1=false;
            this.dialogHotpart=false;
            if(this.assemblyConfirmNum==0){
                this.checkboxSelct=[];
                this.continuousBlowdown=false;
                for(var i=0;i<this.inputTextarea.length;i++){
                    this.inputTextarea[i].inputText="";
                }
                this.radioMillFan2=false;
                this.radioHotpart=false;
                for(var i=0;i<this.assemblys.length;i++){
                    this.assemblys[i].airValve=true;
                    this.assemblys[i].trap=true;
                }
            }
        },
        /*
        取消关闭dialog
         */
        assemblyDisConfirms:function () {
            this.deleteContent();

        },
        /*
        关闭dialog
         */
        handleClose:function () {
            this.deleteContent();
        },

    }
});