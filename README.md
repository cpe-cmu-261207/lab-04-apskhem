# Lab04: GPA calculator with ReactJS useState

ให้นักศึกษาเขียนส่วนที่หายไปในโค้ดที่กำหนดมาให้ โดยมี 2 files ที่จำเป็นต้องแก้ไข

## `src/App.js`

File นี้เป็นส่วนหลักของหน้าเว็บที่คำนวณ GPA ซึ่งประกอบด้วยส่วนแสดงผลรายวิชาทั้งหมดที่ได้เพิ่มเข้าไปแล้ว ส่วนของแบบฟอร์มที่ใช้เพิ่มรายวิชาเข้าไป และส่วนของการแสดงผล GPA

File นี้ประกอบด้วยฟังก์ชันต่อไปนี้

### `calculateGPA`

ควรเรียกใช้เมื่อต้องการคำนวณ GPA ของรายวิชาที่มีอยู่

### `addCourse`

ควรเรียกใช้เมื่อมีการเพิ่มรายวิชาใหม่เข้าไปในรายการของรายวิชาที่ต้องการคำนวณ GPA ซึ่งควรทำให้ GPA ที่แสดงผลนั้นเปลี่ยนแปลงไปหลังจากพิจารณารายวิชาใหม่นี้แล้ว

### `onDeleteCourse`

ควรเรียกใช้เมื่อมีการลบรายวิชาใดรายวิชาหนึ่งออกจากรายการของรายวิชาที่มีอยู่ ซึ่งควรทำให้ GPA ที่แสดงผลนั้นเปลี่ยนแปลงไปหลังจากตัดรายวิชานี้ออกจากการพิจารณาแล้ว

### `App`

ฟังก์ชันทั้งสามข้างต้น ซ้อนอยู่ในฟังก์ชัน `App` อีกชั้นหนึ่ง ซึ่งฟังก์ชันนี้จะคืนค่าออกมาเป็น HTML source code สำหรับนำไปแสดงผลในหน้าหลัก

ส่วนท้ายสุดของฟังก์ชันนี้ มีส่วนของ source code ที่ยังขาดหายไป ซึ่งเป็นส่วนที่แสดงรายการของรายวิชาที่ต้องการคำนวณ GPA แบบฟอร์มเพื่อเพิ่มรายวิชา และส่วนแสดงค่าของ GPA ที่คำนวณได้

ในส่วนนี้ ควรมีการดึงข้อมูลจากตัวแปรในส่วนของ `useState` และควรเปลี่ยนแปลงแก้ไขค่าที่แสดงผลอยู่ให้เหมาะสม โดยเรียกใช้ฟังก์ชันข้างต้น

เมื่อเสร็จสมบูรณ์แล้ว React app ของนักศึกษาควรจะสามารถเพิ่ม/ลดรายวิชาได้ พร้อมทั้งคำนวณ GPA ของรายวิชาที่มีอยู่ในปัจจุบัน

## `src/components/CourseCard.js`

File นี้ใช้ระบุ component ที่ใช้แสดงรายวิชาแต่ละรายวิชาบนหน้าหลัก

ฟังก์ชัน `CourseCard` ที่กำลังถูก export อยู่นั้นควรคืนค่าเป็น HTML source code ที่สามารถนำไป render แล้วได้ผลลัพธ์เป็นรายวิชาหนึ่งรายวิชาบนหน้าหลัก

# Original README created by Create React App bootstrapper

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
