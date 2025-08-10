# Sistema de Generación de Códigos QR Dinámicos

## 🚀 Características Principales

### ✨ Funcionalidades
- **Generación de QR Estáticos y Dinámicos**: Crea códigos QR que enlazan directamente a URLs o que permiten modificar el destino después de la generación
- **Personalización Completa**: Colores, tamaño, corrección de errores, logo personalizado
- **Gestión de QRs**: Guardar, editar, descargar y eliminar códigos QR
- **Estadísticas de Visitas**: Seguimiento de visitas para QRs dinámicos
- **Diseño Responsivo**: Optimizado para móviles y computadoras
- **Funcionamiento en Producción**: Compatible con Netlify y otros servicios de hosting

### 🔧 QRs Dinámicos Mejorados
- **Funcionamiento en Netlify**: Los QRs dinámicos ahora funcionan correctamente en producción
- **Parámetros URL**: Los datos se codifican en la URL del QR en lugar de depender del localStorage
- **Redirección Inteligente**: Página de redirección que muestra información y estadísticas antes de redirigir

## 📁 Estructura de Archivos

```
├── qr-generator.html      # Página principal del generador
├── qr-redirect.html       # Página de redirección para QRs dinámicos
├── qrcode.min.js         # Biblioteca QR (versión local)
├── Logo/                 # Carpeta con logos y favicons
└── README-QR-System.md   # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y moderna
- **CSS3**: Diseño responsivo con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidad dinámica y manejo de eventos
- **QRCode.js**: Biblioteca para generación de códigos QR (versión 1.4.4)
- **LocalStorage**: Almacenamiento local de datos y estadísticas

## 🚀 Instalación y Uso

### Opción 1: Servidor Local
```bash
# Usar Python (recomendado)
python -m http.server 8000

# O usar Node.js
npx http-server

