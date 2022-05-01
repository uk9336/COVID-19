export function getMonth() {
    var d = new Date();
    var month = ("0" + (1 + d.getMonth())).slice(-2);
    return month;
}
export function getDay() {
    var d = new Date();
    var day = ("0" + d.getDate()).slice(-2);
    return day;
}

export function getToday() {
    var d = new Date();
    var year = d.getFullYear();
    var month = ("0" + (1 + d.getMonth())).slice(-2);
    var day = ("0" + d.getDate()).slice(-2);

    return year + month + day;
}

export function get_month_day() {
    var d = new Date();
    var month = 1 + d.getMonth()
    var day = d.getDate()

    return month + "." + day;
}

export function handle15day() {
    const today = new Date();
    const newDay = new Date();
    return new Date().setDate(new Date().getDate())
}
// date : "2020-04-18T01:00:00.000Z"
// paramType : day, hour, minute
// param : 7(일주일), 5(시간), 3(분)
export function addTime() {
    let unit = 0;
    unit = 1000 * 60 * 60 * 24; // 일 단위
    return new Date(new Date(new Date()).getTime() + unit * 7);
};

export function days7List() {
    var list = []
    var now = new Date()
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 7)).getMonth())).slice(-2) + "." + new Date(new Date().setDate(now.getDate() - 7)).getDate())
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 7)).getMonth())).slice(-2) + "." + new Date(new Date().setDate(now.getDate() - 6)).getDate())
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 7)).getMonth())).slice(-2) + "." + new Date(new Date().setDate(now.getDate() - 5)).getDate())
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 7)).getMonth())).slice(-2) + "." + new Date(new Date().setDate(now.getDate() - 4)).getDate())
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 7)).getMonth())).slice(-2) + "." + new Date(new Date().setDate(now.getDate() - 3)).getDate())
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 7)).getMonth())).slice(-2) + "." + new Date(new Date().setDate(now.getDate() - 2)).getDate())
    list.push(("0" + (1 + new Date(new Date().setDate(now.getDate() - 7)).getMonth())).slice(-2) + "." + new Date(new Date().setDate(now.getDate() - 1)).getDate())
    return list
}

export function days7() {
    var now = new Date()
    var year = new Date(new Date().setDate(now.getDate() - 6)).getFullYear()
    var month = ("0" + (1 + new Date(new Date().setDate(now.getDate() - 6)).getMonth())).slice(-2);
    var day = ("0" + new Date(new Date().setDate(now.getDate() - 6)).getDate()).slice(-2);
    // console.log(year + month + day)
    return (year + "" + month + "" + day)
}

export function days1() {
    var now = new Date()
    var year = new Date(new Date().setDate(now.getDate())).getFullYear()
    var month = ("0" + (1 + new Date(new Date().setDate(now.getDate())).getMonth())).slice(-2);
    var day = ("0" + new Date(new Date().setDate(now.getDate())).getDate()).slice(-2);
    // console.log(year + month + day)
    return (year + "" + month + "" + day)
}