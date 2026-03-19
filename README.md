# ☕ 歐客佬翡翠咖啡 - 旗艦訂購系統

這是一個為**歐客佬翡翠咖啡**打造的輕量化前端訂購網頁。系統整合了商品展示、自動化優惠計算、購物車管理，並透過 Google Apps Script 將訂單資訊即時同步至 Google Sheet 試算表。

## 🌟 核心功能

*   **多維度優惠引擎**：
    *   **買 2 送 1**：適用於「咖啡豆」與「農場咖啡豆」系列（自動折抵最低價品項）。
    *   **精品掛耳折扣**：滿 50 包即享 **5 折** 優惠。
    *   **農場濾掛特惠**：滿 200 包享團購價 **$2300**。
    *   **米香花生**：買 10 送 1。
    *   **運費規則**：全館滿 $2000 免運（未滿收 $150）。
*   **響應式設計 (Responsive Design)**：支援手機與桌面版配置切換。
*   **自動化結帳流程**：即時計算小計、折扣、運費與總額。
*   **後端整合**：使用 `Fetch API` 非同步傳送訂單至 Google Sheet，實現無伺服器 (Serverless) 的後端管理。

## 📁 檔案結構

```text
/oklao-order-system
│
├── index.html      # 網頁主結構 (骨架)
├── style.css       # 視覺設計與響應式佈局 (樣式)
├── script.js       # 商品資料庫、優惠邏輯與購物車功能 (核心)
└── images/         # 商品圖片資料夾
```

## 🚀 快速上手

1.  **下載專案**：將所有檔案下載並放置於同一資料夾。
2.  **配置圖片**：確保 `images/` 資料夾中包含 `script.js` 內所引用的圖片檔名。
3.  **串接 Google 試算表 (選用)**：
    *   開啟 Google Sheet 並建立 Google Apps Script。
    *   部署為「網頁應用程式」。
    *   將產生的 URL 貼上至 `script.js` 中的 `url` 變數。
4.  **開啟網頁**：直接點擊 `index.html` 即可開始使用。

## 🛠️ 技術棧

*   **Frontend**: HTML5, CSS3 (Flexbox/Grid), Modern JavaScript (ES6+).
*   **Integration**: Google Apps Script (Web App).
*   **Data Handling**: JSON.

## 📝 注意事項

*   本系統為純前端實作，訂單送出後會導向 `success.html`，請確保該檔案存在於目錄中。
*   商品價格與優惠邏輯皆於 `script.js` 中進行設定，如需更改請至該檔案修改 `products` 物件。
