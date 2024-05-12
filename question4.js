class UberPriceCalculate{
    constructor(distance,duration){
        this.distance = distance;
        this.duration = duration;
    }

    calculatePrice(basePrice){
        const price = basePrice*this.distance;
        return price;
    }
}