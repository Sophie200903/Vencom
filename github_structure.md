# 📦 Vencom - Sistema de Ventas Django

Estructura completa del proyecto lista para GitHub

```
vencom_project/
│
├── README.md
├── .gitignore
├── requirements.txt
├── manage.py
│
├── vencom_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
│
├── apps/
│   ├── __init__.py
│   │
│   ├── products/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   └── migrations/
│   │       └── __init__.py
│   │
│   ├── accounts/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── forms.py
│   │   ├── tests.py
│   │   └── migrations/
│   │       └── __init__.py
│   │
│   └── cart/
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── views.py
│       ├── urls.py
│       ├── tests.py
│       └── migrations/
│           └── __init__.py
│
├── templates/
│   ├── base.html
│   ├── home.html
│   │
│   ├── products/
│   │   ├── product_list.html
│   │   └── product_detail.html
│   │
│   ├── accounts/
│   │   ├── login.html
│   │   ├── register.html
│   │   └── profile.html
│   │
│   └── cart/
│       └── cart.html
│
├── static/
│   │
│   ├── css/
│   │   ├── base.css
│   │   ├── header.css
│   │   ├── sidebar.css
│   │   ├── products.css
│   │   ├── components.css
│   │   ├── auth.css
│   │   ├── cart.css
│   │   └── footer.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── cart.js
│   │   ├── products.js
│   │   ├── search.js
│   │   └── notifications.js
│   │
│   └── images/
│       ├── logo.png
│       └── products/
│           └── .gitkeep
│
├── media/
│   └── products/
│       └── .gitkeep
│
└── docs/
    ├── installation.md
    ├── api_documentation.md
    └── screenshots/
        └── .gitkeep
```

## 📄 Archivos de Configuración

### .gitignore
```gitignore
# Python
*.py[cod]
*$py.class
*.so
.Python
env/
venv/
ENV/
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg

# Django
*.log
local_settings.py
db.sqlite3
db.sqlite3-journal
/media
/staticfiles

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
.DS_Store

# Environment
.env
.env.local
.env.production

# Node
node_modules/
npm-debug.log

# Coverage
htmlcov/
.coverage
.coverage.*
coverage.xml
*.cover
```

### README.md
```markdown
# 🛒 Vencom - Sistema de Ventas E-commerce

Sistema de comercio electrónico moderno desarrollado con Django, con interfaz elegante y funcionalidades completas de carrito de compras.

![Vencom Banner](docs/screenshots/banner.png)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz atractiva con gradientes y animaciones
- 🛍️ **Catálogo de Productos**: Sistema completo de gestión de productos
- 🛒 **Carrito de Compras**: Funcionalidad de carrito con persistencia
- 🔍 **Búsqueda en Tiempo Real**: Sistema de búsqueda instantánea
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- 👤 **Sistema de Usuarios**: Registro, login y gestión de perfiles
- 💳 **Proceso de Pago**: Sistema completo de checkout
- 📊 **Panel de Administración**: Django Admin personalizado

## 🚀 Tecnologías

- **Backend**: Django 4.2
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Base de Datos**: SQLite (desarrollo) / PostgreSQL (producción)
- **Estilos**: CSS Moderno con Gradientes y Animaciones
- **API**: Django REST Framework

## 📦 Instalación

### Prerrequisitos

- Python 3.8+
- pip
- virtualenv (recomendado)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/vencom_project.git
cd vencom_project
```

2. **Crear entorno virtual**
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

3. **Instalar dependencias**
```bash
pip install -r requirements.txt
```

4. **Configurar variables de entorno**
```bash
# Crear archivo .env
cp .env.example .env

# Editar .env con tus configuraciones
SECRET_KEY=tu-clave-secreta-aqui
DEBUG=True
```

5. **Realizar migraciones**
```bash
python manage.py makemigrations
python manage.py migrate
```

6. **Crear superusuario**
```bash
python manage.py createsuperuser
```

7. **Cargar datos de ejemplo (opcional)**
```bash
python manage.py loaddata initial_data.json
```

8. **Ejecutar servidor**
```bash
python manage.py runserver
```

9. **Abrir en navegador**
```
http://127.0.0.1:8000
```

## 📚 Uso

### Administración

Accede al panel de administración:
```
http://127.0.0.1:8000/admin
```

### Crear Categorías y Productos

```python
# Desde el shell de Django
python manage.py shell

from apps.products.models import Category, Product

# Crear categoría
category = Category.objects.create(
    name='Electrónicos',
    slug='electronicos',
    description='Productos electrónicos'
)

# Crear producto
product = Product.objects.create(
    name='Smartphone Galaxy S24',
    slug='smartphone-galaxy-s24',
    category=category,
    price=1299000,
    description='Último modelo con cámara de 108MP',
    stock=10,
    featured=True
)
```

## 🎨 Estructura CSS

Los estilos están organizados modularmente:

- `base.css`: Estilos base y layout
- `header.css`: Estilos del header y navegación
- `sidebar.css`: Estilos del menú lateral
- `products.css`: Estilos de productos y tarjetas
- `components.css`: Componentes reutilizables (botones, modales)
- `auth.css`: Estilos de autenticación
- `cart.css`: Estilos del carrito
- `footer.css`: Estilos del pie de página

## 📱 JavaScript Modular

Los scripts están organizados por funcionalidad:

