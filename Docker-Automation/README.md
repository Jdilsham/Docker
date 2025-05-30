# CI/CD Pipeline with Docker and Github Actions

Here is a comprehensive image of what we are going to implement.

![Untitled-2024-10-21-0950](https://github.com/user-attachments/assets/9fc455cb-3067-4fb0-b4db-9df2962a2d60)

I am trying to use github actions to automate docker builds when a trigger to main branch happens. And also a correct and sustainable tagging has implemented by both the tag with hash and a latest tag.

Therefore I have write the github workflow file like below.

## How to Start
1. Clone this repository.
2. Run ```npm install``` at the directory of ```nodeapp``` 
3. Run ```node index.js``` to test the project.
4. Inspect the Dockerfile and build it locally first ```docker build -t node-app .```
5. Then run and test it locally ```docker run -d -p 3000:3000 node-app```
6. Then inspect the ```build.yaml``` file and make sure to set DOCKERHUB_USERNAME and DOCKERHUB_TOKEN in the secrets section of github project.
7. Make sure to create the token by logging at dokerhub and replace the DOCKERHUB_TOKEN by it.
8. Finally replace the ```kalharacodes/node-app``` with relavant to your repository created in dockerhub.
9. Push the code to github and check for status!


Here is the magic, the workflow file which automates all these things.

```
name: Build and Push Docker image to Docker Hub

on: push

jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v3
      
      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
    
      - name: Set short SHA
        id: vars
        run: echo "SHORT_SHA=$(echo ${{ github.sha }} | cut -c1-7)" >> $GITHUB_ENV
    
      - name: Build and push Docker image
        uses: docker/build-push-action@v4
        with:
          context: ./
          push: true
          tags: |
                {DockerHubUserName/repoName}:${{ env.SHORT_SHA }}
                {DockerHubUserName/repoName}:latest
```

Feel free to play and learn github actions. Explore your own journey!
A project by Tharindu Kalhara