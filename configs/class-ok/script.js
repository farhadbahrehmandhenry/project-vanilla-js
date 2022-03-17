var description = document.querySelector('.description');
var isAContainer = document.querySelector('.is-a-container');

class Rectangle {
  constructor({width=10, height=5, color='white', count='-has-a'}) {
    this.height = height;
    this.width = width;
    this.color = color;
    this.count = count;
    this.isAchildrenCount = 0
  }

  onAbstractionClick(e) { 
    if (e.target.getAttribute('data-id') == this.count) {
      rectShape.style.transform = 'rotate(360deg)';

      setTimeout(() => {
        rectShape.style.transform = 'rotate(0deg)';
      }, 500);
    
      var text = 'How did you rotate that shape? ';
      text += 'ABSTRACTION means using simple things to represent complexity. ';
      text += 'simple things like objects, classes and variables represent more complex underlying code and data. '
      text += 'This is important because it lets you avoid repeating the same work multiple times.';
    
      description.innerText = text;
    }
  }

  onEncapsulationClick(e) { 
    if (e.target.getAttribute('data-id') == this.count) {
      description.innerText = '';

      var text = `This is a ${this.width} * ${this.height} rectanglr. `;
      text += 'But you didn\'t know before you click the button. by clicking on the button, ';
      text += 'you triggered a method to reveal this information. '
      text += 'The practice of keeping fields within a class private, then providing ';
      text += 'access to those fields via public methods. Encapsulation is a protective ';
      text += 'barrier that keeps the data and code safe within the class itself. ';
      text += 'We can then reuse objects like code components or variables without ';
      text += 'allowing open access to the data system-wide.';
    
      description.innerText = text;
    }
  }

  onPolymorphismInput(e) {
    if (e.target.getAttribute('data-id') == this.count) {
      if (e.target.value === 'override') {
        this.printMyName();
      }
      else if (e.target.value === 'overload') {
        description.innerText = '';
        var text = 'Overload is not supported in JavaScript. ';
        text += 'but in other languages like JAVA, it occurs when two or more methods in one class have the same method name but different parameters.';
        description.innerText = text;
      }
    }
  }

  onIsASelect(e) {
    if (e.target.getAttribute('data-id') == this.count &&  this.isAchildrenCount < 1) {
      this.isAchildrenCount = this.isAchildrenCount + 1;
      var isAContainer = document.querySelector('.is-a-container');
      var square = new Square({width: 5, count: this.isAchildrenCount + 1});
      var rectangle = document.createElement('div');

      rectangle.classList.add('rectangle');
      
      rectangle.innerHTML = square.populateHtml();
      isAContainer.appendChild(rectangle);

      setTimeout(() => {
        document.querySelector(`.inheritance-dropdown${this.isAchildrenCount + 1}`).addEventListener('input', (e) => {
          square.onHasASelect(e);
          square.onIsASelect(e);
        });

        document.querySelector(`.polymorphism-dropdown${this.isAchildrenCount + 1}`).addEventListener('input', (e) => {
          square.printMyName();
        });
      }, 500);
    }

    var inheritanceBtn = document.querySelector(`.inheritance-dropdown${this.isAchildrenCount}`);
    inheritanceBtn.value = 'select';
  }

  onHasASelect(e) {
    if (e.target.getAttribute('data-id') == this.count) {
      var color = e.target.value === 'has-a-red' ? 'red' : 'blue'
      var hasAContainer = document.querySelector('.has-a-container');
      var inheritanceBtn = document.querySelector(`.inheritance-dropdown${this.count}`);
      inheritanceBtn.value = 'select';

      var rectangleEl = new Rectangle({color: color});
      var rectangle = document.createElement('div');
      rectangle.classList.add('rectangle-has-a');
      
      rectangle.innerHTML = rectangleEl.populateHtmlHasA();
      hasAContainer.appendChild(rectangle);
    }
  }

  printMyName() {
    description.innerText = '';
    var text = `My name is Rectangle`;
    description.innerText = text;
  }

  populateHtmlHasA() {
    return `
    <div class="shape" style="width:${this.width}rem; height:${this.height}rem; background-color:${this.color}"></div>
    `
  }

