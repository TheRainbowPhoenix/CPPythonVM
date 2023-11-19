echo "Building ..." > dist/preview.html

cd wasm
call build-all.bat
cd ..

:: call npm run build

copy /B dist\panel.html dist\preview.html

echo. > dist/.index