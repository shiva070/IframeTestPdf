const iframe = document.querySelector('#iframeXD');
var userid;
var p1,p2,p3,p4,p5;
p1="pdf/1.pdf";
p2="pdf/2.pdf";
p3="pdf/3.pdf";
p4="pdf/unityshader.pdf"


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
    $('#iframeXD').attr('src',p4)
//    iframe.setAttribute( 'src', p4 );
    iframe.style.display = "block"; 
    var cla =  document.getElementById('p4') 
    cla.className +=" runtimeclr";
}

function pdf5()
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

