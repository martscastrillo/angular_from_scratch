# Curso de Fundamentos de Angular

## Instalación de Angular CLI
Para comenzar con Angular, en primer lugar, se requiere tener instalado en tu computador NodeJS y NPM. Puedes verificar dicha instalación con el comando `node -v` y `npm -v`.
Comienza instalando el CLI de Angular con el comando `npm install -g @angular/cli`. Nótese el -g que indica que instalaremos Angular de manera global en tu computador para la posterior creación de tu primer proyecto.
### Tu primer proyecto
Para crear tu primer proyecto, basta con el comando `ng new myFirstProject`. El CLI de Angular te realizará las siguientes preguntas:
Primero pregunta si deseas emplear Angular Routing para la creación de rutas en tu aplicación. Se recomienda contestar siempre `Yes`, ya que, rara vez, una app no tendrá rutas. La segunda pregunta que realiza es si se desea utilizar un preprocesador de CSS pudiendo escojer entre SCSS, SASS, LESS o no utilizar un preprocesador. Se recomienda utilizar SCSS ya que es el más utilizado en la industria.

Luego de la creación de tu primer proyecto (puede demorar unos minutos en crearse) es hora de correr el servidor de desarrollo que Angular trae para hacer pruebas.

Ingresamos al directorio de nuestro proyecto:
```
cd myFirstProject
```
Y lanzamos el servidor de desarrollo con:
```
ng serve
```
Este comando preparará la aplicación para un entorno de desarrollo, no debe usarse en entornos productivos. Si ingresamos a `localhost:4200/` podrás observar tu primera aplicación de Angular.

