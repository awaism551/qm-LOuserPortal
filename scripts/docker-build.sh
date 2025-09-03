#!/bin/bash

# Docker build script for User Portal
# Usage: ./scripts/docker-build.sh [tag]

set -e

# Default tag
TAG=${1:-user-portal:latest}

echo "Building Docker image with tag: $TAG"

# Build the Docker image
docker build -t $TAG .

echo "Docker image built successfully: $TAG"

# Optional: Run the container locally
read -p "Do you want to run the container locally? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Starting container on port 3000..."
    docker run -p 3000:3000 --name user-portal-container $TAG
fi
