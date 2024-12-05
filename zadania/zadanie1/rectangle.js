class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }

    parimeter(){
        return this.width * 2 + this.height * 2;
    }
}
export default Rectangle