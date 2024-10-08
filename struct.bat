:: Creating folders
mkdir app
mkdir app\about
mkdir app\projects
mkdir app\contact
mkdir components
mkdir lib
mkdir public
mkdir public\images
mkdir styles

:: Creating files
echo // layout.tsx content > app\layout.tsx
echo // page.tsx content > app\page.tsx
echo // about page.tsx content > app\about\page.tsx
echo // projects page.tsx content > app\projects\page.tsx
echo // contact page.tsx content > app\contact\page.tsx
echo // Header component content > components\Header.tsx
echo // Footer component content > components\Footer.tsx
echo // AnimatedSection component content > components\AnimatedSection.tsx
echo // gsap.ts content > lib\gsap.ts
echo /* globals.css content */ > styles\globals.css
echo {} > package.json
echo // next.config.js content > next.config.js
echo {} > tsconfig.json

echo Folder and file structure for my-portfolio created successfully!
pause
