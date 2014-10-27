var krameraudio = $("#kramersound")[0];
$("#kramer").mouseenter(function() { krameraudio.play(); });
$("#kramer").mouseleave(function() { krameraudio.pause()
krameraudio.currentTime=0; });

var georgeaudio = $("#georgesound")[0];
$("#george").mouseenter(function() {
  georgeaudio.play();});
$("#george").mouseleave(function() {georgeaudio.pause()
georgeaudio.currentTime=0; });

var jerryaudio = $("#jerrysound")[0];
$("#jerry").mouseenter(function() {
  jerryaudio.play();});
$("#jerry").mouseleave(function() { jerryaudio.pause()
jerryaudio.currentTime=0; }); 

var elaineaudio = $("#elainesound")[0];
$("#elaine").mouseenter(function() {
  elaineaudio.play();});
$("#elaine").mouseleave(function() { elaineaudio.pause()
elaineaudio.currentTime=0; });