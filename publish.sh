#!/bin/bash
# Publish Package to npm registry
# Logic for Versioning to be implemented based on Branch, hardcoded to alpha
VERSIONING='alpha' 

change_package_version () {
    cd ./projects/commons
    branch=`git rev-parse --abbrev-ref HEAD`
    if [ "$branch" == "development" ]; then
        echo "Updating Package Version.."
        GIT_COMMIT_ID=`git rev-parse --short HEAD`
        PACKAGE_VERSION=`npm view @muraai/mnl-commons version`
        PACKAGE_VERSION=${PACKAGE_VERSION:0:5}
        npm version $PACKAGE_VERSION-$VERSIONING-$GIT_COMMIT_ID
    fi
}

# Npm Install
npm install

# Versioning
change_package_version

#Build Package
cd ../../ && npm run commons:build


# Publishing
cd ./dist/@muraai/mnl-commons && npm publish --access public

