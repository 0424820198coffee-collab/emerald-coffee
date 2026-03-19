const products = {
    '咖啡禮盒': [
        { name: '【大藝術家Vol. lll】精品掛耳禮盒(27包)', price: 999, img: 'images/86F4F0FD-B895-4153-ADE3-B8755077B1DD.jpg' },
        { name: '【圓滿】精品掛耳禮盒(24包)', price: 639, img: 'images/F3AAA3C7-216D-4574-B544-9A68C83384FC.jpg' },
        { name: '【職人首選】精品掛耳禮盒(20包)', price: 599, img: 'images/8644247A-802D-4778-B45F-C0D283B6D937.jpg' },
        { name: '【精選】精品掛耳禮盒(22包)', price: 499, img: 'images/CFF3DA3D-6351-4818-AC7F-46FE6105FBCD.jpg' },
        { name: '【咖啡寶盒】精品掛耳禮盒(15包)', price: 379, img: 'images/64E7269E-5A9A-4896-9457-C87B560C32BD.jpg' },
        { name: '【探索品味】精品掛耳禮盒(10包)', price: 249, img: 'images/C818D388-95F2-4608-B333-F162515F0370.jpg' }
    ],
    '精品咖啡豆': [
        { name: '衣索比亞 耶加雪菲 ToH冠軍系列 卡拉 阿吉娜 日曬 G1 (1900系列)', price: 1900, img: 'images/1900x (11).webp' },
        { name: '哥斯大黎加 科佩莊園 藝伎 黑蜜處理 (1900系列)', price: 1900, img: 'images/1900x (12).webp' },
        { name: '藝伎交響曲 第二樂章 (1100系列)', price: 1100, img: 'images/1100x (6).webp' },
        { name: '音樂家系列 巴哈 (1100系列)', price: 1100, img: 'images/1100x (7).webp' },
        { name: '音樂家系列 蕭邦 (1100系列)', price: 1100, img: 'images/1100x (8).webp' },
        { name: '音樂家系列 莫札特 (1100系列)', price: 1100, img: 'images/1100x (9).webp' },
        { name: '古吉 烏拉嘎 水洗 G1 (1100系列)', price: 1100, img: 'images/1100x (10).webp' },
        { name: '2019 WCE 世界盃烘豆大賽 冠軍配方 (800系列)', price: 800, img: 'images/800x.webp' },
        { name: '藝伎交響曲 第一樂章 (800系列)', price: 800, img: 'images/800x (1).webp' },
        { name: '牧羊人 日曬 (800系列)', price: 800, img: 'images/800x (2).webp' },
        { name: '牧羊人 水洗 (800系列)', price: 800, img: 'images/800x (3).webp' },
        { name: '獅子王 日曬 (800系列)', price: 800, img: 'images/800x (4).webp' },
        { name: '獅子王 水洗 (800系列)', price: 800, img: 'images/800x (5).webp' },
        { name: '尼加拉瓜 水洗 SHG (500系列)', price: 500, img: 'images/500x.webp' },
        { name: '蜂鳥 黃金烘焙 (500系列)', price: 500, img: 'images/500x (1).webp' },
        { name: '瑪雅 中烘焙 (500系列)', price: 500, img: 'images/500x (2).webp' },
        { name: '征服者 日式烘焙 (500系列)', price: 500, img: 'images/500x(3).webp' },
        { name: '瑪雅 中深烘焙 (500系列)', price: 500, img: 'images/500x(4).webp' },
        { name: '蜂鳥 黑金烘焙 (500系列)', price: 500, img: 'images/500x(6).webp' },
        { name: '藍鑽 黃金曼特寧 (400系列)', price: 400, img: 'images/D6326D5E-1880-4007-BE82-47EFBD02B8DB.jpg' },
        { name: '耶加雪菲 (400系列)', price: 400, img: 'images/6CA69FE3-8839-496F-90AA-E14DBA371F8C.jpg' },
        { name: '印尼 綠寶石 (400系列)', price: 400, img: 'images/0BCF97E7-7E40-4133-A9B9-2263E9187419.jpg' },
        { name: '安提瓜 花神 (400系列)', price: 400, img: 'images/1AEE6DC4-76FA-4B72-8F9E-91B02363DB13.jpg' }
    ],
    '農場咖啡豆': [
        { name: '義式炭燒咖啡豆 義式烘焙 (一磅)', price: 400, img: 'images/400x.webp' },
        { name: '特調米爾克咖啡豆 中深烘焙 (一磅)', price: 400, img: 'images/400x (1).webp' },
        { name: '黃金曼摩風味 深烘焙 (半磅)', price: 400, img: 'images/400x (2).webp' },
        { name: '陳年阿拉比卡 中深烘焙 (半磅)', price: 400, img: 'images/400x (3).webp' },
        { name: '特調藍山風味 中深烘焙 (半磅)', price: 400, img: 'images/400x (4).webp' },
        { name: '經典曼巴風味 中深烘焙 (半磅)', price: 400, img: 'images/400x (5).webp' }
    ],
    '精品掛耳': [
        { name: '卡拉 阿吉娜 日曬 (黃金)', price: 100, img: 'images/S__463814658.jpg' },
        { name: '綠標 藝伎 水洗 (黃金)', price: 100, img: 'images/S__463814660.jpg' },
        { name: '音樂家 蕭邦 (黃金)', price: 70, img: 'images/S__463814662.jpg' },
        { name: '音樂家 莫札特 (黃金)', price: 70, img: 'images/S__463814664.jpg' },
        { name: '音樂家 巴哈 (黃金)', price: 70, img: 'images/S__463814666.jpg' },
        { name: '古吉 烏拉嘎 水洗 (黃金)', price: 70, img: 'images/S__463814668.jpg' },
        { name: '藝伎交響曲 第二樂章 (黃金)', price: 70, img: 'images/S__463814672.jpg' },
        { name: '神父咖啡 日式 (掛耳)', price: 60, img: 'images/S__463814674.jpg' },
        { name: '神父咖啡 中深 (掛耳)', price: 60, img: 'images/S__463814676.jpg' },
        { name: '牧羊人 水洗 (黃金)', price: 60, img: 'images/S__463814678.jpg' },
        { name: '牧羊人 日曬 (黃金)', price: 60, img: 'images/S__463814680.jpg' },
        { name: '獅子王 日曬 (黃金)', price: 60, img: 'images/S__463814682.jpg' },
        { name: '獅子王 水洗 (黃金)', price: 60, img: 'images/S__463814684.jpg' },
        { name: '藝伎交響曲 第四樂章 (黃金)', price: 60, img: 'images/S__463814686.jpg' },
        { name: '藝伎交響曲 第一樂章 (白金)', price: 60, img: 'images/S__463814688.jpg' },
        { name: '冠軍烘焙配方 (白金)', price: 60, img: 'images/S__463814690.jpg' },
        { name: '波奎特 花蝴蝶 (白金)', price: 60, img: 'images/S__463814692.jpg' },
        { name: '托利馬 小農精選 (中深)', price: 40, img: 'images/S__463814694.jpg' },
        { name: '征服者 中深烘焙', price: 40, img: 'images/S__463814696.jpg' },
        { name: '征服者 日式烘焙', price: 40, img: 'images/S__463814698.jpg' },
        { name: '尼加拉瓜 水洗 SHG (白金)', price: 40, img: 'images/S__463814700.jpg' },
        { name: '瑪雅 中烘焙 (掛耳)', price: 40, img: 'images/S__463814702.jpg' },
        { name: '蜂鳥 黃金烘焙 (掛耳)', price: 40, img: 'images/S__463814704.jpg' },
        { name: '歐客佬 藝伎風味 (黃金)', price: 40, img: 'images/S__463814706.jpg' },
        { name: '艾拉班莎處理廠 日曬 (中深)', price: 35, img: 'images/S__463814708.jpg' },
        { name: '藍鑽 黃金曼特寧 (中深)', price: 35, img: 'images/S__463814710.jpg' },
        { name: '安提瓜 花神 (中烘焙)', price: 35, img: 'images/S__463814712.jpg' },
        { name: '耶加雪菲 黃金烘焙 (掛耳)', price: 35, img: 'images/S__463814714.jpg' },
        { name: '耶加雪菲 日式烘焙 (掛耳)', price: 35, img: 'images/S__463814716.jpg' }
    ],
    '農場濾掛': [
        { name: '經典曼巴 (農場濾掛)', price: 12.5, img: 'images/S__463806467_0.jpg' },
        { name: '陳年阿拉比卡 (農場濾掛)', price: 12.5, img: 'images/S__463806468_0.jpg' },
        { name: '藍山風味 (農場濾掛)', price: 12.5, img: 'images/S__463806469_0.jpg' },
        { name: '黃金曼特寧風味 (農場濾掛)', price: 12.5, img: 'images/S__463806470_0.jpg' },
        { name: '黃金曼摩風味 (農場濾掛)', price: 12.5, img: 'images/S__463806471_0.jpg' }
    ],
    '米香花生': [
        { name: '米香花生 (麻辣酥)', price: 150, img: 'images/S__464224264.jpg' },
        { name: '米香花生 (白米酥)', price: 150, img: 'images/S__464224264.jpg' },
        { name: '米香花生 (黑米酥)', price: 150, img: 'images/S__464224264.jpg' },
        { name: '米香花生 (紅麥酥)', price: 150, img: 'images/S__464224264.jpg' }
    ]
};

