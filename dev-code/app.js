/* your code should go here */

function autoSelfiers(name, pic,time,sefies,category)
{
    return "<li class='person'> "+
          "<div class='selfie'>"+
            "<img src='"+pic+"'> "+         
          "</div>"+
          "<div class='stats'>  "+
          "  <h2>"+name+" <small>"+category+"</small></h2>"+
          "  <strong>Time</strong>  "+time+" mins "+
          "  <strong>Selfies</strong> "+sefies+"   " +
          "</div> "+
          "<div class='badge'> "+
          "  #AAA"+
          "</div>"+
        "</li> ";
}
          
$(document).ready(function(){
    var ulSummary = $('#top-selfiers');
    var selfiers ="";
    for(i =0;i<data.length;i++)
    {
        selfiers= autoSelfiers(data[i].name,data[i].pic,data[i].time,data[i].sefies,data[i].category);
        selfiers=selfiers.replace("AAA",i+1);
        ulSummary.append(selfiers);
    }
    
    
    $('#btn-filter').click(function(){
        $(".person").hide();
        
       
        var filter = $('.selector').val();
        
        if(filter=="all")
        {
        console.log(filter);
            var ulSummary = $('#top-selfiers');
            var selfiers ="";
            for(i =0;i<data.length;i++)
            {
                selfiers= autoSelfiers(data[i].name,data[i].pic,data[i].time,data[i].sefies,data[i].category);
                selfiers=selfiers.replace("AAA",i+1);
                ulSummary.append(selfiers);
            }
        }
        else
        {
            console.log(filter);
            var ulSummary = $('#top-selfiers');
            var selfiers ="";
            for(i =0;i<data.length;i++)
            {
                if(data[i].category==filter)
                {
                    selfiers= autoSelfiers(data[i].name,data[i].pic,data[i].time,data[i].sefies,data[i].category);
                    selfiers=selfiers.replace("AAA",i+1);
                    ulSummary.append(selfiers);
                }
            }
        }
    });


    
    
    
    
});




