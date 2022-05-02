export function getMonth() {
    var d = new Date();
    var month = ("0" + (1 + new Date(new Date().setDate(new Date().getDate() - 1)).getMonth())).slice(-2);
    return month;
}
export function getDay() {
    var d = new Date();
    var day = ("0" + new Date(new Date().setDate(new Date().getDate() - 1)).getDate()).slice(-2);
    return day;
}

export function getToday() {
    var d = new Date();
    var year = d.getFullYear();
    var month = ("0" + (1 + d.getMonth())).slice(-2);
    var day = ("0" + d.getDate()).slice(-2);

    return year + month + day;
}

// date : "2020-04-18T01:00:00.000Z"
// paramType : day, hour, minute
// param : 7(일주일), 5(시간), 3(분)
export function addTime() {
    let unit = 0;
    unit = 1000 * 60 * 60 * 24; // 일 단위
    return new Date(new Date(new Date()).getTime() + unit * 7);
};

/**
 * 최근 7주일 목록
 * 오늘 미포함
 */
export function days7List() {
    var list = []
    var now = new Date()
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 8)).getMonth())).slice(-2) + "." + ("0" + new Date(new Date().setDate(now.getDate() - 8)).getDate()).slice(-2))
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 7)).getMonth())).slice(-2) + "." + ("0" + new Date(new Date().setDate(now.getDate() - 7)).getDate()).slice(-2))
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 6)).getMonth())).slice(-2) + "." + ("0" + new Date(new Date().setDate(now.getDate() - 6)).getDate()).slice(-2))
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 5)).getMonth())).slice(-2) + "." + ("0" + new Date(new Date().setDate(now.getDate() - 5)).getDate()).slice(-2))
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 4)).getMonth())).slice(-2) + "." + ("0" + new Date(new Date().setDate(now.getDate() - 4)).getDate()).slice(-2))
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 3)).getMonth())).slice(-2) + "." + ("0" + new Date(new Date().setDate(now.getDate() - 3)).getDate()).slice(-2))
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 2)).getMonth())).slice(-2) + "." + ("0" + new Date(new Date().setDate(now.getDate() - 2)).getDate()).slice(-2))
    return list
}

/**
 * 7일전 날짜
 */
export function ago6Day() {
    var now = new Date()
    var year = new Date(new Date().setDate(now.getDate() - 7)).getFullYear()
    var month = ("0" + (1 + new Date(new Date().setDate(now.getDate() - 7)).getMonth())).slice(-2);
    var day = ("0" + new Date(new Date().setDate(now.getDate() - 7)).getDate()).slice(-2);
    return (year + "" + month + "" + day)
}

/**
 * 1일전 날짜
 */
export function ago1Day() {
    var now = new Date()
    var year = new Date(new Date().setDate(now.getDate())).getFullYear()
    var month = ("0" + (1 + new Date(new Date().setDate(now.getDate() - 1)).getMonth())).slice(-2);
    var day = ("0" + new Date(new Date().setDate(now.getDate() - 1)).getDate()).slice(-2);
    // console.log(year + month + day)
    return (year + "" + month + "" + day)
}