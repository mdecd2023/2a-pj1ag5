var tipuesearch = {"pages": [{'title': 'About', 'text': '組長: 41023121 李承翰 ， 組員：41023134 林建維 \n 網頁  https://mdecd2023.github.io/2a-pj1ag5/content/index.html  \n 倉儲  https://github.com/mdecd2023/2a-pj1ag5 \n 參考網址 \n https://mde.tw/cd2023/content/Personal.html \xa0 \n https://mdecd2023.github.io/2a-pj1agx/content/2apj1.html \xa0 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'wink', 'text': '檔案 \n \n \n', 'tags': '', 'url': 'wink.html'}, {'title': 'scite', 'text': '建立完新的可攜系統，我發現編譯器中的中文中文會變亂碼，且因為要寫latex報告，要顯示編輯中文，解決辦法: 在scite的工具欄中點選Option->Open User Options File，在裡面新增： code.page=65001 output.code.page=65001 然後save \n', 'tags': '', 'url': 'scite.html'}, {'title': 'portable Python', 'text': '\n \n', 'tags': '', 'url': 'portable Python.html'}, {'title': 'Schedule', 'text': 'week1 加入 teams 課程，建立 resume-github 帳號倉儲，分組協同專案 2a-pj1agx \n week2 228連假 \n week3 建立靜態網站 \n week4\xa0b ubbleRub tutorial 製作 \n week5 建立Tcexam考試帳號 \n week6\xa0 使用Bing ai生成程式碼並修改.exam考試 \n week7\xa0 清明放假 \n week8畫球框.exam考試 \n', 'tags': '', 'url': 'Schedule.html'}, {'title': 'tutorial1', 'text': '圖檔 \n \n \n \n 圖檔 \n \n \n 圖檔 \n \n \n 圖檔 \n \n \n   \n 圖檔 \n \n \n \n', 'tags': '', 'url': 'tutorial1.html'}, {'title': 'w6', 'text': '完成連線- \n ag1( 41023147 41023143 ) \n ag2(41023146 41023148) \n ag5(41023121 41023134) \n ag6 (41023104\xa041023112) \n ag7(41023106 41023103) \n ag8(41023102 41023107) \n ag9(41023130 41023142) \n ag10(41023119 41023138) \n ag11(41023122 41023124) \n ag12(41023114 41023126) \n ag13( 41023133 41023140 ) \n ag14(41023113 41023153) \n ag15(41023135 41023154) \n ag16(41023132 41023151) \n ag17(41023118 41023120) \n ag18(41023131 41023138) \n ag21(41023116 41023137) \n 未完成連線 \n ag3(41023108 41023110) \n ag4 (41023125 41023128) \n ag19(41023101\xa041023141) \n ag20(41023109 \xa0 41023105) \n', 'tags': '', 'url': 'w6.html'}, {'title': 'question', 'text': '1.在 CoppeliaSim 中, scene 與 model 有何不同? \n 在CoppeliaSim中，場景和模型這兩個術語有一些不同之處，具體如下： \n \n \n 場景：場景：coppeliasim中中的場景場景仿真。。包括的的物體，，，機器人機器人感測器感測器和其他其他其他其他仿真使用。 \n \n \n 模型：型號：型號coppeliasim中中創建單物體或模型模型模型是是由由種種物理組成元素組成組成元素組成包括包括包括包括形狀形狀，連接器連接器連接器關節，關節關節關節和物理並且可以與其他模型進行交互。 \n \n \n 簡單而言之，Scene是包含多個Model的環境，而Model只是Scene中的單個元素。您可以通過將模型添加到場景中來創建Scene，Scene也可以通過從場景從戤椐中切 \n 2.在 CoppeliaSim scene 中, 何謂 clean model? \n 在CoppeliaSim中，Clean Model是指一個不帶有任何物理屬性的模型。這意味著它沒有質量、碰撞體積、關節等物理特性。Clean Model 可以用於很多目的，例如當您需要將它作為場景中的一個參考模型或用於可視化，而不需要進行物理仿真時，就可以使用 Clean Model。這樣可以減少仿真計算所需的時間和計算資源，從而提高仿真運行的效率。 \n 在 CoppeliaSim 中，您可以通過從模型的屬性對話框中將其設置為 Clean Model，或者使用特殊的指令將其轉換為 Clean Model。轉換為 Clean Model 後，您仍然可以對其進行縮放、平移、旋轉等操作，並且它仍然可以作為其他模型的父模型或子模型使用。 \n 3.如何在 CoppeliaSim scene 中, 如何利用 Lua 以及 Python 建立 primitive type object, 並利用程式設定物件位置? \n \n 4.CoppeliaSim .ttt 檔案格式與 .simscene.xml 檔案格式有何不同? \n CoppeliaSim中，.ttt檔案格式與.simscene.xml檔案格式都是CoppeliaSim場景文件，但它們的格式有所不同。 \n .ttt檔案格式是CoppeliaSim最初的場景文件格式，其為二進位格式。這種格式將所有內容都保存在一個二進位文件中，包括場景中的模型、物體、燈光、關節等等。這種格式的優點是可以快速加載場景，因為所有內容都在一個文件中。缺點是不容易進行版本控制，因為這種格式的文件不易於與版本控制系統一起使用。 \n .simscene.xml檔案格式是一種XML格式的文本文件，它是CoppeliaSim v4.0及其後版本的場景文件格式。這種格式將場景中的所有內容保存在一個文本文件中，可以通過任何文本編輯器進行編輯和版本控制。這種格式的優點是易於進行版本控制和共享，但是文件大小可能比二進位格式的文件大，且加載時間可能會長一些。 \n 總體而言，.simscene.xml檔案格式是更現代、更靈活的場景文件格式，建議使用這種格式來創建和共享CoppeliaSim場景。 \n 5.在BubbleRob中使用何種程式碼? \n \n', 'tags': '', 'url': 'question.html'}, {'title': 'project1', 'text': '球框.stl\xa0   球框.prt \n \n \n \n 兩台車車加球框.ttt \n \n \n 計分.ttt \n \n sensor.txt   sensor2.txt', 'tags': '', 'url': 'project1.html'}]};