var defaults = [{
    s1: 'maccountLocationProvince',
    s2: 'maccountLocationCity',
    s3: 'maccountLocationCounty',
    v1: null,
    v2: null,
    v3: null
},
    {
        s1: 'faccountLocationProvince',
        s2: 'faccountLocationCity',
        s3: 'faccountLocationCounty',
        v1: '湖南省',
        v2: '长沙市',
        v3: '雨花区'
    },
    {
        s1: 'addressProvince',
        s2: 'addressCity',
        s3: 'addressCounty',
        v1: '湖南省',
        v2: '长沙市',
        v3: '雨花区'
    }];
$(function () {
    document.getElementById("serviceTime").value = fmtDate(getNowFormatDate());
    document.getElementById("ID").value = "";
    $.ajax({
        type: "POST",
        url: "selectSerialNoId.action",
        data: "",
        dataType: "text",
        success: function (data) {
            var str = JSON.parse(data);
            /**
             * 判断档案页面是否是查询结果
             */
            //没有结果,生成档案编号
            if (str[0].mname == undefined) {
                document.getElementById("ID").value = str[0].iD;
                //增加档案
                $("#preservation").click(function () {
                    var checkidcard = /^[1-9]\d{7}((0[1-9])|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|(X|x))$/;
                    var checkbbirthday = /^\d{4}-\d{1,2}-\d{1,2}$/;
                    var checkage = /^[0-9]*$/;
                    var checkName = /^[\u4e00-\u9fa5]{0,}$/;
                    if ($("#fname").val() == "") {
                        alert("请填写妻子姓名！");
                        return false;
                    }
                    if (!checkName.test($("#fname").val())) {
                        alert("妻子姓名请填写中文汉字！");
                        return false;
                    }
                    if ($("#mname").val() == "") {
                        alert("请填写丈夫姓名！");
                        return false;
                    }
                    if (!checkName.test($("#mname").val())) {
                        alert("丈夫姓名请填写中文汉字！");
                        return false;
                    }
                    if ($("#fidCard").val() == "") {
                        alert("请填写妻子证件号码！");
                        return false;
                    }
                    if (!checkidcard.test($("#fidCard").val())) {
                        alert("妻子证件号码格式不正确！");
                        return false;
                    }
                    if ($("#midCard").val() == "") {
                        alert("请填写丈夫证件号码！");
                        return false;
                    }
                    if (!checkidcard.test($("#midCard").val())) {
                        alert("丈夫证件号码格式不正确！");
                        return false;
                    }
                    if ($("#fbirthDate").val() == "") {
                        alert("请填写妻子出生日期！");
                        return false;
                    }
                    if (!checkbbirthday.test($("#fbirthDate").val())) {
                        alert("妻子出生日期格式不正确！(格式为：yyyy-mm-dd)");
                        return false;
                    }
                    if ($("#mbirthDate").val() == "") {
                        alert("请填写丈夫出生日期！");
                        return false;
                    }
                    if (!checkbbirthday.test($("#mbirthDate").val())) {
                        alert("丈夫出生日期格式不正确！(格式为：yyyy-mm-dd)");
                        return false;
                    }
                    if ($("#fidCard").val().toLowerCase() == $("#midCard").val().toLowerCase()) {
                        alert("双方证件号码不能相同！");
                        return false;
                    }
                    if ($("#fage").val() == "") {
                        alert("请填写妻子年龄！");
                        return false;
                    }
                    if (!checkage.test($("#fage").val())) {
                        alert("妻子年龄只能填写数字！！");
                        return false;
                    }
                    if ($("#mage").val() == "") {
                        alert("请填写丈夫年龄！");
                        return false;
                    }
                    if (!checkage.test($("#mage").val())) {
                        alert("丈夫年龄只能填写数字！！");
                        return false;
                    }
                    if ($("#maccountLocationProvince").val() == "") {
                        alert("请选择丈夫户口所在省！！");
                        return false;
                    }
                    if ($("#maccountLocationCity").val() == "") {
                        alert("请选择丈夫户口所在市！");
                        return false;
                    }
                    if ($("#maccountLocationCounty").val() == "") {
                        alert("请选择丈夫户口所在县！");
                        return false;
                    }
                    if ($("#maccountLocationCountry").val() == "") {
                        alert("请选择丈夫户口所在乡！");
                        return false;
                    }
                    if ($("#maccountLocationVillage").val() == "") {
                        alert("请填写丈夫户口所在村！");
                        return false;
                    }
                    if ($("#faccountLocationProvince").val() == "") {
                        alert("请选择妻子户口所在省！");
                        return false;
                    }
                    if ($("#faccountLocationCity").val() == "") {
                        alert("请选择妻子户口所在市！");
                        return false;
                    }
                    if ($("#faccountLocationCounty").val() == "") {
                        alert("请选择妻子户口所在县！");
                        return false;
                    }
                    if ($("#faccountLocationCountry").val() == "") {
                        alert("请选择妻子户口所在乡！");
                        return false;
                    }
                    if ($("#faccountLocationVillage").val() == "") {
                        alert("请填写妻子户口所在村！");
                        return false;
                    }
                    if ($("#addressProvince").val() == "") {
                        alert("请选择妻子现住址所在省！");
                        return false;
                    }
                    if ($("#addressCity").val() == "") {
                        alert("请选择妻子现住址所在市！");
                        return false;
                    }
                    if ($("#addressCounty").val() == "") {
                        alert("请选择妻子现住址所在县！");
                        return false;
                    }
                    if ($("#addressCountry").val() == "") {
                        alert("请选择妻子现住址所在乡！");
                        return false;
                    }
                    if ($("#addressVillage").val() == "") {
                        alert("请填写妻子现住址所在村！");
                        return false;
                    }
                    $.ajax({
                        type: "POST",
                        url: "selectArchivesId.action",
                        data: {
                            "fidCard": $("#fidCard").val(),
                            "midCard": $("#midCard").val(),
                        },
                        dataType: "json",
                        success: function (data) {
                            if (data == null) {
                                if (nanimg == undefined) {
                                    nanimg = "";
                                }
                                if (nanzhiwen == undefined) {
                                    nanimg = "";
                                }
                                if (nvimg == undefined) {
                                    nvimg = "";
                                }
                                if (nvzhiwen == undefined) {
                                    nvzhiwen = "";
                                }
                                $.ajax({
                                    type: "POST",
                                    url: "addArchives.action",
                                    data: {
                                        "mif.ID": $("#ID").val(),
                                        "mif.fname": $("#fname").val(),
                                        "mif.mname": $("#mname").val(),
                                        "mif.fnationality": $("#fnationality").val(),
                                        "mif.mnationality": $("#mnationality").val(),
                                        "mif.fidCardType": $("#fidCardType").val(),
                                        "mif.midCardType": $("#midCardType").val(),
                                        "mif.fidCard": $("#fidCard").val(),
                                        "mif.midCard": $("#midCard").val(),
                                        "mif.fbirthDate": $("#fbirthDate").val(),
                                        "mif.mbirthDate": $("#mbirthDate").val(),
                                        "mif.fage": $("#fage").val(),
                                        "mif.mage": $("#mage").val(),
                                        "mif.feduLevel": $("#feduLevel").val(),
                                        "mif.meduLevel": $("#meduLevel").val(),
                                        "mif.fjob": $("#fjob").val(),
                                        "mif.mjob": $("#mjob").val(),
                                        "mif.fjobOthers": $("#fjobOthers").val(),
                                        "mif.mjobOthers": $("#mjobOthers").val(),
                                        "mif.faccountType": $("#faccountType").val(),
                                        "mif.maccountType": $("#maccountType").val(),
                                        "mif.fcellPhoneNum": $("#fcellPhoneNum").val(),
                                        "mif.mcellPhoneNum": $("#mcellPhoneNum").val(),
                                        "mif.mtime": $("#mtime").val(),
                                        "mif.maccountLocationProvince": $("#maccountLocationProvince").val(),
                                        "mif.maccountLocationCity": $("#maccountLocationCity").val(),
                                        "mif.maccountLocationCounty": $("#maccountLocationCounty").val(),
                                        "mif.maccountLocationCountry": $("#maccountLocationCountry").val(),
                                        "mif.maccountLocationVillage": $("#maccountLocationVillage").val(),
                                        "mif.faccountLocationProvince": $("#faccountLocationProvince").val(),
                                        "mif.faccountLocationCity": $("#faccountLocationCity").val(),
                                        "mif.faccountLocationCounty": $("#faccountLocationCounty").val(),
                                        "mif.faccountLocationCountry": $("#faccountLocationCountry").val(),
                                        "mif.faccountLocationVillage": $("#faccountLocationVillage").val(),
                                        "mif.addressProvince": $("#addressProvince").val(),
                                        "mif.addressCity": $("#addressCity").val(),
                                        "mif.addressCounty": $("#addressCounty").val(),
                                        "mif.addressCountry": $("#addressCountry").val(),
                                        "mif.addressVillage": $("#addressVillage").val(),
                                        "mif.postCode": $("#postCode").val(),
                                        "mif.phoneNum": $("#phoneNum").val(),
                                        "mif.doctorName": $("#doctorName").val(),
                                        "mif.hasContent": $("#hasContent").val(),
                                        "mif.serviceTime": new Date($("#serviceTime").val()),
                                        "tbl.ID": $("#ID").val(),
                                        "tbl.K1": $("#K1").val(),
                                        "mif.emailW": $("#emailW").val(),
                                        "mif.emailN": $("#emailN").val(),
                                        "mif.wechatW": $("#wechatW").val(),
                                        "mif.wechatN": $("#wechatN").val(),
                                        "mif.QQW": $("#QQW").val(),
                                        "mif.QQN": $("#QQN").val(),
                                        "mif.floatPopulation": $("#floatPopulation").val(),
                                        "lfinger.ID": $("#ID").val(),
                                        "lfinger.FImage": nvimg,
                                        "lfinger.Ffinger": nvzhiwen,
                                        "lfinger.MImage": nanimg,
                                        "lfinger.Mfinger": nanzhiwen,
                                    },
                                    dataType: "json",
                                    success: function (data) {
                                        if (data > 0) {
                                            alert("新建成功！");
                                        } else {
                                            alert("建档失败，请确认是否重复建立档案！")
                                        }

                                    }
                                });
                            } else {
                                if (confirm("此档案已存在，是否继续建档？")) {
                                    if (nanimg == undefined) {
                                        nanimg = "";
                                    }
                                    if (nanzhiwen == undefined) {
                                        nanimg = "";
                                    }
                                    if (nvimg == undefined) {
                                        nvimg = "";
                                    }
                                    if (nvzhiwen == undefined) {
                                        nvzhiwen = "";
                                    }
                                    $.ajax({
                                        type: "POST",
                                        url: "addArchives.action",
                                        data: {
                                            "mif.ID": $("#ID").val(),
                                            "mif.fname": $("#fname").val(),
                                            "mif.mname": $("#mname").val(),
                                            "mif.fnationality": $("#fnationality").val(),
                                            "mif.mnationality": $("#mnationality").val(),
                                            "mif.fidCardType": $("#fidCardType").val(),
                                            "mif.midCardType": $("#midCardType").val(),
                                            "mif.fidCard": $("#fidCard").val(),
                                            "mif.midCard": $("#midCard").val(),
                                            "mif.fbirthDate": $("#fbirthDate").val(),
                                            "mif.mbirthDate": $("#mbirthDate").val(),
                                            "mif.fage": $("#fage").val(),
                                            "mif.mage": $("#mage").val(),
                                            "mif.feduLevel": $("#feduLevel").val(),
                                            "mif.meduLevel": $("#meduLevel").val(),
                                            "mif.fjob": $("#fjob").val(),
                                            "mif.mjob": $("#mjob").val(),
                                            "mif.fjobOthers": $("#fjobOthers").val(),
                                            "mif.mjobOthers": $("#mjobOthers").val(),
                                            "mif.faccountType": $("#faccountType").val(),
                                            "mif.maccountType": $("#maccountType").val(),
                                            "mif.fcellPhoneNum": $("#fcellPhoneNum").val(),
                                            "mif.mcellPhoneNum": $("#mcellPhoneNum").val(),
                                            "mif.mtime": $("#mtime").val(),
                                            "mif.maccountLocationProvince": $("#maccountLocationProvince").val(),
                                            "mif.maccountLocationCity": $("#maccountLocationCity").val(),
                                            "mif.maccountLocationCounty": $("#maccountLocationCounty").val(),
                                            "mif.maccountLocationCountry": $("#maccountLocationCountry").val(),
                                            "mif.maccountLocationVillage": $("#maccountLocationVillage").val(),
                                            "mif.faccountLocationProvince": $("#faccountLocationProvince").val(),
                                            "mif.faccountLocationCity": $("#faccountLocationCity").val(),
                                            "mif.faccountLocationCounty": $("#faccountLocationCounty").val(),
                                            "mif.faccountLocationCountry": $("#faccountLocationCountry").val(),
                                            "mif.faccountLocationVillage": $("#faccountLocationVillage").val(),
                                            "mif.addressProvince": $("#addressProvince").val(),
                                            "mif.addressCity": $("#addressCity").val(),
                                            "mif.addressCounty": $("#addressCounty").val(),
                                            "mif.addressCountry": $("#addressCountry").val(),
                                            "mif.addressVillage": $("#addressVillage").val(),
                                            "mif.postCode": $("#postCode").val(),
                                            "mif.phoneNum": $("#phoneNum").val(),
                                            "mif.doctorName": $("#doctorName").val(),
                                            "mif.hasContent": $("#hasContent").val(),
                                            "mif.serviceTime": new Date($("#serviceTime").val()),
                                            "tbl.ID": $("#ID").val(),
                                            "tbl.K1": $("#K1").val(),
                                            "mif.emailW": $("#emailW").val(),
                                            "mif.emailN": $("#emailN").val(),
                                            "mif.wechatW": $("#wechatW").val(),
                                            "mif.wechatN": $("#wechatN").val(),
                                            "mif.QQW": $("#QQW").val(),
                                            "mif.QQN": $("#QQN").val(),
                                            "mif.floatPopulation": $("#floatPopulation").val(),
                                            "lfinger.ID": $("#ID").val(),
                                            "lfinger.FImage": nvimg,
                                            "lfinger.Ffinger": nvzhiwen,
                                            "lfinger.MImage": nanimg,
                                            "lfinger.Mfinger": nanzhiwen,
                                        },
                                        dataType: "json",
                                        success: function (data) {
                                            if (data > 0) {
                                                alert("新建成功！");
                                            } else {
                                                alert("建档失败，请确认是否重复建立档案！")
                                            }

                                        }
                                    });
                                } else {

                                }
                            }
                        }

                    })

                })
                //已有档案信息，渲染页面文本
            } else {
                $("#ID").val(str[0].iD);
                $("#fname").val(str[0].fname);
                $("#mname").val(str[0].mname);
                $("#fnationality").val(str[0].fnationality);
                $("#mnationality").val(str[0].mnationality);
                $("#fidCardType").val(str[0].fidCardType);
                $("#midCardType").val(str[0].midCardType);
                $("#fidCard").val(str[0].fidCard);
                $("#midCard").val(str[0].midCard);
                $("#fbirthDate").val(str[0].fbirthDate);
                $("#mbirthDate").val(str[0].mbirthDate);
                $("#fage").val(str[0].fage);
                $("#mage").val(str[0].mage);
                $("#feduLevel").val(str[0].feduLevel);
                $("#meduLevel").val(str[0].meduLevel);
                $("#fjob").val(str[0].fjob);
                $("#mjob").val(str[0].mjob);
                $("#fjobOthers").val(str[0].fjobOthers);
                $("#mjobOthers").val(str[0].mjobOthers);
                $("#faccountType").val(str[0].faccountType);
                $("#maccountType").val(str[0].maccountType);
                $("#fcellPhoneNum").val(str[0].fcellPhoneNum);
                $("#mcellPhoneNum").val(str[0].mcellPhoneNum);
                $("#mtime").val(str[0].mtime);
                $("#addressVillage").val(str[0].addressVillage);
                defaults = [{
                    s1: 'maccountLocationProvince',
                    s2: 'maccountLocationCity',
                    s3: 'maccountLocationCounty',
                    v1: str[0].maccountLocationProvince,
                    v2: str[0].maccountLocationCity,
                    v3: str[0].maccountLocationCounty
                },
                    {
                        s1: 'faccountLocationProvince',
                        s2: 'faccountLocationCity',
                        s3: 'faccountLocationCounty',
                        v1: str[0].faccountLocationProvince,
                        v2: str[0].faccountLocationCity,
                        v3: str[0].maccountLocationCounty
                    },
                    {
                        s1: 'addressProvince',
                        s2: 'addressCity',
                        s3: 'addressCounty',
                        v1: str[0].addressProvince,
                        v2: str[0].addressCity,
                        v3: str[0].addressCounty
                    }];
                $.each(defaults, function (index, item) {
                	//console.log(item);
                    if (item) {
                        treeSelect(item);
                    } else {
                        treeSelect(defaults);
                    }
                });
                
                $("#maccountLocationVillage").val(str[0].maccountLocationVillage);
                $("#postCode").val(str[0].postCode);
                $("#phoneNum").val(str[0].phoneNum);
                $("#remindLocationId").val(str[0].remindLocationId);
                $("#doctorName").val(str[0].doctorName);
                $("#hasContent").val(str[0].hasContent);
                $("#serviceTime").val(fmtDate(str[0].serviceTime));
                $("#K1").val(str[0].tblCrresPonding.k1);
                $("#emailW").val(str[0].emailW);
                $("#emailN").val(str[0].emailN);
                $("#wechatW").val(str[0].wechatW);
                $("#wechatN").val(str[0].wechatN);
                $("#QQW").val(str[0].qQW);
                $("#QQN").val(str[0].qQN);
                $("#floatPopulation").val(str[0].floatPopulation);
                $("#faccountLocationCity").val(str[0].faccountLocationCity);
                $("#faccountLocationVillage").val(str[0].faccountLocationVillage);
                //修改档案
                $("#preservation").click(function () {
                    var checkidcard = /^[1-9]\d{7}((0[1-9])|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|(X|x))$/;
                    var checkbbirthday = /^\d{4}-\d{1,2}-\d{1,2}$/;
                    var checkage = /^[0-9]*$/;
                    var checkName = /^[\u4e00-\u9fa5]{0,}$/;
                    if ($("#fname").val() == "") {
                        alert("请填写妻子姓名！");
                        return false;
                    }
                    if (!checkName.test($("#fname").val())) {
                        alert("妻子姓名请填写中文汉字！");
                        return false;
                    }
                    if ($("#mname").val() == "") {
                        alert("请填写丈夫姓名！");
                        return false;
                    }
                    if (!checkName.test($("#mname").val())) {
                        alert("丈夫姓名请填写中文汉字！");
                        return false;
                    }
                    if ($("#fidCard").val() == "") {
                        alert("请填写妻子证件号码！");
                        return false;
                    }
                    if (!checkidcard.test($("#fidCard").val())) {
                        alert("妻子证件号码格式不正确！(如果有X必须大写)");
                        return false;
                    }
                    if ($("#midCard").val() == "") {
                        alert("请填写丈夫证件号码！");
                        return false;
                    }
                    if (!checkidcard.test($("#midCard").val())) {
                        alert("丈夫证件号码格式不正确！(如果有X必须大写)");
                        return false;
                    }
                    if ($("#fbirthDate").val() == "") {
                        alert("请填写妻子出生日期！");
                        return false;
                    }
                    if (!checkbbirthday.test($("#fbirthDate").val())) {
                        alert("妻子出生日期格式不正确！(格式为：yyyy-mm-dd)");
                        return false;
                    }
                    if ($("#mbirthDate").val() == "") {
                        alert("请填写丈夫出生日期！");
                        return false;
                    }
                    if (!checkbbirthday.test($("#mbirthDate").val())) {
                        alert("丈夫出生日期格式不正确！(格式为：yyyy-mm-dd)");
                        return false;
                    }
                    if ($("#fidCard").val().toLowerCase() == $("#midCard").val().toLowerCase()) {
                        alert("双方证件号码不能相同！");
                        return false;
                    }
                    if ($("#fage").val() == "") {
                        alert("请填写妻子年龄！");
                        return false;
                    }
                    if (!checkage.test($("#fage").val())) {
                        alert("妻子年龄只能填写数字！！");
                        return false;
                    }
                    if ($("#mage").val() == "") {
                        alert("请填写丈夫年龄！");
                        return false;
                    }
                    if (!checkage.test($("#mage").val())) {
                        alert("丈夫年龄只能填写数字！！");
                        return false;
                    }
                    if ($("#mcellPhoneNum").val() == "") {
                        alert("请填写丈夫号码！");
                        return false;
                    }
                    if ($("#fcellPhoneNum").val() == "") {
                        alert("请填写妻子号码");
                        return false;
                    }
                    if ($("#maccountLocationProvince").val() == "") {
                        alert("请选择丈夫户口所在省！！");
                        return false;
                    }
                    if ($("#maccountLocationCity").val() == "") {
                        alert("请选择丈夫户口所在市！");
                        return false;
                    }
                    if ($("#maccountLocationCounty").val() == "") {
                        alert("请选择丈夫户口所在县！");
                        return false;
                    }
                    if ($("#maccountLocationCountry").val() == "") {
                        alert("请选择丈夫户口所在乡！");
                        return false;
                    }
                    if ($("#maccountLocationVillage").val() == "") {
                        alert("请填写丈夫户口所在村！");
                        return false;
                    }
                    if ($("#faccountLocationProvince").val() == "") {
                        alert("请选择妻子户口所在省！");
                        return false;
                    }
                    if ($("#faccountLocationCity").val() == "") {
                        alert("请选择妻子户口所在市！");
                        return false;
                    }
                    if ($("#faccountLocationCounty").val() == "") {
                        alert("请选择妻子户口所在县！");
                        return false;
                    }
                    if ($("#faccountLocationCountry").val() == "") {
                        alert("请选择妻子户口所在乡！");
                        return false;
                    }
                    if ($("#faccountLocationVillage").val() == "") {
                        alert("请填写妻子户口所在村！");
                        return false;
                    }
                    if ($("#addressProvince").val() == "") {
                        alert("请选择妻子现住址所在省！");
                        return false;
                    }
                    if ($("#addressCity").val() == "") {
                        alert("请选择妻子现住址所在市！");
                        return false;
                    }
                    if ($("#addressCounty").val() == "") {
                        alert("请选择妻子现住址所在县！");
                        return false;
                    }
                    if ($("#addressCountry").val() == "") {
                        alert("请选择妻子现住址所在乡！");
                        return false;
                    }
                    if ($("#addressVillage").val() == "") {
                        alert("请填写妻子现住址所在村！");
                        return false;
                    }
                    if (nanimg == undefined) {
                        nanimg = "";
                    } else {
                        nanimg += "data:image/jpeg;base64,";
                    }
                    if (nanzhiwen == undefined) {
                        nanimg = "";
                    }
                    if (nvimg == undefined) {
                        nvimg = "";
                    }
                    if (nvzhiwen == undefined) {
                        nvzhiwen = "";
                    }
                    $.ajax({
                        type: "POST",
                        url: "updateArchives.action",
                        data: {
                            "mif.ID": $("#ID").val(),
                            "mif.fname": $("#fname").val(),
                            "mif.mname": $("#mname").val(),
                            "mif.fnationality": $("#fnationality").val(),
                            "mif.mnationality": $("#mnationality").val(),
                            "mif.fidCardType": $("#fidCardType").val(),
                            "mif.midCardType": $("#midCardType").val(),
                            "mif.fidCard": $("#fidCard").val(),
                            "mif.midCard": $("#midCard").val(),
                            "mif.fbirthDate": $("#fbirthDate").val(),
                            "mif.mbirthDate": $("#mbirthDate").val(),
                            "mif.fage": $("#fage").val(),
                            "mif.mage": $("#mage").val(),
                            "mif.feduLevel": $("#feduLevel").val(),
                            "mif.meduLevel": $("#meduLevel").val(),
                            "mif.fjob": $("#fjob").val(),
                            "mif.mjob": $("#mjob").val(),
                            "mif.fjobOthers": $("#fjobOthers").val(),
                            "mif.mjobOthers": $("#mjobOthers").val(),
                            "mif.faccountType": $("#faccountType").val(),
                            "mif.maccountType": $("#maccountType").val(),
                            "mif.fcellPhoneNum": $("#fcellPhoneNum").val(),
                            "mif.mcellPhoneNum": $("#mcellPhoneNum").val(),
                            "mif.mtime": $("#mtime").val(),
                            "mif.maccountLocationProvince": $("#maccountLocationProvince").val(),
                            "mif.maccountLocationCity": $("#maccountLocationCity").val(),
                            "mif.maccountLocationCounty": $("#maccountLocationCounty").val(),
                            "mif.maccountLocationCountry": $("#maccountLocationCountry").val(),
                            "mif.maccountLocationVillage": $("#maccountLocationVillage").val(),
                            "mif.faccountLocationProvince": $("#faccountLocationProvince").val(),
                            "mif.faccountLocationCity": $("#faccountLocationCity").val(),
                            "mif.faccountLocationCounty": $("#faccountLocationCounty").val(),
                            "mif.faccountLocationCountry": $("#faccountLocationCountry").val(),
                            "mif.faccountLocationVillage": $("#faccountLocationVillage").val(),
                            "mif.addressProvince": $("#addressProvince").val(),
                            "mif.addressCity": $("#addressCity").val(),
                            "mif.addressCounty": $("#addressCounty").val(),
                            "mif.addressCountry": $("#addressCountry").val(),
                            "mif.addressVillage": $("#addressVillage").val(),
                            "mif.postCode": $("#postCode").val(),
                            "mif.phoneNum": $("#phoneNum").val(),
                            "mif.doctorName": $("#doctorName").val(),
                            "mif.hasContent": $("#hasContent").val(),
                            "mif.serviceTime": new Date($("#serviceTime").val()),
                            "tbl.ID": $("#ID").val(),
                            "tbl.K1": $("#K1").val(),
                            "mif.emailW": $("#emailW").val(),
                            "mif.emailN": $("#emailN").val(),
                            "mif.wechatW": $("#wechatW").val(),
                            "mif.wechatN": $("#wechatN").val(),
                            "mif.QQW": $("#QQW").val(),
                            "mif.QQN": $("#QQN").val(),
                            "mif.floatPopulation": $("#floatPopulation").val(),
                            "lfinger.ID": $("#ID").val(),
                            "lfinger.FImage": nvimg,
                            "lfinger.Ffinger": nvzhiwen,
                            "lfinger.MImage": nanimg,
                            "lfinger.Mfinger": nanzhiwen,
                        },
                        dataType: "json",
                        success: function (data) {
                            if (data > 0) {
                                alert("修改成功！");
                            }
                        }
                    })
                })
            }
        }
    })

    $("#printBasicInfo").click(function () {
        var ID = $("#ID").val();
        window.open("basicInformation.action" + "?" + ID);
    })

    var $form;
    var form;
    layui.define(['jquery', 'form'], function () {
        //$ = layui.jquery;
        form = layui.form;
        $form = $('form');
       // console.log(defaults);
        /*$.each(defaults, function (index, item) {
            if (item) {
                treeSelect(item);
            } else {
                treeSelect(defaults);
            }
        })*/
    });

    function treeSelect(config) {
        config.v1 = config.v1 ? config.v1 : '北京';
        config.v2 = config.v2 ? config.v2 : '北京';
        config.v3 = config.v3 ? config.v3 : '东城区';

        $.each(threeSelectData, function (k, v) {
            appendOptionTo($form.find('select[name=' + config.s1 + ']'), k, k, config.v1);
        });
        form.render();
        cityEvent(config);
        areaEvent(config);
        form.on('select(' + config.s1 + ')', function (data) {
            cityEvent(data);
            form.on('select(' + config.s2 + ')', function (data) {
                areaEvent(data);
            });
        });

        function cityEvent(data) {
            $form.find('select[name=' + config.s2 + ']').html("");
            config.v1 = data.value ? data.value : config.v1;
            $.each(threeSelectData, function (k, v) {
                if (k == config.v1) {
                    if (v.items) {
                        $.each(v.items, function (kt, vt) {
                            appendOptionTo($form.find('select[name=' + config.s2 + ']'), kt, kt, config.v2);
                        });
                    }
                }
            });
            form.render();
            config.v2 = $('select[name=' + config.s2 + ']').val();
            areaEvent(config);
        }

        function areaEvent(data) {
            $form.find('select[name=' + config.s3 + ']').html("");
            config.v2 = data.value ? data.value : config.v2;
            $.each(threeSelectData, function (k, v) {
                if (k == config.v1) {
                    if (v.items) {
                        $.each(v.items, function (kt, vt) {
                            if (kt == config.v2) {
                                $.each(vt.items, function (ka, va) {
                                    appendOptionTo($form.find('select[name=' + config.s3 + ']'), ka, ka, config.v3);
                                });
                            }
                        });
                    }
                }
            });
            form.render();
            form.on('select(' + config.s3 + ')', function (data) {
            });
        }

        function appendOptionTo($o, k, v, d) {
            var $opt = $("<option>").text(k).val(v);
            if (v == d) {
                $opt.attr("selected", "selected")
            }
            $opt.appendTo($o);
        }
    }


});

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "/";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

