function a0_0x32d9(){const _0x1b07e0=['handleStatus','messages.update','cleanupProcessedMessages','redBright','stickerMessage','🔄\x20Processing\x20message\x20','📊\x20New\x20status\x20update\x20received:','startPeriodicCleanup','Config.js','audioMessage','participant','💬\x20Message:\x20','✅\x20Status\x20marked\x20as\x20read','1031002UfZFfH','../','\x20from\x20processed\x20messages','10006osmXHr','6YNWRsU','green','[Video]\x20','📊\x20Event\x20args:','❌\x20Failed\x20to\x20initialize\x20KordEventsManager:','||==========KORD-AI=========||:','ownerJid','error','debug','5443150GslDhi','6081RYolec','❌\x20Error\x20in\x20event\x20','initialize','isValidMessage','delete','scheduleMessageCleanup','[Document]\x20','messages.delete','[Audio]','has','🏷️\x20Status\x20Type:\x20','🚫\x20Skipping\x20view-once\x20message\x20from/to\x20owner','processedMessages','blue','conversation','readMessages','58xwInmS','viewOnceMessage','initializeEventListeners','👂\x20Baileys\x20event\x20listeners\x20initialized.','856dxefLD','446148SdSFeL','forEach','808JGMZKU','cache','events','env','🔁\x20Message\x20','✅\x20View\x20Once\x20message\x20forwarded\x20to\x20owner:\x20','now','match','DEBUG_MODE','viewOnceVideoMessage','debugMode','messageReceived','locationMessage','true','watchFile','split','message','./kordCmd','handleViewOnceMessage','magenta','👤\x20User\x20JID:\x20','cyan','caption','gray','processedViewOnceMessages','viewOnce','📷\x20View\x20Once\x20message\x20detected,\x20forwarding\x20to\x20owner...','messages.upsert','red','remoteJid','👤\x20Sender\x20JID:\x20','documentMessage','imageMessage','viewOnceMessageV2','sendMessage','settings','handleMessagesUpsert','processNormalMessage','❌\x20Error\x20handling\x20status\x20update:','readFileSync','💬\x20Status\x20Content:\x20','log','❌\x20AUTO_READ_STATUS\x20setting\x20not\x20found\x20in\x20config.','2650320XcijWD','extendedTextMessage','🧹\x20Cleaned\x20up\x20view-once\x20message\x20ID:\x20','exports','size','catch','Update\x20','logMessageInfo','info','handleMessagesDelete','🏷️\x20Message\x20Type:\x20','join','key','emit','OWNER_NUMBERS','handleEvent','videoMessage','yellow','resolve','sock','🗑️\x20Removed\x20','path','🔄\x20Handling\x20event:\x20','❌\x20Error\x20processing\x20message\x20','396WyvGBj','📩\x20New\x20message\x20received:','contactMessage','add','⚠️\x20Unhandled\x20event:\x20','[Unknown\x20Message\x20Type]','getMessageContent','clear','text','handleMessagesUpdate','⚠️\x20Skipping\x20message\x20with\x20no\x20content','ANTI_VIEWONCE','keys','20988BiewVc','stringify'];a0_0x32d9=function(){return _0x1b07e0;};return a0_0x32d9();}const a0_0x302366=a0_0x3167;(function(_0x298146,_0x4bb6ea){const _0x3178de=a0_0x3167,_0xeb731b=_0x298146();while(!![]){try{const _0x27e838=-parseInt(_0x3178de(0x14c))/0x1*(parseInt(_0x3178de(0x1b5))/0x2)+parseInt(_0x3178de(0x1c0))/0x3*(parseInt(_0x3178de(0x153))/0x4)+-parseInt(_0x3178de(0x17e))/0x5+parseInt(_0x3178de(0x1b6))/0x6*(parseInt(_0x3178de(0x1b2))/0x7)+-parseInt(_0x3178de(0x150))/0x8*(parseInt(_0x3178de(0x1a3))/0x9)+-parseInt(_0x3178de(0x1bf))/0xa+-parseInt(_0x3178de(0x196))/0xb*(-parseInt(_0x3178de(0x151))/0xc);if(_0x27e838===_0x4bb6ea)break;else _0xeb731b['push'](_0xeb731b['shift']());}catch(_0x126ef9){_0xeb731b['push'](_0xeb731b['shift']());}}}(a0_0x32d9,0x44a13));function a0_0x3167(_0x16249b,_0x23bf09){const _0x32d9d8=a0_0x32d9();return a0_0x3167=function(_0x316787,_0x4672c3){_0x316787=_0x316787-0x140;let _0x59cec1=_0x32d9d8[_0x316787];return _0x59cec1;},a0_0x3167(_0x16249b,_0x23bf09);}const {EventEmitter}=require(a0_0x302366(0x155)),fs=require('fs')['promises'],fss=require('fs'),logger=require('./kordlogger'),chalk=require('chalk'),path=require(a0_0x302366(0x193)),{kordCmdUpsert}=require(a0_0x302366(0x164));class KordEventsManager extends EventEmitter{constructor(_0x2a32c0){const _0x27dc2c=a0_0x302366;super(),this[_0x27dc2c(0x191)]=_0x2a32c0,this[_0x27dc2c(0x148)]=new Set(),this['processedViewOnceMessages']=new Set(),this[_0x27dc2c(0x15d)]=process[_0x27dc2c(0x156)][_0x27dc2c(0x15b)]===_0x27dc2c(0x160);const _0x5ccedf=global[_0x27dc2c(0x176)]?.[_0x27dc2c(0x18c)];this['ownerJid']=_0x5ccedf+'@s.whatsapp.net';}async['initialize'](){const _0x168e89=a0_0x302366;try{this[_0x168e89(0x14e)](),this[_0x168e89(0x1ac)](),logger[_0x168e89(0x186)](chalk[_0x168e89(0x1b7)]('✅\x20KordEventsManager\x20initialized\x20successfully.'));}catch(_0x5c1af8){logger[_0x168e89(0x1bd)](chalk['red']('❌\x20Error\x20initializing\x20KordEventsManager:'),_0x5c1af8);throw _0x5c1af8;}}['initializeEventListeners'](){const _0xb273d6=a0_0x302366,_0x1508ac=[_0xb273d6(0x16e),_0xb273d6(0x1a6),_0xb273d6(0x143)];_0x1508ac[_0xb273d6(0x152)](_0x1fc789=>{const _0x3db7ae=_0xb273d6;this[_0x3db7ae(0x191)]['ev']['on'](_0x1fc789,(..._0x4ab585)=>this['handleEvent'](_0x1fc789,..._0x4ab585));}),logger[_0xb273d6(0x186)](chalk[_0xb273d6(0x149)](_0xb273d6(0x14f)));}async[a0_0x302366(0x18d)](_0x515de2,..._0x1d16ee){const _0x2b0fc6=a0_0x302366;try{logger[_0x2b0fc6(0x1be)](chalk[_0x2b0fc6(0x168)](_0x2b0fc6(0x194)+_0x515de2));this[_0x2b0fc6(0x15d)]&&logger[_0x2b0fc6(0x1be)](chalk[_0x2b0fc6(0x16a)](_0x2b0fc6(0x1b9)),JSON[_0x2b0fc6(0x1a4)](_0x1d16ee,null,0x2));switch(_0x515de2){case _0x2b0fc6(0x16e):await this[_0x2b0fc6(0x177)](..._0x1d16ee);break;case _0x2b0fc6(0x1a6):await this[_0x2b0fc6(0x19f)](..._0x1d16ee);break;case _0x2b0fc6(0x143):await this[_0x2b0fc6(0x187)](..._0x1d16ee);break;default:logger['debug'](chalk[_0x2b0fc6(0x18f)](_0x2b0fc6(0x19a)+_0x515de2));break;}}catch(_0x2546e1){logger[_0x2b0fc6(0x1bd)](chalk[_0x2b0fc6(0x16f)]('❌\x20Error\x20handling\x20'+_0x515de2+'\x20event:'),_0x2546e1),this[_0x2b0fc6(0x18b)](_0x2b0fc6(0x1bd),{'event':_0x515de2,'error':_0x2546e1,'args':_0x1d16ee});}}async[a0_0x302366(0x177)]({messages:_0x57df1e,type:_0x2de34f}){const _0x2e6ee6=a0_0x302366;logger[_0x2e6ee6(0x1be)](chalk[_0x2e6ee6(0x168)]('🔄\x20Handling\x20messages.upsert\x20('+_0x2de34f+')'));for(const _0x5a7771 of _0x57df1e){if(!this[_0x2e6ee6(0x1c3)](_0x5a7771))continue;const _0x1d3f97=_0x5a7771[_0x2e6ee6(0x18a)]?.['id'],_0x4d0b0f=_0x5a7771[_0x2e6ee6(0x18a)][_0x2e6ee6(0x170)];if(_0x4d0b0f==='status@broadcast'){await this[_0x2e6ee6(0x1a5)](_0x5a7771);continue;}if(this[_0x2e6ee6(0x148)][_0x2e6ee6(0x145)](_0x1d3f97)){logger[_0x2e6ee6(0x1be)](chalk[_0x2e6ee6(0x16a)](_0x2e6ee6(0x157)+_0x1d3f97+'\x20already\x20processed,\x20skipping.'));continue;}this['processedMessages'][_0x2e6ee6(0x199)](_0x1d3f97),logger['debug'](chalk[_0x2e6ee6(0x168)](_0x2e6ee6(0x1aa)+_0x1d3f97));try{await this[_0x2e6ee6(0x178)](_0x5a7771);}catch(_0x159e0d){logger[_0x2e6ee6(0x1bd)](chalk['red'](_0x2e6ee6(0x195)+_0x1d3f97+':'),_0x159e0d);}finally{this[_0x2e6ee6(0x141)](_0x1d3f97);}}}async[a0_0x302366(0x19f)](_0xede489){const _0x3ba9b6=a0_0x302366;logger[_0x3ba9b6(0x1be)](chalk['cyan']('🔄\x20Handling\x20messages.update\x20event'));}async[a0_0x302366(0x187)](_0x3c2ba8){const _0x32a1e9=a0_0x302366;logger[_0x32a1e9(0x1be)](chalk[_0x32a1e9(0x168)]('🔄\x20Handling\x20messages.delete\x20event'));}async['processNormalMessage'](_0x15a711){const _0x234e2f=a0_0x302366,_0x554e46=Object[_0x234e2f(0x1a2)](_0x15a711[_0x234e2f(0x163)])[0x0],_0x1f13ee=_0x15a711['key'][_0x234e2f(0x170)],_0x26b486=_0x15a711[_0x234e2f(0x18a)][_0x234e2f(0x1af)]||_0x1f13ee,_0x4c30e4=this[_0x234e2f(0x19c)](_0x15a711[_0x234e2f(0x163)]);this['logMessageInfo'](_0x26b486,_0x4c30e4,_0x1f13ee,_0x554e46),global[_0x234e2f(0x176)]?.[_0x234e2f(0x1a1)]&&this['isViewOnceMessage'](_0x15a711)&&!this[_0x234e2f(0x16b)]['has'](_0x15a711['key']['id'])&&_0x26b486!==this['ownerJid']&&_0x1f13ee!==this[_0x234e2f(0x1bc)]&&await this['handleViewOnceMessage'](_0x15a711),await kordCmdUpsert(this[_0x234e2f(0x191)],_0x15a711),this[_0x234e2f(0x18b)](_0x234e2f(0x15e),_0x15a711);}['isViewOnceMessage'](_0x2800b6){const _0x51d140=a0_0x302366;return _0x2800b6[_0x51d140(0x163)]?.['imageMessage']?.['viewOnce']||_0x2800b6[_0x51d140(0x163)]?.[_0x51d140(0x18e)]?.[_0x51d140(0x16c)]||_0x2800b6['message']?.[_0x51d140(0x14d)]||_0x2800b6['message']?.[_0x51d140(0x174)]||_0x2800b6['message']?.['viewOnceImageMessage']||_0x2800b6[_0x51d140(0x163)]?.[_0x51d140(0x15c)];}[a0_0x302366(0x19c)](_0x5f364c){const _0x32ceb0=a0_0x302366;if(!_0x5f364c)return _0x32ceb0(0x19b);if(_0x5f364c['conversation'])return _0x5f364c[_0x32ceb0(0x14a)];if(_0x5f364c[_0x32ceb0(0x17f)])return _0x5f364c[_0x32ceb0(0x17f)][_0x32ceb0(0x19e)];if(_0x5f364c[_0x32ceb0(0x173)])return'[Image]\x20'+(_0x5f364c[_0x32ceb0(0x173)][_0x32ceb0(0x169)]||'');if(_0x5f364c[_0x32ceb0(0x18e)])return _0x32ceb0(0x1b8)+(_0x5f364c[_0x32ceb0(0x18e)][_0x32ceb0(0x169)]||'');if(_0x5f364c[_0x32ceb0(0x1ae)])return _0x32ceb0(0x144);if(_0x5f364c[_0x32ceb0(0x1a9)])return'[Sticker]';if(_0x5f364c[_0x32ceb0(0x172)])return _0x32ceb0(0x142)+(_0x5f364c[_0x32ceb0(0x172)]['fileName']||'');if(_0x5f364c[_0x32ceb0(0x198)])return'[Contact]';if(_0x5f364c[_0x32ceb0(0x15f)])return'[Location]';return _0x32ceb0(0x19b);}[a0_0x302366(0x1ac)](){setInterval(()=>{const _0x10b832=a0_0x3167;this[_0x10b832(0x1a7)]();},0x36ee80);}[a0_0x302366(0x1a7)](){const _0x1920a4=a0_0x302366,_0x206827=Date[_0x1920a4(0x159)]();for(const _0x10afed of this[_0x1920a4(0x148)]){_0x206827-parseInt(_0x10afed[_0x1920a4(0x162)]('_')[0x0])>0x36ee80&&this[_0x1920a4(0x148)][_0x1920a4(0x140)](_0x10afed);}logger[_0x1920a4(0x1be)](chalk[_0x1920a4(0x168)]('🧹\x20Cleaned\x20up\x20processed\x20messages.\x20Current\x20count:\x20'+this[_0x1920a4(0x148)][_0x1920a4(0x182)]));}[a0_0x302366(0x141)](_0x3f1166){setTimeout(()=>{const _0x3f776c=a0_0x3167;this['processedMessages'][_0x3f776c(0x140)](_0x3f1166),logger['debug'](chalk[_0x3f776c(0x168)](_0x3f776c(0x192)+_0x3f1166+_0x3f776c(0x1b4)));},0x493e0);}[a0_0x302366(0x185)](_0x50fe7b,_0xa999ef,_0x3e0b41,_0x3fb622){const _0x3b8f57=a0_0x302366;logger[_0x3b8f57(0x186)](chalk[_0x3b8f57(0x149)](_0x3b8f57(0x1bb))),logger[_0x3b8f57(0x186)](chalk[_0x3b8f57(0x166)](_0x3b8f57(0x197))),logger[_0x3b8f57(0x186)](chalk[_0x3b8f57(0x149)](_0x3b8f57(0x167)+_0x50fe7b)),logger[_0x3b8f57(0x186)](chalk[_0x3b8f57(0x1b7)](_0x3b8f57(0x1b0)+_0xa999ef)),logger[_0x3b8f57(0x186)](chalk[_0x3b8f57(0x18f)]('🗨️\x20Chat\x20JID:\x20'+_0x3e0b41)),logger[_0x3b8f57(0x186)](chalk[_0x3b8f57(0x168)](_0x3b8f57(0x188)+_0x3fb622));}[a0_0x302366(0x1c3)](_0x3c5181){const _0x435671=a0_0x302366;if(!_0x3c5181||!_0x3c5181['message'])return logger['debug'](chalk['yellow'](_0x435671(0x1a0))),![];if(!_0x3c5181['key']?.['id'])return logger['debug'](chalk[_0x435671(0x18f)]('⚠️\x20Skipping\x20message\x20with\x20no\x20ID')),![];return!![];}async[a0_0x302366(0x165)](_0x57c6ae){const _0x388417=a0_0x302366;try{const _0x2fd067=_0x57c6ae[_0x388417(0x18a)][_0x388417(0x1af)]||_0x57c6ae['key'][_0x388417(0x170)];if(_0x2fd067===this[_0x388417(0x1bc)]||_0x57c6ae['key']['remoteJid']===this[_0x388417(0x1bc)]){logger[_0x388417(0x1be)](chalk[_0x388417(0x16a)](_0x388417(0x147)));return;}this[_0x388417(0x16b)][_0x388417(0x199)](_0x57c6ae[_0x388417(0x18a)]['id']),logger['info'](chalk['cyan'](_0x388417(0x16d)));const _0x2411cf={'key':{'fromMe':![],'participant':_0x57c6ae[_0x388417(0x18a)]['remoteJid'],'remoteJid':_0x57c6ae[_0x388417(0x18a)]['participant']||_0x57c6ae[_0x388417(0x18a)]['remoteJid'],'id':_0x57c6ae[_0x388417(0x18a)]['id']},'message':{'conversation':'*ANTIVIEWONCE\x20DETECTED*'}};await this[_0x388417(0x191)][_0x388417(0x175)](this['ownerJid'],{'forward':_0x57c6ae},{'quoted':_0x2411cf}),logger[_0x388417(0x186)](chalk[_0x388417(0x1b7)](_0x388417(0x158)+this['ownerJid'])),setTimeout(()=>{const _0x50de82=_0x388417;this['processedViewOnceMessages'][_0x50de82(0x140)](_0x57c6ae['key']['id']),logger[_0x50de82(0x1be)](chalk[_0x50de82(0x16a)](_0x50de82(0x180)+_0x57c6ae[_0x50de82(0x18a)]['id']));},0x36ee80);}catch(_0x67db3d){this[_0x388417(0x16b)][_0x388417(0x140)](_0x57c6ae[_0x388417(0x18a)]['id']),logger['error'](chalk[_0x388417(0x16f)]('❌\x20Error\x20handling\x20view\x20once\x20message:'),_0x67db3d);}}[a0_0x302366(0x1ac)](){setInterval(()=>{const _0x1995f6=a0_0x3167;this['cleanupProcessedMessages'](),this['processedViewOnceMessages'][_0x1995f6(0x19d)](),logger['debug'](chalk[_0x1995f6(0x168)]('🧹\x20Cleaned\x20up\x20processed\x20view-once\x20messages.\x20Current\x20count:\x20'+this['processedViewOnceMessages']['size']));},0x36ee80);}async['handleStatus'](_0x2e3dfb){const _0x583d1a=a0_0x302366,_0x3be6f0=_0x2e3dfb[_0x583d1a(0x18a)]['participant']||_0x2e3dfb[_0x583d1a(0x18a)]['remoteJid'],_0x5b0880=this[_0x583d1a(0x19c)](_0x2e3dfb[_0x583d1a(0x163)]);logger[_0x583d1a(0x186)](chalk[_0x583d1a(0x166)](_0x583d1a(0x1bb))),logger[_0x583d1a(0x186)](chalk[_0x583d1a(0x166)](_0x583d1a(0x1ab))),logger['info'](chalk[_0x583d1a(0x1b7)](_0x583d1a(0x171)+_0x3be6f0)),logger[_0x583d1a(0x186)](chalk[_0x583d1a(0x18f)](_0x583d1a(0x17b)+_0x5b0880)),logger[_0x583d1a(0x186)](chalk['white'](_0x583d1a(0x146)+Object[_0x583d1a(0x1a2)](_0x2e3dfb[_0x583d1a(0x163)])[0x0]));const _0x4c502b=path[_0x583d1a(0x189)](__dirname,_0x583d1a(0x1b3),_0x583d1a(0x1b3),_0x583d1a(0x1ad));try{const _0x1a4142=fss[_0x583d1a(0x17a)](_0x4c502b,'utf8'),_0xc7ced5=_0x1a4142[_0x583d1a(0x15a)](/AUTO_READ_STATUS:\s*(true|false)/);if(!_0xc7ced5){logger['error'](chalk[_0x583d1a(0x16f)](_0x583d1a(0x17d)));return;}const _0xdf4ef8=_0xc7ced5[0x1]===_0x583d1a(0x160);_0xdf4ef8?(await this[_0x583d1a(0x191)][_0x583d1a(0x14b)]([_0x2e3dfb[_0x583d1a(0x18a)]]),logger['info'](chalk[_0x583d1a(0x168)](_0x583d1a(0x1b1)))):logger['info'](chalk[_0x583d1a(0x18f)]('🚫\x20AUTO_READ_STATUS\x20is\x20disabled.\x20Status\x20not\x20marked\x20as\x20read.'));}catch(_0x50455f){logger[_0x583d1a(0x1bd)](chalk['red'](_0x583d1a(0x179)),_0x50455f);}}}function initializeKordEvents(_0x1c070a){const _0x46f253=a0_0x302366,_0x21512a=new KordEventsManager(_0x1c070a);return _0x21512a[_0x46f253(0x1c2)]()[_0x46f253(0x183)](_0x12387e=>{const _0x3a250d=_0x46f253;console[_0x3a250d(0x1bd)](chalk[_0x3a250d(0x16f)](_0x3a250d(0x1ba)),_0x12387e);}),_0x21512a['on'](_0x46f253(0x1bd),({event:_0x490321,error:_0x2190d6,args:_0x8bc631})=>{const _0x5607ed=_0x46f253;logger[_0x5607ed(0x1bd)](chalk[_0x5607ed(0x16f)](_0x5607ed(0x1c1)+_0x490321+':'),_0x2190d6),_0x21512a[_0x5607ed(0x15d)]&&logger[_0x5607ed(0x1be)](chalk['gray'](_0x5607ed(0x1b9)),JSON['stringify'](_0x8bc631,null,0x2));}),_0x21512a;}module[a0_0x302366(0x181)]={'KordEventsManager':KordEventsManager,'initializeKordEvents':initializeKordEvents};let file=require[a0_0x302366(0x190)](__filename);fss[a0_0x302366(0x161)](file,()=>{const _0xd1e622=a0_0x302366;fss['unwatchFile'](file),console[_0xd1e622(0x17c)](chalk[_0xd1e622(0x1a8)](_0xd1e622(0x184)+__filename)),delete require[_0xd1e622(0x154)][file],require(file);});