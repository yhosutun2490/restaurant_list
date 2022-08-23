# 餐廳清單 1.0 基本款

此專案提供使用者搜尋餐廳的資訊，例如:餐廳類別、餐點樣式、地址等

## 功能列表
* 首頁有中文、英文兩種版本，可點CN/EN模式切換
* 搜尋框可以搜尋餐廳名稱、餐點類別或地區(目前僅限中文介面)
* 輸入特殊字元或找不到餐廳資料時，會導向錯誤訊息頁面
* 搜尋輸入字串會自動判別為中英文，會導向中(英)文餐廳搜尋清單，和符合您條件的餐廳數目
* 檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及 Google Map

## 專案畫面

## Environment SetUp - 環境建置
* Node.js 14.16.0 ![image](https://camo.githubusercontent.com/b52d5b6da473bbff9ae4e68d34ff4ca91162732372c48dd541aa40eeeb97ecef/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d7631342e31362e302d626c7565)
* Express  4.16.4 ![image](https://camo.githubusercontent.com/3bd6a6dae2d65f93243cd289cd76704a303a4a1fb7b9c89912491393eaa9c01a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732d76342e31362e342d626c7565) 
* Express-handle-bars 3.0.0 ![image](https://camo.githubusercontent.com/db9711476e732447317d50897988d14d4553c0782b6aa11c27e799e483068048/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732048616e646c65626172732d76332e302e302d626c7565)

## Installing - 專案安裝流程
### 1.安裝 node.js 套件 (建議使用nvm下載管理node.js版本) NVM-Windows https://github.com/coreybutler/nvm-windows/releases
```nvm install 14.16.0```
### 2.檢查是否安裝成功並啟動Node.js
```nvm use 14.16.0```    
```node -v``` 檢查版本，初次使用git-bash 記得以管理員權限開啟使用才能顯示和啟動  
### 3.開啟終端機(Terminal)，進入存放此專案的資料夾
```cd restaurantList```
### 4.使用git打開你的專案資料夾 terminal，Clone 此專案至本機電腦
```git clone https://github.com/yhosutun2490/restaurant_list.git```
### 5.初始化npm套件並安裝Express套件
```npm init -y``` 初始化node_Module資料夾  
```npm install express@4.16.4``` 安裝express套件
###  6.安裝 nodemon 套件  
```npm install nodemon -g``` 全域安裝至node.js
### 7.執行app.js檔案
```nodemon app.js``` or ```npm run dev``` 
如果出現Express is listening on http://localhost:3000 代表啟動成功~


## Future Development - 未來 2.0 版優化方向
1.特殊字元錯誤訊息能直接切換中英文  
2.餐廳資料細節能直接轉換中英文   
3.串接資料庫進行增修刪減()  
