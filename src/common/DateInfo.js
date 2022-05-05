export function getMonth() {
    var d = new Date();
    var month = ("0" + (1 + new Date(new Date().setDate(new Date().getDate())).getMonth())).slice(-2);
    return month;
}
export function getDay() {
    var d = new Date();
    var day = ("0" + new Date(new Date().setDate(new Date().getDate())).getDate()).slice(-2);
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
    for (var i = 1; i < 9; i++) {
        list.push(dateCalculation(i))
    }
    return list.reverse()
}

const dateCalculation = (day) => {
    var now = new Date()
    // 05.05 형태
    return ("0" + (1 + new Date(new Date().setDate(now.getDate() - day)).getMonth())).slice(-2) + "." + ("0" + new Date(new Date().setDate(now.getDate() - day)).getDate()).slice(-2)
}

/**
 * 
 * @param {이전 일 수} day 
 */
export const agoDay = (day) => {
    var now = new Date()
    var year = new Date(new Date().setDate(now.getDate() - day)).getFullYear()
    var month = ("0" + (1 + new Date(new Date().setDate(now.getDate() - day)).getMonth())).slice(-2);
    var day = ("0" + new Date(new Date().setDate(now.getDate() - day)).getDate()).slice(-2);
    return (year + "" + month + "" + day)
}
/**
 * 7일전 날짜
 * 20220505 형태
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
 * 20220505 형태
 */
export function ago1Day() {
    var now = new Date()
    var year = new Date(new Date().setDate(now.getDate())).getFullYear()
    var month = ("0" + (1 + new Date(new Date().setDate(now.getDate() - 0)).getMonth())).slice(-2);
    var day = ("0" + new Date(new Date().setDate(now.getDate() - 0)).getDate()).slice(-2);
    // console.log(year + month + day)
    return (year + "" + month + "" + day)
}