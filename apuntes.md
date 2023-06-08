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
