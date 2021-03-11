# react-app-k8s

Note for k8s: Order of creation matters!

## Create ConfigMap

kubectl apply -f .\k8s\config-map.yml

## Create deployment

kubectl apply -f .\k8s\deployment.yml

## Create service

kubectl apply -f .\k8s\service.yml
