function getZipByTownName(town) {
    var zip = 0;
    var arrTown = [
        ["Preston", 83237],
        ["Fish Haven", 83261],
        ["Soda Springs", 83230],
        ["Franklin", 83237],
        ["Placerton", 83666],
        ["Greenville", 83530],
        ["Springfield", 83277]
    ]
    var zip = 0;

    for (i = 0; i < arrTown.length; i++) {
        var arrNew = arrTown[i];
        if (arrNew[0] == town) {
            zip = arrNew[1];
            break;
        }
    }
    return zip;
}