#!/bin/bash

npx prisma generate
npx prisma migrate dev --name init
npm install
npm run dev