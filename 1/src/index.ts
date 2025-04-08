export {};

let name: string = "Martin"
let age: number = 23;
let professor: boolean = true;

let profession: any = true;

let grades: number[] = [7, 10, 10, 5];
let students: string[] = ["Martin", "Filip"];

let username: string | boolean = "Martin"; // Moze da bide string ili moze da bide i boolean

let mixNumbersAndStrings: (string | number)[] = ["Martin", "Filip", 7, 10]; // ova e niza koja moze da bide niza broevi i niza na stringovi

// Tuple - Fixna niza: "string", number
let info: [string, number] = ["Martin", 31];


interface userInfoInterface {
    name: string,
    age: number,
    friends: string[]
}

let userInfo: userInfoInterface = {
    name: "Martin",
    age: 31,
    friends: ["John", "Doe"],
};


interface CarConfigInterface {
    engine_volume: number;
    seats: number;
    steering_wheel_side: string
}


interface CarRulesInterface {
    mark: string,
    model: string,
    config: CarConfigInterface,
}

let cars: CarRulesInterface[] = [
    {
        mark: "Audi",
        model: "A4",
        config: {
            engine_volume: 2000,
            seats: 5,
            steering_wheel_side: "left"
        }
    },
    {
        mark: "BMW",
        model: "M5",
        config: {
            engine_volume: 5000,
            seats: 2,
            steering_wheel_side: "left"
        }
    }
];

// console.log(cars)


const carListButton = document.getElementById("showCarsButton") as HTMLButtonElement;
const carListDiv = document.getElementById("carList") as HTMLDivElement;

const carList: carListType[] = [
    {
        brand: "audi",
        model: "a4",
        price: 2000,
        vehicle_type: "car"
    },
    {
        brand: "bmw",
        model: "m5",
        price: 3000,
        vehicle_type: "car"
    },
    {
        brand: "bmw",
        model: "",
        price: 5000,
        vehicle_type: "bike"
    },
];


type carListType = {
    brand: string,
    model: string,
    price: number,
    vehicle_type: "car" | "bike"
};


carListButton.addEventListener("click", () => {

    // listCars(carList);
    console.log(getMostExpensiveCar(carList));

})

const listCars = (carList: carListType[]): void => {
    for (let car of carList) {

        const carParagraph: HTMLParagraphElement = document.createElement("p");
        carParagraph.innerText = car.brand;

        const carPrices = calculateCarPriceRange(car.brand);
        const priceParagraph: HTMLParagraphElement = document.createElement("p");
        priceParagraph.innerText += `Starting from ${carPrices[0]} to ${carPrices[1]}`;

        carListDiv.append(carParagraph, priceParagraph);
    }
}

const calculateCarPriceRange = (car: string): [number, number] => {
    if (car === "audi") {
        return [1000, 20000];
    } else if (car === "bmw") {
        return [5000, 25000];
    } else {
        return [0, 100000];
    }
}


const getMostExpensiveCar = (cars: carListType[]): carListType => {
    return cars.reduce((maxCar, currentCar) => {
        return currentCar.price > maxCar.price ? currentCar : maxCar;
    })
}