const a0_0x3efb21=a0_0x117c;(function(_0x46a60e,_0x15157f){const _0x52ff36=a0_0x117c,_0x4389d1=_0x46a60e();while(!![]){try{const _0x3c568b=-parseInt(_0x52ff36(0x110))/0x1+-parseInt(_0x52ff36(0x113))/0x2*(parseInt(_0x52ff36(0x14c))/0x3)+-parseInt(_0x52ff36(0x112))/0x4*(parseInt(_0x52ff36(0x13a))/0x5)+parseInt(_0x52ff36(0x137))/0x6+parseInt(_0x52ff36(0x135))/0x7+-parseInt(_0x52ff36(0xfc))/0x8*(parseInt(_0x52ff36(0x146))/0x9)+parseInt(_0x52ff36(0x132))/0xa;if(_0x3c568b===_0x15157f)break;else _0x4389d1['push'](_0x4389d1['shift']());}catch(_0x2e41e2){_0x4389d1['push'](_0x4389d1['shift']());}}}(a0_0x2559,0x5a54b));const axios=require(a0_0x3efb21(0x129)),yts=require(a0_0x3efb21(0x134)),ytdl=require(a0_0x3efb21(0x10e)),cheerio=require(a0_0x3efb21(0x115)),FormData=require(a0_0x3efb21(0x142));async function bytesToSize(_0x1d37a1){const _0x43b8b9=a0_0x3efb21,_0x261a5e=['Bytes','KB','MB','GB','TB'];if(_0x1d37a1===0x0)return _0x43b8b9(0x10b);const _0x322a24=parseInt(Math['floor'](Math[_0x43b8b9(0x12a)](_0x1d37a1)/Math[_0x43b8b9(0x12a)](0x400)),0xa);if(_0x322a24===0x0)resolve(_0x1d37a1+'\x20'+_0x261a5e[_0x322a24]);return(_0x1d37a1/0x400**_0x322a24)[_0x43b8b9(0x124)](0x1)+'\x20'+_0x261a5e[_0x322a24];}async function chatGpt(_0x44876f){return new Promise(async(_0x3547e9,_0x423e23)=>{const _0x2546b1=a0_0x117c;try{const _0x3a82a6=await axios[_0x2546b1(0x104)](_0x2546b1(0x123),JSON[_0x2546b1(0x122)]({'messages':[{'role':'user','content':_0x2546b1(0x138)+_0x44876f}]}),{'headers':{'Content-Type':'application/json'}});_0x3547e9(_0x3a82a6[_0x2546b1(0xfd)]);}catch(_0x5221ea){_0x423e23(_0x5221ea);}});}async function tiktokDl(_0x3a807c){return new Promise(async(_0x13dd3e,_0x12f005)=>{const _0x5b945a=a0_0x117c;try{let _0x5e15ae=[];function _0x152120(_0x2f6462){const _0xe8fb76=a0_0x117c;let _0x102b89=parseInt(_0x2f6462);return Number(_0x102b89)[_0xe8fb76(0x114)]()[_0xe8fb76(0x14a)](/,/g,'.');}function _0x41058c(_0x1956bf,_0x41cf3a='en'){const _0x599753=a0_0x117c;let _0x3ae29f=new Date(_0x1956bf);return _0x3ae29f['toLocaleDateString'](_0x41cf3a,{'weekday':'long','day':_0x599753(0xfa),'month':_0x599753(0x130),'year':_0x599753(0xfa),'hour':_0x599753(0xfa),'minute':_0x599753(0xfa),'second':_0x599753(0xfa)});}let _0x6a463c=_0x5b945a(0x101),_0x2490f8=await(await axios['post'](_0x6a463c,{},{'headers':{'Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','Accept-Language':_0x5b945a(0x144),'Content-Type':'application/x-www-form-urlencoded;\x20charset=UTF-8','Origin':'https://www.tikwm.com','Referer':_0x5b945a(0x127),'Sec-Ch-Ua':_0x5b945a(0x148),'Sec-Ch-Ua-Mobile':'?1','Sec-Ch-Ua-Platform':'Android','Sec-Fetch-Dest':_0x5b945a(0x145),'Sec-Fetch-Mode':'cors','Sec-Fetch-Site':_0x5b945a(0x13d),'User-Agent':'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20K)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/116.0.0.0\x20Mobile\x20Safari/537.36','X-Requested-With':_0x5b945a(0x10c)},'params':{'url':_0x3a807c,'count':0xc,'cursor':0x0,'web':0x1,'hd':0x1}}))[_0x5b945a(0xfd)]['data'];!_0x2490f8[_0x5b945a(0x11c)]?_0x2490f8[_0x5b945a(0x105)]['map'](_0x139987=>{const _0x486da1=_0x5b945a;_0x5e15ae[_0x486da1(0x11b)]({'type':_0x486da1(0x136),'url':_0x139987});}):_0x5e15ae[_0x5b945a(0x11b)]({'type':'watermark','url':_0x5b945a(0x149)+_0x2490f8[_0x5b945a(0x10d)]},{'type':_0x5b945a(0x139),'url':_0x5b945a(0x149)+_0x2490f8[_0x5b945a(0x133)]},{'type':_0x5b945a(0x12c),'url':_0x5b945a(0x149)+_0x2490f8[_0x5b945a(0x13b)]});let _0x511dc3={'status':!![],'title':_0x2490f8['title'],'taken_at':_0x41058c(_0x2490f8[_0x5b945a(0x13e)])[_0x5b945a(0x14a)](_0x5b945a(0x11d),''),'region':_0x2490f8['region'],'id':_0x2490f8['id'],'durations':_0x2490f8[_0x5b945a(0x108)],'duration':_0x2490f8[_0x5b945a(0x108)]+_0x5b945a(0x121),'cover':'https://www.tikwm.com'+_0x2490f8['cover'],'size_wm':_0x2490f8['wm_size'],'size_nowm':_0x2490f8[_0x5b945a(0x11c)],'size_nowm_hd':_0x2490f8[_0x5b945a(0x103)],'data':_0x5e15ae,'music_info':{'id':_0x2490f8[_0x5b945a(0x119)]['id'],'title':_0x2490f8[_0x5b945a(0x119)][_0x5b945a(0x128)],'author':_0x2490f8['music_info'][_0x5b945a(0xfb)],'album':_0x2490f8[_0x5b945a(0x119)][_0x5b945a(0x126)]?_0x2490f8[_0x5b945a(0x119)][_0x5b945a(0x126)]:null,'url':'https://www.tikwm.com'+_0x2490f8[_0x5b945a(0x106)]||_0x2490f8[_0x5b945a(0x119)][_0x5b945a(0x133)]},'stats':{'views':_0x152120(_0x2490f8['play_count']),'likes':_0x152120(_0x2490f8[_0x5b945a(0x120)]),'comment':_0x152120(_0x2490f8['comment_count']),'share':_0x152120(_0x2490f8['share_count']),'download':_0x152120(_0x2490f8[_0x5b945a(0xff)])},'author':{'id':_0x2490f8[_0x5b945a(0xfb)]['id'],'fullname':_0x2490f8[_0x5b945a(0xfb)][_0x5b945a(0x117)],'nickname':_0x2490f8[_0x5b945a(0xfb)]['nickname'],'avatar':_0x5b945a(0x149)+_0x2490f8[_0x5b945a(0xfb)][_0x5b945a(0x147)]}};_0x13dd3e(_0x511dc3);}catch(_0x1d6eb7){_0x12f005(_0x1d6eb7);}});}async function ytMp4(_0x8e6195){return new Promise(async(_0x12c79b,_0x4e3f13)=>{const _0x826b40=a0_0x117c;ytdl[_0x826b40(0x107)](_0x8e6195)[_0x826b40(0x12d)](async _0x44887c=>{const _0x22e20b=_0x826b40;let _0x326210=[];for(let _0x4f01d0=0x0;_0x4f01d0<_0x44887c[_0x22e20b(0x109)][_0x22e20b(0x13f)];_0x4f01d0++){let _0x481c13=_0x44887c[_0x22e20b(0x109)][_0x4f01d0];if(_0x481c13[_0x22e20b(0x11e)]==_0x22e20b(0x11a)&&_0x481c13[_0x22e20b(0x141)]==!![]&&_0x481c13[_0x22e20b(0x140)]==!![]){let {qualityLabel:_0x128286,contentLength:_0x1f94c4}=_0x481c13,_0x139ec3=await bytesToSize(_0x1f94c4);_0x326210[_0x4f01d0]={'video':_0x481c13[_0x22e20b(0x10f)],'quality':_0x128286,'size':_0x139ec3};};};let _0x42c780=_0x326210[_0x22e20b(0x12f)](_0x54b6c4=>_0x54b6c4['video']!=undefined&&_0x54b6c4[_0x22e20b(0x11c)]!=undefined&&_0x54b6c4[_0x22e20b(0xf9)]!=undefined),_0x58e573=_0x44887c[_0x22e20b(0x14b)][_0x22e20b(0x128)],_0x181768=_0x44887c[_0x22e20b(0x14b)][_0x22e20b(0x12e)],_0x1216f0=_0x44887c[_0x22e20b(0x14b)]['viewCount'],_0x253dde=_0x44887c[_0x22e20b(0x14b)][_0x22e20b(0x102)],_0x3ea481=_0x44887c['videoDetails'][_0x22e20b(0x12b)],_0x37946e=_0x44887c[_0x22e20b(0x14b)][_0x22e20b(0x10a)],_0x4b4991=_0x44887c[_0x22e20b(0x14b)][_0x22e20b(0x100)],_0x690109=_0x44887c['player_response'][_0x22e20b(0x11f)][_0x22e20b(0x111)][_0x22e20b(0x143)]['thumbnails'][0x0][_0x22e20b(0x10f)];_0x12c79b({'title':_0x58e573,'result':_0x42c780[0x0][_0x22e20b(0x118)],'quality':_0x42c780[0x0][_0x22e20b(0xf9)],'size':_0x42c780[0x0][_0x22e20b(0x11c)],'thumb':_0x690109,'views':_0x1216f0,'likes':_0x253dde,'dislike':_0x3ea481,'channel':_0x37946e,'uploadDate':_0x4b4991,'desc':_0x181768});})[_0x826b40(0xfe)](_0x4e3f13);});};function a0_0x2559(){const _0x1f4b73=['long','player_response','97440RmDrGo','play','yt-search','5067853awEHsN','photo','4294404fgfbiw','Use\x20english\x20language\x20:\x20','nowatermark','427165isuHzK','hdplay','thumbnails','same-origin','create_time','length','hasAudio','hasVideo','form-data','thumbnail','id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7','empty','47079auQAUE','avatar','\x22Not)A;Brand\x22\x20;v=\x2224\x22\x20,\x20\x22Chromium\x22\x20;v=\x22116\x22','https://www.tikwm.com','replace','videoDetails','5949rvuEuJ','quality','numeric','author','424uRZPDn','data','catch','download_count','uploadDate','https://www.tikwm.com/api/','likes','hd_size','post','images','music','getInfo','duration','formats','ownerChannelName','n/a','XMLHttpRequest','wmplay','@distube/ytdl-core','url','305649NnDmGq','playerMicroformatRenderer','20Lzdimk','70TsevEr','toLocaleString','cheerio','audio/webm;\x20codecs=\x22opus\x22','unique_id','video','music_info','mp4','push','size','1970','container','microformat','digg_count','\x20Seconds','stringify','https://www.basedgpt.chat/api/chat','toFixed','audio','album','https://www.tikwm.com/','title','axios','log','dislikes','nowatermark_hd','then','description','filter'];a0_0x2559=function(){return _0x1f4b73;};return a0_0x2559();}async function ytMp3(_0x283c0d){return new Promise((_0x1b6eff,_0x383ffc)=>{const _0xe6ea2e=a0_0x117c;ytdl['getInfo'](_0x283c0d)[_0xe6ea2e(0x12d)](async _0x18a5fb=>{const _0x495a38=_0xe6ea2e;let _0x15ad2c=[];for(let _0x47d4ab=0x0;_0x47d4ab<_0x18a5fb[_0x495a38(0x109)]['length'];_0x47d4ab++){let _0x2fe948=_0x18a5fb[_0x495a38(0x109)][_0x47d4ab];if(_0x2fe948['mimeType']==_0x495a38(0x116)){let {contentLength:_0x179885}=_0x2fe948,_0x480c26=await bytesToSize(_0x179885);_0x15ad2c[_0x47d4ab]={'audio':_0x2fe948[_0x495a38(0x10f)],'size':_0x480c26};};};let _0x517bce=_0x15ad2c[_0x495a38(0x12f)](_0x32a2f9=>_0x32a2f9[_0x495a38(0x125)]!=undefined&&_0x32a2f9[_0x495a38(0x11c)]!=undefined),_0x53fd1d=_0x18a5fb[_0x495a38(0x14b)][_0x495a38(0x128)],_0x1a7e3d=_0x18a5fb['videoDetails'][_0x495a38(0x12e)],_0x42a2b9=_0x18a5fb[_0x495a38(0x14b)]['viewCount'],_0x3ebc6a=_0x18a5fb[_0x495a38(0x14b)][_0x495a38(0x102)],_0x2bc4f5=_0x18a5fb[_0x495a38(0x14b)][_0x495a38(0x12b)],_0x52ca12=_0x18a5fb[_0x495a38(0x14b)][_0x495a38(0x10a)],_0x1869d4=_0x18a5fb[_0x495a38(0x14b)]['uploadDate'],_0x55c944=_0x18a5fb[_0x495a38(0x131)]['microformat'][_0x495a38(0x111)][_0x495a38(0x143)][_0x495a38(0x13c)][0x0][_0x495a38(0x10f)];_0x1b6eff({'title':_0x53fd1d,'result':_0x517bce[0x0][_0x495a38(0x125)],'size':_0x517bce[0x0][_0x495a38(0x11c)],'thumb':_0x55c944,'views':_0x42a2b9,'likes':_0x3ebc6a,'dislike':_0x2bc4f5,'channel':_0x52ca12,'uploadDate':_0x1869d4,'desc':_0x1a7e3d});})[_0xe6ea2e(0xfe)](_0x383ffc);});}function a0_0x117c(_0x49f033,_0x4792a7){const _0x255916=a0_0x2559();return a0_0x117c=function(_0x117cc8,_0x314e9f){_0x117cc8=_0x117cc8-0xf9;let _0x3c5180=_0x255916[_0x117cc8];return _0x3c5180;},a0_0x117c(_0x49f033,_0x4792a7);}module['exports']={'chatGpt':chatGpt,'tiktokDl':tiktokDl,'ytMp4':ytMp4,'ytMp3':ytMp3};