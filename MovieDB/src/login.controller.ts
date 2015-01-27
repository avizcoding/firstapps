export module Login {
    export class LoginController {
        private _name: string;
        constructor(name: string) {
            this._name = name;
        }
        public func() {
            console.log(this._name);
        }
    }
}