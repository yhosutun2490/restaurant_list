# 餐廳清單 1.0 基本款

此專案提供使用者搜尋餐廳的資訊，例如:餐廳類別、餐點樣式、地址等

## 功能列表
* 首頁有中文、英文兩種版本，可點CN/EN模式切換
* 搜尋框可以搜尋餐廳名稱、餐點類別或地區(目前僅限中文介面)
* 搜尋框特殊字元處理或找不到餐廳資料時，會導向錯誤訊息頁面
* 搜尋輸入字串會自動判別為中英文，會導向中(英)文餐廳搜尋清單，和符合您條件的餐廳數目
* 檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及 Google Map

## 專案畫面

## Environment SetUp - 環境建置
* Node.js  14.16.0
* Express  4.16.4
* Express-handle-bars 3.0.0

## Installing - 專案安裝流程
#### 1.使用git打開你的專案資料夾 terminal，Clone 此專案至本機電腦
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

## Future Development - 未來優化方向
