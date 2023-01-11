const iframe = document.querySelector('#iframeXD');
var userid;
var p1,p2,p3,p4,p5;
p1="https://www.appsloveworld.com/wp-content/uploads/2020/01/SamplePdf1_12mb_6pages.pdf";
p2="https://www.appsloveworld.com/wp-content/uploads/2020/01/Sample-PDF-with-images.pdf";
p3="https://legislative.gov.in/sites/default/files/dummy-pdf_2.pdf";
p4="./pdf/unityshader.pdf"
p5="https://www.appsloveworld.com/wp-content/uploads/2020/01/SAMPLE_42mb_76_Pages.pdf";


function doc1()
{  
    ChangeBg();
    iframe.setAttribute( 'src', p1 );
    iframe.style.display = "block"; 
    var cla =  document.getElementById('v1') 
    cla.className +=" runtimeclr";
}

function doc2()
{
    ChangeBg();
    iframe.setAttribute( 'src', p2 );
    iframe.style.display = "block";   
    var cla =  document.getElementById('v2') 
    cla.className +=" runtimeclr";
}

function doc3()
{ 
     
    ChangeBg();
    iframe.setAttribute( 'src', p3 );
    iframe.style.display = "block"; 
    var cla =  document.getElementById('v3') 
    cla.className +=" runtimeclr"; 
}

function doc4()
{  
    ChangeBg();
    iframe.setAttribute( 'src', p4 );
    iframe.style.display = "block"; 
    var cla =  document.getElementById('v4') 
    cla.className +=" runtimeclr";
}

function doc5()
{
  
    ChangeBg();
    iframe.setAttribute( 'src', p5 );
    iframe.style.display = "block"; 
    var cla =  document.getElementById('v5') 
    cla.className +=" runtimeclr"; 
}

function ChangeBg()
{
  var cla =  document.getElementsByClassName('nav-item')
  Array.prototype.forEach.call(cla, function(cl) {
    cl.className="nav-item";
    });

}
document.getElementById("iframeXD").contentWindow.onload = function() {
this.document.getElementsByTagName("img")[0].style.width="100%";
}

