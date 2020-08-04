## script 中 defer 跟 async 是什麼?

```
— async 會非同步去請求外部腳本 回應後停止解析執行腳本內容
— defer 也會非同步請求外部腳本 但是等待瀏覽器解析完才執行 (而且早於DOMContentLoaded

async操作沒有辦法確保DOM都已經全部渲染
操作DOM可能等於找死，會QQ饅頭等著吃exception
所以這種async你比較常會在google analytics上看到，而非UI類庫。
請求回來的執行是會停止browser parsing喔

defer —其實是deferred(延遲)的縮寫，非同步的把請求射出去，然後再確保DOM全部都解析完畢之後執行，在DOMContentLoaded之前。
(直接射後不理，好球啦。)
腳本執行時，可以確保DOM已經完整渲染
在DOMContentLoaded前先去執行
```

##
