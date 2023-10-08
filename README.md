<h1 align="center">Do-It-Yourself (DIY) DevOps Dashboard in Docker<h1>

<p align="center"><img src="https://github.com/xanderstevenson/diy-devops-dashboard/assets/27918923/3fa23d01-5f42-42a2-98ff-50aba621be3f"></p>

## Description

_A duplicate of this project exists, but which runs without a Docker container. That project can be found at [diy-devops-dashboard](https://github.com/xanderstevenson/diy-devops-dashboard/tree/main). The reason I created the version that runs without the Docker container is that I was having issues getting this one, with Docker, to pass the vulnerability scanning for acceptance as a Cisco Code Exchange repo._

I made this project as a way for those new to DevOps to get started with the basic technologies invlolved. It requires setting up the basic accounts and then provides the user with an all-in-one place to see their progress and to better understand how these different tools interact in the DevOps lifecycle.

This project runs as a Flask App, which serves the web dashboard. It is written in Python and most of the data is collected via external API calls, with Docker and Jenkins data being collected straight from your machine.

Besides displaying all your DevOps data neatly organized in the dashboard, you can send the data to a Webex space via message by clicking the 'Post to Webex' button in the menu.

<br>

## Prerequisites

GitHub, GitLab, Terraform, and Elastic-Cloud accounts must be created and the credentials placed in the .env file in order for the data from those platforms to display properly in the dashboard. Jenkins projects and Docker containers will also need to be present locally, for that data to be populated in the dashboard. The Docker Engine must be running for the Docker commands below to be successful.

- You will need [Python](https://www.python.org/downloads/) installed. This code has been successfully tested in Python 3.9.5
- Docker will need to be installed. I'm runnning [Docker Desktop](https://www.docker.com/products/docker-desktop/) on Mac.

<br>

## Installation

1. Create a virtual environment locally and activate it.

<br>

2. Clone this repo and cd into it.

```git clone https://github.com/xanderstevenson/diy-devops-dashboard.git```

```cd diy-devops-dashboard```

<br>

3. Make sure you have account set-up with [GitHub](https://github.com/), [GitLab](https://gitlab.com/), [Terraform](https://app.terraform.io/), and [Elastic Cloud](https://www.elastic.co/cloud/)

<br>

4. Create a file called .env in the same directory as app.py and place your credentials from those accounts into .env. The required credentials are listed in the [.env-example](https://github.com/xanderstevenson/diy-devops-dashboard/blob/main/.env-example) file. Do not place any credentials in .env-example!

`GITHUB_USERNAME="your_username"`<br>
`GITHUB_ACCESS_TOKEN="your_access_token"`<br>
`...`<br>
`...`

_*** The .env file is listed in the [.gitignore](https://github.com/xanderstevenson/diy-devops-dashboard/blob/main/.gitignore) file, so .env will not be pushed to GitHub if you decide to fork this project. ***_

<br>

## Usage

1. Build the Docker image by running the following command in the project directory (make sure Docker Engine is running):

```docker build -t diy-devops-dashboard .```

<br>


2. Run the Docker container by executing the following. command:

```docker run --name diy-devops-dashboard -v /var/run/docker.sock:/var/run/docker.sock -p 8000:8000 diy-devops-dashboard```

This command starts the container and forwards the container's port 8000 to the host's port 8000, allowing you to access the web app at http://localhost:8000.

<br>

3. Navigate to http://127.0.0.1:8000 or http://localhost:8000 to view the dashboard

<p align="center">
<img src="https://github.com/xanderstevenson/diy-devops-dashboard/assets/27918923/713de122-8a0b-4596-afa7-ae0092703cc3" width="700">
</p>

<br>

4. To stop the container, type Ctrl + C one or twice in the virtual directory in which you ran the docker commands.

<br>

### Functionality

- Text within each section that is surrounded by a box is clickable and will take you to the web page for that resource.

<p align="center">
<img src="https://github.com/xanderstevenson/diy-devops-dashboard/assets/27918923/7e46a9a4-14de-4239-8ef5-8dc06e2e029a" width="500">
</p>
<br>

- By clicking on the hamburger menu icon on the top left, you can view the button to 'Post to Webex'. Push this once and it will send the data for this dashboard, truncated to five results per tool, to the Webex space indicated in the .env file. This will take up to 15 seconds. To make the button disappear, click on the hamburger menu icon again.

<p align="center"><img src="https://github.com/xanderstevenson/diy-devops-dashboard/assets/27918923/2bf9c2b9-6a58-429d-bc14-6454b8f21ca4" width="400">
</p>

<br>

- The entire page will reload every 5 minutes, thanks to the JavaScript at the bottom of /templates/index.html. You can also refresh the page manually by clicking on the "Refresh" button under the marquee at the top of the page.

<p align="center">
<img width="400" src="https://github.com/xanderstevenson/diy-devops-dashboard/assets/27918923/afba8a5a-f0ab-4d79-84b2-b8ae58d8bf21">
</p>

Both actions reload the data to be presented.

<br>

- More blocks for additional tools can be added to [templates/index.html](https://github.com/xanderstevenson/diy-devops-dashboard/blob/main/templates/index.html) and a additional functions would need to be added to [app.py](https://github.com/xanderstevenson/diy-devops-dashboard/blob/main/app.py)

<br>

## Disclaimer

<br>

<p align="center">
  <em><strong style="color: blue;">This project is for demo purposes only and should not be used in a production environment.</strong></em>
</p>
