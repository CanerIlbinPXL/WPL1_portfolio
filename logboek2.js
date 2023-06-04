document.addEventListener("DOMContentLoaded", function() {
    var downloadLink = document.getElementById("downloadLink");
    downloadLink.addEventListener("click", function() {
        var zipFileUrl = "Assets/2022-2023 PRO_WPL2 - Team7 - Logboek.zip";
        downloadLink.setAttribute("href", zipFileUrl);
        downloadLink.setAttribute("download", "2022-2023 PRO_WPL2 - Team7 - Logboek");
    });
});