const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
function updateDisplay(verse) {
    verse = verse.replace(" ", "").toLowerCase();
    const url = `${verse}.txt`;
    fetch(url)
    // fetch() 返回一个 promise。当我们从服务器收到响应时，
    // 会使用该响应调用 promise 的 `then()` 处理器。
    .then((response) => {
        // 如果请求没有成功，我们的处理器会抛出错误。
        if (!response.ok) {
        throw new Error(`HTTP 错误：${response.status}`);
        }
        // 否则（如果请求成功），我们的处理器通过调用
        // response.text() 以获取文本形式的响应，
        // 并立即返回 `response.text()` 返回的 promise。
        return response.text();
    })
    .then((text) => (poemDisplay.textContent = text))
    .catch((error) => (poemDisplay.textContent = `获取诗歌失败：${error}`));

}