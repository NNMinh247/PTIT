const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');
const Building = require('./models/Building');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

sequelize.sync({ force: false }).then(() => {
    console.log('Tất cả các mô hình đã được đồng bộ hóa với cơ sở dữ liệu.');
}).catch((error) => {
    console.error('Lỗi đồng bộ hóa mô hình với cơ sở dữ liệu:', error);
});

app.get('/api/buildings', async (req, res) => {
    try {
        const buildings = await Building.findAll();
        res.json(buildings);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi lấy danh sách tòa nhà.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});