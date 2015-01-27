var mongoose = require("mongoose");

module Server {
    export class MongoServer {
        private _movies: any;

        public init(name: string): void {
            var uri = "mongodb://localhost/" + name;
            mongoose.connect(uri, function (err, res) {
                if (err) {
                    console.log(err);
                } else {
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
        }

        public getMovies(): any {
            return this._movies.find(function (err, movies) {
                if (err) {
                    console.log(err);
                } else {
                    return movies;
                }
            });
        }

        //public getMovie(name: string): void {
        //    this._movies.find({ name: name });
        //}

        //public addMovie(name: string): void {
        //    var movie = new this._movies({ name: name });
        //    movie.save(function (err, movie) {
        //        if (err) {
        //            console.log(err);
        //        }
        //    });
        //}
    }
}

module.exports = new Server.MongoServer();

//var mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost/testing", function (error, result) {
//    if (error) {
//        console.log(error);
//    } else {
//        //console.log(result);
//    }
//});

//var movieSchema = mongoose.Schema({
//    name: String
//});

//var movie = mongoose.model("Movies", movieSchema);

//var test = new movie({ name: "TEST" });
