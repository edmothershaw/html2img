//= require_tree .

$(function() { 

	// $(".html2img").each(function( index ) {
	//  	console.log( index + ": " + $( this ).text() );
    //$("[id^=html2img]").click(function() { 

    $("[class^=html2img-]").click(function() { 
        console.log("start")
        var h2i = returnHtml2imgID($(this));
        // console.log(cls);
        // var img_id = "#" + id.split("-#")[2];

        var img_id = "#" + h2i.id;
        console.log(img_id);
        console.log(h2i.method);
        switch(h2i.method) {
            case "download":
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
                break;
            case "print":
                html2canvas($(img_id), {
                    onrendered: function(canvas) {
                        theCanvas = canvas;
                        document.body.appendChild(canvas);

                        // Convert and download as image 
                        //Canvas2Image.saveAsPNG(canvas); 
                        $(".html2img-out-" + h2i.id).append(canvas);
                    }
                });
                break;


        }

    });

    function returnHtml2imgID(el) {
        var classList = el.attr('class').split(/\s+/);
        
        for (i in classList) {
            item = classList[i];
            console.log(item);
            var index = item.search("html2img");
            // var id = item.split("html2img-#download-#")[1];
            console.log(index);
            if (index > -1) {
                
                return {
                    id: item.split("-#")[2],
                    method: item.split("-#")[1]
                };

            }            
        }

        // return array;
    }
}); 
