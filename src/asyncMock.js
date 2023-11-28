import tele from './img/tele.png'
import equipodesonido from './img/equipodesonido.png'
import microondas from './img/microondas.png'

const products = [
    { id: '1', name: 'SCrystalClear LED 43""', price: '12000', category: 'Tv', img:tele, stock: '25', description: 'Televisor inteligente con funciones avanzadas.' },

    { id: '2', name: 'SmartVision UltraHD 55"', price: '13000', category: 'Tv', img:tele, stock: '25', description: 'Otro modelo de televisor con características únicas.' },

    { id: '3', name: 'QuantumView OLED 65"', price: '20000', category: 'Tv', img:tele, stock: '25', description: 'La última versión de nuestro televisor Smart.' },

    { id: '4', name: 'HarmonyAudio 5.1 Surround', price: '5000', category: 'equipodesonido', img: equipodesonido, stock: '25', description: 'Sistema de sonido potente para tu hogar.' },

    { id: '5', name: 'SonicWave Bluetooth Soundbar', price: '2000', category: 'equipodesonido', img: equipodesonido, stock: '25', description: 'Un equipo de sonido compacto pero potente.' },

    { id: '6', name: 'HiFiElite Stereo Tower Speakers', price: '4000', category: 'equipodesonido', img: equipodesonido, stock: '25', description: 'Diseño elegante y calidad de sonido excepcional.' },

    { id: '7', name: 'QuickHeat Inverter Microwave', price: '8500', category: 'Microondas', img: microondas, stock: '25', description: 'Microondas con múltiples funciones de cocción.' },

    { id: '8', name: 'TurboChef Express Cook', price: '17000', category: 'Microondas', img: microondas, stock: '25', description: 'Microondas de alta capacidad para cocina rápida.' },

    { id: '9', name: 'PrecisionWave Convection Oven', price: '13500', category: 'Microondas', img: microondas, stock: '25', description: 'Microondas con tecnología avanzada y fácil de usar.' },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};