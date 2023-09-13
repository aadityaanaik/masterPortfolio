git remote remove origin
rm -rf .git
npm install
npm run build
cd build
git init
git remote add origin https://github.com/NaikRyder/NaikRyder.github.io.git
git pull origin master
git add .
git commit -m "deploying changes to special repo"
git push origin master
git remote remove origin
rm -rf git
cd ..
git init
git remote add origin https://github.com/NaikRyder/masterPortfolio.git