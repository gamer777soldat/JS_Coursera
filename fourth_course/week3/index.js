/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {

    let promises = [];

    operations.forEach((operation) => {
        let prom = new Promise(function (resolve, reject) {

            let next = function (err, timing) {
                if (err == null) {
                    resolve(timing)
                } else {
                    reject(err)
                }
            };
            operation(next);
        });
        promises.push(prom)
    });
    Promise.all(promises).then(function (res) {
        callback(null, res)
    }, function (err) {
        callback(err)
    })

};