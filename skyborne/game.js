
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
 loadPackage({"files": [{"audio": 1, "start": 0, "crunched": 0, "end": 223854, "filename": "/badend.mp3"}, {"audio": 1, "start": 223854, "crunched": 0, "end": 400954, "filename": "/race.mp3"}, {"audio": 1, "start": 400954, "crunched": 0, "end": 550564, "filename": "/dodge.mp3"}, {"audio": 1, "start": 550564, "crunched": 0, "end": 999511, "filename": "/goodend.mp3"}, {"audio": 0, "start": 999511, "crunched": 0, "end": 1002327, "filename": "/race.lua"}, {"audio": 0, "start": 1002327, "crunched": 0, "end": 1005735, "filename": "/platform.png"}, {"audio": 0, "start": 1005735, "crunched": 0, "end": 1025484, "filename": "/goodend.png"}, {"audio": 0, "start": 1025484, "crunched": 0, "end": 1032841, "filename": "/main.lua"}, {"audio": 0, "start": 1032841, "crunched": 0, "end": 1033072, "filename": "/cursor.png"}, {"audio": 0, "start": 1033072, "crunched": 0, "end": 1038038, "filename": "/cmd.lua"}, {"audio": 0, "start": 1038038, "crunched": 0, "end": 1616809, "filename": "/credits.png"}, {"audio": 0, "start": 1616809, "crunched": 0, "end": 1617143, "filename": "/credits.lua"}, {"audio": 0, "start": 1617143, "crunched": 0, "end": 1622923, "filename": "/unrequited.lua"}, {"audio": 0, "start": 1622923, "crunched": 0, "end": 1635026, "filename": "/background.png"}, {"audio": 0, "start": 1635026, "crunched": 0, "end": 1636597, "filename": "/goodend.lua"}, {"audio": 0, "start": 1636597, "crunched": 0, "end": 1639786, "filename": "/dodge.lua"}, {"audio": 0, "start": 1639786, "crunched": 0, "end": 1639926, "filename": "/Makefile"}, {"audio": 0, "start": 1639926, "crunched": 0, "end": 1644329, "filename": "/D3VI.lua"}, {"audio": 0, "start": 1644329, "crunched": 0, "end": 1646156, "filename": "/intro.lua"}, {"audio": 0, "start": 1646156, "crunched": 0, "end": 1665785, "filename": "/badend.png"}, {"audio": 0, "start": 1665785, "crunched": 0, "end": 1710264, "filename": "/namecredits.png"}, {"audio": 0, "start": 1710264, "crunched": 0, "end": 1736643, "filename": "/intro.png"}, {"audio": 0, "start": 1736643, "crunched": 0, "end": 1738266, "filename": "/badend.lua"}, {"audio": 1, "start": 1738266, "crunched": 0, "end": 2072910, "filename": "/intro.mp3"}, {"audio": 0, "start": 2072910, "crunched": 0, "end": 2073922, "filename": "/UI.lua"}, {"audio": 0, "start": 2073922, "crunched": 0, "end": 2178302, "filename": "/BebasNeue-Regular.ttf"}], "remote_package_size": 2178302, "package_uuid": "65e842c8-5d05-4299-bc64-df10401a1dcc"});

})();
