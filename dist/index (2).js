// структура данных склада с одеждой
// главный объект со всеми данными, должен подходить под формат TotalWarehouse
var totalData = {
    jackets: 5,
    hats: "empty",
    socks: "empty",
    pants: 15,
    scissors: 15,
    paper: true,
    dishwashers: 3,
    cookers: "empty",
    mixers: 14,
    deficit: true,
    date: new Date()
};
// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)
// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.
function printReport(data) {
    //   const result: string = Object.entries(data)
    //     .filter((it) => it[1] === "empty")
    //     .map((it) => it[0])
    //     .toString();
    var result = Object.entries(data).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        if (value === "empty") {
            if (acc.length > 0) {
                acc += ", ";
            }
            acc += key;
        }
        return acc;
    }, "");
    return result.length >= 0
        ? "We need this items: " + result + "."
        : "Everything fine";
}
console.log(printReport(totalData));
