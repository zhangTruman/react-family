// 抽像 Reducers 生成器
export function reducerCreators (initialState, actionTypeMapList) {
    return (state = initialState, action) => {
      // 校验
      const reducerInstance = typeof actionTypeMapList === 'object' && actionTypeMapList[action.type] ? actionTypeMapList[action.type](state, action.payload ? action.payload : {}, action.params) : state;
      return reducerInstance;
    };
  }

/*
* setCookie(name,value)
* 功能：设置cookie
* 参数：name，cookie的名称.
* 参数：value,cookie的值.
*/
export function setCookie(name, value) {
    let Days = 1;
    let exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString();
}

export function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

export function delCookie($name){
    var myDate=new Date();
    myDate.setTime(-1000);//设置时间
    document.cookie=$name+"=''; expires="+myDate.toGMTString();
}

export function delAllCookie(){
    var myDate=new Date();
    myDate.setTime(-1000);//设置时间
    var data=document.cookie;
    var dataArray=data.split("; ");
    for(var i=0;i<dataArray.length;i++){
         var varName=dataArray[i].split("=");
         document.cookie=varName[0]+"=''; expires="+myDate.toGMTString();
    }

}