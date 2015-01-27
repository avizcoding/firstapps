import loginController = require("login.controller");

module Login {
    export class LoginView {

        private _controller: loginController.Login.LoginController;

        constructor() {
            this._controller = new loginController.Login.LoginController("loginController");
            console.log(this._controller);
        }

        public init() {
            console.log("View Initialized!");
        }

    }
}

var loginView = new Login.LoginView();
loginView.init();


//var logincontroller = new controller.Login.LoginController("test");
//console.log(logincontroller);

//module Login {

//    export class LoginView {

//        //private _loginController: Login.LoginController;

//        constructor() {
//            console.log("this");
//        }

//        private init(viewController: any): any {
//            window.onload(this.createContent());
//        }

//        private createContent(): any {
//            document.getElementById("content").innerHTML = "<p>test</p>";
//        }
//    }
//}

//var loginView = new Login.LoginView();