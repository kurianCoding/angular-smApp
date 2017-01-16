docker rm -f ng1
docker run -d --name ng1 -h ng1 -p 3000:80 -v $PWD:/var/www   -it $1
