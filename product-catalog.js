// Ürün Bilgileri
const productData = {
    gövde: [
        { code: "DLP 001", name: "Kotonvizon MDFlam Gövde-80x220", price: 14400, image: "images/dlp001.jpg" },
        { code: "DLP 002", name: "Kotonvizon MDFlam Gövde-80x220", price: 14760, image: "images/dlp002.jpg" },
        { code: "DLP 003", name: "Kotonvizon MDFlam Gövde-80x220", price: 11700, image: "images/dlp003.jpg" },
        { code: "DLP 004", name: "Kotonvizon MDFlam Gövde-80x220", price: 12800, image: "images/dlp004.jpg" },
        { code: "DLP 005", name: "Kotonvizon MDFlam Gövde-80x220", price: 13500, image: "images/dlp005.jpg" },
        { code: "DLP 006", name: "Kotonvizon MDFlam Gövde-80x220", price: 14000, image: "images/dlp006.jpg" },
        { code: "DLP 007", name: "Kotonvizon MDFlam Gövde-80x220", price: 14500, image: "images/dlp007.jpg" },
        { code: "DLP 008", name: "Kotonvizon MDFlam Gövde-80x220", price: 15000, image: "images/dlp008.jpg" },
        { code: "DLP 009", name: "Kotonvizon MDFlam Gövde-80x220", price: 16000, image: "images/dlp009.jpg" },
        { code: "DLP 010", name: "Kotonvizon MDFlam Gövde-40x220", price: 17000, image: "images/dlp010.jpg" },
        { code: "DLP 011", name: "Kotonvizon MDFlam Gövde-40x220", price: 17500, image: "images/dlp011.jpg" },
        { code: "DLP 012", name: "Kotonvizon MDFlam Gövde-40x220", price: 18000, image: "images/dlp012.jpg" }
    ],
    kapak: [
        { code: "KP 001", name: "Meşe MDFlam Kapak-40x218", price: 3150, image: "images/kp001.jpg" },
        { code: "KP 002", name: "Ceviz MDFlam Kapak-40x218", price: 3150, image: "images/kp002.jpg" },
        { code: "KP 003", name: "Koyu Gri Soft Touch Kapak-40x218", price: 3420, image: "images/kp003.jpg" },
        { code: "KP 004", name: "Açık Gri Soft Touch Kapak-40x218", price: 3420, image: "images/kp004.jpg" },
        { code: "KP 005", name: "Vizon Soft Touch Kapak-40x218", price: 3420, image: "images/kp005.jpg" },
        { code: "KP 006", name: "Yeşil Soft Touch Kapak-40x218", price: 3420, image: "images/kp006.jpg" },
        { code: "KP 007", name: "Beyaz Soft Touch Kapak-40x218", price: 3420, image: "images/kp007.jpg" },
        { code: "KP 008", name: "Normal Ayna Kapak-40x218", price: 4410, image: "images/kp008.jpg" },
        { code: "KP 009", name: "Füme Ayna Kapak-40x218", price: 4680, image: "images/kp009.jpg" },
        { code: "KP 010", name: "Bronz Ayna Kapak-40x218", price: 4680, image: "images/kp010.jpg" },
        { code: "KP 011", name: "Reflekte Cam Kapak-40x218", price: 4500, image: "images/kp011.jpg" },
        { code: "KP 012", name: "Fugalı Lake-Sol Kapak-40x218", price: 5400, image: "images/kp012.jpg" },
        { code: "KP 013", name: "Fugalı Lake-Sağ Kapak-40x218", price: 5400, image: "images/kp013.jpg" },
        { code: "KP 014", name: "Çerçeveli Lake-1 Kapak-40x218", price: 5850, image: "images/kp014.jpg" },
        { code: "KP 015", name: "Çerçeveli Lake-2 Kapak-40x218", price: 6300, image: "images/kp015.jpg" }
    ],
    "yan-dikme": [
        { code: "YD 001", name: "Meşe MDFlam Yan Dikme-60x220", price: 3150, image: "images/yd001.jpg" },
        { code: "YD 002", name: "Ceviz MDFlam Yan Dikme-60x220", price: 3150, image: "images/yd002.jpg" },
        { code: "YD 003", name: "Koyu Gri Soft Touch Yan Dikme-60x220", price: 4050, image: "images/yd003.jpg" },
        { code: "YD 004", name: "Açık Gri Soft Touch Yan Dikme-60x220", price: 4050, image: "images/yd004.jpg" },
        { code: "YD 005", name: "Yeşil Soft Touch Yan Dikme-60x220", price: 4050, image: "images/yd005.jpg" },
        { code: "YD 006", name: "Beyaz Soft Touch Yan Dikme-60x220", price: 4050, image: "images/yd006.jpg" },
        { code: "YD 007", name: "Vizon Soft Touch Yan Dikme-60x220", price: 4050, image: "images/yd007.jpg" },
        { code: "YD 008", name: "Lake Yan Dikme-60x220", price: 5040, image: "images/yd008.jpg" }
    ]
};

// Ürün Kartlarını Oluştur
const catalogContainer = document.getElementById("product-catalog");

Object.keys(productData).forEach(category => {
    productData[category].forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Ürün Kodu: <strong>${product.code}</strong></p>
            <p>Fiyat: ₺${product.price.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}</p>
        `;

        catalogContainer.appendChild(productCard);
    });
});
