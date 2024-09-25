let cars = [];
const numberOfCars = 10;
class Car{
  constructor(){
    this.carName = this.nameGenerator();
    this.pS = Math.floor (Math.random()*300 + 50);
    this.fuelType = "Diesel"; //TODO
    this.gearType = "Automatic"; //TODO
    this.price = Math.floor (Math.random()*20000 + 5000);
    this.co2Emissions = Math.floor (Math.random()*300 + 50);
    this.fuelConsumption = Math.floor (Math.random()*15 + 1);;
    this.isProgressive = (Math.random() < 0.5);
    this.hasLedHighPerformanceLights = (Math.random() < 0.5);
    this.hasAdvancedPakage = (Math.random() < 0.5);
    this.imgSrc = this.getImgSrc();
    this.id;
    // this.createHTML();
  }

  nameGenerator(){
    const types = ["A", "B", "C", "D" ];
    const type = types[ Math.floor (Math.random()*types.length)];
    const number = Math.floor (Math.random()*300 + 50);
    const styles = ["Coupe", "Kompaktlimpusine", "Limousine", "Roadster", "SUV", "T-Modell" ];
    const style= styles[ Math.floor (Math.random()*styles.length)];

    return `${type} ${number} ${style} `;
  }
  getImgSrc(){
  const urls=[
    "https://cdn.pixabay.com/photo/2020/09/06/07/37/car-5548242_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-500-4322521_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/06/03/13/38/plymouth-796441_1280.jpg",
    "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.png"
  ];
  return urls[ Math.floor (Math.random()*urls.length)];
  }
  
  createHTML(){
    const htmlElement =
    `
     <div class="car">
          <img
            src="${this.imgSrc}"
            alt="" />
          <p class="carName fontSize2">${this.carName}</p>
          <div class="motorContainer fontSize07">
            <p class="pS">${this.pS} PS</p>
            <p class="fuelType">${this.fuelType}</p>
            <p class="gearType">${this.gearType}</p>
          </div>
          <div class="pricesContainer">
            <div class="priceContainer">
              <p class="fontSize07">Kaufpreis</p>
              <p class="price">€ ${this.price}</p>
            </div>
            <div class="priceContainer">
              <p class="fontSize07">monatliche Rate</p>
              <p class="price fontSize1">€ ${this.price/12}</p>
            </div>
          </div>
           <button class="detailButton fontSize15">detail button</button>
          <div class="details">
            <div class="extras">
              <div class="progressive extra fontSize07">Progressive</div>
              <div class="ledHighPerformanceLights extra fontSize07">
                Led High Performance Lights
              </div>
              <div class="advancedPakage extra fontSize07">Advanced Pakage</div>
            </div>
            <div class="consumptionSection">
              <div class="consumptionContainer fontSize07">
                <div>CO2-Emission gesamt</div>
                <div class="co2Emissions">${this.co2Emissions} g/km</div>
              </div>
              <div class="consumptionContainer fontSize07">
                <div>Kraftstoffverbrauch</div>
                <div class="co2Emissions">${this.fuelConsumption} l/100km</div>
              </div>
            </div>

          </div>
          
        </div>
    `;

    // document.getElementById("carContainer").insertAdjacentHTML("beforeend",htmlElement);

    const detailButtons = document.querySelectorAll(".detailButton");
    // console.log(detailButtons);
    detailButtons[detailButtons.length-1].addEventListener("click", onClickDetail)
    // console.log("car name: " + this.carName);
    // this.onClickDetail();
  }

  // onClickDetail(){
  //   console.log("in class");
  //   console.log("car name: " + this.carName);
  // }

}

let index=0;
for (let i = 0; i < numberOfCars; i++) {
  const car = new Car();
  car.id = index;
  index++;
  cars.push(car);
}


let output = document.getElementById("carContainer")
cars.forEach((element, i) => {
    output.innerHTML+= `
    <div class="car">
          <img
            src="${element.imgSrc}"
            alt="" />
          <p class="carName fontSize2">${element.carName}</p>
          <div class="motorContainer fontSize07">
            <p class="pS">${element.pS} PS</p>
            <p class="fuelType">${element.fuelType}</p>
            <p class="gearType">${element.gearType}</p>
          </div>
          <div class="pricesContainer">
            <div class="priceContainer">
              <p class="fontSize07">Kaufpreis</p>
              <p class="price">€ ${element.price}</p>
            </div>
            <div class="priceContainer">
              <p class="fontSize07">monatliche Rate</p>
              <p class="price fontSize1">€ ${element.price/12}</p>
            </div>
          </div>
           <button data-index ="${i}" class="detailButton fontSize15">detail button</button>
          <div class="details">
            <div class="extras">
              <div class="progressive extra fontSize07">Progressive</div>
              <div class="ledHighPerformanceLights extra fontSize07">
                Led High Performance Lights
              </div>
              <div class="advancedPakage extra fontSize07">Advanced Pakage</div>
            </div>
            <div class="consumptionSection">
              <div class="consumptionContainer fontSize07">
                <div>CO2-Emission gesamt</div>
                <div class="co2Emissions">${element.co2Emissions} g/km</div>
              </div>
              <div class="consumptionContainer fontSize07">
                <div>Kraftstoffverbrauch</div>
                <div class="co2Emissions">${element.fuelConsumption} l/100km</div>
              </div>
            </div>

          </div>
          
        </div>
    `
});

// const buttons = document.querySelectorAll(".detailButton")
// buttons.forEach((btn, index) =>{
//     btn.addEventListener("click", (e)=>{
//       console.log(cars[index]);
//       console.log(e.target.dataset.index);
      
      
//     })
// }
// )

let container = document.getElementById("carContainer");
container.addEventListener("click", (e)=>{
  if(e.target.dataset.index){
    let index = e.target.dataset.index
    console.log(cars[index]);
    
  }
})
function onClickDetail(){
  console.log(this);
  
  details = this.parentElement.querySelectorAll(".details");
  // console.log(details);
  details[0].style.display = "block";
  
}
//  console.log(cars[1].onClickDetail.call(cars[1]));