  populateHtml() {
    return `
    <div class="shape" data-id=${this.count} style="width:${this.width}rem; height:${this.height}rem; background-color:${this.color}"></div>
    <div class="concepts">
      <div class="abstration">
        <div>ABSTRACTION</div>
        <button class="abstraction-btn" data-id=${this.count}>SHOW ME</button>
      </div>
      <div class="encapsulation">
        <div>ENCAPSULATION</div>
        <button class="encapsulation-btn" data-id=${this.count}>SHOW ME</button>
      </div>
      <div class="inheritence">
        <div>INHERITANCE</div>
        <select class="inheritance-dropdown${this.count}" data-id=${this.count}>
          <option value="select">Select Inheritance Type</option>
          <option value="is-a">IS-A - a Square IS-A Rctangle with equal height and width</option>
          <option value="has-a-red">HAS-A - a red rectangle HAS-A red color</option>
          <option value="has-a-blue">HAS-A - a blue rectangle HAS-A blue color</option>
        </select>
      </div>
      <div class="polymorphism">
        <div>POLYMORPHISM</div>
        <select class="polymorphism-dropdown${this.count}" data-id=${this.count}>
          <option value="select">Select Polymorphism Type</option>
          <option value="override">Override - call 'printMyName' method</option>
          <option value="overload">Overload</option>
        </select>
      </div>
    </div>
  `
  }
}

class Square extends Rectangle {
  constructor({width=5, color='white', count}) {    
    super({width: width, height: width, color: color, count: count});

    this.isAchildrenCount = 2;
  }

  onHasASelect(e) { 
    if (e.target.getAttribute('data-id') == this.count) {
      if (e.target.value === 'has-a-red' || e.target.value === 'has-a-blue') {
        var color = e.target.value === 'has-a-red' ? 'red' : 'blue'
        var hasAContainer = document.querySelector('.has-a-container');
        var inheritanceBtn = document.querySelector(`.inheritance-dropdown${this.count}`);
        inheritanceBtn.value = 'select';
  
        var rectangleEl = new Square({width: this.width, color: color});
        var rectangle = document.createElement('div');
        rectangle.classList.add('rectangle-has-a');

        rectangle.innerHTML = rectangleEl.populateHtmlHasA();
        hasAContainer.appendChild(rectangle);
      }
    }
  }

  onIsASelect(e) {
    if (e.target.getAttribute('data-id') == this.count &&  this.isAchildrenCount < 3 && e.target.value === 'is-a') {
      var isAContainer = document.querySelector('.is-a-container');
      var squareCircle = new SquareCircle({width: 5, count: this.isAchildrenCount + 1});
      var rectangle = document.createElement('div');

      rectangle.classList.add('rectangle');
      
      rectangle.innerHTML = squareCircle.populateHtml();
      isAContainer.appendChild(rectangle);

      setTimeout(() => {
        document.querySelector(`.inheritance-dropdown${this.isAchildrenCount}`).addEventListener('input', (e) => {
          squareCircle.onHasASelect(e);
        });

        document.querySelector(`.polymorphism-dropdown${this.isAchildrenCount}`).addEventListener('input', (e) => {
          squareCircle.printMyName();
        });
      }, 500);

      this.isAchildrenCount = this.isAchildrenCount + 1;
    }

    var inheritanceBtn = document.querySelector(`.inheritance-dropdown${this.isAchildrenCount}`);
    inheritanceBtn.value = 'select';
  }

  printMyName() {
    description.innerText = '';
    var text = `My name is Square`;
    description.innerText = text;
  }
  
  populateHtmlHasA() {
    return `
    <div class="shape" style="width:${this.width}rem; height:${this.height}rem; background-color:${this.color}"></div>
    `
  }

  populateHtml() {
    return `
    <div class="shape" data-id=${this.isAchildrenCount} style="width: ${this.width}rem; height: ${this.height}rem;"></div>
    <div class="concepts">
      <div class="inheritence">
        <div>INHERITANCE</div>
        <select class="inheritance-dropdown${this.isAchildrenCount}" data-id=${this.isAchildrenCount}>
          <option value="select">Select Inheritance Type</option>
          <option value="is-a">IS-A - a square with a circle in the middle IS-A Square</option>
          <option value="has-a-red">HAS-A - a red square HAS-A red color</option>
          <option value="has-a-blue">HAS-A - a blue square HAS-A blue color</option>
        </select>
      </div>
      <div class="polymorphism">
        <div>POLYMORPHISM</div>
        <select class="polymorphism-dropdown${this.isAchildrenCount}" data-id=${this.isAchildrenCount}>
          <option value="select">Select Polymorphism Type</option>
          <option value="override">Override - call 'printMyName' method</option>
        </select>
      </div>
    </div>
  `
  }
}

