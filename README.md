# Laboratorio: Creación y Despliegue de un Sitio Web Estático con GitHub Pages

## 🎯 Objetivo

El objetivo de este laboratorio es que crees un sitio web personal estático de dos páginas usando **HTML** y **CSS**, y que lo publiques en internet de forma gratuita a través del servicio de **GitHub Pages**.

---

## ✅ Requisitos Previos

- Tener una cuenta en **GitHub**.  
  _(Podés usar la misma del laboratorio anterior)._

---

## 🚀 Pasos para Publicar tu Sitio Web

### Paso 1: Crear un Repositorio Nuevo

1. Iniciá sesión en tu cuenta de GitHub.
2. Hacé clic en el ícono de **"+"** en la esquina superior derecha y seleccioná **New repository** (Nuevo repositorio).
3. Asignale un nombre al repositorio.
   - **Importante:** Si querés que tu página principal esté en una URL sencilla como:
     ```
     https://<tu_usuario>.github.io
     ```
     tenés que nombrar el repositorio **exactamente así**:
     ```
     <tu_usuario>.github.io
     ```
4. Seleccioná la opción de visibilidad **Public**. _(Obligatorio para que GitHub Pages funcione en cuentas gratuitas)_.
5. Marcá la casilla **Add a README file** (Inicializar el repositorio con un archivo README).
6. Hacé clic en el botón verde **Create repository**.

---

### Paso 2: Subir los Archivos de tu Página

1. Dentro de la página de tu nuevo repositorio, hacé clic en el botón **Add file** → **Upload files**.
2. Arrastrá y soltá tus archivos (`index.html`, `acercade.html`, `styles.css` y la carpeta `img/` si la usás) en el área indicada.
   - También podés seleccionarlos desde tu computadora.
3. Una vez subidos los archivos, en el formulario inferior hacé clic en el botón verde **Commit changes** para guardarlos en el repositorio.

---

### Paso 3: Activar GitHub Pages

1. En tu repositorio, abrí la pestaña **Settings**.
2. En el menú lateral izquierdo, buscá y hacé clic en **Pages**.
3. En la sección **Build and deployment**, bajo **Source**, asegurate de que esté seleccionada la opción **Deploy from a branch**.
4. En la sección **Branch**, seleccioná la rama `main` (o `master` si es el caso) y la carpeta `/root`.
5. Hacé clic en **Save**.

---

### Paso 4: ¡Accedé a tu Sitio Web!

GitHub va a tardar unos minutos en procesar y publicar tu sitio.  
Después de un corto tiempo, tu página web va a estar disponible en la URL que se muestra en la misma sección de **Pages**.  
👉 ¡Podés acceder a ella desde cualquier navegador!

---

## 📝 Contenido del Sitio Web (Requisitos)

Tu proyecto tiene que estar compuesto por los siguientes archivos en el **directorio raíz** (sin carpetas adicionales, a excepción de `img/`).

---

### 📄 Archivo `index.html` (Página de Inicio)

- Tiene que contener la **estructura básica de HTML5**.
- Incluir las etiquetas semánticas: `<header>`, `<nav>`, `<main>` y `<footer>`.
- El `<header>` tiene que tener un título `<h1>` con tu nombre y apellido, indicando que es tu página personal.

---

### 📄 Archivo `acercade.html` (Página "Acerca de")

- Misma estructura base que `index.html` (`header`, `nav`, `main`, `footer`).
- En `<main>` debe incluir:
  - Una **breve biografía tuya**.
  - Una **foto** (propia o genérica).
    - Puede estar enlazada desde internet, o
    - Guardada en una subcarpeta llamada `img/`.

---

### 🧭 Navegación `<nav>`

- Debe estar presente en ambas páginas (`index.html` y `acercade.html`).
- Debe contener como mínimo dos enlaces:
  - **Inicio** → `index.html`
  - **Acerca de** → `acercade.html`

---

### 🦶 Pie de página `<footer>`

- Debe estar presente en ambas páginas.
- Debe contener:
  - Información de **copyright** (ej: `© 2024 Tu Nombre`).
  - La **dirección de tu universidad o nodo**.

---

### 🎨 Archivo `styles.css` (Hoja de Estilos)

- Debe haber **un único archivo CSS** que dé estilos básicos a ambas páginas HTML.
- Este archivo debe estar enlazado correctamente desde `index.html` y `acercade.html`.
- Debe estar en el mismo directorio que los archivos HTML.

---

## 📋 Laboratorio 3: Página de Contacto con Formulario

### 📄 Archivo `contacto.html` (Página de Contacto)

Crear una página nueva que deberá estar enlazada con la página principal del laboratorio anterior como "Contacto".

En esta página se debe crear un formulario que contenga los siguientes campos:

#### Campos del Formulario:

- **Nombre** (longitud máxima 20 caracteres), requerido
- **Apellido** (longitud máxima 20 caracteres)
- **Email**, requerido
- **Teléfono**, debe contar con una ayuda que se borre al hacer clic en el campo
- **Edad**: mínimo 16 y máximo 120 años
- **Dirección**: campo de texto libre
- **Provincia**: texto, debe ser libre pero las provincias patagónicas deberán estar incluidas y sugerirse al usuario con una lista
- **Código postal**: controlado con una expresión regular que incluya A1234ABC
- **Elección de método preferido de contacto** entre "correo electrónico", "correo postal" o "teléfono" (excluyentes, usar radio button), por defecto debe salir "correo electrónico" como preferido
- **Elección del tipo de suscripción** entre: noticias, promociones, alertas y eventos, el usuario debe poder elegir más de una. Alertas debe estar seleccionado por defecto. Usar checkbox
- Incluir un **botón de cargar** (por ahora no hará nada)

#### Tabla de Datos:

- Luego incluir una **tabla vacía con dos columnas**
- En la columna izquierda deben ir los mismos ítems del formulario (títulos)
- La de la derecha vacía (se rellenará la opción al apretar el botón de cargar cuando veamos javascript)