function fmtDate(obj) {
    var date = new Date(obj);
    var y = 1900 + date.getYear();
    var m = "0" + (date.getMonth() + 1);
    var d = "0" + date.getDate();
    return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);
}


var nvimg;//女方图片       	
var nvzhiwen;//女方指纹
var nanimg;//男方图片       	
var nanzhiwen;//男方指纹
function duqu() {
    var form;
    var laydate;
    layui.use(['form', 'laydate'], function () {
        form = layui.form;
        laydate = layui.laydate;
    });
    $.ajax({
        dataType: "JSONP", //返回值类型                   
        type: "get",//请求方式
        url: "http://localhost:9999/api/ReadMsg?Fp=1",//接口服务器地址
        success: function (data) {//返回值 data       	 
            var myDate = new Date();         //获取当前时间
            var year = myDate.getFullYear();   //获取当前年
            var month = myDate.getMonth() + 1; 	//获取当前月
            var date = myDate.getDate();		//获取当前日
            var birthydate = data.born;             //出生日期
            var birthyear = birthydate.substring(0, 4);  //出生年
            var birthmonth = birthydate.substring(4, 6);  //出生月
            var birthdates = birthydate.substring(6, 8);   //出生日

            //计算当前年龄 
            var age;  //当前年龄
            var ageyear = year - birthyear   //当前年-出生年
            var str = birthyear + "-" + birthmonth + "-" + birthdates //出生日期yyy-MM-dd格式
            if (month >= birthmonth) {      //计算今天是否满了年龄 
                if (date >= birthdates) {
                    age = ageyear;
                } else {
                    age = ageyear - 1;
                }

            } else {
                age = ageyear - 1;
            }
            if (data.sex == "女") {  //性别
                $("#fname").val(data.name);         //姓名
                var dataminzu1 = data.nation + "族";
                //民族 
                $("#fnationality option[value='" + dataminzu1 + "']").attr("selected", "");
                $("#fidCard").val(data.cardno);   //身份证号  
                $("#fbirthDate").val(str);           //出生  
                $("#fage").val(age);            //年龄
                $("#faddress").val(data.address); //住址          
                nvimg = data.photopngbase64//女方图片 
                nvzhiwen = data.FpData//女方指纹
                form.render('select'); //刷新select选择框渲染
            } else {
                $("#mname").val(data.name);        //姓名
                var dataminzu = data.nation + "族";
                $("#mnationality option[value='" + dataminzu + "']").attr("selected", "");
                $("#midCard").val(data.cardno);  //身份证号  
                $("#mbirthDate").val(str);    //出生  
                $("#mage").val(age);              //年龄
                $("#maddress").val(data.address);//住址             
                nanimg = data.photopngbase64//男方图片 
                nanzhiwen = data.FpData//男方指纹
                form.render('select'); //刷新select选择框渲染

            }
        },
        error: function (e) {
            //失败执行
            alert("读取失败！");
        }
    });
}


