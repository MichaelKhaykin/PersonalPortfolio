build process:
make changes on master branch
git add .
git commit 
git push

npm run build
git add dist -f
git commit "Adding dist files"
git subtree push --prefix dist origin gh-pages