# O usar PHP
php -S localhost:8000
```

### Opción 2: Netlify (Recomendado para Producción)
1. Sube todos los archivos a tu repositorio de GitHub
2. Conecta el repositorio a Netlify
3. El sistema funcionará automáticamente

## 📱 Cómo Usar el Sistema

### 1. Generar un QR
1. Abre `qr-generator.html` en tu navegador
2. Selecciona el tipo de QR (Estático o Dinámico)
3. Ingresa la URL de destino
4. Personaliza colores, tamaño y otros parámetros
5. Haz clic en "🔄 Generar QR"

### 2. Guardar un QR
1. Después de generar, ingresa un nombre
2. Haz clic en "💾 Guardar QR"
3. El QR aparecerá en la sección "QRs Guardados"

### 3. Gestionar QRs Dinámicos
1. En la sección de QRs guardados, busca tu QR dinámico
2. Haz clic en "⚙️ Gestionar"
3. Modifica la URL de destino
4. El QR mantendrá la misma imagen pero redirigirá a la nueva URL

## 🔄 Diferencias entre QR Estático y Dinámico

### QR Estático
- **Funcionamiento**: Codifica directamente la URL en la imagen del QR
- **Ventajas**: Simple, rápido, funciona en cualquier lugar
- **Desventajas**: No se puede modificar después de generar
- **Uso recomendado**: Enlaces permanentes, información fija

### QR Dinámico
- **Funcionamiento**: Codifica una URL de redirección que luego busca la URL real
- **Ventajas**: Permite modificar el destino sin regenerar el QR
- **Desventajas**: Requiere una página de redirección
- **Uso recomendado**: Enlaces temporales, campañas de marketing, URLs que cambian

## 🌐 Funcionamiento en Netlify

### Problema Resuelto
Anteriormente, los QRs dinámicos no funcionaban en Netlify porque dependían del `localStorage` del navegador donde se generaron.

### Solución Implementada
- **Parámetros URL**: Los datos del QR se codifican en base64 y se incluyen en la URL
- **Página de Redirección**: `qr-redirect.html` decodifica los parámetros y redirige al usuario
- **Estadísticas Locales**: Las visitas se siguen registrando en el localStorage del usuario

### Estructura de URL Dinámica
```
qr-redirect.html?id=ABC123&url=base64_encoded_url&name=base64_encoded_name
```

## 📊 Estadísticas y Seguimiento

### Para QRs Dinámicos
- **Contador de visitas**: Se incrementa cada vez que se escanea el QR
- **Última visita**: Fecha y hora de la última vez que se escaneó
- **Información de redirección**: Muestra la URL actual de destino

### Almacenamiento
- Los datos se guardan en el `localStorage` del navegador
- Las estadísticas son locales al dispositivo
- No se comparten entre diferentes dispositivos

## 🎨 Personalización

### Opciones Disponibles
- **Colores**: Fondo y primer plano personalizables
- **Tamaño**: Desde 128px hasta 512px
- **Corrección de errores**: Niveles L, M, Q, H
- **Logo**: Subir imagen personalizada para el centro del QR

### Consejos de Diseño
- Usa colores con buen contraste para mejor legibilidad
- Los logos muy grandes pueden afectar la escaneabilidad
- El nivel de corrección de errores H permite más personalización

## 📱 Compatibilidad Móvil

### ✅ Dispositivos Soportados
- **Android**: Todas las versiones y aplicaciones de cámara
- **iPhone**: Aplicación Cámara nativa y apps de terceros
- **Otros**: Cualquier dispositivo que soporte códigos QR estándar

### 🔧 Optimizaciones Implementadas
- **Tamaño mínimo**: 256x256 píxeles para mejor detección
- **Corrección de errores**: Nivel M (15%) como mínimo recomendado
- **Contraste máximo**: Opción para forzar negro sobre blanco
- **Borde de seguridad**: Margen aumentado para mejor escaneo
- **Protocolo HTTPS**: Forzado automático para máxima compatibilidad

### 🧪 Archivo de Prueba
Se incluye `mobile-compatibility-test.html` para probar la compatibilidad:
- **Test 1**: QR básico con máxima compatibilidad
- **Test 2**: QR personalizado para probar colores
- **Test 3**: QR avanzado con configuraciones óptimas

### 💡 Consejos para Mejor Compatibilidad
1. **Usa colores con alto contraste** (negro sobre blanco es lo mejor)
2. **Mantén un tamaño mínimo de 256px** para mejor detección
3. **Usa corrección de errores M o superior** para mayor robustez
4. **Agrega bordes blancos** alrededor del QR
5. **Asegúrate de que las URLs tengan protocolo HTTPS**

### 🚨 Problemas Comunes y Soluciones
- **iPhone no detecta el QR**: Usa contraste máximo y tamaño 256px+
- **Android detecta como texto**: Verifica que la URL tenga protocolo
- **Escaneo lento**: Aumenta el tamaño y usa corrección de errores alta
- **No funciona en poca luz**: Activa la opción de contraste máximo

## 🔧 Solución de Problemas

### Error: "QRCode is not defined"
- **Causa**: La biblioteca QRCode no se cargó correctamente
- **Solución**: Recarga la página o verifica la conexión a internet

### Error: "Código QR no encontrado"
- **Causa**: Los parámetros de la URL están corruptos o faltantes
- **Solución**: Regenera el QR dinámico

### QR no se genera
- **Causa**: URL inválida o datos insuficientes
- **Solución**: Verifica que la URL sea válida y completa

### Problemas en móviles
- **Causa**: Algunos navegadores móviles tienen limitaciones
- **Solución**: Usa un navegador moderno (Chrome, Safari, Firefox)

## 🔒 Seguridad y Privacidad

### Datos Almacenados
- URLs de destino (codificadas en base64 para QRs dinámicos)
- Nombres de los QRs
- Estadísticas de visitas (solo localmente)

### No se Almacena
- Información personal del usuario
- Datos de navegación
- Información sensible

## 🚀 Futuras Mejoras

### Funcionalidades Planificadas
- [ ] Exportación de estadísticas
- [ ] Más opciones de personalización
- [ ] Integración con APIs de acortadores de URL
- [ ] Sistema de plantillas predefinidas
- [ ] Soporte para códigos QR de texto plano

### Optimizaciones Técnicas
- [ ] Compresión de imágenes
- [ ] Caché inteligente
- [ ] Mejoras en la accesibilidad
- [ ] Soporte para PWA

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias:
1. Verifica que estés usando un navegador moderno
2. Asegúrate de que todos los archivos estén presentes
3. Intenta recargar la página
4. Verifica la consola del navegador para errores

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado con ❤️ para crear códigos QR dinámicos y personalizables** 