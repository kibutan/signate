//https://webbigdata.jp/ai/post-7232
function KeepClicking(){
  console.log("Clicking");
  document.querySelector("colab-connect-button").click()
}
setInterval(KeepClicking,60000)