- Verifica versión de Node: `node -v
- Verifica versión de npm: `npm -v`
- Instala el CLI de Angular:` npm -g @angular/cli`
- Verifica tu instalación: `ng version`
- Crea tu primer proyecto: `ng new my-project`
- Ejecuta el servidor de desarrollo: `ng serve` Dentro de la carpeta de tu proyecto.

## Comandos de Angular para correr tu proyecto
El comando `ng serve` se usa para levantar un servidor de desarrollo en nuestro entorno local y probar nuestra aplicación. Puedes complementar este comando con algunas opciones y variantes:

Lanzar servidor y abrir el navegador por defecto automáticamente:
`ng serve -o`
Angular utiliza por defecto el puerto 4200. Si quieres utilizar otro, podemos hacer:
`ng serve --port=3500`
Finalmente, si quieres analizar la versión de Angular y la versión de todas las dependencias instaladas, puedes hacer:
`ng version`

## Estructura de un proyecto en Angular
- node_modules: Todo proyecto de Javascript posee este directorio donde se almacenan las librerías y dependencias que se descarguen con NPM.
- src: Directorio principal del proyecto donde encontramos:
    - app: Directorio donde guardaremos todo el código fuente de Angular.
    - assets: Directorio para imágenes y otros recursos que la app necesita.
    - environments: Directorio de ambientes, por defecto viene con desarrollo y producción.
    - favicon.ico: Ícono por defecto que tendrá la pestaña del navegador.
    - index.html: Archivo HTML principal desde donde se construye toda la aplicación.
    - main.ts: Archivo principal para la configuración de Angular.
    - polyfills.ts: Librería para que Angular funcione en navegadores viejos y que la aplicación sea retro compatible.
    - styles.scss: Archivo principal de estilos.
    - test.ts: Archivo principal para lanzar el ambiente de pruebas de Angular.
- .browserslistrc: Lista de navegadores y sus versiones que permite configurar la compatibilidad de la aplicación con cada uno.
- .editorconfig: Permite autoformatear los archivos, espacios, indentación, etc. Hay que tener instalado la extensión en el editor.
.gitignore: Indicarle a GIT qué archivos/directorios ignorar.
- angular.json: Archivo principal con toda la configuración del proyecto Angular.
- karma.conf.js: Archivo de configuración de Karma. Karma es un task runner para correr pruebas unitarias.
- package-lock.json: Describe el las dependencias exactas que se generaron en la instalación del proyecto.
- package.json: Archivo para el manejo de dependencias, scripts y metadatos relevantes para el proyecto.
- README.md: Archivo markdown para la documentación del proyecto.
- tsconfig.app.json: Archivo principal para la configuración de TypeScript.
- tsconfig.json: Extensión con más configuraciones de TypeScript.
- tsconfig.spec.json: Configuración de TypeScript pero para el ambiente de pruebas.

## Conceptos básicos de TypeScript para usar Angular
TypeScript es un superconjunto de JavaScript. Permite escribir código JS utilizando tipado de datos estáticos y clases. Convierte a JavaScript en un lenguaje más firme y seguro, reduciendo la tasa de errores gracias a la detección temprana de bugs.

### Características de TypeScript

Tipado de datos: Indicar tipo de dato de una variable.
```javascript
const empresa: string = 'Platzi';
const id: number = 12;
```
Inferencia de tipos: Declaración de variables sin especificar el tipo.
```javascript
const empresa = 'Platzi';
```
TS automáticamente detectará que la variable es un string y evitará asignar otro tipo de dato.

Doble tipado: Asignación de dos tipos de datos a una misma variable.
```javascript
const empresa: string | number = 'Platzi';
```
La variable puede ser tanto del tipo string como number.

Tipado de parámetros y retornos de una función:
```javascript
function myFunction(empresa: string): number {
    // ...
}
```
La función myFunction espera recibir una variable del tipo string y retornará un number.

Clases y POO: TypeScript le agrega a Javascript la posibilidad de programar Orientado a Objetos.
```javascript
class Empresa {
    private empresa: string;
    constructor(empresa: string) {
        this.empresa = empresa;
    }
}
```
Para la posterior creación de objetos a partir de esa clase:
```javascript
const empresa = new Empresa('Platzi');
```
## String interpolation
String interpolation es la manera de enviar datos desde nuestro componente hacia la vista. Utilizando el doble símbolo de llaves {{ }}, o también conocidos como brackets, puedes imprimir el valor de una variable, realizar operaciones matemáticas o hacer el llamado a una función dentro del código HTML.
```javascript
<h1>{{ 'Hola Platzi' }}</h1>
<h2>1 + 1 = {{ 1 + 1 }}</h2>
<h3>{{ myFunction(); }}</h3>
```
### División de responsabilidad
Un componente de Angular se divide en tres archivos: uno para el código TypeScript, otro para el código HTML y uno más para el código CSS.
```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hola soy Platzi';
}
```
Angular usa el concepto de decoradores para modificar el comportamiento de las clases. La clase AppComponent implementa el decorador @Component() para indicarle a Angular que esta clase será un componente. Dentro de este decorador, puedes observar el selector del componente (un nombre para el mismo), el template HTML y la hoja de estilos que usará.

Finalmente, dentro de la clase puedes declarar tus propiedades y métodos como en cualquier clase de la programación orientada a objetos. Tenemos una propiedad llamada title que es del tipo string. Podemos mostrar el valor de esta variable en el HTML con una interpolación:
```javascript
<p>{{ title }}</p>
```
Es importante que tengas en cuenta la visibilidad de los atributos y métodos de una clase. Si estos llegaran a ser private, no podrás usarlo en el HTML Las variables deben ser públicas para poder ser compartidas al template.
```javascript
...
export class AppComponent {
  // Variable privada, no puede utilizarse en un interpolación
  private title = 'Hola! soy una variable privada';
}
```
## Property Binding
Property Binding es la manera que dispone Angular para controlar y modificar las propiedades de los distintos elementos de HTML. Para esto, simplemente utiliza los corchetes [] para poder modificar dinámicamente ese atributo desde el controlador.
### Utilidades
- El atributo `src` de la etiqueta `<img>` para modificar dinámicamente una imagen.
- El atributo `href` de un `<a>` para modificar un enlace.
- El atributo `value` de un `<input>` para autocompletar un valor de un formulario.
- El atributo `disable` de un `<input>` para habilitar/deshabilitar un campo de un formulario.
Si tienes en tu componente:
```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  empresa = 'Platzi';
  habilitado = true;
}
```
Puedes modificar el value de un campo de un formulario de la siguiente manera:
```javascript
<input [value]="empresa" [disabled]="habilitado"  />
```
Se imprime el valor de la propiedad `empresa` como valor de un `<input>` y gracias a la variable `habilitado` controlas la edición del campo.

## Introducción al Event Binding de Angular
A lo igual que el Property Binding nos permite modificar el valor de los atributos de los elementos HTML desde el controlador, el Event Binding permite controlar los eventos que suceden en estos elementos. El clic de un botón, detectar cambios en un campo, el envío de un formulario, entre otros eventos. Para esto utiliza los paréntesis () para el bindeo de la propiedad del elemento.

Si tienes en tu componente:
```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  enviarFormulario() {
    // ...
  }
}
```
Puedes ejecutar el método enviarFormulario() cuando se realiza un clic en un botón de la siguiente manera:
```javascript
<button (click)="enviarFormulario()" >
```
## Otros eventos que puedes escuchar
Además del evento clic, seguramente el más utilizado, hay otros eventos como el change para detectar cambios en un campo de formulario, el evento scroll para detectar el desplazamiento horizontal/vertical del usuario en el navegador, onKeyUp o onKeyDown para detectar cuando el usuario aprieta o deja de apretar un botón de su teclado.

La importancia del Event Binding en Angular está dada por la posibilidad de comunicar el componente y la vista, el código TS con el código HTML, intercambiando datos entre ellos.

Puedes enviarle al controlador el evento completo que se produce en la vista. Para esto, solo declara un parámetro $event en el método que se encuentra escuchando el evento.

Tienes en el controlador:
```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buttonClick($event: Event) {
    console.log($event);
  }
}
```
Y en el HTML:
```html
<button (onKeyUp)="buttonClick($event)">
```
El método buttonClick() que recibe como parámetro $event del tipo Event, en el HTML bindea el evento onKeyUp y el método recibe argumento $event con el símbolo de pesos delante para que Angular entienda que se trata de un evento.

De esta manera, puedes registrar cada pulsación del teclado imprimiendo por consola el evento producido por el usuario.

## Data binding con ngModel

El atributo ngModel permite el intercambio de datos de forma bidireccional entre el componente y la vista. Lo que suceda en el componente, se verá reflejado en la vista. Lo que se suceda en la vista, inmediatamente impactará en el componente.
```html
<input [(ngModel)]="name">
```
ngModel usar tanto los corchetes [] como los paréntesis (). De esta manera, se vuelve bidireccional el intercambio de datos. Si no quieres la bidirección, solo colocamos los corchetes [ngModel] para que la comunicación sea unidireccional.Para utilizar ngModel, es necesario hacer uso e importar Angular Forms. Para esto, dirígete al archivo app.module.ts que es el módulo principal de toda aplicación Angular y agrega lo siguiente:
```javascript
...
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ... ],
  imports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [ ... ]
})
export class AppModule { }
```
De esta manera puedes importar el módulo `FormsModule` desde `@angular/forms` y agregarlo a `imports` para emplear la propiedad `[(ngModel)]`.

## Uso de *ngIf
El condicional “If” es un “If” en Javascript, en Java, en PHP, en Python o en cualquier lenguaje. Angular posibilita utilizar este condicionante embebido en el HTML para mostrar o no un elemento. Su sintaxis es algo particular, está compuesta por un asterisco seguido de las iniciales características de Angular “ng” y la palabra “If”.
```html
<div *ngIf="isPlatzi">Hola, soy Platzi</div>
```
Si la condición dentro del “If” se cumple, se mostrará el `<div>` con el respectivo contenido dentro. De lo contrario, el usuario no verá dicho elemento en el navegador. En la condición del If puedes colocar cualquier operador lógico:
### If … else

Para usar un else en Angular, la sintaxis es algo especial. Debes crear un template en tu código HTML usando la etiqueta que provee Angular llamada `<ng-template>` con una Variable de Template, comenzando con #, para hacer referencia a este elemento desde tu If.
```html
  <div *ngIf="isPlatzi; else templateElse">Hola, soy Platzi</div>
