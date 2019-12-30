cp -r ../../../../../dist/aws-common dist
cp -r ../../../../../dist/aws-common ../tsc-src/dist
cd ../tsc-src
tsc --listFiles
yarn install