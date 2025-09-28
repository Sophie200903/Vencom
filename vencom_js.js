// Base de datos de productos con los originales + muchos más
const products = [
    // Productos originales mantenidos
    {
        id: 1,
        name: "Smartphone Galaxy S24",
        price: 1299000,
        oldPrice: 1599000,
        description: "Último modelo con cámara de 108MP y pantalla AMOLED de 6.8\"",
        icon: "📱",
        category: "telefonos",
        badge: "new",
        rating: 4.5,
        reviews: 128,
        specs: {
            "Pantalla": "6.8\" AMOLED",
            "Cámara": "108MP principal",
            "Memoria": "128GB",
            "RAM": "8GB",
            "Batería": "5000mAh",
            "Procesador": "Snapdragon 8 Gen 3"
        },
        features: [
            "Resistente al agua IP68",
            "Carga inalámbrica rápida",
            "Reconocimiento facial",
            "Pantalla 120Hz",
            "5G compatible"
        ]
    },
    {
        id: 2,
        name: "Laptop HP Elite",
        price: 2499000,
        oldPrice: 2899000,
        description: "Intel i7, 16GB RAM, 512GB SSD, perfecta para trabajo profesional",
        icon: "💻",
        category: "computadoras",
        badge: "sale",
        rating: 4.7,
        reviews: 89,
        specs: {
            "Procesador": "Intel i7-13700H",
            "RAM": "16GB DDR4",
            "Almacenamiento": "512GB SSD NVMe",
            "Pantalla": "15.6\" Full HD",
            "Gráficos": "Intel Iris Xe",
            "Sistema": "Windows 11 Pro"
        },
        features: [
            "Teclado retroiluminado",
            "Lector de huellas",
            "Webcam HD con privacidad",
            "Conectividad Wi-Fi 6",
            "Batería de larga duración"
        ]
    },
    {
        id: 3,
        name: "Audífonos Bluetooth Premium",
        price: 399000,
        oldPrice: 549000,
        description: "Cancelación de ruido activa, 30 horas de batería",
        icon: "🎧",
        category: "audio",
        badge: "sale",
        rating: 4.3,
        reviews: 256,
        specs: {
            "Conectividad": "Bluetooth 5.0",
            "Batería": "30 horas",
            "Cancelación de ruido": "Activa",
            "Peso": "250g",
            "Carga rápida": "15 min = 3 horas"
        },
        features: [
            "Sonido Hi-Res certificado",
            "Controles táctiles",
            "Asistente de voz integrado",
            "Plegable para viajes",
            "Garantía 2 años"
        ]
    },
    {
        id: 4,
        name: "Smart TV 55\" 4K",
        price: 1899000,
        oldPrice: 2199000,
        description: "Ultra HD, HDR, Android TV integrado con todas las apps",
        icon: "📺",
        category: "electronicos",
        badge: null,
        rating: 4.6,
        reviews: 342,
        specs: {
            "Tamaño": "55 pulgadas",
            "Resolución": "4K Ultra HD",
            "HDR": "HDR10+",
            "Sistema": "Android TV",
            "Conectividad": "Wi-Fi, Bluetooth, 3 HDMI"
        },
        features: [
            "Google Assistant integrado",
            "Chromecast incorporado",
            "Control por voz",
            "Netflix y YouTube pre-instalados",
            "Modo gaming con baja latencia"
        ]
    },
    {
        id: 5,
        name: "Bicicleta Montaña Pro",
        price: 1599000,
        oldPrice: 1899000,
        description: "Marco de aluminio, 21 velocidades, ideal para aventuras",
        icon: "🚴",
        category: "deportes",
        badge: "sale",
        rating: 4.4,
        reviews: 67,
        specs: {
            "Marco": "Aluminio 6061",
            "Velocidades": "21 Shimano",
            "Frenos": "Disco hidráulico",
            "Ruedas": "27.5 pulgadas",
            "Peso": "13.5 kg"
        },
        features: [
            "Suspensión delantera ajustable",
            "Neumáticos todo terreno",
            "Asiento ergonómico",
            "Reflectores de seguridad",
            "Kit de herramientas incluido"
        ]
    },
    {
        id: 6,
        name: "Cámara Digital Profesional",
        price: 3299000,
        oldPrice: 3799000,
        description: "Sensor full-frame, 4K video, perfecta para fotografía profesional",
        icon: "📷",
        category: "camaras",
        badge: null,
        rating: 4.8,
        reviews: 156,
        specs: {
            "Sensor": "Full Frame 24MP",
            "Video": "4K 60fps",
            "ISO": "100-51200",
            "Estabilización": "5 ejes",
            "Pantalla": "3.2\" táctil articulada"
        },
        features: [
            "Enfoque automático ultrarrápido",
            "Resistente al clima",
            "Dual slot de memoria",
            "Conectividad Wi-Fi",
            "Batería de larga duración"
        ]
    },

    // Productos adicionales increíbles
    {
        id: 7,
        name: "iPad Pro 12.9\" M2",
        price: 4299000,
        oldPrice: 4699000,
        description: "La tablet más poderosa con chip M2 y pantalla Liquid Retina XDR",
        icon: "📲",
        category: "tablets",
        badge: "new",
        rating: 4.9,
        reviews: 89,
        specs: {
            "Chip": "Apple M2",
            "Pantalla": "12.9\" Liquid Retina XDR",
            "Almacenamiento": "256GB",
            "Cámara": "12MP + LiDAR",
            "Compatibilidad": "Apple Pencil 2"
        },
        features: [
            "Thunderbolt 4 / USB-C",
            "Magic Keyboard compatible",
            "Face ID avanzado",
            "Realidad aumentada",
            "ProRes video recording"
        ]
    },
    {
        id: 8,
        name: "PlayStation 5 Pro",
        price: 2799000,
        oldPrice: 3199000,
        description: "La consola más potente con ray tracing y 4K a 120fps",
        icon: "🎮",
        category: "gaming",
        badge: "new",
        rating: 4.7,
        reviews: 234,
        specs: {
            "CPU": "AMD Zen 4 8-core",
            "GPU": "AMD RDNA 3",
            "RAM": "32GB GDDR6",
            "Almacenamiento": "2TB SSD NVMe",
            "Resolución": "4K@120fps"
        },
        features: [
            "Ray tracing en tiempo real",
            "SSD ultra rápido",
            "Audio 3D Tempest",
            "Retrocompatibilidad PS4",
            "Control DualSense incluido"
        ]
    },
    {
        id: 9,
        name: "Robot Aspiradora Inteligente",
        price: 899000,
        oldPrice: 1199000,
        description: "Navegación láser, mapeo inteligente, control por app",
        icon: "🏠",
        category: "hogar",
        badge: "sale",
        rating: 4.2,
        reviews: 178,
        specs: {
            "Navegación": "LiDAR + IA",
            "Autonomía": "180 minutos",
            "Capacidad": "600ml",
            "Filtro": "HEPA",
            "Altura": "9.6 cm"
        },
        features: [
            "Mapeo multi-piso",
            "Zonas restringidas virtuales",
            "Auto-vaciado opcional",
            "Compatibilidad Alexa/Google",
            "Fregado y aspirado 2 en 1"
        ]
    },
    {
        id: 10,
        name: "Smartwatch Ultra Sport",
        price: 649000,
        oldPrice: 799000,
        description: "Monitor de salud completo, GPS, resistente al agua",
        icon: "⌚",
        category: "electronicos",
        badge: null,
        rating: 4.4,
        reviews: 423,
        specs: {
            "Pantalla": "1.9\" AMOLED",
            "Batería": "7 días",
            "Sensores": "SpO2, ECG, Temperatura",
            "GPS": "Dual band",
            "Resistencia": "10ATM + IP69K"
        },
        features: [
            "100+ modos deportivos",
            "Análisis del sueño",
            "Llamadas Bluetooth",
            "Pagos contactless",
            "Carga inalámbrica rápida"
        ]
    },
    {
        id: 11,
        name: "Nike Air Max Revolución",
        price: 459000,
        oldPrice: 599000,
        description: "Zapatillas deportivas de última generación con tecnología Air",
        icon: "👟",
        category: "moda",
        badge: "new",
        rating: 4.6,
        reviews: 89,
        specs: {
            "Material": "Mesh transpirable",
            "Suela": "Air Max con zoom",
            "Peso": "320g",
            "Tallas": "36-46 disponibles",
            "Colores": "5 opciones"
        },
        features: [
            "Amortiguación superior",
            "Diseño ergonómico",
            "Materiales reciclados",
            "Antideslizante",
            "Garantía Nike"
        ]
    },
    {
        id: 12,
        name: "Libro: 'Código Limpio' por Robert Martin",
        price: 89000,
        oldPrice: 129000,
        description: "Manual esencial para desarrolladores, técnicas de programación profesional",
        icon: "📚",
        category: "libros",
        badge: null,
        rating: 4.8,
        reviews: 567,
        specs: {
            "Páginas": "464 páginas",
            "Idioma": "Español",
            "Editorial": "Anaya Multimedia",
            "Formato": "Tapa blanda",
            "ISBN": "978-8441539901"
        },
        features: [
            "Ejemplos prácticos reales",
            "Técnicas probadas",
            "Para todos los niveles",
            "Incluye ejercicios",
            "Referencia indispensable"
        ]
    },
    {
        id: 13,
        name: "Cafetera Espresso Automática",
        price: 1299000,
        oldPrice: 1599000,
        description: "Máquina profesional de café con molinillo integrado y espumador",
        icon: "☕",
        category: "hogar",
        badge: "sale",
        rating: 4.5,
        reviews: 234,
        specs: {
            "Presión": "19 bares",
            "Capacidad agua": "1.8L",
            "Molinillo": "Cónico de acero",
            "Espumador": "Vapor profesional",
            "Material": "Acero inoxidable"
        },
        features: [
            "12 niveles de molido",
            "Temperatura ajustable",
            "Programación automática",
            "Auto-limpieza",
            "Garantía 3 años"
        ]
    },
    {
        id: 14,
        name: "Drone 4K Professional",
        price: 2199000,
        oldPrice: 2699000,
        description: "Drone con cámara 4K, gimbal 3 ejes, 45 min de vuelo",
        icon: "🚁",
        category: "camaras",
        badge: "new",
        rating: 4.7,
        reviews: 145,
        specs: {
            "Cámara": "4K 60fps",
            "Gimbal": "3 ejes mecánico",
            "Vuelo": "45 minutos",
            "Alcance": "15 km",
            "Sensores": "Omnidireccionales"
        },
        features: [
            "Evitación de obstáculos",
            "Modo seguimiento automático",
            "Transmisión en vivo",
            "Control por gestos",
            "Estuche de transporte incluido"
        ]
    },
    {
        id: 15,
        name: "Teclado Mecánico Gaming RGB",
        price: 349000,
        oldPrice: 449000,
        description: "Switches mecánicos, iluminación RGB personalizable, anti-ghosting",
        icon: "⌨️",
        category: "gaming",
        badge: null,
        rating: 4.6,
        reviews: 789,
        specs: {
            "Switches": "Cherry MX Blue",
            "Conectividad": "USB-C + Bluetooth",
            "Iluminación": "RGB per-key",
            "Layout": "Español",
            "Material": "Aluminio + ABS"
        },
        features: [
            "N-Key Rollover",
            "Macros programables",
            "Software personalización",
            "Reposamuñecas magnético",
            "Durabilidad 50M clicks"
        ]
    }
];

