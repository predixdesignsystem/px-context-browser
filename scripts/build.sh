#!/bin/bash

# Find repo name from the bower file
REPO_NAME=$(grep "name" bower.json | sed 's/"name": "//' | sed 's/",//' | sed -e 's/^[[:space:]]*//')

echo "Starting build for $REPO_NAME"

# Bower install theme dependencies
./node_modules/.bin/bower install px-theme px-dark-theme px-dark-demo-theme

# Run polymer build to transpile code. The output will be placed in the
# `build/unbundled` directory
./node_modules/.bin/polymer build

# Open the build directory
cd build/

# Rename unbundled --> $REPO_NAME, move all the bower_components/ up one level
# so they're beside to $REPO_NAME
mv unbundled $REPO_NAME
rm -rf "$REPO_NAME/bower_components/$REPO_NAME/"
find "$REPO_NAME/bower_components" -mindepth 1 -maxdepth 1 -print0 | xargs -0 -I {} mv {} .
rm -rf "$REPO_NAME/bower_components/"

# Add the redirect
# Note: We are not overwriting the component's documentation `index.html` file
# here, we are making sure that http://url/px-something/ redirects to
# http://url/px-something/px-something/, where the demo page is installed
echo "<META http-equiv=refresh content=\"0;URL=$REPO_NAME/\">" > index.html

echo ""
echo "================================================"
echo "Build finished in $(pwd)"
echo "================================================"
echo ""