<ng-template #templateElse>
    <div>No soy Platzi</div>
</ng-template
```
Si la condición del If no se cumple, seguido de punto y coma, se coloca la sentencia else haciendo referencia a `templateElse`, que es el nombre de la variable del template a mostrar en su lugar.

## Uso de *ngFor
Al igual que con un If, Angular permite iterar un array de números, de cadenas de caracteres o de objetos usando “*ngFor”.Si tienes en tu componente un array de datos:
```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myArray: string[] = [
    'Platzi',
    'es',
    'genial!'
  ];
}
```
Puedes mostrar cada elemento iterando el array en un elemento HTML:
```html
<ul>
    <li *ngFor="let str of myArray">
        {{ str }}
    </li>
</ul>
```
El *ngFor crea una variable temporal llamada str (o el nombre que más te guste) que contiene cada valor de myArray. Finalmente, utilizando una interpolación, muestras el valor de str.Quedando tu HTML de la siguiente manera:
```html
<ul><li>Platzi</li><li>es</li><li>genial!</li></ul>
```
### Índice de iteración
- ngFor también cuenta con un índice con el número de iteraciones. Puedes acceder a este número agregando al ngFor `index as i` de la siguiente manera:
```html
<ul>
    <li *ngFor="let str of myArray; index as i">
        {{ i }}. {{ str }}
    </li>
</ul>
```
Cada iteración contiene una variable i con el índice que le corresponde. Iniciando desde cero, da como resultado:
```html
<ul>
    <li>0. Platzi</li>
    <li>1. es</li>
    <li>2. genial!</li>
