function rrann(){
var num = 6,
 cha = 230,
 lab = 'Artikel',
com='Comments',comd='Comments Disabled',cur=[],tot=0,cur=new Array(num);function ran(json){tot=json.feed.openSearch$totalResults.$t}document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default/-/'+lab+'?alt=json-in-script&max-results=0&callback=ran\"><\/script>');function val(){for(var i=0;i<num;i++){var found=false;var rndValue=gra();for(var j=0;j<cur.length;j++){if(cur[j]==rndValue){found=true;break}};if(found){i--}else{cur[i]=rndValue}}};function gra(){var ranNum=1+Math.round(Math.random()*(tot-1));return ranNum};</script><script type="text/javaScript">function rpo(json){for(var i=0;i<num;i++){var entry=json.feed.entry[i];var tit=entry.title.$t;if('content'in entry){var rni=entry.content.$t}else{if('summary'in entry){var rni=entry.summary.$t}else{var rni=""}};rni=rni.replace(/<[^>]*>/g,"");if(rni.length<cha){var sni=rni}else{rni=rni.substring(0,cha);var whi=rni.lastIndexOf(" ");sni=rni.substring(0,whi)+"&#133;"};for(var j=0;j<entry.link.length;j++){if('thr$total'in entry){var comnum=entry.thr$total.$t+' '+com}else{comnum=comd};if(entry.link[j].rel=='alternate'){var url=entry.link[j].href;var dat=entry.published.$t;if('media$thumbnail'in entry){var thu=entry.media$thumbnail.url}else{thu="https://1.bp.blogspot.com/-NuVrQk3ssIk/YCPtqtvQM5I/AAAAAAAABaw/QYKN03opdckZyMYgpZuoTZVDFj4G13b_wCLcBGAsYHQ/s75-c/4%2Bpencarian%2Bcari%2Bsearch%2Bicon%2Bcall%2B%252823%2529.pngg"}}};document.write('<li>');document.write('<a href="'+url+'" target="_blank" rel="nofollow"><img alt="'+tit+'" src="'+thu+'"/></a>');document.write('<div><h3><a href="'+url+'" target="_blank" rel="nofollow">'+tit+'</a></h3></div>');document.write('<div class="random-summary">'+sni+'</div><div style="clear:both"></div></li>')}};val();for(var i=0;i<num;i++){document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default/-/'+lab+'?alt=json-in-script&start-index='+cur[i]+'&max-results=1&callback=rpo\"><\/script>')};
}
document.getElementById("HTML236").insertAdjacentHTML("afterend",
"<style scoped='' type='text/css'>#rp li{list-style-type:none;margin:33px 0;float:left;height:100px}#rp a{font-size:1.1rem}#rp img{border-radius:10px;float:left;margin-right:5px}.dudu li{width:49%;background:#fff}@media(min-width:1045px){.dudu li{width:33%}}@media(max-width:600px){.dudu li{width:99%}}</style><ul id='rp' class='dudu'><script>rrann()</script></ul>");