let cart = [];

function initTabs() {
    const container = document.getElementById('tabs');
    container.innerHTML = "";
    Object.keys(products).forEach((cat, idx) => {
        const div = document.createElement('div');
        div.className = `tab ${idx === 0 ? 'active' : ''}`;
        div.innerText = cat;
        div.onclick = () => switchCategory(cat);
        container.appendChild(div);
    });
    switchCategory(Object.keys(products)[0]);
}

function switchCategory(cat) {
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.innerText === cat));
    const sel = document.getElementById('prodSel');
    sel.innerHTML = products[cat].map(p => `<option value="${p.name}" data-price="${p.price}" data-img="${p.img}" data-cat="${cat}">${p.name} - $${p.price}</option>`).join('');
    updateUI();
}

function updateUI() {
    const sel = document.getElementById('prodSel');
    if (sel.options[sel.selectedIndex]) {
        document.getElementById('mainImg').src = sel.options[sel.selectedIndex].dataset.img;
    }
}

function addToCart() {
    const sel = document.getElementById('prodSel');
    const qty = parseInt(document.getElementById('prodQty').value);
    if (qty < 1) return;
    const opt = sel.options[sel.selectedIndex];
    const exist = cart.find(i => i.name === sel.value);
    if (exist) { exist.qty += qty; } 
    else { cart.push({ name: sel.value, price: parseFloat(opt.dataset.price), qty: qty, cat: opt.dataset.cat }); }
    renderCart();
}

