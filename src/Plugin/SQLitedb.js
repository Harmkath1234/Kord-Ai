function a0_0x55b1(_0x431f23,_0xe884e7){const _0x4eaa29=a0_0x4eaa();return a0_0x55b1=function(_0x55b1e4,_0x3ad88a){_0x55b1e4=_0x55b1e4-0xcb;let _0x2924ce=_0x4eaa29[_0x55b1e4];return _0x2924ce;},a0_0x55b1(_0x431f23,_0xe884e7);}const a0_0x260a20=a0_0x55b1;(function(_0x2004ba,_0x5d3690){const _0x56c2ba=a0_0x55b1,_0xe1efe3=_0x2004ba();while(!![]){try{const _0x12799d=-parseInt(_0x56c2ba(0xdb))/0x1+-parseInt(_0x56c2ba(0xdd))/0x2+-parseInt(_0x56c2ba(0x104))/0x3+parseInt(_0x56c2ba(0xe0))/0x4+parseInt(_0x56c2ba(0xf2))/0x5+-parseInt(_0x56c2ba(0xfc))/0x6+parseInt(_0x56c2ba(0xe7))/0x7;if(_0x12799d===_0x5d3690)break;else _0xe1efe3['push'](_0xe1efe3['shift']());}catch(_0xd08266){_0xe1efe3['push'](_0xe1efe3['shift']());}}}(a0_0x4eaa,0x246f2));const sqlite3=require(a0_0x260a20(0xf7)),{open}=require(a0_0x260a20(0xde)),path=require(a0_0x260a20(0x108)),chalk=require(a0_0x260a20(0xf5));class DatabaseManager{static async['createSchema'](_0x427835){const _0x1564f5=a0_0x260a20;await _0x427835['exec'](_0x1564f5(0xfb)),await _0x427835[_0x1564f5(0xfe)](_0x1564f5(0xd2)),await _0x427835[_0x1564f5(0xfe)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20messages\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20remoteJid\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20message\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timestamp\x20INTEGER,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pushName\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20participant\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20messageType\x20TEXT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20\x20\x20\x20\x20'),await _0x427835['exec'](_0x1564f5(0xd3)),await _0x427835[_0x1564f5(0xfe)](_0x1564f5(0xdc));}}class MessageQueueProcessor{constructor(_0x44233e){const _0x3eb9f1=a0_0x260a20;this['db']=_0x44233e,this[_0x3eb9f1(0xd0)]=[],this[_0x3eb9f1(0xef)]=![];}async['processQueue'](){const _0x33d240=a0_0x260a20;if(this[_0x33d240(0xef)]||this[_0x33d240(0xd0)][_0x33d240(0xee)]===0x0)return;this['isProcessingQueue']=!![];try{await this['db'][_0x33d240(0xda)](_0x33d240(0xe6));const _0x4b2215=await this['db'][_0x33d240(0xdf)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20OR\x20REPLACE\x20INTO\x20messages\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(id,\x20remoteJid,\x20message,\x20timestamp,\x20pushName,\x20participant)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?,\x20?)');while(this[_0x33d240(0xd0)][_0x33d240(0xee)]>0x0){const _0x42edd4=this[_0x33d240(0xd0)][_0x33d240(0xe8)](),{key:_0x32d3eb,messageTimestamp:_0x347372,pushName:_0x5aa648,participant:_0x188f62}=_0x42edd4;await _0x4b2215[_0x33d240(0xda)](_0x32d3eb['id'],_0x32d3eb[_0x33d240(0xea)],JSON[_0x33d240(0xce)](_0x42edd4),_0x347372,_0x5aa648,_0x188f62);}await _0x4b2215['finalize'](),await this['db'][_0x33d240(0xda)](_0x33d240(0xec));}catch(_0x3ece26){console[_0x33d240(0x105)](chalk[_0x33d240(0xfd)]('Error\x20processing\x20write\x20queue:',_0x3ece26)),await this['db']['run'](_0x33d240(0xe9)),this[_0x33d240(0xd0)][_0x33d240(0x103)](...this[_0x33d240(0xd0)]);}finally{this['isProcessingQueue']=![],setTimeout(()=>this[_0x33d240(0xe1)](),0x64);}}[a0_0x260a20(0xf1)](_0x315d46){const _0xd4a13c=a0_0x260a20;this['writeQueue']['push'](_0x315d46),!this['isProcessingQueue']&&this[_0xd4a13c(0xe1)]();}}class SQLiteMessageStore{constructor(_0x4f60b6){const _0x3e04e0=a0_0x260a20;this[_0x3e04e0(0xd7)]=_0x4f60b6,this['db']=null,this[_0x3e04e0(0xe5)]=null;}async[a0_0x260a20(0xf8)](){const _0x4ed154=a0_0x260a20;try{this['db']=await open({'filename':path['join'](__dirname,'..',_0x4ed154(0xed)),'driver':sqlite3['Database']}),await DatabaseManager['createSchema'](this['db']),this[_0x4ed154(0xe5)]=new MessageQueueProcessor(this['db']),console['log'](chalk[_0x4ed154(0xfa)](_0x4ed154(0x100)));}catch(_0x182a26){console['error'](chalk[_0x4ed154(0xfd)](_0x4ed154(0xcb),_0x182a26));throw _0x182a26;}}async[a0_0x260a20(0xd6)](_0x14632f){const _0xfc82e0=a0_0x260a20;this[_0xfc82e0(0xe5)][_0xfc82e0(0xf1)](_0x14632f);}async[a0_0x260a20(0xd5)](_0x979d8e,_0x189e20){const _0x330430=a0_0x260a20;try{const _0x38b58d=await this['db']['get'](_0x330430(0xe2),[_0x979d8e,_0x189e20]);return _0x38b58d?JSON['parse'](_0x38b58d[_0x330430(0xf4)]):undefined;}catch(_0x3211b9){return console['error'](chalk[_0x330430(0xfd)](_0x330430(0xf0),_0x3211b9)),undefined;}}async[a0_0x260a20(0xd1)](_0x2c18d4,_0x155837=0x32){const _0x5eb6c6=a0_0x260a20;try{return await this['db'][_0x5eb6c6(0xd8)](_0x5eb6c6(0xe3),[_0x2c18d4,_0x155837]);}catch(_0x297ff0){return console['error'](chalk[_0x5eb6c6(0xfd)](_0x5eb6c6(0x102),_0x297ff0)),[];}}async[a0_0x260a20(0xeb)](_0x13fa67=0x1){const _0x12949f=a0_0x260a20;try{const _0x5f5a08=Date[_0x12949f(0xf6)]()-_0x13fa67*0x18*0x3c*0x3c*0x3e8,_0x7943da=await this['db'][_0x12949f(0xda)](_0x12949f(0xd4),[_0x5f5a08]);console[_0x12949f(0x107)](chalk['green']('Cleared\x20'+_0x7943da[_0x12949f(0xd9)]+_0x12949f(0xcc)+_0x13fa67+_0x12949f(0xff))),_0x7943da['changes']>0x3e8&&await this['db']['run'](_0x12949f(0xcf));}catch(_0x7b2c0c){console['error'](chalk['red']('Error\x20clearing\x20old\x20messages:',_0x7b2c0c));}}async[a0_0x260a20(0x101)](_0x3a0260){const _0x4df356=a0_0x260a20;_0x3a0260['on'](_0x4df356(0xf9),async({messages:_0x1ebe86})=>{const _0xa21c31=_0x4df356;for(const _0x1318fc of _0x1ebe86){await this[_0xa21c31(0xd6)](_0x1318fc);}});}async[a0_0x260a20(0xe4)](){const _0x4d41c5=a0_0x260a20;try{this['db']&&(await this['db'][_0x4d41c5(0xe4)](),console[_0x4d41c5(0x107)](chalk['green'](_0x4d41c5(0x106))));}catch(_0x30b602){console['error'](chalk[_0x4d41c5(0xfd)]('Error\x20closing\x20database\x20connection:',_0x30b602));}}}module[a0_0x260a20(0xf3)]=SQLiteMessageStore,module['exports'][a0_0x260a20(0xcd)]=DatabaseManager;function a0_0x4eaa(){const _0x15420f=['writeMessage','logger','all','changes','run','149237FUdQZf','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20INDEX\x20IF\x20NOT\x20EXISTS\x20idx_remoteJid_timestamp\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20messages\x20(remoteJid,\x20timestamp\x20DESC)\x0a\x20\x20\x20\x20\x20\x20\x20\x20','435060ANDmGc','sqlite','prepare','554132YsxjbN','processQueue','SELECT\x20message\x20FROM\x20messages\x20WHERE\x20remoteJid\x20=\x20?\x20AND\x20id\x20=\x20?','SELECT\x20message\x20FROM\x20messages\x20WHERE\x20remoteJid\x20=\x20?\x20ORDER\x20BY\x20timestamp\x20DESC\x20LIMIT\x20?','close','queueProcessor','BEGIN\x20TRANSACTION','3407894hDPEel','shift','ROLLBACK','remoteJid','clearOldMessages','COMMIT','messages.db','length','isProcessingQueue','Error\x20loading\x20message:','addToQueue','1004060kdiLiT','exports','message','chalk','now','sqlite3','initialize','messages.upsert','green','PRAGMA\x20journal_mode\x20=\x20WAL;','1017078nxYCvl','red','exec','\x20days','SQLite\x20store\x20initialized\x20successfully','bind','Error\x20getting\x20chat\x20history:','unshift','422019bmXdPo','error','Database\x20connection\x20closed\x20successfully','log','path','Error\x20initializing\x20SQLite\x20store:','\x20messages\x20older\x20than\x20','DatabaseManager','stringify','VACUUM','writeQueue','getChatHistory','PRAGMA\x20synchronous\x20=\x20NORMAL;','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20INDEX\x20IF\x20NOT\x20EXISTS\x20idx_remoteJid\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20messages\x20(remoteJid)\x0a\x20\x20\x20\x20\x20\x20\x20\x20','DELETE\x20FROM\x20messages\x20WHERE\x20timestamp\x20<\x20?','loadMessage'];a0_0x4eaa=function(){return _0x15420f;};return a0_0x4eaa();}