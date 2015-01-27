var mongoose = require("mongoose");
var Server;
(function (Server) {
    var MongoServer = (function () {
        function MongoServer() {
        }
        MongoServer.prototype.init = function (name) {
            var uri = "mongodb://localhost/" + name;
            mongoose.connect(uri, function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Connected!");
                }
            });
            var movieSchema = mongoose.Schema({
                name: String
            });
            this._movies = mongoose.model("Movies", movieSchema);
            var movie = new this._movies({ name: "TEST" });
            movie.save(function (err, movie) {
                if (err) {
                    console.log(err);
                }
            });
        };
        MongoServer.prototype.getMovies = function () {
            return this._movies.find(function (err, movies) {
                if (err) {
                    console.log(err);
                }
                else {
                    return movies;
                }
            });
        };
        return MongoServer;
    })();
    Server.MongoServer = MongoServer;
})(Server || (Server = {}));
module.exports = new Server.MongoServer();
//# sourceMappingURL=server.js.map