// Variables globales
let currentProducts = [...products];
let currentCategory = 'todos';
let cart = [];
let currentProductForPurchase = null;

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    loadAllProducts();
    setupEventListeners();
    updateCartCounter();
}

// Cargar todos los productos
function loadAllProducts() {
    currentProducts = [...products];
    renderProducts();
    updateResultsCount();
}

// Configurar event listeners
function setupEventListeners() {
    // Categorías
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            
            // Actualizar menú activo
            document.querySelectorAll('[data-category]').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar productos
            currentCategory = category;
            if (category === 'todos') {
                currentProducts = [...products];
                document.getElementById('current-category').textContent = 'Todos los productos';
                document.getElementById('pageTitle').textContent = 'Todos los Productos';
            } else {
                currentProducts = products.filter(product => product.category === category);
                document.getElementById('current-category').textContent = this.textContent;
                document.getElementById('pageTitle').textContent = this.textContent;
            }
            
            renderProducts();
            updateResultsCount();
        });
    });

    // Filtros
    document.querySelectorAll('[data-filter]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            applyFilter(filter);
        });
    });

    // Buscador
    document.getElementById('searchInput').addEventListener('input', function() {
        searchProducts(this.value);
    });

    // Sort select
    document.getElementById('sortSelect').addEventListener('change', function() {
        if (this.value) {
            applyFilter(this.value);
        }
    });

    // Botón carrito
    document.getElementById('cartBtn').addEventListener('click', function() {
        showCartModal();
    });

    // Event listeners para quantity selector
    document.getElementById('quantity').addEventListener('change', updateTotalPrice);
}

