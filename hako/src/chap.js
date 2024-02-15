   function execute(url) {
    url = url.replace("https://miotranslatorteam.wordpress.com");
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        doc.select(".note-reg").remove();
        htm = doc.select("div#chapter-content");
        htm.select("p.none").remove();
        htm.select('img[src*="/2021/09/"]').remove();
        htm = htm.html().replace(/<p id=\"\d+\">/g, "<p>").replace(/\[note\d+]/g, "");
        htm = htm.replace(/\&nbsp;/g, "");
        return Response.success(htm);
    }
    return null;
}