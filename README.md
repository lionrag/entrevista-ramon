# Ejercicio CreditCard | Cliengo

Requerimientos
```
npm 6.14
node v12.18
mongo v4.4

```
### 0- Crear archivo .env con variables de entorno
```
PORT=

MONGODB_URI=
MONGODB_USER=
MONGODB_PASSWORD=

```

### 1- Instalar paquetes
```
npm install

```
### 2- Ejecutar aplicacion
```
npm run dev

```
### 3- Probar endpoints
```
- Abrir archivo requests.http
- Usar vscode e instalar REST Client 
- Crear usuario y recuperar userId con **auth signUp**
- Loguear y recuperar token con **auth signIn**
- Usar el token y el userId para crear tarjetas de creditos con **creditCard create**
- Usar el userId para recuperar las tarjetas insertadas para ese ususario con **creditCards by userId**
```