# react-app-k8s

If you want to run application locally without Docker use `npm run dev`.

To create Kubernetes manifests use `kubectl apply` apply command. Note that order of creation matters.

## Create ConfigMap

kubectl apply -f .\k8s\config-map.yml

## Create deployment

kubectl apply -f .\k8s\deployment.yml

## Create service

kubectl apply -f .\k8s\service.yml