// Renderizar productos
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    currentProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// Crear tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const badgeHtml = product.badge ? `<div class="product-badge ${product.badge}">${product.badge === 'new' ? 'NUEVO' : product.badge === 'sale' ? 'OFERTA' : product.badge}</div>` : '';
    const oldPriceHtml = product.oldPrice ? `<span class="product-old-price">$${product.oldPrice.toLocaleString()}</span>` : '';
    
    card.innerHTML = `
        ${badgeHtml}
        <div class="product-image">${product.icon}</div>
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-rating">
                <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</div>
                <span class="rating-text">(${product.rating}/5 - ${product.reviews} reseñas)</span>
            </div>
            <div class="product-price">
                $${product.price.toLocaleString()}
                ${oldPriceHtml}
            </div>
            <div class="product-description">${product.description}</div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="openBuyModal(${product.id})">Comprar</button>
                <button class="btn btn-secondary" onclick="openDetailModal(${product.id})">Ver</button>
            </div>
        </div>
    `;
    return card;
}

// Aplicar filtros
function applyFilter(filter) {
    let sortedProducts = [...currentProducts];
    
    switch(filter) {
        case 'precio-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'precio-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'nombre':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'nuevos':
            sortedProducts = sortedProducts.filter(product => product.badge === 'new');
            break;
        case 'ofertas':
            sortedProducts = sortedProducts.filter(product => product.badge === 'sale' || product.oldPrice);
            break;
        case 'mejor-valorados':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    currentProducts = sortedProducts;
    renderProducts();
    updateResultsCount();
}

// Buscar productos
function searchProducts(query) {
    if (!query.trim()) {
        if (currentCategory === 'todos') {
            loadAllProducts();
        } else {
            currentProducts = products.filter(product => product.category === currentCategory);
            renderProducts();
            updateResultsCount();
        }
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    currentProducts = filteredProducts;
    renderProducts();
    updateResultsCount();
}

// Actualizar contador de resultados
function updateResultsCount() {
    const count = currentProducts.length;
    document.getElementById('resultsCount').textContent = `Mostrando ${count} producto${count !== 1 ? 's' : ''}`;
}

// Encontrar producto por ID
function findProductById(id) {
    return products.find(product => product.id === id);
}

// Abrir modal de compra
function openBuyModal(productId) {
    const product = findProductById(productId);
    if (!product) return;

    currentProductForPurchase = product;
    
    document.getElementById('modal-buy-icon').textContent = product.icon;
    document.getElementById('modal-buy-name').textContent = product.name;
    document.getElementById('modal-buy-price').textContent = '$' + product.price.toLocaleString();
    document.getElementById('quantity').value = 1;
    updateTotalPrice();
    
    // Limpiar formulario
    document.getElementById('purchaseForm').reset();
    
    document.getElementById('buyModal').classList.add('show');
}

// Abrir modal de detalles
function openDetailModal(productId) {
    const product = findProductById(productId);
    if (!product) return;

    currentProductForPurchase = product;
    
    document.getElementById('modal-detail-icon').textContent = product.icon;
    document.getElementById('modal-detail-name').textContent = product.name;
    document.getElementById('modal-detail-price').textContent = '$' + product.price.toLocaleString();
    document.getElementById('modal-detail-description').textContent = product.description;
    
    // Mostrar rating
    const ratingHtml = `
        <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</div>
        <span class="rating-text">(${product.rating}/5 - ${product.reviews} reseñas)</span>
    `;
    document.getElementById('modal-detail-rating').innerHTML = ratingHtml;
    
    // Mostrar especificaciones
    const specsContainer = document.getElementById('product-specs');
    specsContainer.innerHTML = '';
    Object.entries(product.specs).forEach(([key, value]) => {
        const row = document.createElement('div');
        row.className = 'detail-row';
        row.innerHTML = `
            <span class="detail-label">${key}:</span>
            <span class="detail-value">${value}</span>
        `;
        specsContainer.appendChild(row);
    });
    
    // Mostrar características
    const featuresContainer = document.getElementById('product-features');
    featuresContainer.innerHTML = '';
    product.features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.className = 'feature-item';
        featureDiv.textContent = '✓ ' + feature;
        featuresContainer.appendChild(featureDiv);