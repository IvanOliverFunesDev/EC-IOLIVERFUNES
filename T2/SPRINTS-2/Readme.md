# Sprint 2

## Ejercicio 2: Funcionalidades Interactivas por Categoría

### 🔍 Análisis del Problema

El objetivo de este ejercicio es que el alumnado desarrolle funcionalidades interactivas avanzadas basadas en su categoría de proyecto. Se espera que implementen componentes reutilizables que permitan mejorar la experiencia del usuario mediante dashboards, comparadores, rankings, planificadores o encuestas.

Cada categoría del proyecto incluye tres funcionalidades clave, que deben ser desarrolladas siguiendo las buenas prácticas de modularidad y reutilización de código.

---

### 📋 Diseño de la Propuesta de Solución

#### **Descripción de la Solución**

El diseño incluirá una serie de módulos interactivos que permitan mejorar la experiencia del usuario mediante la personalización del contenido, la visualización intuitiva de datos y la implementación de funcionalidades específicas para cada tipo de aplicación.

#### **Pasos a Seguir**

1. **Diseñar la estructura modular de la solución:**
   - Crear un conjunto de componentes reutilizables.
   - Integrar estos módulos dentro de la arquitectura existente.
   
2. **Implementar funcionalidades específicas según la categoría:**
   - Dashboards interactivos.
   - Sistemas de recomendación.
   - Rankings de popularidad.
   
3. **Optimizar la experiencia del usuario:**
   - Implementar carga diferida de imágenes y datos.
   - Garantizar que la interfaz sea responsiva y accesible.

---

### 🛠️ Herramientas y Tecnologías Utilizadas

- **Angular**: Para la creación de la interfaz y la gestión de los componentes.
- **CSS**: Para diseño responsivo y estilización de los elementos gráficos.
- **HTML**: Para la estructura de la interfaz.
- **TypeScript**: Para el desarrollo de lógica interactiva y validaciones.

---

### 💡 Consultas Realizadas a ChatGPT

1. ¿Cómo diseñar un sistema de recomendación eficiente en Angular?
2. ¿Cuáles son las mejores prácticas para implementar dashboards con gráficos interactivos?
3. ¿Cómo optimizar la carga de datos en tiempo real en una aplicación web?

---

### 🧪 Pruebas a Realizar

✅ **Prueba 1: Filtrado y visualización en el dashboard**  
![Comprobar la funcionalidad de filtros](resource/filtros.gif)  

✅ **Prueba 2: Sistema de recomendaciones**  
![Comprobar la funcionalidad de recomendaciones de conciertos relacionados](resource/recomendaciones.gif)  

✅ **Prueba 3: Rankings de popularidad**  
![Comprobar la funcionalidad de rankings por popularidad](resource/popularidad.gif)    

---

## Estructura de Carpetas Completa con Categorización

src/
├── app/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── forgot-password/
│   │   │   ├── login/
│   │   │   └── register/
│   │   │       ├── register.component.css
│   │   │       ├── register.component.html
│   │   │       └── register.component.ts
│   │   ├── bands/
│   │   │   └── slider/ CORRESPONDE HA HEROSECTION
│   │   ├── concerts/
│   │   │   ├── concerts-card/
│   │   │   ├── concerts-list/
│   │   │   ├── concerts-page/
│   │   │   └── formnewconcert/
│   │   ├── home/
│   │   │   ├── home-page/
│   │   │   └── newpostbutton/
│   │   ├── layout/
│   │   │   ├── footer/
│   │   │   └── navbar/
│   │   ├── main/
│   │   │   ├── main.component.css
│   │   │   ├── main.component.html
│   │   │   └── main.component.ts
│   │   └── users/
│   │       └── profile/
│   │           ├── profile.component.css
│   │           ├── profile.component.html
│   │           └── profile.component.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── concerts.service.ts
│   ├── shared/
│   │   └── guards/
│   │       └── auth.guard.ts