</ul>
```
## *ngFor para arrays
Puedes utilizar *ngFor para iterar y mostrar cada propiedad de un objeto. Considera que en el componente tienes un array de objetos que representan a una persona:
```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  peopleArray = [
    {
        firstname: 'Freddy',
        lastname: 'Vega',
        age: 35
    },
    {
        firstname: 'Nicolas',
        lastname: 'Molina',
        age: 29
    },
    {
        firstname: 'Ángela',
        lastname: 'Ocando',
        age: 30
    }
  ];
}
```
Itera este array en el HTML e imprimimos el valor de cada propiedad de la siguiente manera:
```html
<ul *ngFor="let person of peopleArray">
    <li>Nombre: {{ person.firstname }}</li>
    <li>Apellido: {{ person.lastname }}</li>
    <li>Edad: {{ person.age }}</li>
</ul>
```
### Tipado de objetos con interfaces
La variable person guarda temporalmente el objeto en cada iteración, pudiendo acceder a cada valor usando un punto seguido del nombre de la propiedad.
El array peopleArray puede contener cualquier cosa, y puede ocasionar comportamientos indeseados en tu aplicación. Puedes crear una interfaz de Personas para tipar los objetos del array y asegurar que todos tengas las mismas propiedades.
```javascript
interface Person {
    firstname: string;
    lastname: string;
    age: number
}
```
Tipando el array de la siguiente manera para indicar que el array es de objetos del tipo Persona:
```javascript
...
peopleArray: Person[] = [
    {
        firstname: 'Freddy',
        lastname: 'Vega',
        age: 35
    },
    ...
 ]
```
## Uso de *ngSwitch
Angular también ofrece la sentencia *ngSwitch y *ngSwitchCase para determinar el flujo de control de tu aplicación y qué elemento mostrar entre multiples elementos HTML. Además de utilizar un elemento default con *ngSwitchDefault en caso de que ninguna condición se cumpla.
```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    color: string = 'verde';
}
```
### Ejemplo de *ngSwitchCase
```html
<div [ngSwitch]="color">
    <p *ngSwitchCase="'azul'">
        El color el Azul
    </p>
    <p *ngSwitchCase="'verde'">
        El color el Verde
    </p>
    <p *ngSwitchCase="'rojo'">
        El color el Rojo
    </p>
    <p *ngSwitchDefault>
        No hay ningún color
    </p>
</div>
```
## Angular DevTools
Angular DevTools es una herramienta complementaria para enriquecer tu experiencia de desarrollo en Angular permitiendo la depuración y el debugging de tu aplicación.

Solo tienes que instalar la extensión del navegador para Google Chrome.

Gracias a estas herramientas, podrás desarrollar y resolver bug más rápido, inspeccionar el valor de las propiedades de tu componente y detectar cuando el usuario realiza alguna acción y se lanza un evento.

## Class and style

### Class binding

La versatilidad de Angular te permite agregar o quitar clases y estilos a tus elementos HTML a partir de condicionantes. Así como anteriormente utilizaste los corchetes `[]` para bindear atributos como el `[src]` de una imagen o el `[href]` de un enlace, puedes bindear clases para que Angular las agregue o quite dinámicamente si se cumple una condición de la siguiente manera:
```html
<div [class.active-color]="isActive">

</div>
```
Imagina que tienes en tu componente una propiedad llamada `isActive` que agregará la clase `active-color` si esta es verdadera o quitará la clase si es falsa. Luego ya puedes darle los estilos que más te gusten al elemento HTML en tu hoja de estilos utilizando la clase `active-color`.

### Style binding

También puedes añadir estilos inline a los elementos HTML bindeando la propiedad `[style]` seguido de la propiedad CSS que quieres modificar dinámicamente:
```html
<p [style.color]="isActive ? 'blue' : 'red'"></p>
```
A partir del valor de `isActive`, dependiendo si este es verdadero o falso, puedes emplear un operador ternario para cambiar el `color` del párrafo.

## NgClass y NgStyle
Con el binding de `[class]` y `[style]` puedes agregar clases y estilos fácilmente. Pero se vuelve algo complicado en el caso de que necesites agregar varias clases o modificar muchos estilos. Es por esto que Angular ofrece las directivas `ngClass` y `ngStyle` para este propósito.

Puedes bindear la directiva `[ngStyle]` o `[ngClass]` y pasarle un objeto con cada propiedad o clase que deseas agregar:
```html
<p

    [ngStyle]="{

        'color': textColor,

        'background': textBackground

    }"

></p>
```
El operador ternario será tu mejor aliado para agregar o quitar clases y estilos:
```html
<div

    [ngClass]="isAvailable ? 'active-class' : 'deactivate-class'"

></div>
```
O puedes usar las Interpolaciones en lugar del binding:
```html
<p

    ngClass="{{ isAvailable ? 'active-class' : 'deactivate-class' }}"

></p>
```
