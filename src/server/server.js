const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// ตัวอย่างข้อมูลผู้ใช้ (รวมถึงชื่อบัญชี accountName)
let users = [
  { email: 'john.doe@gmail.com', password: 'password456', accountName: 'John Doe' }
];

// API สำหรับดึง accountName จาก email
app.get('/api/getAccountName', (req, res) => {
  const email = req.query.email;  // ดึง email จาก query parameter

  // ค้นหาผู้ใช้ที่มีอีเมลที่ระบุ
  const user = users.find(user => user.email === email);
  if (user) {
    // ถ้าเจออีเมล ให้ส่ง accountName กลับ
    res.status(200).send({ accountName: user.accountName });
  } else {
    // ถ้าไม่เจอ ให้ส่ง accountName เป็นค่าว่าง
    res.status(200).send({ accountName: '' });
  }
});

// API สำหรับสมัครสมาชิก (Signup)
app.post('/api/signup', (req, res) => {
  const { email, password, accountName } = req.body;

  // ตรวจสอบว่ามี email นี้ในระบบแล้วหรือไม่
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).send({ message: 'Email already in use' });
  }

  // เพิ่มผู้ใช้ใหม่ที่รวมถึง accountName
  users.push({ email, password, accountName });
  res.status(201).send({ message: 'Signup successful', accountName });
});

// API สำหรับเข้าสู่ระบบ (Login)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // ค้นหาผู้ใช้ในระบบ
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(400).send({ message: 'Invalid email or password' });
  }

  // สร้าง token (ในที่นี้ใช้ตัวอย่างง่าย ๆ)
  const token = 'token_test';

  // ส่งข้อมูลกลับไปให้ client รวมถึง accountName
  res.status(200).send({
    message: 'Login successful',
    token: token, // สามารถใช้ JWT หรือวิธีอื่นๆ ในการสร้าง token ได้
    accountName: user.accountName // ส่งชื่อบัญชีกลับไปให้ Client
  });
});

// API สำหรับบันทึก accountName
app.post('/api/accountName', (req, res) => {
  const { email, accountName } = req.body;
  console.log('Received data:', { email, accountName });

  // ตรวจสอบว่า email และ accountName ถูกส่งมาใน request
  if (!email || !accountName) {
    return res.status(400).send({ message: 'Email and Account Name are required' });
  }

  // ค้นหาผู้ใช้ที่มี email ที่ส่งมา
  const user = users.find(user => user.email === email);

  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }

  // อัปเดตชื่อบัญชีให้กับผู้ใช้
  user.accountName = accountName;

  // ส่งข้อความยืนยัน
  res.status(200).send({ message: 'Account name updated successfully', accountName: user.accountName });
});

// รันเซิร์ฟเวอร์บนพอร์ต 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
