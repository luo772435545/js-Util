/**
 * Created by gan on 2018/1/16.
 */
import dom from './lib/dom'//
import equipment from './lib/equipment'//
import eventTarget from './lib/eventTarget'//
import http from './lib/http'//
import number from './lib/number'//
import regexp from './lib/regexp'//
import storage from './lib/storage'//
import time from './lib/time'//
import util from './lib/util'//
import z7z8 from './lib/z7z8'//杂七杂八

window.util={
    z7z8:z7z8,
    dom:dom,
    equipment:equipment,
    eventTarget:eventTarget,
    http:http,
    number:number,
    regexp:regexp,
    storage:storage,
    time:time,
    ut:util,
};
console.log(window.util);