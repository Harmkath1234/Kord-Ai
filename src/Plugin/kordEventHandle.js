const _0x57c50f=_0x3ed2;(function(_0x931ebd,_0x5bd3c3){const _0x2bfd3d=_0x3ed2,_0x3a2f28=_0x931ebd();while(!![]){try{const _0x25a24a=-parseInt(_0x2bfd3d(0x10f))/0x1*(-parseInt(_0x2bfd3d(0x100))/0x2)+parseInt(_0x2bfd3d(0xf9))/0x3+-parseInt(_0x2bfd3d(0xf6))/0x4+-parseInt(_0x2bfd3d(0xfc))/0x5+-parseInt(_0x2bfd3d(0xf8))/0x6*(-parseInt(_0x2bfd3d(0x127))/0x7)+parseInt(_0x2bfd3d(0x108))/0x8*(-parseInt(_0x2bfd3d(0x119))/0x9)+parseInt(_0x2bfd3d(0x12a))/0xa*(-parseInt(_0x2bfd3d(0x107))/0xb);if(_0x25a24a===_0x5bd3c3)break;else _0x3a2f28['push'](_0x3a2f28['shift']());}catch(_0x618c4a){_0x3a2f28['push'](_0x3a2f28['shift']());}}}(_0x12f8,0x3e5b7));const EventEmitter=require(_0x57c50f(0x117)),fs=require('fs')[_0x57c50f(0x10c)],path=require('path'),kord=new EventEmitter(),debounceTimeout=0x7d0;function _0x3ed2(_0x5f50b9,_0x34e89a){const _0x12f870=_0x12f8();return _0x3ed2=function(_0x3ed246,_0x5477bc){_0x3ed246=_0x3ed246-0xf5;let _0x1a5306=_0x12f870[_0x3ed246];return _0x1a5306;},_0x3ed2(_0x5f50b9,_0x34e89a);}class AgainstEventManager{constructor(){const _0x5810fc=_0x57c50f;this['antiCheckers']=new Map(),this[_0x5810fc(0x10a)]=null,this[_0x5810fc(0x11d)]=path[_0x5810fc(0x123)](__dirname,'../Against');}async['loadAntiCheckers'](){const _0x20b12b=_0x57c50f,_0x3f2b3b=(await import(_0x20b12b(0x110)))[_0x20b12b(0x116)];try{const _0xf3242a=await fs[_0x20b12b(0x109)](this[_0x20b12b(0x11d)]);for(const _0x934858 of _0xf3242a){if(!_0x934858['endsWith'](_0x20b12b(0x11b)))continue;await this[_0x20b12b(0x11e)](_0x934858);}}catch(_0xc44209){console[_0x20b12b(0xfe)](_0x3f2b3b[_0x20b12b(0x111)](_0x20b12b(0x126),_0xc44209));}}async[_0x57c50f(0x11e)](_0x1bad00){const _0x1cfbb1=_0x57c50f,_0x5671a0=(await import(_0x1cfbb1(0x110)))[_0x1cfbb1(0x116)],_0x41eaba=path[_0x1cfbb1(0x123)](this[_0x1cfbb1(0x11d)],_0x1bad00);try{const _0x21bfac=require(_0x41eaba);if(_0x21bfac['isEnabled']===![]){console['warn'](_0x5671a0[_0x1cfbb1(0x122)](_0x1cfbb1(0x103)+_0x1bad00+_0x1cfbb1(0xf7)));return;}if(_0x21bfac['event']){const _0x64b21d=Array[_0x1cfbb1(0x113)](_0x21bfac[_0x1cfbb1(0x11f)])?_0x21bfac[_0x1cfbb1(0x11f)]:[_0x21bfac[_0x1cfbb1(0x11f)]];for(const _0x187a9a of _0x64b21d){this[_0x1cfbb1(0x124)]['set'](_0x187a9a,_0x21bfac);}console[_0x1cfbb1(0x101)](_0x5671a0['green'](_0x1cfbb1(0x12b)+_0x64b21d[_0x1cfbb1(0x123)](',\x20')+'\x20from\x20'+_0x1bad00));}else console[_0x1cfbb1(0x118)](_0x5671a0[_0x1cfbb1(0x122)](_0x1cfbb1(0x103)+_0x1bad00+_0x1cfbb1(0xfd)));}catch(_0x3e2edf){console['error'](_0x5671a0['red'](_0x1cfbb1(0x121)+_0x1bad00+':',_0x3e2edf));}}['watchEvents'](){const _0x3e0ab2=_0x57c50f;let _0x578196;fs[_0x3e0ab2(0x106)](this[_0x3e0ab2(0x11d)],{'recursive':!![]},(_0x3349a6,_0xee8bf9)=>{const _0x593c0e=_0x3e0ab2;_0xee8bf9[_0x593c0e(0x125)]('.js')&&(clearTimeout(_0x578196),_0x578196=setTimeout(()=>this['reloadModule'](_0xee8bf9),debounceTimeout));});}async[_0x57c50f(0x128)](_0x29ad96){const _0x54a791=_0x57c50f,_0x23827e=(await import(_0x54a791(0x110)))['default'],_0x28fc89=path[_0x54a791(0x123)](this[_0x54a791(0x11d)],_0x29ad96);try{delete require['cache'][require[_0x54a791(0x104)](_0x28fc89)];const _0x553c14=require(_0x28fc89);typeof _0x553c14[_0x54a791(0x112)]==='function'&&_0x553c14[_0x54a791(0x11f)]?(this[_0x54a791(0x115)](_0x553c14),console[_0x54a791(0x101)](_0x23827e[_0x54a791(0x10d)](_0x54a791(0x114)+_0x29ad96))):console[_0x54a791(0x118)](_0x23827e[_0x54a791(0x10d)](_0x54a791(0x102)+_0x29ad96+_0x54a791(0x11c)));}catch(_0x175f47){console[_0x54a791(0xfe)](_0x23827e['red'](_0x54a791(0xff)+_0x29ad96+':\x20'+_0x175f47[_0x54a791(0xf5)]));}}[_0x57c50f(0x115)](_0x1502b5){const _0x31cb7d=_0x57c50f;if(_0x1502b5[_0x31cb7d(0x11f)]){const _0x2f1eeb=Array[_0x31cb7d(0x113)](_0x1502b5[_0x31cb7d(0x11f)])?_0x1502b5['event']:[_0x1502b5['event']];for(const _0x299eab of _0x2f1eeb){this[_0x31cb7d(0x124)][_0x31cb7d(0x105)](_0x299eab,_0x1502b5);}}}async[_0x57c50f(0xfa)](){const _0x3c5f5c=_0x57c50f,_0x2bb745=(await import(_0x3c5f5c(0x110)))[_0x3c5f5c(0x116)];for(const [_0x377ada,_0x495b40]of this[_0x3c5f5c(0x124)]['entries']()){this[_0x3c5f5c(0x10a)]['ev']['on'](_0x377ada,async(..._0x7e3946)=>{const _0x3b6976=_0x3c5f5c;try{await _0x495b40[_0x3b6976(0x112)](this['sock'],..._0x7e3946),console[_0x3b6976(0x101)](_0x2bb745[_0x3b6976(0x10e)]('📩\x20Event\x20handled:\x20'+_0x377ada));}catch(_0x2dcda1){console[_0x3b6976(0xfe)](_0x2bb745[_0x3b6976(0x111)](_0x3b6976(0x129)+_0x377ada+':',_0x2dcda1));}});}}async[_0x57c50f(0xfb)](_0xe9a394){const _0xe8ac9c=_0x57c50f;this[_0xe8ac9c(0x10a)]=_0xe9a394,await this[_0xe8ac9c(0x11a)](),this[_0xe8ac9c(0x10b)](),await this[_0xe8ac9c(0xfa)]();}}function _0x12f8(){const _0x555f64=['\x20is\x20disabled.','402YVwwcd','1443675YkvxDS','registerEventListeners','init','620600sXkTLV','\x20does\x20not\x20have\x20an\x20event\x20property.','error','[Hot\x20Reload]\x20Error\x20reloading\x20','4FRTwbt','log','[Hot\x20Reload]\x20Skipped\x20','⚠️\x20Event\x20in\x20','resolve','set','watch','2018643BVdqGp','8AweyMM','readdir','sock','watchEvents','promises','magenta','blue','182302rDTFlJ','chalk','red','execute','isArray','[Hot\x20Reload]\x20Successfully\x20reloaded\x20','registerCommand','default','events','warn','1462977mAFwFw','loadAntiCheckers','.js',':\x20Invalid\x20Event\x20module\x20format.','pluginDir','loadCheckerModule','event','exports','❌\x20Error\x20loading\x20Event\x20from\x20','yellow','join','antiCheckers','endsWith','❌\x20Error\x20reading\x20the\x20anti\x20directory:','6776ClwBMp','reloadModule','❌\x20Error\x20handling\x20event\x20','10RZEGPS','✅\x20Loaded\x20Event:\x20','message','740336DLXRnn'];_0x12f8=function(){return _0x555f64;};return _0x12f8();}const againstEventManager=new AgainstEventManager();module[_0x57c50f(0x120)]={'againstEventManager':againstEventManager,'kord':kord};