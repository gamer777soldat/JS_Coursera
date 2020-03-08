module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.arr_collection = [];
}

Collection.prototype.values = function () {
    return this.arr_collection
};
Collection.prototype.at = function (n) {
    curN = n-1
    if (n==0 || this.arr_collection[curN] == undefined){
        return null
    }
    return  this.arr_collection[curN]
};
Collection.prototype.append = function (element) {
    if (Array.isArray(element)){
        this.arr_collection = this.arr_collection.concat(element)
    }else if(element instanceof Collection){
        this.arr_collection = this.arr_collection.concat(element.arr_collection)
    }else {
        this.arr_collection.push(element)
    }
};
Collection.prototype.removeAt = function (n) {
    curN = n-1
    if (n==0 || this.arr_collection[curN] == undefined){
        return false
    }
    this.arr_collection.splice(curN, 1)
    return  true
};
Collection.prototype.count = function () {
    return this.arr_collection.length
};
Collection.prototype.toString = function () {
    return this.collection;
};

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (array) {

var NewCollection = new Collection();
NewCollection.append(array);

return NewCollection;
};
