// JavaScript Kodları

const productData = {
            gövde: [
                { code: "DLP 001", name: "Kotonvizon MDFlam Gövde-80x220", price: 14400, image: "images/dlp001.jpg" },
                { code: "DLP 002", name: "Kotonvizon MDFlam Gövde-80x220", price: 14760, image: "images/dlp002.jpg" },
                { code: "DLP 003", name: "Kotonvizon MDFlam Gövde-80x220", price: 11700, image: "images/dlp003.jpg" },
                { code: "DLP 004", name: "Kotonvizon MDFlam Gövde-80x220", price: 13140, image: "images/dlp004.jpg" },
                { code: "DLP 005", name: "Kotonvizon MDFlam Gövde-80x220", price: 13320, image: "images/dlp005.jpg" },
                { code: "DLP 006", name: "Kotonvizon MDFlam Gövde-80x220", price: 14040, image: "images/dlp006.jpg" },
                { code: "DLP 007", name: "Kotonvizon MDFlam Gövde-80x220", price: 10620, image: "images/dlp007.jpg" },
                { code: "DLP 008", name: "Kotonvizon MDFlam Gövde-80x220", price: 13320, image: "images/dlp008.jpg" },
                { code: "DLP 009", name: "Kotonvizon MDFlam Gövde-80x220", price: 13320, image: "images/dlp009.jpg" },
                { code: "DLP 010", name: "Kotonvizon MDFlam Gövde-40x220", price: 11520, image: "images/dlp010.jpg" },
                { code: "DLP 011", name: "Kotonvizon MDFlam Gövde-40x220", price: 10440, image: "images/dlp011.jpg" },
                { code: "DLP 012", name: "Kotonvizon MDFlam Gövde-40x220", price: 10080, image: "images/dlp012.jpg" }
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

        document.getElementById("product-type").addEventListener("change", function () {
            const productType = this.value;
            const productCodeSelect = document.getElementById("product-code");
            productCodeSelect.innerHTML = "<option value=''>Ürün Kodu Seç</option>";

            if (productData[productType]) {
                productData[productType].forEach(product => {
                    const option = document.createElement("option");
                    option.value = product.code;
                    option.textContent = `${product.code} - ${product.name}`;
                    productCodeSelect.appendChild(option);
                });
            } else {
                console.error("Geçersiz ürün tipi veya data eksik: ", productType);
            }
        });

        document.getElementById("add-to-cart").addEventListener("click", function () {
            const productType = document.getElementById("product-type").value;
            const productCode = document.getElementById("product-code").value;
            const quantity = parseInt(document.getElementById("product-quantity").value);
            const summaryTable = document.getElementById("summary-table");

            if (productType && productCode && quantity > 0) {
                const product = productData[productType].find(p => p.code === productCode);
                if (product) {
                    const existingRow = Array.from(summaryTable.rows).find(row => row.cells[1].textContent === productCode);
                    if (existingRow) {
                        const qtyCell = existingRow.cells[3].firstChild;
                        qtyCell.value = parseInt(qtyCell.value) + quantity;
                        const totalCell = existingRow.cells[5];
                        totalCell.textContent = `₺${(product.price * parseInt(qtyCell.value)).toLocaleString("tr-TR", { minimumFractionDigits: 2 })}`;
                    } else {
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td>${productType}</td>
                            <td>${product.code}</td>
                            <td>${product.name}</td>
                            <td><input type="number" class="quantity-input" value="${quantity}" min="0" onchange="updateQuantity(this, '${product.code}')"></td>
                            <td>₺${product.price.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}</td>
                            <td>₺${(product.price * quantity).toLocaleString("tr-TR", { minimumFractionDigits: 2 })}</td>
<td><button class="remove-btn" onclick="removeRow(this)">Çıkart</button></td>
                        `;
                        summaryTable.appendChild(row);
                    }
                    updateTotals();
                    updateImagePanel();
                }
            }
        });
// Satırı kaldıran fonksiyon
function removeRow(button) {
    const row = button.closest("tr"); // Butonun bağlı olduğu satırı bul
    row.remove(); // Satırı kaldır
    updateTotals(); // Toplamları güncelle
    updateImagePanel(); // Görsel panelini güncelle
}


        function updateQuantity(input, productCode) {
            const row = Array.from(document.querySelectorAll("#summary-table tr")).find(row => row.cells[1].textContent === productCode);
            if (row) {
                const quantity = parseInt(input.value);
                const price = parseFloat(row.cells[4].textContent.replace("₺", "").replace(/,/g, ""));
                const totalCell = row.cells[5];

                if (quantity === 0) {
                    row.remove();
                } else {
                    totalCell.textContent = `₺${(price * quantity * 1000).toLocaleString("tr-TR", { minimumFractionDigits: 2 })}`;
                }
                updateTotals();
                updateImagePanel();
            }
        }

        function updateTotals() {
            const rows = document.querySelectorAll("#summary-table tr");
            let subtotal = 0;
            rows.forEach(row => {
                const totalCell = row.cells[5];
                subtotal += parseFloat(totalCell.textContent.replace("₺", "").replace(/,/g, "")) * 1000;
            });
            const vat = subtotal * 0.1;
            const total = subtotal + vat;

            document.getElementById("subtotal").textContent = `₺${subtotal.toFixed(2)}`;
            document.getElementById("vat").textContent = `₺${vat.toFixed(2)}`;
            document.getElementById("total").textContent = `₺${total.toFixed(2)}`;
        }

        function updateImagePanel() {
            const imagePanel = document.getElementById("selected-images");
            imagePanel.innerHTML = ""; // Paneli temizle
            const rows = document.querySelectorAll("#summary-table tr");
            rows.forEach(row => {
                const productCode = row.cells[1].textContent;
                const productType = row.cells[0].textContent;
                const product = productData[productType].find(p => p.code === productCode);
                if (product && product.image) {
                    const img = document.createElement("img");
                    img.src = product.image;
                    img.alt = product.name;
                    imagePanel.appendChild(img);
                }
            });
        }
