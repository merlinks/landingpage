function getYmid() {
    try {
        return new URL(location.href).searchParams.get('ymid');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
function getVar() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
self.options = {
    "domain": "gauvaiho.net",
    "resubscribeOnInstall": true,
    "zoneId": 5868422,
    "ymid": getYmid(),
    "var": getVar()
}
self.lary = "";
importScripts('sw.perm.check.min.js');