- `main.js`: Funciones principales y inicialización
- `cart.js`: Lógica del carrito de compras
- `products.js`: Funciones relacionadas con productos
- `search.js`: Sistema de búsqueda
- `notifications.js`: Sistema de notificaciones

## 🔧 Configuración de Producción

### Configurar Base de Datos PostgreSQL

```python
# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'vencom_db',
        'USER': 'vencom_user',
        'PASSWORD': 'tu_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### Colectar archivos estáticos

```bash
python manage.py collectstatic
```

### Variables de Entorno de Producción

```bash
DEBUG=False
ALLOWED_HOSTS=tudominio.com,www.tudominio.com
SECRET_KEY=clave-super-secreta-de-produccion
```

## 📸 Capturas de Pantalla

### Página Principal
![Home](docs/screenshots/home.png)

### Catálogo de Productos
![Products](docs/screenshots/products.png)

### Detalle de Producto
![Product Detail](docs/screenshots/product-detail.png)

### Carrito de Compras
![Cart](docs/screenshots/cart.png)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👥 Autores

- **Tu Nombre** - *Trabajo Inicial* - [tu-usuario](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- Inspiración en diseños modernos de e-commerce
- Comunidad de Django
- Contribuidores del proyecto

## 📞 Contacto

- Email: info@vencom.com
- Website: https://vencom.com
- LinkedIn: [Vencom](https://linkedin.com/company/vencom)

---

⭐️ Si te gusta este proyecto, dale una estrella en GitHub!
```

### requirements.txt
```txt
Django==4.2.7
Pillow==10.0.1
djangorestframework==3.14.0
django-cors-headers==4.3.1
python-decouple==3.8
psycopg2-binary==2.9.9
gunicorn==21.2.0
whitenoise==6.6.0
```

### .env.example
```env
# Django Settings
SECRET_KEY=your-secret-key-here-change-in-production
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database (opcional para PostgreSQL)
DB_NAME=vencom_db
DB_USER=vencom_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

# Email Configuration (opcional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-password

# Payment Gateway (opcional)
PAYMENT_API_KEY=your-payment-api-key
```

## 🚀 Comandos Útiles

### Desarrollo
```bash
# Ejecutar servidor de desarrollo
python manage.py runserver

# Crear nueva app
python manage.py startapp nombre_app

# Crear migraciones
python manage.py makemigrations

# Aplicar migraciones
python manage.py migrate

# Crear superusuario
python manage.py createsuperuser

# Shell de Django
python manage.py shell

# Colectar archivos estáticos
python manage.py collectstatic
```

### Testing
```bash
# Ejecutar todos los tests
python manage.py test

# Ejecutar tests de una app específica
python manage.py test apps.products

# Ver cobertura
coverage run --source='.' manage.py test
coverage report
coverage html
```

### Base de Datos
```bash
# Hacer backup de la BD
python manage.py dumpdata > backup.json

# Restaurar desde backup
python manage.py loaddata backup.json

# Limpiar BD (cuidado!)
python manage.py flush
```

## 📋 Checklist para Producción

- [ ] Cambiar `DEBUG=False`
- [ ] Configurar `ALLOWED_HOSTS`
- [ ] Usar base de datos de producción (PostgreSQL)
- [ ] Configurar `SECRET_KEY` segura
- [ ] Configurar archivos estáticos con Whitenoise o CDN
- [ ] Configurar HTTPS
- [ ] Configurar backup de base de datos
- [ ] Configurar logging
- [ ] Configurar monitoring
- [ ] Revisar configuración de CORS
- [ ] Configurar emails
- [ ] Configurar dominio personalizado

## 🔐 Seguridad

- Mantener `SECRET_KEY` segura y nunca en el repositorio
- Usar HTTPS en producción
- Mantener Django y dependencias actualizadas
- Implementar rate limiting
- Validar todas las entradas de usuario
- Usar CSRF protection (viene por defecto en Django)
- Configurar correctamente CORS

## 📈 Roadmap

- [x] Sistema de productos
- [x] Carrito de compras
- [x] Sistema de usuarios
- [ ] Integración de pagos
- [ ] Sistema de reseñas
- [ ] Wishlist (lista de deseos)
- [ ] Cupones de descuento
- [ ] Sistema de envíos
- [ ] Notificaciones por email
- [ ] Dashboard de vendedor
- [ ] App móvil

---

**Hecho con ❤️ usando Django**
```

## 📋 Instrucciones para Subir a GitHub

1. **Inicializar Git**
```bash
cd vencom_project
git init
```

2. **Agregar archivos**
```bash
git add .
```

3. **Primer commit**
```bash
git commit -m "Initial commit: Vencom E-commerce System"
```

4. **Crear repositorio en GitHub** (desde la web)
   - Ve a github.com
   - Click en "New repository"
   - Nombre: `vencom_project`
   - Descripción: "Sistema de ventas e-commerce moderno con Django"
   - Público o Privado
   - No inicializar con README (ya lo tienes)

5. **Conectar con GitHub**
```bash
git remote add origin https://github.com/tu-usuario/vencom_project.git
git branch -M main
git push -u origin main
```

## 🏷️ Tags y Releases

```bash
# Crear tag de versión
git tag -a v1.0.0 -m "Primera versión estable"
git push origin v1.0.0
```

## 🌿 Branches Recomendados

- `main`: Producción estable
- `develop`: Desarrollo activo
- `feature/*`: Nuevas características
- `hotfix/*`: Correcciones urgentes
- `release/*`: Preparación de releases