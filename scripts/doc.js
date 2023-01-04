 const ADOBE_KEY = '5f1d9b659e2741109c6ff266ff899ddb';
//const ADOBE_KEY =  '7a2441841d3d4f8981c1027e47b05e6c';



const iframe = document.querySelector('#iframeXD');
var userid;
var p1,p2,p3,p4,p5;
p1="pdf/1.pdf";
p2="https://www.appsloveworld.com/wp-content/uploads/2020/01/SamplePdf1_12mb_6pages.pdf";
p3="https://legislative.gov.in/sites/default/files/dummy-pdf_2.pdf";
p4="pdf/unityshader.pdf#zoom=100&scrollbar=1&toolbar=1&navpanes=1"
p5="https://www.appsloveworld.com/wp-content/uploads/2020/01/SAMPLE_42mb_76_Pages.pdf";


function doc1()
{  
   
    ChangeBg();
    iframe.setAttribute( 'src', p1 );
    iframe.style.display = "block"; 
    var cla =  document.getElementById('p1') 
    cla.className +=" runtimeclr";
}

function doc2()
{
    ChangeBg();
    iframe.setAttribute( 'src', p2 );
    iframe.style.display = "block";   
    var cla =  document.getElementById('p2') 
    cla.className +=" runtimeclr";
}

function doc3()
{ 
     
    ChangeBg();
    iframe.setAttribute( 'src', p3 );
    iframe.style.display = "block"; 
    var cla =  document.getElementById('p3') 
    cla.className +=" runtimeclr"; 
}

function doc4()
{  
    ChangeBg();
    iframe.setAttribute( 'src', p4 );
    iframe.style.display = "block"; 
    var cla =  document.getElementById('p4') 
    cla.className +=" runtimeclr";
}

function doc5()
{
  
    ChangeBg();
    iframe.setAttribute( 'src', p5 );
    iframe.style.display = "block"; 
    var cla =  document.getElementById('p5') 
    cla.className +=" runtimeclr"; 
}

function ChangeBg()
{
  var cla =  document.getElementsByClassName('Btntext')
  Array.prototype.forEach.call(cla, function(cl) {
    cl.className="Btntext";
    });

}


if(window.AdobeDC) displayPDF1(p1,"connect.pdf");
else {
  document.addEventListener("adobe_dc_view_sdk.ready", () => displayPDF1());
}

function displayPDF1() {
  console.log('Lets do some AWESOME PDF stuff!');
  let adobeDCView = new AdobeDC.View({clientId: ADOBE_KEY, divId: "pdf-view-area" });
  adobeDCView.previewFile({
    content:{location: {url: "https://www.appsloveworld.com/wp-content/uploads/2020/01/SamplePdf1_12mb_6pages.pdf"}},
    metaData:{fileName: "SamplePdf"}
  }); 
}

function displayPDF2() {
    console.log('Lets do some AWESOME PDF stuff!');
    let adobeDCView = new AdobeDC.View({clientId: ADOBE_KEY, divId: "pdf-view-area" });
    adobeDCView.previewFile({
      content:{location: {url: "pdf/1.pdf"}},
      metaData:{fileName: "Local File"}
    }); 
  }

  function displayPDF3() {
    console.log('Lets do some AWESOME PDF stuff!');
    let adobeDCView = new AdobeDC.View({clientId: ADOBE_KEY, divId: "pdf-view-area" });
    adobeDCView.previewFile({
      content:{location: {url: "pdf/unityshader.pdf#zoom=100&scrollbar=1&toolbar=1&navpanes=1"}},
      metaData:{fileName: "Unity Shader"}
    }); 
  }