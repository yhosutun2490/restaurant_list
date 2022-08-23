# 餐廳清單 1.0

此專案提供使用者搜尋餐廳的資訊，例如:餐廳類別、餐點樣式、地址等

## 功能列表
依照餐廳名稱及餐廳類別搜尋
依照餐廳名稱、類別及地區排序
檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及 Google Map
點選Back返回首頁瀏覽全部餐廳資料
點選Edit編輯此筆餐廳資料
點選Delete刪除此筆餐廳資料
點選 Google Map顯示詳細地圖可查看位置詳細資料
點選Create新增餐廳包含上傳圖片、評分、類別、地址等資訊，Google Map 位置會依照輸入之地址產生
點選 ✏️ 可編輯此餐廳資料
點選 🗑️ 可刪除此餐廳資料

## 專案畫面

## Environment SetUp - 環境建置
Node.js
Express
Express-handle-bars

## Installing - 專案安裝流程
打開你的 terminal，Clone 此專案至本機電腦
git clone https://github.com/pierceshih15/restaurantList.git
開啟終端機(Terminal)，進入存放此專案的資料夾
cd restaurantList
安裝 npm 套件
在 Terminal 輸入 npm install 指令
安裝 nodemon 套件
在 Terminal 輸入 nodemon app.js 指令
匯入種子檔案
在 Terminal 找到 Seeder.js 檔案

執行 node models/seeds/Seeder.js 匯入使用者與餐廳資料
當 terminal 出現以下字樣，即表示種子資料已新增至資料庫，按下 ctrl + c 結束執行

Mongodb is connected!

User and Restaurant data get done!
啟動伺服器，執行 app.js 檔案
nodemon app.js
當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結
The Express server is running on http://localhost:3000

Mongodb is connected!