class SquareCircle extends Rectangle {
  constructor({width=5, color='white', count}) {    
    super({width: width, height: width, color: color, count: count});

    this.isAchildrenCount = 0;
  }

  onHasASelect(e) { 
    if (e.target.getAttribute('data-id') == this.count) {
      if (e.target.value === 'has-a-red' || e.target.value === 'has-a-blue') {
        var color = e.target.value === 'has-a-red' ? 'red' : 'blue'
        var hasAContainer = document.querySelector('.has-a-container');
        var inheritanceBtn = document.querySelector(`.inheritance-dropdown${this.count}`);
        inheritanceBtn.value = 'select';
  
        var rectangleEl = new SquareCircle({color: color});
        var rectangle = document.createElement('div');
        rectangle.classList.add('rectangle-has-a');

        rectangle.innerHTML = rectangleEl.populateHtmlHasA();
        hasAContainer.appendChild(rectangle);
      }
    }
  }

  printMyName() {
    description.innerText = '';
    var text = `My name is Spotted Square`;
    description.innerText = text;
  }

  populateHtmlHasA() {
    return `
    <div 
      class="shape-square-circle" 
      style="width:${this.width}rem; height:${this.height}rem; background-color:${this.color}; display: flex; justify-content: center; align-items: center"
    >
      <div class="circle" style="width:${this.width - 2}rem; height:${this.height - 2}rem; background-color:black; border-radius: 50%;"></div>
    </div>
    `
  }

  populateHtml() {
    return `
      <div 
        class="shape-square-circle" 
        style="width:${this.width}rem; height:${this.height}rem; background-color:${this.color}; display: flex; justify-content: center; align-items: center"
      >
        <div class="circle" style="width:${this.width - 2}rem; height:${this.height - 2}rem; background-color:black; border-radius: 50%;"></div>
      </div>
      <div class="concepts">
        <div class="inheritence">
          <div>INHERITANCE</div>
          <select class="inheritance-dropdown${this.count}" data-id=${this.count}>
            <option value="select">Select Inheritance Type</option>
            <option value="has-a-red">HAS-A - a red spotted square HAS-A red color</option>
            <option value="has-a-blue">HAS-A - a blue spotted square HAS-A blue color</option>
          </select>
        </div>
        <div class="polymorphism">
          <div>POLYMORPHISM</div>
          <select class="polymorphism-dropdown${this.count}" data-id=${this.count}>
            <option value="select">Select Polymorphism Type</option>
            <option value="override">Override - call 'printMyName' method</option>
          </select>
        </div>
      </div>
  `
  }
}

var baseRectangle = new Rectangle({count: 1});
var rectangle = document.createElement('div');
rectangle.classList.add('rectangle');

rectangle.innerHTML = baseRectangle.populateHtml();

isAContainer.appendChild(rectangle);

var abstractionBtn = rectangle.querySelector('.abstraction-btn');
var encapsulationBtn = rectangle.querySelector('.encapsulation-btn');
var inheritanceBtn = rectangle.querySelector('.inheritance-dropdown1');
var polymorphismBtn = rectangle.querySelector('.polymorphism-dropdown1');
var rectShape = rectangle.querySelector("[data-id='1']");

abstractionBtn.addEventListener('click', (e) => {
  baseRectangle.onAbstractionClick(e);
});

encapsulationBtn.addEventListener('click', (e) => {
  baseRectangle.onEncapsulationClick(e);
});

polymorphismBtn.addEventListener('input', (e) => {
  baseRectangle.onPolymorphismInput(e);
});

inheritanceBtn.addEventListener('input', (e) => {
  if (e.target.value === 'is-a') {
    baseRectangle.onIsASelect(e)
  }
  else if (e.target.value === 'has-a-red' || e.target.value === 'has-a-blue') {
    baseRectangle.onHasASelect(e)
  }
});