function renderCart() {
    const disp = document.getElementById('cartDisplay');
    if (cart.length === 0) { disp.innerHTML = "目前無商品"; document.getElementById('totalPrice').innerText = "0"; return; }

    let farmQty = 0;           
    let premiumCoffeeQty = 0;  
    let premiumCoffeeAmt = 0;  
    let peanutQty = 0;
    let regularAmt = 0;        
    let beanPrices = [];       

    cart.forEach(item => {
        if (item.cat === '咖啡豆' || item.cat === '農場咖啡豆') {
            for(let i=0; i<item.qty; i++) beanPrices.push(item.price);
        } else if (item.cat === '農場濾掛') {
            farmQty += item.qty;
        } else if (item.cat === '精品掛耳') {
            premiumCoffeeQty += item.qty;
            premiumCoffeeAmt += (item.price * item.qty);
        } else {
            if (item.cat === '米香花生') peanutQty += item.qty;
            regularAmt += (item.price * item.qty);
        }
    });

    beanPrices.sort((a, b) => a - b);
    let beanTotal = 0;
    let beanDiscountCount = Math.floor(beanPrices.length / 3);
    let beanDiscountAmt = 0;
    for(let i=0; i<beanDiscountCount; i++) beanDiscountAmt += beanPrices[i];
    beanPrices.forEach(p => beanTotal += p);
    let beanFinal = beanTotal - beanDiscountAmt;

    let premiumFinal = (premiumCoffeeQty >= 50) ? (premiumCoffeeAmt * 0.5) : premiumCoffeeAmt;
    let farmFinal = (farmQty >= 200) ? (2300 + (farmQty - 200) * 11.5) : (farmQty * 12.5);
    let peanutDiscount = Math.floor(peanutQty / 11) * 150;
    
    let subtotal = beanFinal + premiumFinal + farmFinal + regularAmt - peanutDiscount;
    let shipping = (subtotal >= 2000) ? 0 : 150;

    disp.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
            <span>${item.name} x ${item.qty}</span>
            <span>$${Math.round(item.price * item.qty)} <button onclick="cart.splice(${idx},1);renderCart()" style="color:red; border:none; background:none; cursor:pointer;">(刪除)</button></span>
        </div>`).join('');

    let promoMsg = "";
    if (beanDiscountAmt > 0) promoMsg += `<br><small style="color:green;">✅ 咖啡豆/農場豆已享買2送1</small>`;
    if (premiumCoffeeQty >= 50) promoMsg += `<br><small style="color:green;">✅ 精品掛耳已享 5 折</small>`;
    if (farmQty >= 200) promoMsg += `<br><small style="color:green;">✅ 農場系列已享 $2300 優惠</small>`;
    if (peanutDiscount > 0) promoMsg += `<br><small style="color:green;">✅ 花生已享買10送1</small>`;

    disp.innerHTML += `<div style="margin-top:10px; border-top:1px solid #eee; font-size:0.9em;">
        小計: $${Math.round(subtotal)} ${promoMsg}<br>
        運費: $${shipping}</div>`;
    document.getElementById('totalPrice').innerText = Math.round(subtotal + shipping);
}

async function submitToExcel() {
    const name = document.getElementById('uName').value.trim();
    const phone = document.getElementById('uPhone').value.trim();
    const email = document.getElementById('uEmail').value.trim();
    const addr = document.getElementById('uAddress').value.trim();
    const bank = document.getElementById('uBank').value.trim();
    const total = document.getElementById('totalPrice').innerText;

    if (!name || !phone || !email || !addr || !bank || cart.length === 0) return alert("請完整填寫收件資訊與 Email");

    const btn = document.getElementById('sendBtn');
    btn.disabled = true; btn.innerText = "傳送中...";

    const orderID = "OKL" + new Date().toISOString().slice(2,10).replace(/-/g,'') + Math.floor(Math.random()*1000);
    const details = cart.map(i => `${i.name}(${i.qty})`).join(', ');
    const url = "https://script.google.com/macros/s/AKfycbwGa4d2HYSAngbMJRuh_OPXz8GAZZqMsukslPfGbgsotRYxtHC2ywEUF1QTEDwOShRW5g/exec";

    try {
        await fetch(url, { 
            method: "POST", 
            mode: "no-cors", 
            body: JSON.stringify({ orderID, name, phone, email, address: addr, bank, productName: details, totalPrice: total }) 
        });
        window.location.href = `success.html?total=${total}&orderID=${orderID}&items=${encodeURIComponent(details)}`;
    } catch (e) {
        alert("送出失敗，請檢查網路連接");
        btn.disabled = false; btn.innerText = "送出訂單";
    }
}

// 頁面載入後初始化
document.addEventListener('DOMContentLoaded', initTabs);
