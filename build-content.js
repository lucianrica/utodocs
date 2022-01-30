const fs = require("fs");
const path = require('path');
const docsDir = path.resolve("src/assets/docs")
global.appRoot = path.resolve(__dirname);



let obj = {
    "type": "dir",
    "name": "docs",
    "fullPath": path.join(appRoot, "docs"),
    "children": []
}


function traverseDirr(dir, obj) {

    fs.readdirSync(dir).forEach(result => {
        let fullPath = path.join(dir, result);
        console.log("=======================")
        console.log(fullPath)


        let name;
        if (fs.lstatSync(fullPath).isFile()) {
            name = result.slice(0, -3)
        } else {
            name = result
        }


        // let branch = 'main'
        // if (process.env.NODE_ENV !== 'production') branch = 'develop'
        
        // let baseUrl = `https://raw.githubusercontent.com/lucianrica/utodocs/${branch}`
        // let url = baseUrl + (fullPath.split(global.appRoot))[1]
        // let convertedUrl = new URL(url).toString();
        // console.log(convertedUrl)



        let newChild = {
            "name": name,
            "fullPath": fullPath,
            "url": (fullPath.split("assets"))[1]
        }

        console.log(newChild)

        if (fs.lstatSync(fullPath).isDirectory()) {
            newChild["type"] = "dir"
            newChild["children"] = []
            obj.children.push(newChild)

            traverseDirr(fullPath, newChild);
        }

        if (fs.lstatSync(fullPath).isFile()) {
            newChild["type"] = "file"
            obj.children.push(newChild)
        }

    })
}
traverseDirr(docsDir, obj);


const saveToJson = (obj) => {
    // convert JSON object to string
    const data = JSON.stringify(obj);

    // write JSON string to a file
    fs.writeFile('src/assets/navbar/sidenav.json', data, err => {
        if (err) throw err
    });

}
saveToJson(obj)

// node build-content.js