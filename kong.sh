export DOCKER_MACHINE_IP='192.168.99.100'
export KONG_HOST_API='http://DOCKER_MACHINE_IP/apis/'

function create_api() {
    curl -i -X POST --url $KONG_HOST_API --data 'name=$2'  --data 'hosts=$3'  --data 'upstream_url=$4'
}

function create_plugin() {

}

create_api "account" "api.account" "http://$DOCKER_MACHINE_IP:3000"
create_api "tweet" "api.tweet" "http://$DOCKER_MACHINE_IP:3001"

