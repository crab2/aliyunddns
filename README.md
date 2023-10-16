# aliyunddns
auto change dns info


#step 1  
```docker build -t myimage:1.0 . ``` generate docker Image

#step 2
```docker run -d -e KEY_ID='' KEY_SECRET='' DOMAIN='' SUB_DOMAIN='' CHECK_CYCLE=''  --name mycontainer myimage:1.0``` run container
