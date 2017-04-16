(function() {

if(!window.FileReader) return;

var fileInp = $("#converterInput");

fileInp.change(function() {
    var files = this.files;
    var file = files[0];
    reader = new FileReader();
    reader.readAsBinaryString(file);
    
    reader.onload = function(e) {
        var converter = new showdown.Converter();
        var toConvert = reader.result;
        var converted = converter.makeHtml(toConvert);
        $("textarea").html(converted);
        $("#selectBtn").on("click", function() {
            $("textarea").select();
            document.execCommand("copy");
        });
    };

});


})();