function funClear() {
    var txts = document.getElementsByTagName("input");
    for (var i = 0; i < txts.length; i++) {
        if (txts[i].type == "text") {
            txts[i].value = "";
        }
    }
    window.location.reload();
}

function fidCardJs() {
    var fidCard = $("#fidCard").val().trim();
    var fbirthDate = "";
    var fage = "";
    var checkidcard = /^[1-9]\d{7}((0[1-9])|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|(X|x))$/;
    if (fidCard != "") {
        if (!checkidcard.test(fidCard)) {
            alert("妻子证件号码格式不正确！");
        } else {
            var myDate = new Date();
            var month = myDate.getMonth() + 1;
            var day = myDate.getDate();
            var fage = myDate.getFullYear() - fidCard.substring(6, 10) - 1;
            if (fidCard.substring(10, 12) < month || fidCard.substring(10, 12) == month && fidCard.substring(12, 14) <= day) {
                fage++;
            }
            $("#fage").val(fage);
            fbirthDate = fidCard.substring(6, 10) + "-" + fidCard.substring(10, 12) + "-" + fidCard.substring(12, 14);
            $("#fbirthDate").val(fbirthDate);
        }
    }
}


function midCardJs() {
    var midCard = $("#midCard").val().trim();
    var mbirthDate = "";
    var mage = "";
    var checkidcard = /^[1-9]\d{7}((0[1-9])|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|(X|x))$/;
    if (midCard != "") {
        if (!checkidcard.test(midCard)) {
            alert("丈夫证件号码格式不正确！");
        } else {
            var myDate = new Date();
            var month = myDate.getMonth() + 1;
            var day = myDate.getDate();
            var mage = myDate.getFullYear() - midCard.substring(6, 10) - 1;
            if (midCard.substring(10, 12) < month || midCard.substring(10, 12) == month && midCard.substring(12, 14) <= day) {
                mage++;
            }
            $("#mage").val(mage);
            mbirthDate = midCard.substring(6, 10) + "-" + midCard.substring(10, 12) + "-" + midCard.substring(12, 14);
            $("#mbirthDate").val(mbirthDate);
        }
    }
}
