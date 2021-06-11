
$(function() {

	if (putEmoAbove) {
		$(putEmoAbove).before('<div class="emoWrap" > :0)) ;(( :-) =)) ;( ;-( :dd :-:D @-) :-p :o :&gt;) (o) [-( :-? :-s (m) :-t :-b  b-( :-# =p~  $-)  (b) (f) x-) (k)  (h)  (c)  :cheer: </div>');
	}

	function emo(emo, imgRep, emoKey) {
		$(emoRange).each(function() {
			$(this).html($(this).html()
			.replace(/<br>(:|;|=|\^)/g, "<br> $1")
			.replace(emo, " <img src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
		});
	}
    emo(/\s:0\)\)+/g, "https://lh3.googleusercontent.com/-duNoMAb1RS4/T2WEWrOfR8I/AAAAAAAACZ0/ObgHf-PmTuE/s36/03.gif", ":0))");
    emo(/\s;\(\(+/g, "https://lh6.googleusercontent.com/-LIr-ZdDp2xI/T2WEYDacVnI/AAAAAAAACaY/W7MF5qKO2sE/s47/06.gif", ";((");
    emo(/\s::\)+/g, "https://lh6.googleusercontent.com/-Q5lMkgcmVR4/T2WEWkNi3MI/AAAAAAAACZ4/7VBYeVbx7kA/s36/01.gif", "::)");
    emo(/\s:-\)+/g, "https://lh3.googleusercontent.com/-mCsZPeixHvA/T2WEWivv9FI/AAAAAAAACZw/64ZGRgdlDeg/s36/02.gif", ":-)");
    emo(/\s=\)\)+/g, "https://lh5.googleusercontent.com/-u__sc3DgZ2c/T2d0_lDLueI/AAAAAAAACkw/YbeuRNde61Q/s36/03a.gif", "=))");
    emo(/\s;\(+/g, "https://lh5.googleusercontent.com/-EwonQGBTYwo/T2WEXeVq3oI/AAAAAAAACZ8/4ixt2ZVlqrI/s36/04.gif", ";(");
    emo(/\s;-\(+/g, "https://lh3.googleusercontent.com/-fMtAZDakmBI/T2WEXswr5BI/AAAAAAAACaA/83R1X_PumTk/s36/05.gif", ";-(");
    emo(/\s:dd/ig, "https://lh3.googleusercontent.com/-Em3lvBgvYlI/T2WElbV0BaI/AAAAAAAACdI/ApynphQdka8/s36/7.gif", ":dd");
    emo(/\s:-:D/ig, "https://lh4.googleusercontent.com/-0R7-2DC1klM/T2WEmMQajfI/AAAAAAAACdM/-4JFCeC6QD8/s36/8.gif", ":-:D");
    emo(/\s@-\)+/g, "https://lh5.googleusercontent.com/-PE2GWBseiGk/T2acYH_uNRI/AAAAAAAAChg/HloTeaRIdyQ/s36/09.gif", "@-)");
    emo(/\s:-p/ig, "https://lh5.googleusercontent.com/-nkyzLkHUPg8/T2WEYdFqFxI/AAAAAAAACaQ/Mu1yPq91yuc/s36/10.gif", ":-p");
    emo(/\s:o/ig, "https://lh6.googleusercontent.com/-0-zgLVgK2Cg/T2WEY10FXuI/AAAAAAAACag/dyKQ5pPUIGQ/s36/11.gif", ":o");
    emo(/\s:&gt;\)+/g, "https://lh3.googleusercontent.com/-xbWqvOWJNE0/T2WEZM-VLTI/AAAAAAAACak/8dLATIlXRDk/s36/12.gif", ":&gt;)");
    emo(/\s\(o\)+/ig, "https://lh4.googleusercontent.com/-cguZVxYzR3o/T2WEZSgFvUI/AAAAAAAACas/nDJgr6YcuaI/s36/13.gif", "(o)");
    emo(/\s\[-\(+/g, "https://lh5.googleusercontent.com/-VKGWq-wPGUw/T2WEaEQLA9I/AAAAAAAACa4/ZDnLP29mlgk/s36/14.gif", "[-(");
    emo(/\s:-\?/g, "https://lh6.googleusercontent.com/-hIVRIc7IAJw/T2WEaO5ASUI/AAAAAAAACaw/FLmCvzeMSbc/s36/15.gif", ":-?");
    emo(/\s:-s/ig, "https://lh5.googleusercontent.com/-cysJNcXxT-Q/T2WEcxVM5dI/AAAAAAAACbU/Mvuc437f1ZI/s36/17.gif", ":-s");
    emo(/\s\(m\)+/ig, "https://lh6.googleusercontent.com/-H20tIsy7Hvw/T2WEbDW0R7I/AAAAAAAACbE/DymXsZOmO3s/s36/18.gif", "(m)");
    emo(/\s:-t/ig, "https://lh5.googleusercontent.com/-XCXdaCYaOGE/T2WEcmd15EI/AAAAAAAACbQ/Z5UyZCuX4Xo/s36/20.gif", ":-t");
    emo(/\s:-b/ig, "https://lh4.googleusercontent.com/-g6V0tBD1vwk/T2WEdRGJfWI/AAAAAAAACbo/P8P_SGEdhzI/s36/21.gif", ":-b");
    emo(/\sb-\(+/ig, "https://lh6.googleusercontent.com/-ErUGB8ea0H4/T2WEdm5-ZSI/AAAAAAAACbs/245Hxnaa82g/s35/22.gif", "b-(");
    emo(/\s:-#/ig, "https://lh6.googleusercontent.com/-p-5AT-amLik/T2WEi_MJDqI/AAAAAAAACco/5J-MqivSQw4/s36/23.gif", ":-#");
    emo(/\s=p~/ig, "https://lh3.googleusercontent.com/-H8izCFTaHFE/T2b39mmu2NI/AAAAAAAACkM/k4bDdFe301U/s36/24.gif", "=p~");
    emo(/\s\$-\)+/ig, "https://lh5.googleusercontent.com/-LZn6dX8GslQ/T2W30lpp_kI/AAAAAAAAChA/Rym2Ql5H-jU/s36/25.gif", "$-)");
    emo(/\s\(b\)+/ig, "https://lh5.googleusercontent.com/-k6r8YBUhxVk/T2WEgBtjFtI/AAAAAAAACcE/U5U5uPCpxq8/s36/26.gif", "(b)");
    emo(/\s\(f\)+/ig, "https://lh5.googleusercontent.com/-pj6fMvZXTyc/T2WEga9-gjI/AAAAAAAACcM/kVpUCa7uqpw/s36/27.gif'", "(f)");
    emo(/\sx-\)+/ig, "https://lh3.googleusercontent.com/-zI2UJmwerDM/T2WEhSRkuTI/AAAAAAAACcc/Gr3xFDrZF3Y/s36/28.gif", "x-)");
    emo(/\s\(k\)+/ig, "https://lh3.googleusercontent.com/-ilBYLLWFQJQ/T2WEiJXJ7LI/AAAAAAAACcY/bXpkIPuVUto/s36/29.gif", "(k)");
    emo(/\s\(h\)+/ig, "https://lh5.googleusercontent.com/-_NHYkuf5bZg/T2WEjOhTIxI/AAAAAAAACcg/76qRE27R_ig/s36/30.gif", "(h)");
    emo(/\s\(c\)+/ig, "https://lh6.googleusercontent.com/-O6m44_Z-8AA/T2WEjLRImnI/AAAAAAAACck/c_jh643HU6o/s36/31.gif", "(c)");
    emo(/\s:cheer:/ig, "https://lh5.googleusercontent.com/-9TYEg93ImUM/T2WEjvuhxTI/AAAAAAAACc0/KQRBXuuV_Yg/s36/32.gif", ":cheer:");

	$('.emoWrap').one("click", function() {
		if(emoMessage) {

		}
	});

	$('.emo').css('cursor', 'pointer').live("click", function(e) {
		$('.emoKey').remove();
		$(this).after('<input class="emoKey" type="text" size="6" value=" ' + this.alt + '" />');
		$('.emoKey').trigger("select");
		e.stopPropagation();
	});
	$(document).on("click", function() {
		$('.emoKey').remove();
	});

});

    function repText(id) {
        var a = document.getElementById(id),
            b = a.innerHTML,

            b = b.replace(/<i rel="image">(.[^\>]*)<\/i>/ig, "<img class='cm-image' src='$1' alt='loading...' \/><br />");
            b = b.replace(/\[img\](.[^\]]*)\[\/img\]/ig, "<img class='cm-image' src='$1' alt='loading...' \/><br />");

            b = b.replace(/<i rel="youtube">https:\/\/www.youtube.com\/embed\/(.[^>]*)<\/i>/ig, "<iframe class='cm-youtube' src='https://www.youtube.com/embed/$1'><\/iframe>");
            b = b.replace(/<i rel="youtube">(https:\/\/youtu.be|http:\/\/www.youtube.com\/watch\?v=)(.[^>]*)<\/i>/ig, "<iframe class='cm-youtube' src='https://www.youtube.com/embed/$2'><\/iframe>");
            b = b.replace(/\[youtube\]http:\/\/www.youtube.com\/embed\/(.[^\]]*)\[\/youtube\]/ig, "<iframe class='cm-youtube' src='https://www.youtube.com/embed/$1'><\/iframe>");
            b = b.replace(/\[youtube\](https:\/\/youtu.be|https:\/\/www.youtube.com\/watch\?v=)(.[^\]]*)\[\/youtube\]/ig, "<iframe class='cm-youtube' src='https://www.youtube.com/embed/$2'><\/iframe>");
        document.getElementById(id).innerHTML = b;
    } repText('comment-holder');
