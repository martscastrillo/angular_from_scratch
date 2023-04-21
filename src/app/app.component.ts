import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
//estas variables deben tener un acceso publico
export class AppComponent {
  widthImg = 10;
  name = 'Marta';
  age = 32;
  img =
    'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-624x385@Las%20Provincias.jpg';
  btnDisable = true;
  register = {
    name: '',
    email: '',
    password: ''
  }
  person = {
    name: 'Marta',
    age: 32,
    avatar:
      'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-624x385@Las%20Provincias.jpg',
  };
  names: string[] = ['Laura', 'Moni', 'Ale'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };
  products : Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];
  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }
  ageIncrease(){
    this.person.age += 1;
  }
  onScroll(event : Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
    
  }
  changeName(event : Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index:number){
    this.names.splice(index, 1);
  }
  onRegister(){
    console.log(this.register);
  }
}
