let roomDimensions = {
    width: 50,
    length: 100,

    getArea: () => this.width * this.length,
};

console.log(roomDimensions.getArea());

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);

