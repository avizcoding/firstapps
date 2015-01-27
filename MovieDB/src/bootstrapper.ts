class Bootstrapper {
    public static init() {
        //window.onload(this.loadLogin());
    }

    private static loadLogin(): any {
        window.location.href = "/views/login.html"
    }
}

Bootstrapper.init();