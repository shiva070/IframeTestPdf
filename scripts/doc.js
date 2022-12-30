const iframe = document.querySelector('#iframeXD');
var userid;
var p1,p2,p3,p4,p5;
p1="pdf/1.pdf";
p2="pdf/2.pdf";
p3="pdf/3.pdf";
p4="pdf/unityshader.pdf#zoom=100&scrollbar=1&toolbar=1&navpanes=1"
p5="https://docs.google.com/gview?url=https://legislative.gov.in/sites/default/files/dummy-pdf_2.pdf&embedded=true";


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

