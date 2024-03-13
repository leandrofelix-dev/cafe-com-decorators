class Cafe {
  cost() {}
  description() {}
}

class CafeBase extends Cafe {
  cost(){
    return 5;
  }
  description() {
    return "Café simples";
  }
}

class CafeDecorator extends Cafe {
  constructor(cafe) {
    super();
    this.cafe = cafe;
  }
  cost() {
    return this.cafe.cost();
  }
  description() {
    return this.cafe.description();
  }
}

class LeiteDecorator extends CafeDecorator {
  cost() {
    return this.cafe.cost() + 2;
  }
  description() {
    return this.cafe.description() + "+ Leite";
  }
}

class CanelaDecorator extends CafeDecorator {
  cost() {
    return this.cafe.cost() + 1;
  }
  description() {
    return this.cafe.description() + "+ Canela";
  }
}

function updateCafeOutput() {
  const output = document.getElementById('cafeOutput');
  output.textContent = meuCafe.description() + " - Custa: R$" + meuCafe.cost().toFixed(2);
}

let meuCafe = new CafeBase();
updateCafeOutput();

document.getElementById('addLeite').addEventListener('click', function() {
  meuCafe = new LeiteDecorator(meuCafe);
  updateCafeOutput();
});

document.getElementById('addCanela').addEventListener('click', function() {
  meuCafe = new CanelaDecorator(meuCafe);
  updateCafeOutput();
});
