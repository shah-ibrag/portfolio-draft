# Portfolio Site Docker Setup

This document provides instructions on how to build and run the Docker container for the portfolio site.

## Requirements

- Docker installed on your machine

## Instructions

1. **Build the Docker Image**

   Open a terminal in the root of your project directory and run the following command to build the Docker image:

   ```sh
   docker build -t ibragimov_shawn_coding_assignment14 .

2. **Run the Docker Container**

    Run the Docker container with the following command:
    ```sh
    docker run -p 5575:5575 --name ibragimov_shawn_coding_assignment14 ibragimov_shawn_coding_assignment14

3. **Access the Application**

    Open your web browser and navigate to http://localhost:5575 to see your portfolio site running inside the Docker container.