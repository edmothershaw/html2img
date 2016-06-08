//= require_tree .

$(function() { 

	// $(".html2img").each(function( index ) {
	//  	console.log( index + ": " + $( this ).text() );
    //$("[id^=html2img]").click(function() { 

    $("[class^=html2img-#download-#]").click(function() { 
        console.log("start")
        var img_id = returnHtml2imgID($(this));
        // console.log(cls);
        // var img_id = "#" + id.split("-#")[2];

        console.log(img_id);

        html2canvas($(img_id), {
            onrendered: function(canvas) {
                //theCanvas = canvas;
                // document.body.appendChild(canvas);

                // Convert and download as image and downloads
                Canvas2Image.saveAsPNG(canvas); 
                //$(this).replaceWith(canvas);
                // $("#img-out").append(canvas);
                // Clean up 
                //document.body.removeChild(canvas);
            }
        });
    });

    function returnHtml2imgID(el) {
        var classList = el.attr('class').split(/\s+/);
        
        for (i in classList) {
            item = classList[i];
            console.log(item);
            var id = item.split("html2img-#download-#")[1];
            
            if (id !== undefined) {
                console.log(id);
                //do something
                return "#" + id;
            }            
        }

        // return array;
    }
}); 
