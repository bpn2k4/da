const wait = ms => new Promise(e => setTimeout(e, ms))
const main = async () => {
  while (true) {
    let page = document.getElementsByClassName("dxp-num dxp-current")[0].innerHTML
    var element = document.getElementsByClassName("dxgvControl_Mulberry dxgv dxgvAdD")[0];
    var outerHTML = element.outerHTML;
    var blob = new Blob([outerHTML], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${page}.html`
    link.click()
    let next = document.querySelector("#ctl00_ctl00_contentPane_MainPanel_MainContent_gvCourses_DXPagerBottom_PBN")
    let tagName = next.tagName
    if (tagName == 'B') {
      break
    }
    else {
      next.click()
      await wait(500)
    }
  }
}
main()