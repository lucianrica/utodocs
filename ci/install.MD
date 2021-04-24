### Install
```shell
    docker-compose up -d
``` 	

### Run
``` shell	
    fly -t utodocs login -c http://localhost:8080 -u test -p test
```

### Set Pipeline	
```shell
    fly -t utodocs set-pipeline --pipeline utodocs --config ./ci/pipeline.yaml --load-vars-from ./ci/cred/cred.yaml -n
```

### Open
```
    http://localhost:8080/
```
<hr>

### Dockerize
```shell
    docker build --rm -f Dockerfile -t utodocs:v1 .


    docker run --rm -d -p 81:80 utodocs:v1
```


### Destroy Pipeline
```shell
    fly -t utodocs destroy-pipeline -p utodocs
```



## temp test pipeline settings

echo "Node Version: $(node --version)"
echo "NPM Version: $(npm --version)"
export NG_CLI_ANALYTICS="false"            
apt-get update -qq -o=Dpkg::Use-Pty=0
apt-get install -qq -o=Dpkg::Use-Pty=0 -y --no-install-recommends chromium
apt-cache search chromium-browser
export CHROME_BIN=chromium
cd develop.git
pwd
npm install --silent
npm run test --silent