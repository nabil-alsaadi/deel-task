// import { FileOpener, FileOpenerOptions } from "@capacitor-community/file-opener";
import { Capacitor } from "@capacitor/core";
import { Directory, DownloadFileResult, Filesystem } from "@capacitor/filesystem";
import { FileOpener } from "@capawesome-team/capacitor-file-opener";

export const selectFile = (url: string) => {
    console.log('Capacitor.isNativePlatform()',Capacitor.isNativePlatform())
    var filename = url.split('/').pop() ?? "test"
    
    if (Capacitor.isNativePlatform()) {
        return new Promise((resolve) => {
            Filesystem.downloadFile({
                path: filename,
                url: url,
                directory: Directory.Documents,
              }).then((res: DownloadFileResult) => {
                resolve(true);
                return _openFile(res.path ?? "");
              }).catch((error) => {
                console.error(error);
              })
        })
      
    } else {
      window.open(url);
    }
}

export const  _openFile = async (filePath: string) => {
    
    await FileOpener.openFile({
        path: filePath, 
      })
      .then(() => {
        
        })
        .catch((error) => {
        console.error(error);
        });
  }
