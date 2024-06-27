// code your solution here
function saturdayFun(activity=`roller-skate`){

    return `This Saturday, I want to ${activity}!`
}
const mondayWork=function (hobbie='go to the office'){

    return `This Monday, I will ${hobbie}.`
}
function wrapAdjective(parameter="*"){
    return function(geek=`special`){
        return (`You are ${parameter}${geek}${parameter}!`);
    }
}