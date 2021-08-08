import fs from 'fs';
import path from 'path';
import async from 'async';
import csv from 'csv';

export const csvToDb = (filename: string, fn: (productsA: { name: string }[], insertCbA: () => void) => void) => {
  let input = fs.createReadStream(
    path.resolve(__dirname, "../", filename)
  );
  let parser = csv.parse({
    columns: true,
    relax: true
  });

  return new Promise((resolve, reject) => {
    let inserter = async.cargo(function (products: { name: string }[], inserterCb: () => void) {
      fn(products, inserterCb);
    }, 2000);

    parser.on('readable', function () {
      let line;
      while ((line = parser.read())) {
        inserter.push(line);
      }
    });

    parser.on('error', function (error) {
      reject(error);
    });

    parser.on('end', function () {
      inserter.drain();
      resolve(true);
    });

    input.pipe(parser);
  });


}
