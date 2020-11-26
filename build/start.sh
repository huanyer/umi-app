#!/bin/bash

echo "----------------------------------"

echo "please select your execute env:"
select input in dev sit Exit;
do
  break
done

echo "You have selected $input"
sleep 1;
if [ "$input" = "Exit" ];then
  exit;
else
  echo "run start at $input..."
fi

./node_modules/.bin/cross-env UMI_ENV="$input" ./node_modules/.bin/umi dev
  


