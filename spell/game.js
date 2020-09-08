
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'game.data';
    var REMOTE_PACKAGE_BASE = 'game.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                              Module['locateFile'](REMOTE_PACKAGE_BASE) :
                              ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);
  
    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', '.git', true, true);
Module['FS_createPath']('/.git', 'refs', true, true);
Module['FS_createPath']('/.git/refs', 'remotes', true, true);
Module['FS_createPath']('/.git/refs/remotes', 'origin', true, true);
Module['FS_createPath']('/.git/refs', 'heads', true, true);
Module['FS_createPath']('/.git', 'hooks', true, true);
Module['FS_createPath']('/.git', 'objects', true, true);
Module['FS_createPath']('/.git/objects', '20', true, true);
Module['FS_createPath']('/.git/objects', 'c6', true, true);
Module['FS_createPath']('/.git/objects', '33', true, true);
Module['FS_createPath']('/.git/objects', '86', true, true);
Module['FS_createPath']('/.git/objects', 'cf', true, true);
Module['FS_createPath']('/.git/objects', 'd0', true, true);
Module['FS_createPath']('/.git/objects', 'd1', true, true);
Module['FS_createPath']('/.git/objects', '78', true, true);
Module['FS_createPath']('/.git/objects', '02', true, true);
Module['FS_createPath']('/.git/objects', 'ab', true, true);
Module['FS_createPath']('/.git/objects', 'b0', true, true);
Module['FS_createPath']('/.git/objects', '0a', true, true);
Module['FS_createPath']('/.git/objects', '9c', true, true);
Module['FS_createPath']('/.git/objects', '14', true, true);
Module['FS_createPath']('/.git/objects', 'a6', true, true);
Module['FS_createPath']('/.git/objects', '23', true, true);
Module['FS_createPath']('/.git/objects', '08', true, true);
Module['FS_createPath']('/.git/objects', '9a', true, true);
Module['FS_createPath']('/.git/objects', 'a7', true, true);
Module['FS_createPath']('/.git/objects', 'db', true, true);
Module['FS_createPath']('/.git/objects', '1a', true, true);
Module['FS_createPath']('/.git/objects', '29', true, true);
Module['FS_createPath']('/.git/objects', '98', true, true);
Module['FS_createPath']('/.git/objects', 'f7', true, true);
Module['FS_createPath']('/.git/objects', '6c', true, true);
Module['FS_createPath']('/.git/objects', '3e', true, true);
Module['FS_createPath']('/.git/objects', '61', true, true);
Module['FS_createPath']('/.git/objects', 'aa', true, true);
Module['FS_createPath']('/.git/objects', '06', true, true);
Module['FS_createPath']('/.git/objects', 'b9', true, true);
Module['FS_createPath']('/.git/objects', 'd5', true, true);
Module['FS_createPath']('/.git/objects', '17', true, true);
Module['FS_createPath']('/.git/objects', 'd7', true, true);
Module['FS_createPath']('/.git/objects', '2d', true, true);
Module['FS_createPath']('/.git/objects', 'e6', true, true);
Module['FS_createPath']('/.git/objects', '3a', true, true);
Module['FS_createPath']('/.git/objects', '80', true, true);
Module['FS_createPath']('/.git/objects', '2e', true, true);
Module['FS_createPath']('/.git/objects', '0e', true, true);
Module['FS_createPath']('/.git/objects', '91', true, true);
Module['FS_createPath']('/.git/objects', '59', true, true);
Module['FS_createPath']('/.git/objects', '4e', true, true);
Module['FS_createPath']('/.git/objects', '93', true, true);
Module['FS_createPath']('/.git/objects', 'e0', true, true);
Module['FS_createPath']('/.git/objects', 'a1', true, true);
Module['FS_createPath']('/.git/objects', 'e9', true, true);
Module['FS_createPath']('/.git/objects', '8f', true, true);
Module['FS_createPath']('/.git/objects', 'e1', true, true);
Module['FS_createPath']('/.git/objects', '46', true, true);
Module['FS_createPath']('/.git/objects', 'a0', true, true);
Module['FS_createPath']('/.git/objects', 'b5', true, true);
Module['FS_createPath']('/.git/objects', '7a', true, true);
Module['FS_createPath']('/.git/objects', '8d', true, true);
Module['FS_createPath']('/.git/objects', 'd4', true, true);
Module['FS_createPath']('/.git/objects', '52', true, true);
Module['FS_createPath']('/.git/objects', '79', true, true);
Module['FS_createPath']('/.git/objects', '9b', true, true);
Module['FS_createPath']('/.git/objects', '03', true, true);
Module['FS_createPath']('/.git/objects', 'ad', true, true);
Module['FS_createPath']('/.git/objects', '57', true, true);
Module['FS_createPath']('/.git/objects', '68', true, true);
Module['FS_createPath']('/.git/objects', '7d', true, true);
Module['FS_createPath']('/.git/objects', 'bc', true, true);
Module['FS_createPath']('/.git/objects', '76', true, true);
Module['FS_createPath']('/.git/objects', 'e7', true, true);
Module['FS_createPath']('/.git/objects', 'b2', true, true);
Module['FS_createPath']('/.git/objects', '7b', true, true);
Module['FS_createPath']('/.git/objects', 'dd', true, true);
Module['FS_createPath']('/.git/objects', '16', true, true);
Module['FS_createPath']('/.git/objects', '81', true, true);
Module['FS_createPath']('/.git/objects', '12', true, true);
Module['FS_createPath']('/.git/objects', 'fe', true, true);
Module['FS_createPath']('/.git/objects', '0b', true, true);
Module['FS_createPath']('/.git/objects', '13', true, true);
Module['FS_createPath']('/.git/objects', 'e5', true, true);
Module['FS_createPath']('/.git/objects', 'c7', true, true);
Module['FS_createPath']('/.git/objects', '4a', true, true);
Module['FS_createPath']('/.git/objects', '56', true, true);
Module['FS_createPath']('/.git/objects', '07', true, true);
Module['FS_createPath']('/.git/objects', '15', true, true);
Module['FS_createPath']('/.git/objects', 'fd', true, true);
Module['FS_createPath']('/.git/objects', '11', true, true);
Module['FS_createPath']('/.git/objects', '88', true, true);
Module['FS_createPath']('/.git/objects', '99', true, true);
Module['FS_createPath']('/.git/objects', '8b', true, true);
Module['FS_createPath']('/.git/objects', '48', true, true);
Module['FS_createPath']('/.git/objects', '4f', true, true);
Module['FS_createPath']('/.git/objects', 'e8', true, true);
Module['FS_createPath']('/.git/objects', 'eb', true, true);
Module['FS_createPath']('/.git/objects', '51', true, true);
Module['FS_createPath']('/.git/objects', '30', true, true);
Module['FS_createPath']('/.git/objects', '87', true, true);
Module['FS_createPath']('/.git/objects', '96', true, true);
Module['FS_createPath']('/.git/objects', '54', true, true);
Module['FS_createPath']('/.git/objects', '22', true, true);
Module['FS_createPath']('/.git/objects', 'bf', true, true);
Module['FS_createPath']('/.git/objects', '95', true, true);
Module['FS_createPath']('/.git/objects', 'ce', true, true);
Module['FS_createPath']('/.git/objects', '2b', true, true);
Module['FS_createPath']('/.git/objects', '3c', true, true);
Module['FS_createPath']('/.git/objects', 'ba', true, true);
Module['FS_createPath']('/.git/objects', 'b4', true, true);
Module['FS_createPath']('/.git/objects', '6a', true, true);
Module['FS_createPath']('/.git/objects', 'c1', true, true);
Module['FS_createPath']('/.git/objects', '9e', true, true);
Module['FS_createPath']('/.git/objects', '71', true, true);
Module['FS_createPath']('/.git/objects', '63', true, true);
Module['FS_createPath']('/.git/objects', 'c2', true, true);
Module['FS_createPath']('/.git/objects', '90', true, true);
Module['FS_createPath']('/.git/objects', '4b', true, true);
Module['FS_createPath']('/.git/objects', '41', true, true);
Module['FS_createPath']('/.git/objects', '3d', true, true);
Module['FS_createPath']('/.git/objects', 'd3', true, true);
Module['FS_createPath']('/.git/objects', '97', true, true);
Module['FS_createPath']('/.git/objects', '21', true, true);
Module['FS_createPath']('/.git/objects', 'f9', true, true);
Module['FS_createPath']('/.git/objects', '62', true, true);
Module['FS_createPath']('/.git/objects', 'd2', true, true);
Module['FS_createPath']('/.git/objects', '49', true, true);
Module['FS_createPath']('/.git/objects', 'fc', true, true);
Module['FS_createPath']('/.git/objects', 'cc', true, true);
Module['FS_createPath']('/.git/objects', 'f2', true, true);
Module['FS_createPath']('/.git/objects', '34', true, true);
Module['FS_createPath']('/.git/objects', 'c0', true, true);
Module['FS_createPath']('/.git/objects', 'b7', true, true);
Module['FS_createPath']('/.git', 'info', true, true);
Module['FS_createPath']('/.git', 'logs', true, true);
Module['FS_createPath']('/.git/logs', 'refs', true, true);
Module['FS_createPath']('/.git/logs/refs', 'remotes', true, true);
Module['FS_createPath']('/.git/logs/refs/remotes', 'origin', true, true);
Module['FS_createPath']('/.git/logs/refs', 'heads', true, true);
Module['FS_createPath']('/', 'assets', true, true);
Module['FS_createPath']('/', 'bcgj-20', true, true);
Module['FS_createPath']('/bcgj-20', '.git', true, true);
Module['FS_createPath']('/bcgj-20/.git', 'refs', true, true);
Module['FS_createPath']('/bcgj-20/.git/refs', 'remotes', true, true);
Module['FS_createPath']('/bcgj-20/.git/refs/remotes', 'origin', true, true);
Module['FS_createPath']('/bcgj-20/.git/refs', 'heads', true, true);
Module['FS_createPath']('/bcgj-20/.git', 'hooks', true, true);
Module['FS_createPath']('/bcgj-20/.git', 'objects', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'c6', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '33', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '86', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'cf', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'd0', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '78', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '02', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'ab', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '0a', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '9c', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '14', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'a6', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '23', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '08', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '9a', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'a7', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'db', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '1a', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '29', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '98', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'f7', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '6c', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '3e', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '61', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'aa', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'b9', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'd5', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '17', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'd7', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '2d', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'e6', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '3a', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '80', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '2e', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '0e', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '91', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '59', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '4e', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '93', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'e0', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'a1', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'e9', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '8f', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'e1', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '46', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'a0', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'b5', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '8d', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'd4', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '79', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '9b', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '03', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'ad', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '57', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'bc', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '76', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'e7', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'b2', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '7b', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'dd', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '16', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '81', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '12', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'fe', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '0b', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '13', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'c7', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '4a', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '56', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '07', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '15', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'fd', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '11', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '88', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '99', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '8b', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '48', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '4f', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'e8', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'eb', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '51', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '30', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '87', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '96', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '22', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'bf', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'ce', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '2b', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '3c', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'ba', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'b4', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '6a', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '9e', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '71', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '63', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'c2', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '90', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '4b', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '41', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '3d', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'd3', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '97', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '21', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'f9', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '62', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'd2', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '49', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'fc', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'cc', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'f2', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', '34', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'c0', true, true);
Module['FS_createPath']('/bcgj-20/.git/objects', 'b7', true, true);
Module['FS_createPath']('/bcgj-20/.git', 'info', true, true);
Module['FS_createPath']('/bcgj-20/.git', 'logs', true, true);
Module['FS_createPath']('/bcgj-20/.git/logs', 'refs', true, true);
Module['FS_createPath']('/bcgj-20/.git/logs/refs', 'remotes', true, true);
Module['FS_createPath']('/bcgj-20/.git/logs/refs/remotes', 'origin', true, true);
Module['FS_createPath']('/bcgj-20/.git/logs/refs', 'heads', true, true);
Module['FS_createPath']('/bcgj-20', 'assets', true, true);
Module['FS_createPath']('/bcgj-20', 'raw_files', true, true);
Module['FS_createPath']('/', 'raw_files', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      },
    };

        var files = metadata.files;
        for (i = 0; i < files.length; ++i) {
          new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename);
        }

  
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        if (Module['SPLIT_MEMORY']) Module.printErr('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting');
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
  
          var files = metadata.files;
          for (i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }
              Module['removeRunDependency']('datafile_game.data');

    };
    Module['addRunDependency']('datafile_game.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage({"files": [{"audio": 0, "start": 0, "crunched": 0, "end": 4506, "filename": "/perl.lua"}, {"audio": 0, "start": 4506, "crunched": 0, "end": 4649, "filename": "/conf.lua"}, {"audio": 0, "start": 4649, "crunched": 0, "end": 5383, "filename": "/main.lua"}, {"audio": 0, "start": 5383, "crunched": 0, "end": 7462, "filename": "/map_assets.lua"}, {"audio": 0, "start": 7462, "crunched": 0, "end": 78134, "filename": "/credits.png"}, {"audio": 0, "start": 78134, "crunched": 0, "end": 79249, "filename": "/map_data.lua"}, {"audio": 0, "start": 79249, "crunched": 0, "end": 85122, "filename": "/map_model.lua"}, {"audio": 0, "start": 85122, "crunched": 0, "end": 85163, "filename": "/.git/ORIG_HEAD"}, {"audio": 0, "start": 85163, "crunched": 0, "end": 85186, "filename": "/.git/HEAD"}, {"audio": 0, "start": 85186, "crunched": 0, "end": 85282, "filename": "/.git/FETCH_HEAD"}, {"audio": 0, "start": 85282, "crunched": 0, "end": 85545, "filename": "/.git/config"}, {"audio": 0, "start": 85545, "crunched": 0, "end": 85883, "filename": "/.git/COMMIT_EDITMSG"}, {"audio": 0, "start": 85883, "crunched": 0, "end": 85956, "filename": "/.git/description"}, {"audio": 0, "start": 85956, "crunched": 0, "end": 89025, "filename": "/.git/index"}, {"audio": 0, "start": 89025, "crunched": 0, "end": 89066, "filename": "/.git/refs/remotes/origin/master"}, {"audio": 0, "start": 89066, "crunched": 0, "end": 89107, "filename": "/.git/refs/heads/master"}, {"audio": 0, "start": 89107, "crunched": 0, "end": 92434, "filename": "/.git/hooks/fsmonitor-watchman.sample"}, {"audio": 0, "start": 92434, "crunched": 0, "end": 92912, "filename": "/.git/hooks/applypatch-msg.sample"}, {"audio": 0, "start": 92912, "crunched": 0, "end": 96522, "filename": "/.git/hooks/update.sample"}, {"audio": 0, "start": 96522, "crunched": 0, "end": 98164, "filename": "/.git/hooks/pre-commit.sample"}, {"audio": 0, "start": 98164, "crunched": 0, "end": 98588, "filename": "/.git/hooks/pre-applypatch.sample"}, {"audio": 0, "start": 98588, "crunched": 0, "end": 100080, "filename": "/.git/hooks/prepare-commit-msg.sample"}, {"audio": 0, "start": 100080, "crunched": 0, "end": 100976, "filename": "/.git/hooks/commit-msg.sample"}, {"audio": 0, "start": 100976, "crunched": 0, "end": 105874, "filename": "/.git/hooks/pre-rebase.sample"}, {"audio": 0, "start": 105874, "crunched": 0, "end": 106063, "filename": "/.git/hooks/post-update.sample"}, {"audio": 0, "start": 106063, "crunched": 0, "end": 106607, "filename": "/.git/hooks/pre-receive.sample"}, {"audio": 0, "start": 106607, "crunched": 0, "end": 107955, "filename": "/.git/hooks/pre-push.sample"}, {"audio": 0, "start": 107955, "crunched": 0, "end": 108104, "filename": "/.git/objects/20/335e2c2379c5c1773ece596cd14506407daff4"}, {"audio": 0, "start": 108104, "crunched": 0, "end": 108371, "filename": "/.git/objects/c6/53c7d351fa2d0e65e20c3dc16b7db5f8bcf9da"}, {"audio": 0, "start": 108371, "crunched": 0, "end": 109556, "filename": "/.git/objects/c6/acdd8ddaf88550854209160090aa8c53dd6db1"}, {"audio": 0, "start": 109556, "crunched": 0, "end": 109990, "filename": "/.git/objects/33/7929fb77239d5b3ef562013a2a047db6824375"}, {"audio": 0, "start": 109990, "crunched": 0, "end": 110289, "filename": "/.git/objects/86/6846eb5fac4742588737e2257fd99a02706b03"}, {"audio": 0, "start": 110289, "crunched": 0, "end": 111462, "filename": "/.git/objects/cf/25f2f4b313cc53b6da0ad1caad0859058d471c"}, {"audio": 0, "start": 111462, "crunched": 0, "end": 112485, "filename": "/.git/objects/d0/e97f765fb497467edd34dedd548018f6839eed"}, {"audio": 0, "start": 112485, "crunched": 0, "end": 112867, "filename": "/.git/objects/d1/abf28111e2a34221f27ebb57f4e2b0f31f8677"}, {"audio": 0, "start": 112867, "crunched": 0, "end": 113133, "filename": "/.git/objects/78/8698e35c29ae1729eac4cf04d1eae258f373e0"}, {"audio": 0, "start": 113133, "crunched": 0, "end": 116802, "filename": "/.git/objects/02/4fb0450b87bc55235cb3749bb0c81cea5b65af"}, {"audio": 0, "start": 116802, "crunched": 0, "end": 119003, "filename": "/.git/objects/ab/c55cbe9ecab7d7f24c11b43b9a384d5db63ead"}, {"audio": 0, "start": 119003, "crunched": 0, "end": 119206, "filename": "/.git/objects/ab/6c5894fccab2b94901a75dc7bcb3d1cb4ab10c"}, {"audio": 0, "start": 119206, "crunched": 0, "end": 121451, "filename": "/.git/objects/ab/6589dfc9ac3c9e67b071f86def7e1af3caaafe"}, {"audio": 0, "start": 121451, "crunched": 0, "end": 121750, "filename": "/.git/objects/b0/2cbdf44b267ec3044d2275465896a7349c8d6e"}, {"audio": 0, "start": 121750, "crunched": 0, "end": 121963, "filename": "/.git/objects/0a/1a7afd99ca471e79cf24fbe06d9df2a0cb2a68"}, {"audio": 0, "start": 121963, "crunched": 0, "end": 123328, "filename": "/.git/objects/0a/d290a0f9837f81602e9ebb82190e6b850b3e74"}, {"audio": 0, "start": 123328, "crunched": 0, "end": 123562, "filename": "/.git/objects/9c/7657bb0ceb592e7d20c4a78285f7b3461d358b"}, {"audio": 0, "start": 123562, "crunched": 0, "end": 125843, "filename": "/.git/objects/14/da68426af67b8674eb2636c6aa0f674fc3033d"}, {"audio": 0, "start": 125843, "crunched": 0, "end": 126117, "filename": "/.git/objects/a6/fa495b31a98ae81879fc36274f591f6c72521e"}, {"audio": 0, "start": 126117, "crunched": 0, "end": 126416, "filename": "/.git/objects/a6/827a9f9ca809748f7df11a06a4291f283a7d0b"}, {"audio": 0, "start": 126416, "crunched": 0, "end": 128296, "filename": "/.git/objects/23/0e397f0f4c4975ea9ca8bb04f2a0d5a8470f4c"}, {"audio": 0, "start": 128296, "crunched": 0, "end": 128518, "filename": "/.git/objects/08/40014e84d3450adf0dbcf7a3453761bf684e2a"}, {"audio": 0, "start": 128518, "crunched": 0, "end": 128680, "filename": "/.git/objects/08/6da989a6ecb2774e8240b412bd28bac36a63bc"}, {"audio": 0, "start": 128680, "crunched": 0, "end": 128812, "filename": "/.git/objects/9a/c5b48aa4d6377a662361c00e7246aee6f06320"}, {"audio": 0, "start": 128812, "crunched": 0, "end": 129078, "filename": "/.git/objects/a7/9bb2f77bc762f4be9cb683923ae98df12f36c6"}, {"audio": 0, "start": 129078, "crunched": 0, "end": 129467, "filename": "/.git/objects/db/4ccf06bee22992be5254f4d3256cf584846f44"}, {"audio": 0, "start": 129467, "crunched": 0, "end": 163110, "filename": "/.git/objects/db/4e52b55baf7921976c236b3a4a58124d721485"}, {"audio": 0, "start": 163110, "crunched": 0, "end": 164469, "filename": "/.git/objects/1a/3b1fab342a4e851ef1ccb33bff91a78398d97b"}, {"audio": 0, "start": 164469, "crunched": 0, "end": 166061, "filename": "/.git/objects/29/19becbc08b9c04a735f8507eeb18f1ca69ce80"}, {"audio": 0, "start": 166061, "crunched": 0, "end": 166418, "filename": "/.git/objects/98/e1149af1011c2be3ae78900587a4b535f02cbd"}, {"audio": 0, "start": 166418, "crunched": 0, "end": 166718, "filename": "/.git/objects/f7/d08fdcda5880f0215748ba11bec0d721d3d679"}, {"audio": 0, "start": 166718, "crunched": 0, "end": 166849, "filename": "/.git/objects/f7/f507d4fe1cfbc787da996b9ed7ffa63739614f"}, {"audio": 0, "start": 166849, "crunched": 0, "end": 167086, "filename": "/.git/objects/6c/7119a42556c5a943525a6f47887b39967e48f3"}, {"audio": 0, "start": 167086, "crunched": 0, "end": 167844, "filename": "/.git/objects/6c/bcf7cb872a3447eb3c379312a11ea27e4b6927"}, {"audio": 0, "start": 167844, "crunched": 0, "end": 171113, "filename": "/.git/objects/3e/15d1c760fb64c460882b741c73055bfe76aaf5"}, {"audio": 0, "start": 171113, "crunched": 0, "end": 171201, "filename": "/.git/objects/61/48edaaa5855dcb7ff904ee0224251dfc469bc1"}, {"audio": 0, "start": 171201, "crunched": 0, "end": 171320, "filename": "/.git/objects/aa/11db235888e1eb6616ee397582a3bbb009233c"}, {"audio": 0, "start": 171320, "crunched": 0, "end": 172619, "filename": "/.git/objects/aa/e8d0c33207d5ee530057563a3352466c255e42"}, {"audio": 0, "start": 172619, "crunched": 0, "end": 172918, "filename": "/.git/objects/06/979d4b0e0739c10f22e8b07e7a1378fbd2044a"}, {"audio": 0, "start": 172918, "crunched": 0, "end": 174526, "filename": "/.git/objects/b9/1ab4146b3bade7765babfb862f082b40269715"}, {"audio": 0, "start": 174526, "crunched": 0, "end": 175476, "filename": "/.git/objects/d5/a43f62bd5b74e152bd566d04298b714427bc2c"}, {"audio": 0, "start": 175476, "crunched": 0, "end": 175694, "filename": "/.git/objects/17/157f97908e34068184dfe04afcdf967bf750e6"}, {"audio": 0, "start": 175694, "crunched": 0, "end": 177137, "filename": "/.git/objects/d7/8f37dc72aa806feb801e0ec84bd4042ca80563"}, {"audio": 0, "start": 177137, "crunched": 0, "end": 177345, "filename": "/.git/objects/2d/6323d523c9ed42e9e48239c8b01c66804901a0"}, {"audio": 0, "start": 177345, "crunched": 0, "end": 177794, "filename": "/.git/objects/2d/1314dd029601bcdcc0bfec7eb7c52e0683376a"}, {"audio": 0, "start": 177794, "crunched": 0, "end": 177916, "filename": "/.git/objects/e6/14702e47b7335bc2def8a8cef642f6dd573064"}, {"audio": 0, "start": 177916, "crunched": 0, "end": 178036, "filename": "/.git/objects/e6/bffe4586b889620de566988afd5f8a778066aa"}, {"audio": 0, "start": 178036, "crunched": 0, "end": 178583, "filename": "/.git/objects/3a/8b25c253420b54abed1a72fc13e525fb515fa6"}, {"audio": 0, "start": 178583, "crunched": 0, "end": 178914, "filename": "/.git/objects/3a/292774d5c94d607ff8096ea5effd04baecdf36"}, {"audio": 0, "start": 178914, "crunched": 0, "end": 179100, "filename": "/.git/objects/80/e192cbe9b9eda8a629d994b6618e13efa5cddc"}, {"audio": 0, "start": 179100, "crunched": 0, "end": 237363, "filename": "/.git/objects/80/564f24c377ce8f832b6e41be379aedd5228003"}, {"audio": 0, "start": 237363, "crunched": 0, "end": 238337, "filename": "/.git/objects/2e/19f4d02df8460790dcf15f285b483fe87b9cd0"}, {"audio": 0, "start": 238337, "crunched": 0, "end": 238651, "filename": "/.git/objects/0e/4948611ba9cb7dd0b1e3fbc89d49fe3ddd09c9"}, {"audio": 0, "start": 238651, "crunched": 0, "end": 238946, "filename": "/.git/objects/0e/fdb27978b71f1c88d69074225f6ca05556a7c3"}, {"audio": 0, "start": 238946, "crunched": 0, "end": 239105, "filename": "/.git/objects/0e/956537353212e4570e5c68e25d201f8d3eba01"}, {"audio": 0, "start": 239105, "crunched": 0, "end": 240106, "filename": "/.git/objects/91/be83df807e0d058870fc4f6ee90b9f2f6ff61a"}, {"audio": 0, "start": 240106, "crunched": 0, "end": 241882, "filename": "/.git/objects/59/ed8a631119f30e8d72782e36a320a009b472a7"}, {"audio": 0, "start": 241882, "crunched": 0, "end": 243696, "filename": "/.git/objects/4e/ad2134e7b529f3e1982fbea5418a64ee6fd0c4"}, {"audio": 0, "start": 243696, "crunched": 0, "end": 243927, "filename": "/.git/objects/93/9e50c0eb9abd331ef8f3f9e043d0e55ad30c3a"}, {"audio": 0, "start": 243927, "crunched": 0, "end": 244170, "filename": "/.git/objects/e0/b9c4340173f218c05665aa6290aa1c79873165"}, {"audio": 0, "start": 244170, "crunched": 0, "end": 245757, "filename": "/.git/objects/a1/f2941e6c5ddd9cc88c86218c68460217fdb696"}, {"audio": 0, "start": 245757, "crunched": 0, "end": 245932, "filename": "/.git/objects/e9/220d103c3a6a973047763f78502e3aba1d6136"}, {"audio": 0, "start": 245932, "crunched": 0, "end": 246241, "filename": "/.git/objects/8f/eed0e90dbf054f8349d71ce7cb880c380a011b"}, {"audio": 0, "start": 246241, "crunched": 0, "end": 247245, "filename": "/.git/objects/8f/c196b192c3653f48dbbb896921d83b66d58b63"}, {"audio": 0, "start": 247245, "crunched": 0, "end": 248431, "filename": "/.git/objects/e1/8da91ec7fb738991a710ecbe6c097bbe05eb35"}, {"audio": 0, "start": 248431, "crunched": 0, "end": 248597, "filename": "/.git/objects/46/990d83cfffe8d1459848a4222ae6881b12a9ea"}, {"audio": 0, "start": 248597, "crunched": 0, "end": 249573, "filename": "/.git/objects/a0/a848bed8978c7ad2265e8957f6f95a3ae37246"}, {"audio": 0, "start": 249573, "crunched": 0, "end": 250818, "filename": "/.git/objects/b5/465f5df022f210f4ddfbcf324221a0b1e2eff1"}, {"audio": 0, "start": 250818, "crunched": 0, "end": 290695, "filename": "/.git/objects/7a/585ac666b38e6debbbbd2b87ca49a48176b839"}, {"audio": 0, "start": 290695, "crunched": 0, "end": 290855, "filename": "/.git/objects/8d/7e02dc62b9caad06190313616506541e94e448"}, {"audio": 0, "start": 290855, "crunched": 0, "end": 291116, "filename": "/.git/objects/d4/6cc8d6f483b45859ebe3c6a3da8d5bd435991f"}, {"audio": 0, "start": 291116, "crunched": 0, "end": 292986, "filename": "/.git/objects/52/384a16b24ee54716d0cd9931fd9f71af2e64e0"}, {"audio": 0, "start": 292986, "crunched": 0, "end": 293146, "filename": "/.git/objects/79/ae4fed8b5e1895d064d7efbe33ac15c9a04464"}, {"audio": 0, "start": 293146, "crunched": 0, "end": 294211, "filename": "/.git/objects/9b/887f33a3b582d1e12bbcb4f663ce464a435604"}, {"audio": 0, "start": 294211, "crunched": 0, "end": 294477, "filename": "/.git/objects/03/fbbaf4ebf260574424b7c4456cab3a174c5610"}, {"audio": 0, "start": 294477, "crunched": 0, "end": 294716, "filename": "/.git/objects/ad/74f6d0bbd3131af0fbd855c5f53219bdb29cd1"}, {"audio": 0, "start": 294716, "crunched": 0, "end": 296118, "filename": "/.git/objects/57/abe81ece4013c0aec1768841023c0761839514"}, {"audio": 0, "start": 296118, "crunched": 0, "end": 296417, "filename": "/.git/objects/68/5da19c5130f0efc8ca7f0e2f9ff89c30fc31a3"}, {"audio": 0, "start": 296417, "crunched": 0, "end": 296575, "filename": "/.git/objects/7d/34ccda9ceec813e50a068ddd2a25fe6fb85cc9"}, {"audio": 0, "start": 296575, "crunched": 0, "end": 296729, "filename": "/.git/objects/bc/0342a5ad9cb6766668286a62792957bd390612"}, {"audio": 0, "start": 296729, "crunched": 0, "end": 297759, "filename": "/.git/objects/76/521d272f3451d2bdbbac2dc538591fd22e9995"}, {"audio": 0, "start": 297759, "crunched": 0, "end": 297995, "filename": "/.git/objects/76/16c69f488431cfcc100d776e0161c8c59dc33c"}, {"audio": 0, "start": 297995, "crunched": 0, "end": 299794, "filename": "/.git/objects/e7/ff53d5764eca86ff126863259e1fe72df761d5"}, {"audio": 0, "start": 299794, "crunched": 0, "end": 300108, "filename": "/.git/objects/e7/c6247c7d040314e81826268a65fa567ac1d76a"}, {"audio": 0, "start": 300108, "crunched": 0, "end": 305353, "filename": "/.git/objects/b2/2d92c695a29bbf15a6d135bdeb4bb08b71271d"}, {"audio": 0, "start": 305353, "crunched": 0, "end": 306114, "filename": "/.git/objects/b2/66e59bbb17f28fe53ba79ba40cf521aa46e84e"}, {"audio": 0, "start": 306114, "crunched": 0, "end": 306249, "filename": "/.git/objects/b2/49e54bd3328427f6ae8061ab493750ec7fbee6"}, {"audio": 0, "start": 306249, "crunched": 0, "end": 307608, "filename": "/.git/objects/b2/517996205d54d4bec73962583bc1dd6f9981f7"}, {"audio": 0, "start": 307608, "crunched": 0, "end": 309070, "filename": "/.git/objects/7b/0065e59ae3e0c09d10d682db0904f8248d7472"}, {"audio": 0, "start": 309070, "crunched": 0, "end": 309428, "filename": "/.git/objects/dd/53d1be5f3c6a7ca9671c3461f376c5b1ade073"}, {"audio": 0, "start": 309428, "crunched": 0, "end": 309733, "filename": "/.git/objects/dd/bb2fba520ed20c77b99b69bb2e97b678932203"}, {"audio": 0, "start": 309733, "crunched": 0, "end": 309908, "filename": "/.git/objects/dd/cf8b09e0bff3dce0a979daaf94dd6fc0100fae"}, {"audio": 0, "start": 309908, "crunched": 0, "end": 310086, "filename": "/.git/objects/dd/303fa9a3c502b2cda86558ca2a468169306a60"}, {"audio": 0, "start": 310086, "crunched": 0, "end": 310688, "filename": "/.git/objects/16/829f68887ef7e4f9e605da3714cee6f78f7ac5"}, {"audio": 0, "start": 310688, "crunched": 0, "end": 311039, "filename": "/.git/objects/81/5f50d1aeaceb5092c43517416bdc67f97aad4f"}, {"audio": 0, "start": 311039, "crunched": 0, "end": 311391, "filename": "/.git/objects/81/68b64caaec99ec22e20cf34754eac45b540576"}, {"audio": 0, "start": 311391, "crunched": 0, "end": 311597, "filename": "/.git/objects/12/9bf7604bf3e60821ef173fe0b922eda9da3f71"}, {"audio": 0, "start": 311597, "crunched": 0, "end": 313425, "filename": "/.git/objects/fe/7191924e4ff07a77f7bd9bb3c3da69d05d1813"}, {"audio": 0, "start": 313425, "crunched": 0, "end": 313564, "filename": "/.git/objects/0b/ad119ee02374d493eef07d5a11373ed7cac182"}, {"audio": 0, "start": 313564, "crunched": 0, "end": 315357, "filename": "/.git/objects/13/f1fdd6718b799bf2e019bdaa36df66feaed383"}, {"audio": 0, "start": 315357, "crunched": 0, "end": 369361, "filename": "/.git/objects/e5/c867014a10d34398e0c662f98c4d9f4c45ad83"}, {"audio": 0, "start": 369361, "crunched": 0, "end": 369511, "filename": "/.git/objects/c7/e6328a54c2bb35c6838dadedda2c1096bb03b4"}, {"audio": 0, "start": 369511, "crunched": 0, "end": 370918, "filename": "/.git/objects/c7/45636f86f9f82c980da9171531318dc8d24d25"}, {"audio": 0, "start": 370918, "crunched": 0, "end": 371435, "filename": "/.git/objects/4a/7b2dd265abc80921dc44ad6e886edf8fdd52e7"}, {"audio": 0, "start": 371435, "crunched": 0, "end": 434999, "filename": "/.git/objects/56/06664aa2ac8eb63f6bf98134f9fcdcaf8af803"}, {"audio": 0, "start": 434999, "crunched": 0, "end": 435145, "filename": "/.git/objects/07/2197879bcc6fb2bd438b10edd4457ac9a1608b"}, {"audio": 0, "start": 435145, "crunched": 0, "end": 435490, "filename": "/.git/objects/15/21eab90b9e31281ac8cb0441bfd8358a1de712"}, {"audio": 0, "start": 435490, "crunched": 0, "end": 435756, "filename": "/.git/objects/fd/72685106947d3ce55b185b93991fb8aa238c16"}, {"audio": 0, "start": 435756, "crunched": 0, "end": 435916, "filename": "/.git/objects/11/f19f2bef3393d379f1a01cf071939d90a738fc"}, {"audio": 0, "start": 435916, "crunched": 0, "end": 436185, "filename": "/.git/objects/88/49fbdd023533ec324ffa0e3f06aeb24a0d801f"}, {"audio": 0, "start": 436185, "crunched": 0, "end": 437667, "filename": "/.git/objects/99/2012f76c2c260596e54484be60fd83e95c7d9e"}, {"audio": 0, "start": 437667, "crunched": 0, "end": 438739, "filename": "/.git/objects/8b/db5bc395530632191b7fc81a5437504b9c62d3"}, {"audio": 0, "start": 438739, "crunched": 0, "end": 439216, "filename": "/.git/objects/48/0799f02909ffb158849da97b0b883d46cd4dcf"}, {"audio": 0, "start": 439216, "crunched": 0, "end": 439704, "filename": "/.git/objects/48/1b586553aee1d18c78411c0edc5785e8760955"}, {"audio": 0, "start": 439704, "crunched": 0, "end": 439969, "filename": "/.git/objects/48/6eeb51fb0f8cb0545ad380c9c150fcb222ef2a"}, {"audio": 0, "start": 439969, "crunched": 0, "end": 440094, "filename": "/.git/objects/4f/cca86f701c01595c40cecb3ed0fc54745b83de"}, {"audio": 0, "start": 440094, "crunched": 0, "end": 440359, "filename": "/.git/objects/e8/c073c0b4f79eba2abc870e719a302346fa1165"}, {"audio": 0, "start": 440359, "crunched": 0, "end": 440482, "filename": "/.git/objects/eb/28cb9fd9fac5c63ce1a0e57cab903dc7ba5130"}, {"audio": 0, "start": 440482, "crunched": 0, "end": 441382, "filename": "/.git/objects/51/6ef27414ccb84f9ba4d50705a3d27d3982fd4e"}, {"audio": 0, "start": 441382, "crunched": 0, "end": 442496, "filename": "/.git/objects/30/b80545c367c9f510ffbaa267661ded5fcca7b3"}, {"audio": 0, "start": 442496, "crunched": 0, "end": 442856, "filename": "/.git/objects/87/d57759622177df1427e1c89863af594a7bff17"}, {"audio": 0, "start": 442856, "crunched": 0, "end": 443125, "filename": "/.git/objects/96/5b4e9a6d10c0797235b447767abb313e01f966"}, {"audio": 0, "start": 443125, "crunched": 0, "end": 444895, "filename": "/.git/objects/54/aedeaf7b5b331abce33e482b2364ba44c40a9c"}, {"audio": 0, "start": 444895, "crunched": 0, "end": 445162, "filename": "/.git/objects/22/eed3235f35a95d1ccd28c103bee0e15dbca35f"}, {"audio": 0, "start": 445162, "crunched": 0, "end": 446589, "filename": "/.git/objects/bf/76a8bc2d5a1399249ba85fff00a210990888a7"}, {"audio": 0, "start": 446589, "crunched": 0, "end": 523522, "filename": "/.git/objects/95/85ba88dbc24c2a3e8fe716687083e9ac64b094"}, {"audio": 0, "start": 523522, "crunched": 0, "end": 524788, "filename": "/.git/objects/ce/aa511e85ea088df42dda4d2e420951ffe93197"}, {"audio": 0, "start": 524788, "crunched": 0, "end": 525253, "filename": "/.git/objects/2b/421811795bb1aa25de937e6e6f305246a8743c"}, {"audio": 0, "start": 525253, "crunched": 0, "end": 525542, "filename": "/.git/objects/3c/1adcf4d65cfd1410b9f8029486847546ddf22e"}, {"audio": 0, "start": 525542, "crunched": 0, "end": 527403, "filename": "/.git/objects/ba/d78bb1246e9d138080f7744a4826fa680d1082"}, {"audio": 0, "start": 527403, "crunched": 0, "end": 527588, "filename": "/.git/objects/b4/228bb996220270d171e81b55acdee2e1c20a9b"}, {"audio": 0, "start": 527588, "crunched": 0, "end": 527839, "filename": "/.git/objects/6a/b8a91ca670ebc03307a7d4685b353e41309e49"}, {"audio": 0, "start": 527839, "crunched": 0, "end": 528020, "filename": "/.git/objects/c1/94411ae9d729ec5a4b8f7ea02bbf86bbd0a6f2"}, {"audio": 0, "start": 528020, "crunched": 0, "end": 528259, "filename": "/.git/objects/9e/22103abfc19ff92cd8ae51edc9e43fd254f987"}, {"audio": 0, "start": 528259, "crunched": 0, "end": 528427, "filename": "/.git/objects/9e/9dfea3251f312c70a2781ea4b1f1c2d1f0bee1"}, {"audio": 0, "start": 528427, "crunched": 0, "end": 529351, "filename": "/.git/objects/9e/324b397e9e92a44c2c8e0c14dcbb7fb80724a6"}, {"audio": 0, "start": 529351, "crunched": 0, "end": 529764, "filename": "/.git/objects/71/d55defb6cf6edcc06724f1264d7afe42489e20"}, {"audio": 0, "start": 529764, "crunched": 0, "end": 531784, "filename": "/.git/objects/71/b2718cb05da4ca7ef12e5ecf7e9e4848fab035"}, {"audio": 0, "start": 531784, "crunched": 0, "end": 533105, "filename": "/.git/objects/63/b55aa2872341b58a999e8f8661c0653c7ec753"}, {"audio": 0, "start": 533105, "crunched": 0, "end": 533255, "filename": "/.git/objects/63/baa69d2becd18470818801a87971d6f817f551"}, {"audio": 0, "start": 533255, "crunched": 0, "end": 533492, "filename": "/.git/objects/63/f176a4bd4c04df147a16be751795eeef7f82b7"}, {"audio": 0, "start": 533492, "crunched": 0, "end": 533753, "filename": "/.git/objects/c2/f227dfbdc61675e1701b5430ef049e5077a37a"}, {"audio": 0, "start": 533753, "crunched": 0, "end": 534019, "filename": "/.git/objects/90/bb0cfb01875480c3868f22394b41f89b7b11dd"}, {"audio": 0, "start": 534019, "crunched": 0, "end": 535996, "filename": "/.git/objects/90/55215f1800092a16bdacb7e102c37636268271"}, {"audio": 0, "start": 535996, "crunched": 0, "end": 536313, "filename": "/.git/objects/90/d4d49e6fcd8680d59f9027635149f2b2b878c2"}, {"audio": 0, "start": 536313, "crunched": 0, "end": 536328, "filename": "/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904"}, {"audio": 0, "start": 536328, "crunched": 0, "end": 536509, "filename": "/.git/objects/41/785de25e5d01b1a0b88ef9bba7280fe97676f9"}, {"audio": 0, "start": 536509, "crunched": 0, "end": 536684, "filename": "/.git/objects/3d/2b8ff1b49664831a0a70919d4783653751028d"}, {"audio": 0, "start": 536684, "crunched": 0, "end": 536806, "filename": "/.git/objects/d3/ed0b64d250d364b881fd5b91b7a04677aedcbf"}, {"audio": 0, "start": 536806, "crunched": 0, "end": 536970, "filename": "/.git/objects/97/fe25c6afdf3582e157442dd1d5c36964670529"}, {"audio": 0, "start": 536970, "crunched": 0, "end": 537397, "filename": "/.git/objects/21/216b620ef3c04241db69229d2971a045b0d113"}, {"audio": 0, "start": 537397, "crunched": 0, "end": 537517, "filename": "/.git/objects/21/c81b0e8b9d62471fbab3e53e7c3028e8929cde"}, {"audio": 0, "start": 537517, "crunched": 0, "end": 537838, "filename": "/.git/objects/f9/f4e844fa8cd3e07b29a4a11202061573017b62"}, {"audio": 0, "start": 537838, "crunched": 0, "end": 538076, "filename": "/.git/objects/62/88c7869d6ec863b6e0db7a1e78a594b3ebd2b1"}, {"audio": 0, "start": 538076, "crunched": 0, "end": 538284, "filename": "/.git/objects/d2/bf614cbfc6874fd29fd159744b7f93bb673bfe"}, {"audio": 0, "start": 538284, "crunched": 0, "end": 538451, "filename": "/.git/objects/d2/10d908b7f1040de74c3bf0feddd7ed3b35cd41"}, {"audio": 0, "start": 538451, "crunched": 0, "end": 538627, "filename": "/.git/objects/49/6dfffe47d82f5fe3b076f347716a0be19d79f3"}, {"audio": 0, "start": 538627, "crunched": 0, "end": 538781, "filename": "/.git/objects/fc/689d01dabfc038d1a69117ea7b0c4006af0670"}, {"audio": 0, "start": 538781, "crunched": 0, "end": 538952, "filename": "/.git/objects/cc/339283e2d44c9738ee5528a21c777e78f54e46"}, {"audio": 0, "start": 538952, "crunched": 0, "end": 541844, "filename": "/.git/objects/cc/ef1d61795af70494bd8460b595419f2d697f5c"}, {"audio": 0, "start": 541844, "crunched": 0, "end": 542049, "filename": "/.git/objects/cc/29a3f0098621f29be2dc28871c0e5ac853f66f"}, {"audio": 0, "start": 542049, "crunched": 0, "end": 542355, "filename": "/.git/objects/f2/212a746b93a60cbff75d1d98375d3b552dec77"}, {"audio": 0, "start": 542355, "crunched": 0, "end": 542686, "filename": "/.git/objects/f2/6d7c0fecb03e4bfc35da63435341e357ab0058"}, {"audio": 0, "start": 542686, "crunched": 0, "end": 544210, "filename": "/.git/objects/34/339a85fcd5c4a75aa14d45db788d5125f021db"}, {"audio": 0, "start": 544210, "crunched": 0, "end": 544605, "filename": "/.git/objects/c0/70c8fe7196a154b2a3a50f432699952808a399"}, {"audio": 0, "start": 544605, "crunched": 0, "end": 546574, "filename": "/.git/objects/b7/79cd3851bbe31d1c4743ed2da403c6f78c8ae2"}, {"audio": 0, "start": 546574, "crunched": 0, "end": 546814, "filename": "/.git/info/exclude"}, {"audio": 0, "start": 546814, "crunched": 0, "end": 550483, "filename": "/.git/logs/HEAD"}, {"audio": 0, "start": 550483, "crunched": 0, "end": 553255, "filename": "/.git/logs/refs/remotes/origin/master"}, {"audio": 0, "start": 553255, "crunched": 0, "end": 556779, "filename": "/.git/logs/refs/heads/master"}, {"audio": 0, "start": 556779, "crunched": 0, "end": 558024, "filename": "/assets/ground_s.png"}, {"audio": 1, "start": 558024, "crunched": 0, "end": 593479, "filename": "/assets/1.ogg"}, {"audio": 0, "start": 593479, "crunched": 0, "end": 594463, "filename": "/assets/rock_2.png"}, {"audio": 0, "start": 594463, "crunched": 0, "end": 595849, "filename": "/assets/ground_sw.png"}, {"audio": 0, "start": 595849, "crunched": 0, "end": 596893, "filename": "/assets/ground.png"}, {"audio": 0, "start": 596893, "crunched": 0, "end": 600541, "filename": "/assets/statue.png"}, {"audio": 0, "start": 600541, "crunched": 0, "end": 601550, "filename": "/assets/rock_3.png"}, {"audio": 1, "start": 601550, "crunched": 0, "end": 680639, "filename": "/assets/3.ogg"}, {"audio": 0, "start": 680639, "crunched": 0, "end": 681863, "filename": "/assets/ground_w.png"}, {"audio": 0, "start": 681863, "crunched": 0, "end": 682844, "filename": "/assets/plant.png"}, {"audio": 0, "start": 682844, "crunched": 0, "end": 684599, "filename": "/assets/player_pointer.png"}, {"audio": 0, "start": 684599, "crunched": 0, "end": 686102, "filename": "/assets/rock_1.png"}, {"audio": 0, "start": 686102, "crunched": 0, "end": 687563, "filename": "/assets/portal.png"}, {"audio": 1, "start": 687563, "crunched": 0, "end": 729260, "filename": "/assets/2.ogg"}, {"audio": 1, "start": 729260, "crunched": 0, "end": 785205, "filename": "/assets/4.ogg"}, {"audio": 1, "start": 785205, "crunched": 0, "end": 845538, "filename": "/assets/5.ogg"}, {"audio": 0, "start": 845538, "crunched": 0, "end": 850044, "filename": "/bcgj-20/perl.lua"}, {"audio": 0, "start": 850044, "crunched": 0, "end": 850187, "filename": "/bcgj-20/conf.lua"}, {"audio": 0, "start": 850187, "crunched": 0, "end": 850921, "filename": "/bcgj-20/main.lua"}, {"audio": 0, "start": 850921, "crunched": 0, "end": 852489, "filename": "/bcgj-20/map_assets.lua"}, {"audio": 0, "start": 852489, "crunched": 0, "end": 923161, "filename": "/bcgj-20/credits.png"}, {"audio": 0, "start": 923161, "crunched": 0, "end": 924276, "filename": "/bcgj-20/map_data.lua"}, {"audio": 0, "start": 924276, "crunched": 0, "end": 930949, "filename": "/bcgj-20/map_model.lua"}, {"audio": 0, "start": 930949, "crunched": 0, "end": 930990, "filename": "/bcgj-20/.git/ORIG_HEAD"}, {"audio": 0, "start": 930990, "crunched": 0, "end": 931013, "filename": "/bcgj-20/.git/HEAD"}, {"audio": 0, "start": 931013, "crunched": 0, "end": 931109, "filename": "/bcgj-20/.git/FETCH_HEAD"}, {"audio": 0, "start": 931109, "crunched": 0, "end": 931372, "filename": "/bcgj-20/.git/config"}, {"audio": 0, "start": 931372, "crunched": 0, "end": 931710, "filename": "/bcgj-20/.git/COMMIT_EDITMSG"}, {"audio": 0, "start": 931710, "crunched": 0, "end": 931783, "filename": "/bcgj-20/.git/description"}, {"audio": 0, "start": 931783, "crunched": 0, "end": 934452, "filename": "/bcgj-20/.git/index"}, {"audio": 0, "start": 934452, "crunched": 0, "end": 934493, "filename": "/bcgj-20/.git/refs/remotes/origin/master"}, {"audio": 0, "start": 934493, "crunched": 0, "end": 934534, "filename": "/bcgj-20/.git/refs/heads/master"}, {"audio": 0, "start": 934534, "crunched": 0, "end": 937861, "filename": "/bcgj-20/.git/hooks/fsmonitor-watchman.sample"}, {"audio": 0, "start": 937861, "crunched": 0, "end": 938339, "filename": "/bcgj-20/.git/hooks/applypatch-msg.sample"}, {"audio": 0, "start": 938339, "crunched": 0, "end": 941949, "filename": "/bcgj-20/.git/hooks/update.sample"}, {"audio": 0, "start": 941949, "crunched": 0, "end": 943591, "filename": "/bcgj-20/.git/hooks/pre-commit.sample"}, {"audio": 0, "start": 943591, "crunched": 0, "end": 944015, "filename": "/bcgj-20/.git/hooks/pre-applypatch.sample"}, {"audio": 0, "start": 944015, "crunched": 0, "end": 945507, "filename": "/bcgj-20/.git/hooks/prepare-commit-msg.sample"}, {"audio": 0, "start": 945507, "crunched": 0, "end": 946403, "filename": "/bcgj-20/.git/hooks/commit-msg.sample"}, {"audio": 0, "start": 946403, "crunched": 0, "end": 951301, "filename": "/bcgj-20/.git/hooks/pre-rebase.sample"}, {"audio": 0, "start": 951301, "crunched": 0, "end": 951490, "filename": "/bcgj-20/.git/hooks/post-update.sample"}, {"audio": 0, "start": 951490, "crunched": 0, "end": 952034, "filename": "/bcgj-20/.git/hooks/pre-receive.sample"}, {"audio": 0, "start": 952034, "crunched": 0, "end": 953382, "filename": "/bcgj-20/.git/hooks/pre-push.sample"}, {"audio": 0, "start": 953382, "crunched": 0, "end": 953649, "filename": "/bcgj-20/.git/objects/c6/53c7d351fa2d0e65e20c3dc16b7db5f8bcf9da"}, {"audio": 0, "start": 953649, "crunched": 0, "end": 954834, "filename": "/bcgj-20/.git/objects/c6/acdd8ddaf88550854209160090aa8c53dd6db1"}, {"audio": 0, "start": 954834, "crunched": 0, "end": 955268, "filename": "/bcgj-20/.git/objects/33/7929fb77239d5b3ef562013a2a047db6824375"}, {"audio": 0, "start": 955268, "crunched": 0, "end": 955567, "filename": "/bcgj-20/.git/objects/86/6846eb5fac4742588737e2257fd99a02706b03"}, {"audio": 0, "start": 955567, "crunched": 0, "end": 956740, "filename": "/bcgj-20/.git/objects/cf/25f2f4b313cc53b6da0ad1caad0859058d471c"}, {"audio": 0, "start": 956740, "crunched": 0, "end": 957763, "filename": "/bcgj-20/.git/objects/d0/e97f765fb497467edd34dedd548018f6839eed"}, {"audio": 0, "start": 957763, "crunched": 0, "end": 958029, "filename": "/bcgj-20/.git/objects/78/8698e35c29ae1729eac4cf04d1eae258f373e0"}, {"audio": 0, "start": 958029, "crunched": 0, "end": 961698, "filename": "/bcgj-20/.git/objects/02/4fb0450b87bc55235cb3749bb0c81cea5b65af"}, {"audio": 0, "start": 961698, "crunched": 0, "end": 963899, "filename": "/bcgj-20/.git/objects/ab/c55cbe9ecab7d7f24c11b43b9a384d5db63ead"}, {"audio": 0, "start": 963899, "crunched": 0, "end": 964102, "filename": "/bcgj-20/.git/objects/ab/6c5894fccab2b94901a75dc7bcb3d1cb4ab10c"}, {"audio": 0, "start": 964102, "crunched": 0, "end": 966347, "filename": "/bcgj-20/.git/objects/ab/6589dfc9ac3c9e67b071f86def7e1af3caaafe"}, {"audio": 0, "start": 966347, "crunched": 0, "end": 966560, "filename": "/bcgj-20/.git/objects/0a/1a7afd99ca471e79cf24fbe06d9df2a0cb2a68"}, {"audio": 0, "start": 966560, "crunched": 0, "end": 967925, "filename": "/bcgj-20/.git/objects/0a/d290a0f9837f81602e9ebb82190e6b850b3e74"}, {"audio": 0, "start": 967925, "crunched": 0, "end": 968159, "filename": "/bcgj-20/.git/objects/9c/7657bb0ceb592e7d20c4a78285f7b3461d358b"}, {"audio": 0, "start": 968159, "crunched": 0, "end": 970440, "filename": "/bcgj-20/.git/objects/14/da68426af67b8674eb2636c6aa0f674fc3033d"}, {"audio": 0, "start": 970440, "crunched": 0, "end": 970714, "filename": "/bcgj-20/.git/objects/a6/fa495b31a98ae81879fc36274f591f6c72521e"}, {"audio": 0, "start": 970714, "crunched": 0, "end": 971013, "filename": "/bcgj-20/.git/objects/a6/827a9f9ca809748f7df11a06a4291f283a7d0b"}, {"audio": 0, "start": 971013, "crunched": 0, "end": 972893, "filename": "/bcgj-20/.git/objects/23/0e397f0f4c4975ea9ca8bb04f2a0d5a8470f4c"}, {"audio": 0, "start": 972893, "crunched": 0, "end": 973115, "filename": "/bcgj-20/.git/objects/08/40014e84d3450adf0dbcf7a3453761bf684e2a"}, {"audio": 0, "start": 973115, "crunched": 0, "end": 973277, "filename": "/bcgj-20/.git/objects/08/6da989a6ecb2774e8240b412bd28bac36a63bc"}, {"audio": 0, "start": 973277, "crunched": 0, "end": 973409, "filename": "/bcgj-20/.git/objects/9a/c5b48aa4d6377a662361c00e7246aee6f06320"}, {"audio": 0, "start": 973409, "crunched": 0, "end": 973675, "filename": "/bcgj-20/.git/objects/a7/9bb2f77bc762f4be9cb683923ae98df12f36c6"}, {"audio": 0, "start": 973675, "crunched": 0, "end": 974064, "filename": "/bcgj-20/.git/objects/db/4ccf06bee22992be5254f4d3256cf584846f44"}, {"audio": 0, "start": 974064, "crunched": 0, "end": 975423, "filename": "/bcgj-20/.git/objects/1a/3b1fab342a4e851ef1ccb33bff91a78398d97b"}, {"audio": 0, "start": 975423, "crunched": 0, "end": 977015, "filename": "/bcgj-20/.git/objects/29/19becbc08b9c04a735f8507eeb18f1ca69ce80"}, {"audio": 0, "start": 977015, "crunched": 0, "end": 977372, "filename": "/bcgj-20/.git/objects/98/e1149af1011c2be3ae78900587a4b535f02cbd"}, {"audio": 0, "start": 977372, "crunched": 0, "end": 977672, "filename": "/bcgj-20/.git/objects/f7/d08fdcda5880f0215748ba11bec0d721d3d679"}, {"audio": 0, "start": 977672, "crunched": 0, "end": 977803, "filename": "/bcgj-20/.git/objects/f7/f507d4fe1cfbc787da996b9ed7ffa63739614f"}, {"audio": 0, "start": 977803, "crunched": 0, "end": 978040, "filename": "/bcgj-20/.git/objects/6c/7119a42556c5a943525a6f47887b39967e48f3"}, {"audio": 0, "start": 978040, "crunched": 0, "end": 978798, "filename": "/bcgj-20/.git/objects/6c/bcf7cb872a3447eb3c379312a11ea27e4b6927"}, {"audio": 0, "start": 978798, "crunched": 0, "end": 982067, "filename": "/bcgj-20/.git/objects/3e/15d1c760fb64c460882b741c73055bfe76aaf5"}, {"audio": 0, "start": 982067, "crunched": 0, "end": 982155, "filename": "/bcgj-20/.git/objects/61/48edaaa5855dcb7ff904ee0224251dfc469bc1"}, {"audio": 0, "start": 982155, "crunched": 0, "end": 982274, "filename": "/bcgj-20/.git/objects/aa/11db235888e1eb6616ee397582a3bbb009233c"}, {"audio": 0, "start": 982274, "crunched": 0, "end": 983573, "filename": "/bcgj-20/.git/objects/aa/e8d0c33207d5ee530057563a3352466c255e42"}, {"audio": 0, "start": 983573, "crunched": 0, "end": 985181, "filename": "/bcgj-20/.git/objects/b9/1ab4146b3bade7765babfb862f082b40269715"}, {"audio": 0, "start": 985181, "crunched": 0, "end": 986131, "filename": "/bcgj-20/.git/objects/d5/a43f62bd5b74e152bd566d04298b714427bc2c"}, {"audio": 0, "start": 986131, "crunched": 0, "end": 986349, "filename": "/bcgj-20/.git/objects/17/157f97908e34068184dfe04afcdf967bf750e6"}, {"audio": 0, "start": 986349, "crunched": 0, "end": 987792, "filename": "/bcgj-20/.git/objects/d7/8f37dc72aa806feb801e0ec84bd4042ca80563"}, {"audio": 0, "start": 987792, "crunched": 0, "end": 988000, "filename": "/bcgj-20/.git/objects/2d/6323d523c9ed42e9e48239c8b01c66804901a0"}, {"audio": 0, "start": 988000, "crunched": 0, "end": 988449, "filename": "/bcgj-20/.git/objects/2d/1314dd029601bcdcc0bfec7eb7c52e0683376a"}, {"audio": 0, "start": 988449, "crunched": 0, "end": 988571, "filename": "/bcgj-20/.git/objects/e6/14702e47b7335bc2def8a8cef642f6dd573064"}, {"audio": 0, "start": 988571, "crunched": 0, "end": 988691, "filename": "/bcgj-20/.git/objects/e6/bffe4586b889620de566988afd5f8a778066aa"}, {"audio": 0, "start": 988691, "crunched": 0, "end": 989238, "filename": "/bcgj-20/.git/objects/3a/8b25c253420b54abed1a72fc13e525fb515fa6"}, {"audio": 0, "start": 989238, "crunched": 0, "end": 989569, "filename": "/bcgj-20/.git/objects/3a/292774d5c94d607ff8096ea5effd04baecdf36"}, {"audio": 0, "start": 989569, "crunched": 0, "end": 989755, "filename": "/bcgj-20/.git/objects/80/e192cbe9b9eda8a629d994b6618e13efa5cddc"}, {"audio": 0, "start": 989755, "crunched": 0, "end": 990729, "filename": "/bcgj-20/.git/objects/2e/19f4d02df8460790dcf15f285b483fe87b9cd0"}, {"audio": 0, "start": 990729, "crunched": 0, "end": 991043, "filename": "/bcgj-20/.git/objects/0e/4948611ba9cb7dd0b1e3fbc89d49fe3ddd09c9"}, {"audio": 0, "start": 991043, "crunched": 0, "end": 991338, "filename": "/bcgj-20/.git/objects/0e/fdb27978b71f1c88d69074225f6ca05556a7c3"}, {"audio": 0, "start": 991338, "crunched": 0, "end": 991497, "filename": "/bcgj-20/.git/objects/0e/956537353212e4570e5c68e25d201f8d3eba01"}, {"audio": 0, "start": 991497, "crunched": 0, "end": 992498, "filename": "/bcgj-20/.git/objects/91/be83df807e0d058870fc4f6ee90b9f2f6ff61a"}, {"audio": 0, "start": 992498, "crunched": 0, "end": 994274, "filename": "/bcgj-20/.git/objects/59/ed8a631119f30e8d72782e36a320a009b472a7"}, {"audio": 0, "start": 994274, "crunched": 0, "end": 996088, "filename": "/bcgj-20/.git/objects/4e/ad2134e7b529f3e1982fbea5418a64ee6fd0c4"}, {"audio": 0, "start": 996088, "crunched": 0, "end": 996319, "filename": "/bcgj-20/.git/objects/93/9e50c0eb9abd331ef8f3f9e043d0e55ad30c3a"}, {"audio": 0, "start": 996319, "crunched": 0, "end": 996562, "filename": "/bcgj-20/.git/objects/e0/b9c4340173f218c05665aa6290aa1c79873165"}, {"audio": 0, "start": 996562, "crunched": 0, "end": 998149, "filename": "/bcgj-20/.git/objects/a1/f2941e6c5ddd9cc88c86218c68460217fdb696"}, {"audio": 0, "start": 998149, "crunched": 0, "end": 998324, "filename": "/bcgj-20/.git/objects/e9/220d103c3a6a973047763f78502e3aba1d6136"}, {"audio": 0, "start": 998324, "crunched": 0, "end": 998633, "filename": "/bcgj-20/.git/objects/8f/eed0e90dbf054f8349d71ce7cb880c380a011b"}, {"audio": 0, "start": 998633, "crunched": 0, "end": 999637, "filename": "/bcgj-20/.git/objects/8f/c196b192c3653f48dbbb896921d83b66d58b63"}, {"audio": 0, "start": 999637, "crunched": 0, "end": 1000823, "filename": "/bcgj-20/.git/objects/e1/8da91ec7fb738991a710ecbe6c097bbe05eb35"}, {"audio": 0, "start": 1000823, "crunched": 0, "end": 1000989, "filename": "/bcgj-20/.git/objects/46/990d83cfffe8d1459848a4222ae6881b12a9ea"}, {"audio": 0, "start": 1000989, "crunched": 0, "end": 1001965, "filename": "/bcgj-20/.git/objects/a0/a848bed8978c7ad2265e8957f6f95a3ae37246"}, {"audio": 0, "start": 1001965, "crunched": 0, "end": 1003210, "filename": "/bcgj-20/.git/objects/b5/465f5df022f210f4ddfbcf324221a0b1e2eff1"}, {"audio": 0, "start": 1003210, "crunched": 0, "end": 1003370, "filename": "/bcgj-20/.git/objects/8d/7e02dc62b9caad06190313616506541e94e448"}, {"audio": 0, "start": 1003370, "crunched": 0, "end": 1003631, "filename": "/bcgj-20/.git/objects/d4/6cc8d6f483b45859ebe3c6a3da8d5bd435991f"}, {"audio": 0, "start": 1003631, "crunched": 0, "end": 1003791, "filename": "/bcgj-20/.git/objects/79/ae4fed8b5e1895d064d7efbe33ac15c9a04464"}, {"audio": 0, "start": 1003791, "crunched": 0, "end": 1004856, "filename": "/bcgj-20/.git/objects/9b/887f33a3b582d1e12bbcb4f663ce464a435604"}, {"audio": 0, "start": 1004856, "crunched": 0, "end": 1005122, "filename": "/bcgj-20/.git/objects/03/fbbaf4ebf260574424b7c4456cab3a174c5610"}, {"audio": 0, "start": 1005122, "crunched": 0, "end": 1005361, "filename": "/bcgj-20/.git/objects/ad/74f6d0bbd3131af0fbd855c5f53219bdb29cd1"}, {"audio": 0, "start": 1005361, "crunched": 0, "end": 1006763, "filename": "/bcgj-20/.git/objects/57/abe81ece4013c0aec1768841023c0761839514"}, {"audio": 0, "start": 1006763, "crunched": 0, "end": 1006917, "filename": "/bcgj-20/.git/objects/bc/0342a5ad9cb6766668286a62792957bd390612"}, {"audio": 0, "start": 1006917, "crunched": 0, "end": 1007947, "filename": "/bcgj-20/.git/objects/76/521d272f3451d2bdbbac2dc538591fd22e9995"}, {"audio": 0, "start": 1007947, "crunched": 0, "end": 1008183, "filename": "/bcgj-20/.git/objects/76/16c69f488431cfcc100d776e0161c8c59dc33c"}, {"audio": 0, "start": 1008183, "crunched": 0, "end": 1009982, "filename": "/bcgj-20/.git/objects/e7/ff53d5764eca86ff126863259e1fe72df761d5"}, {"audio": 0, "start": 1009982, "crunched": 0, "end": 1010296, "filename": "/bcgj-20/.git/objects/e7/c6247c7d040314e81826268a65fa567ac1d76a"}, {"audio": 0, "start": 1010296, "crunched": 0, "end": 1015541, "filename": "/bcgj-20/.git/objects/b2/2d92c695a29bbf15a6d135bdeb4bb08b71271d"}, {"audio": 0, "start": 1015541, "crunched": 0, "end": 1016302, "filename": "/bcgj-20/.git/objects/b2/66e59bbb17f28fe53ba79ba40cf521aa46e84e"}, {"audio": 0, "start": 1016302, "crunched": 0, "end": 1016437, "filename": "/bcgj-20/.git/objects/b2/49e54bd3328427f6ae8061ab493750ec7fbee6"}, {"audio": 0, "start": 1016437, "crunched": 0, "end": 1017796, "filename": "/bcgj-20/.git/objects/b2/517996205d54d4bec73962583bc1dd6f9981f7"}, {"audio": 0, "start": 1017796, "crunched": 0, "end": 1019258, "filename": "/bcgj-20/.git/objects/7b/0065e59ae3e0c09d10d682db0904f8248d7472"}, {"audio": 0, "start": 1019258, "crunched": 0, "end": 1019616, "filename": "/bcgj-20/.git/objects/dd/53d1be5f3c6a7ca9671c3461f376c5b1ade073"}, {"audio": 0, "start": 1019616, "crunched": 0, "end": 1019921, "filename": "/bcgj-20/.git/objects/dd/bb2fba520ed20c77b99b69bb2e97b678932203"}, {"audio": 0, "start": 1019921, "crunched": 0, "end": 1020096, "filename": "/bcgj-20/.git/objects/dd/cf8b09e0bff3dce0a979daaf94dd6fc0100fae"}, {"audio": 0, "start": 1020096, "crunched": 0, "end": 1020274, "filename": "/bcgj-20/.git/objects/dd/303fa9a3c502b2cda86558ca2a468169306a60"}, {"audio": 0, "start": 1020274, "crunched": 0, "end": 1020876, "filename": "/bcgj-20/.git/objects/16/829f68887ef7e4f9e605da3714cee6f78f7ac5"}, {"audio": 0, "start": 1020876, "crunched": 0, "end": 1021227, "filename": "/bcgj-20/.git/objects/81/5f50d1aeaceb5092c43517416bdc67f97aad4f"}, {"audio": 0, "start": 1021227, "crunched": 0, "end": 1021579, "filename": "/bcgj-20/.git/objects/81/68b64caaec99ec22e20cf34754eac45b540576"}, {"audio": 0, "start": 1021579, "crunched": 0, "end": 1021785, "filename": "/bcgj-20/.git/objects/12/9bf7604bf3e60821ef173fe0b922eda9da3f71"}, {"audio": 0, "start": 1021785, "crunched": 0, "end": 1023613, "filename": "/bcgj-20/.git/objects/fe/7191924e4ff07a77f7bd9bb3c3da69d05d1813"}, {"audio": 0, "start": 1023613, "crunched": 0, "end": 1023752, "filename": "/bcgj-20/.git/objects/0b/ad119ee02374d493eef07d5a11373ed7cac182"}, {"audio": 0, "start": 1023752, "crunched": 0, "end": 1025545, "filename": "/bcgj-20/.git/objects/13/f1fdd6718b799bf2e019bdaa36df66feaed383"}, {"audio": 0, "start": 1025545, "crunched": 0, "end": 1025695, "filename": "/bcgj-20/.git/objects/c7/e6328a54c2bb35c6838dadedda2c1096bb03b4"}, {"audio": 0, "start": 1025695, "crunched": 0, "end": 1027102, "filename": "/bcgj-20/.git/objects/c7/45636f86f9f82c980da9171531318dc8d24d25"}, {"audio": 0, "start": 1027102, "crunched": 0, "end": 1027619, "filename": "/bcgj-20/.git/objects/4a/7b2dd265abc80921dc44ad6e886edf8fdd52e7"}, {"audio": 0, "start": 1027619, "crunched": 0, "end": 1091183, "filename": "/bcgj-20/.git/objects/56/06664aa2ac8eb63f6bf98134f9fcdcaf8af803"}, {"audio": 0, "start": 1091183, "crunched": 0, "end": 1091329, "filename": "/bcgj-20/.git/objects/07/2197879bcc6fb2bd438b10edd4457ac9a1608b"}, {"audio": 0, "start": 1091329, "crunched": 0, "end": 1091674, "filename": "/bcgj-20/.git/objects/15/21eab90b9e31281ac8cb0441bfd8358a1de712"}, {"audio": 0, "start": 1091674, "crunched": 0, "end": 1091940, "filename": "/bcgj-20/.git/objects/fd/72685106947d3ce55b185b93991fb8aa238c16"}, {"audio": 0, "start": 1091940, "crunched": 0, "end": 1092100, "filename": "/bcgj-20/.git/objects/11/f19f2bef3393d379f1a01cf071939d90a738fc"}, {"audio": 0, "start": 1092100, "crunched": 0, "end": 1092369, "filename": "/bcgj-20/.git/objects/88/49fbdd023533ec324ffa0e3f06aeb24a0d801f"}, {"audio": 0, "start": 1092369, "crunched": 0, "end": 1093851, "filename": "/bcgj-20/.git/objects/99/2012f76c2c260596e54484be60fd83e95c7d9e"}, {"audio": 0, "start": 1093851, "crunched": 0, "end": 1094923, "filename": "/bcgj-20/.git/objects/8b/db5bc395530632191b7fc81a5437504b9c62d3"}, {"audio": 0, "start": 1094923, "crunched": 0, "end": 1095411, "filename": "/bcgj-20/.git/objects/48/1b586553aee1d18c78411c0edc5785e8760955"}, {"audio": 0, "start": 1095411, "crunched": 0, "end": 1095676, "filename": "/bcgj-20/.git/objects/48/6eeb51fb0f8cb0545ad380c9c150fcb222ef2a"}, {"audio": 0, "start": 1095676, "crunched": 0, "end": 1095801, "filename": "/bcgj-20/.git/objects/4f/cca86f701c01595c40cecb3ed0fc54745b83de"}, {"audio": 0, "start": 1095801, "crunched": 0, "end": 1096066, "filename": "/bcgj-20/.git/objects/e8/c073c0b4f79eba2abc870e719a302346fa1165"}, {"audio": 0, "start": 1096066, "crunched": 0, "end": 1096189, "filename": "/bcgj-20/.git/objects/eb/28cb9fd9fac5c63ce1a0e57cab903dc7ba5130"}, {"audio": 0, "start": 1096189, "crunched": 0, "end": 1097089, "filename": "/bcgj-20/.git/objects/51/6ef27414ccb84f9ba4d50705a3d27d3982fd4e"}, {"audio": 0, "start": 1097089, "crunched": 0, "end": 1098203, "filename": "/bcgj-20/.git/objects/30/b80545c367c9f510ffbaa267661ded5fcca7b3"}, {"audio": 0, "start": 1098203, "crunched": 0, "end": 1098563, "filename": "/bcgj-20/.git/objects/87/d57759622177df1427e1c89863af594a7bff17"}, {"audio": 0, "start": 1098563, "crunched": 0, "end": 1098832, "filename": "/bcgj-20/.git/objects/96/5b4e9a6d10c0797235b447767abb313e01f966"}, {"audio": 0, "start": 1098832, "crunched": 0, "end": 1099099, "filename": "/bcgj-20/.git/objects/22/eed3235f35a95d1ccd28c103bee0e15dbca35f"}, {"audio": 0, "start": 1099099, "crunched": 0, "end": 1100526, "filename": "/bcgj-20/.git/objects/bf/76a8bc2d5a1399249ba85fff00a210990888a7"}, {"audio": 0, "start": 1100526, "crunched": 0, "end": 1101792, "filename": "/bcgj-20/.git/objects/ce/aa511e85ea088df42dda4d2e420951ffe93197"}, {"audio": 0, "start": 1101792, "crunched": 0, "end": 1102257, "filename": "/bcgj-20/.git/objects/2b/421811795bb1aa25de937e6e6f305246a8743c"}, {"audio": 0, "start": 1102257, "crunched": 0, "end": 1102546, "filename": "/bcgj-20/.git/objects/3c/1adcf4d65cfd1410b9f8029486847546ddf22e"}, {"audio": 0, "start": 1102546, "crunched": 0, "end": 1104407, "filename": "/bcgj-20/.git/objects/ba/d78bb1246e9d138080f7744a4826fa680d1082"}, {"audio": 0, "start": 1104407, "crunched": 0, "end": 1104592, "filename": "/bcgj-20/.git/objects/b4/228bb996220270d171e81b55acdee2e1c20a9b"}, {"audio": 0, "start": 1104592, "crunched": 0, "end": 1104843, "filename": "/bcgj-20/.git/objects/6a/b8a91ca670ebc03307a7d4685b353e41309e49"}, {"audio": 0, "start": 1104843, "crunched": 0, "end": 1105082, "filename": "/bcgj-20/.git/objects/9e/22103abfc19ff92cd8ae51edc9e43fd254f987"}, {"audio": 0, "start": 1105082, "crunched": 0, "end": 1105250, "filename": "/bcgj-20/.git/objects/9e/9dfea3251f312c70a2781ea4b1f1c2d1f0bee1"}, {"audio": 0, "start": 1105250, "crunched": 0, "end": 1106174, "filename": "/bcgj-20/.git/objects/9e/324b397e9e92a44c2c8e0c14dcbb7fb80724a6"}, {"audio": 0, "start": 1106174, "crunched": 0, "end": 1106587, "filename": "/bcgj-20/.git/objects/71/d55defb6cf6edcc06724f1264d7afe42489e20"}, {"audio": 0, "start": 1106587, "crunched": 0, "end": 1108607, "filename": "/bcgj-20/.git/objects/71/b2718cb05da4ca7ef12e5ecf7e9e4848fab035"}, {"audio": 0, "start": 1108607, "crunched": 0, "end": 1109928, "filename": "/bcgj-20/.git/objects/63/b55aa2872341b58a999e8f8661c0653c7ec753"}, {"audio": 0, "start": 1109928, "crunched": 0, "end": 1110078, "filename": "/bcgj-20/.git/objects/63/baa69d2becd18470818801a87971d6f817f551"}, {"audio": 0, "start": 1110078, "crunched": 0, "end": 1110315, "filename": "/bcgj-20/.git/objects/63/f176a4bd4c04df147a16be751795eeef7f82b7"}, {"audio": 0, "start": 1110315, "crunched": 0, "end": 1110576, "filename": "/bcgj-20/.git/objects/c2/f227dfbdc61675e1701b5430ef049e5077a37a"}, {"audio": 0, "start": 1110576, "crunched": 0, "end": 1110842, "filename": "/bcgj-20/.git/objects/90/bb0cfb01875480c3868f22394b41f89b7b11dd"}, {"audio": 0, "start": 1110842, "crunched": 0, "end": 1112819, "filename": "/bcgj-20/.git/objects/90/55215f1800092a16bdacb7e102c37636268271"}, {"audio": 0, "start": 1112819, "crunched": 0, "end": 1113136, "filename": "/bcgj-20/.git/objects/90/d4d49e6fcd8680d59f9027635149f2b2b878c2"}, {"audio": 0, "start": 1113136, "crunched": 0, "end": 1113151, "filename": "/bcgj-20/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904"}, {"audio": 0, "start": 1113151, "crunched": 0, "end": 1113332, "filename": "/bcgj-20/.git/objects/41/785de25e5d01b1a0b88ef9bba7280fe97676f9"}, {"audio": 0, "start": 1113332, "crunched": 0, "end": 1113507, "filename": "/bcgj-20/.git/objects/3d/2b8ff1b49664831a0a70919d4783653751028d"}, {"audio": 0, "start": 1113507, "crunched": 0, "end": 1113629, "filename": "/bcgj-20/.git/objects/d3/ed0b64d250d364b881fd5b91b7a04677aedcbf"}, {"audio": 0, "start": 1113629, "crunched": 0, "end": 1113793, "filename": "/bcgj-20/.git/objects/97/fe25c6afdf3582e157442dd1d5c36964670529"}, {"audio": 0, "start": 1113793, "crunched": 0, "end": 1114220, "filename": "/bcgj-20/.git/objects/21/216b620ef3c04241db69229d2971a045b0d113"}, {"audio": 0, "start": 1114220, "crunched": 0, "end": 1114340, "filename": "/bcgj-20/.git/objects/21/c81b0e8b9d62471fbab3e53e7c3028e8929cde"}, {"audio": 0, "start": 1114340, "crunched": 0, "end": 1114661, "filename": "/bcgj-20/.git/objects/f9/f4e844fa8cd3e07b29a4a11202061573017b62"}, {"audio": 0, "start": 1114661, "crunched": 0, "end": 1114899, "filename": "/bcgj-20/.git/objects/62/88c7869d6ec863b6e0db7a1e78a594b3ebd2b1"}, {"audio": 0, "start": 1114899, "crunched": 0, "end": 1115066, "filename": "/bcgj-20/.git/objects/d2/10d908b7f1040de74c3bf0feddd7ed3b35cd41"}, {"audio": 0, "start": 1115066, "crunched": 0, "end": 1115242, "filename": "/bcgj-20/.git/objects/49/6dfffe47d82f5fe3b076f347716a0be19d79f3"}, {"audio": 0, "start": 1115242, "crunched": 0, "end": 1115396, "filename": "/bcgj-20/.git/objects/fc/689d01dabfc038d1a69117ea7b0c4006af0670"}, {"audio": 0, "start": 1115396, "crunched": 0, "end": 1115567, "filename": "/bcgj-20/.git/objects/cc/339283e2d44c9738ee5528a21c777e78f54e46"}, {"audio": 0, "start": 1115567, "crunched": 0, "end": 1118459, "filename": "/bcgj-20/.git/objects/cc/ef1d61795af70494bd8460b595419f2d697f5c"}, {"audio": 0, "start": 1118459, "crunched": 0, "end": 1118664, "filename": "/bcgj-20/.git/objects/cc/29a3f0098621f29be2dc28871c0e5ac853f66f"}, {"audio": 0, "start": 1118664, "crunched": 0, "end": 1118970, "filename": "/bcgj-20/.git/objects/f2/212a746b93a60cbff75d1d98375d3b552dec77"}, {"audio": 0, "start": 1118970, "crunched": 0, "end": 1119301, "filename": "/bcgj-20/.git/objects/f2/6d7c0fecb03e4bfc35da63435341e357ab0058"}, {"audio": 0, "start": 1119301, "crunched": 0, "end": 1120825, "filename": "/bcgj-20/.git/objects/34/339a85fcd5c4a75aa14d45db788d5125f021db"}, {"audio": 0, "start": 1120825, "crunched": 0, "end": 1121220, "filename": "/bcgj-20/.git/objects/c0/70c8fe7196a154b2a3a50f432699952808a399"}, {"audio": 0, "start": 1121220, "crunched": 0, "end": 1123189, "filename": "/bcgj-20/.git/objects/b7/79cd3851bbe31d1c4743ed2da403c6f78c8ae2"}, {"audio": 0, "start": 1123189, "crunched": 0, "end": 1123429, "filename": "/bcgj-20/.git/info/exclude"}, {"audio": 0, "start": 1123429, "crunched": 0, "end": 1126488, "filename": "/bcgj-20/.git/logs/HEAD"}, {"audio": 0, "start": 1126488, "crunched": 0, "end": 1128976, "filename": "/bcgj-20/.git/logs/refs/remotes/origin/master"}, {"audio": 0, "start": 1128976, "crunched": 0, "end": 1132035, "filename": "/bcgj-20/.git/logs/refs/heads/master"}, {"audio": 0, "start": 1132035, "crunched": 0, "end": 1133280, "filename": "/bcgj-20/assets/ground_s.png"}, {"audio": 0, "start": 1133280, "crunched": 0, "end": 1134264, "filename": "/bcgj-20/assets/rock_2.png"}, {"audio": 0, "start": 1134264, "crunched": 0, "end": 1135650, "filename": "/bcgj-20/assets/ground_sw.png"}, {"audio": 0, "start": 1135650, "crunched": 0, "end": 1136694, "filename": "/bcgj-20/assets/ground.png"}, {"audio": 0, "start": 1136694, "crunched": 0, "end": 1140342, "filename": "/bcgj-20/assets/statue.png"}, {"audio": 0, "start": 1140342, "crunched": 0, "end": 1141351, "filename": "/bcgj-20/assets/rock_3.png"}, {"audio": 0, "start": 1141351, "crunched": 0, "end": 1142575, "filename": "/bcgj-20/assets/ground_w.png"}, {"audio": 0, "start": 1142575, "crunched": 0, "end": 1143556, "filename": "/bcgj-20/assets/plant.png"}, {"audio": 0, "start": 1143556, "crunched": 0, "end": 1145311, "filename": "/bcgj-20/assets/player_pointer.png"}, {"audio": 0, "start": 1145311, "crunched": 0, "end": 1146814, "filename": "/bcgj-20/assets/rock_1.png"}, {"audio": 0, "start": 1146814, "crunched": 0, "end": 1148275, "filename": "/bcgj-20/assets/portal.png"}, {"audio": 0, "start": 1148275, "crunched": 0, "end": 1149995, "filename": "/bcgj-20/raw_files/debug_base.piskel"}, {"audio": 0, "start": 1149995, "crunched": 0, "end": 1152612, "filename": "/bcgj-20/raw_files/ground_w.piskel"}, {"audio": 0, "start": 1152612, "crunched": 0, "end": 1155520, "filename": "/bcgj-20/raw_files/ground_sw.piskel"}, {"audio": 0, "start": 1155520, "crunched": 0, "end": 1157495, "filename": "/bcgj-20/raw_files/ground.piskel"}, {"audio": 0, "start": 1157495, "crunched": 0, "end": 1160649, "filename": "/bcgj-20/raw_files/rock_1.piskel"}, {"audio": 0, "start": 1160649, "crunched": 0, "end": 1163023, "filename": "/bcgj-20/raw_files/rock_2.piskel"}, {"audio": 0, "start": 1163023, "crunched": 0, "end": 1166287, "filename": "/bcgj-20/raw_files/portal.piskel"}, {"audio": 0, "start": 1166287, "crunched": 0, "end": 1166789, "filename": "/bcgj-20/raw_files/base_tile.piskel"}, {"audio": 0, "start": 1166789, "crunched": 0, "end": 1169410, "filename": "/bcgj-20/raw_files/ground_s.piskel"}, {"audio": 0, "start": 1169410, "crunched": 0, "end": 1173878, "filename": "/bcgj-20/raw_files/player_pointer.piskel"}, {"audio": 0, "start": 1173878, "crunched": 0, "end": 1181792, "filename": "/bcgj-20/raw_files/statue.piskel"}, {"audio": 0, "start": 1181792, "crunched": 0, "end": 1183772, "filename": "/bcgj-20/raw_files/plant.piskel"}, {"audio": 0, "start": 1183772, "crunched": 0, "end": 1185492, "filename": "/raw_files/debug_base.piskel"}, {"audio": 0, "start": 1185492, "crunched": 0, "end": 1188109, "filename": "/raw_files/ground_w.piskel"}, {"audio": 0, "start": 1188109, "crunched": 0, "end": 1191017, "filename": "/raw_files/ground_sw.piskel"}, {"audio": 0, "start": 1191017, "crunched": 0, "end": 1192992, "filename": "/raw_files/ground.piskel"}, {"audio": 0, "start": 1192992, "crunched": 0, "end": 1196146, "filename": "/raw_files/rock_1.piskel"}, {"audio": 0, "start": 1196146, "crunched": 0, "end": 1198520, "filename": "/raw_files/rock_2.piskel"}, {"audio": 0, "start": 1198520, "crunched": 0, "end": 1201784, "filename": "/raw_files/portal.piskel"}, {"audio": 0, "start": 1201784, "crunched": 0, "end": 1202286, "filename": "/raw_files/base_tile.piskel"}, {"audio": 0, "start": 1202286, "crunched": 0, "end": 1204907, "filename": "/raw_files/ground_s.piskel"}, {"audio": 0, "start": 1204907, "crunched": 0, "end": 1209375, "filename": "/raw_files/player_pointer.piskel"}, {"audio": 0, "start": 1209375, "crunched": 0, "end": 1217289, "filename": "/raw_files/statue.piskel"}, {"audio": 0, "start": 1217289, "crunched": 0, "end": 1219269, "filename": "/raw_files/plant.piskel"}], "remote_package_size": 1219269, "package_uuid": "3944bc72-ed8b-425e-929e-2d8721eb3efb"});

})();
