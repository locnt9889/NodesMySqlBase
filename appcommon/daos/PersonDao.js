/**
 * Created by LocNT on 7/30/15.
 */

var MysqlHelper = new require("../helpers/MysqlHelper");
var personDao = new MysqlHelper("person");
MysqlHelper.prototype.test = function(){
    console.log("test");
}
/*Export*/
module.exports = personDao;