class Controls {
    constructor(type) {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;
        this.mspeed = 3;
        this.curf = 0.01;
        this.fstate = false;
        switch (type) {
            case "KEYS":
                this.#addKeyboardListeners();
                break;
            case "DUMMY":
                this.forward = false;
                break;
        }
    }

    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "a":
                    this.left = true;
                    break;
                case "d":
                    this.right = true;
                    break;
                case "w":
                    this.forward = true;
                    break;
                case "s":
                    this.reverse = true;
                    break;

                case "1":
                    this.mspeed = 2;
                    console.log("test1")
                    break;
                case "2":
                    this.mspeed = 4;
                    break;
                case "3":
                    this.mspeed = 6;
                    break;
                case "4":
                    this.mspeed = 8;
                    break;
                case "5":
                    this.mspeed = 9;
                    break;
                case "6":
                    this.mspeed = 10;
                    break;
                case "f":
                    if (this.fstate == false) {
                        this.mspeed = 16;
                    }
                    else if (fstate == true) {
                        this.mspeed = 2;
                    }
                    break;

                case "l":
                    this.curf = 0.03;
                    break;

                case " ":
                    this.reverse = true;
                    this.forward = true;
                    break;

                case "ArrowLeft":
                    this.curf = 0.09;
                    break;
                case "ArrowRight":
                    this.curf = 0.09;
                    break;
            }
            //console.table(this)
        }

        document.onkeyup = (event) => {
            switch (event.key) {
                case "a":
                    this.left = false;
                    break;
                case "d":
                    this.right = false;
                    break;
                case "w":
                    this.forward = false;
                    break;
                case "s":
                    this.reverse = false;
                    break;

                case " ":
                    this.reverse = false;
                    this.forward = false;
                    break;

                case "ArrowLeft":
                    this.curf = 0.01;
                    break;
                case "ArrowRight":
                    this.curf = 0.01;
                    break;
            }
            //console.table(this)
        }
    }
}