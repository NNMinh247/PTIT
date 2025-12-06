# PTIT Virtual Tour - Hệ thống tham quan trường học thực tế ảo

Đồ án bài tập lớn môn Lập trình Web. Hệ thống cho phép người dùng tham quan khuôn viên trường học thông qua giao diện 3D trên trình duyệt web và hỗ trợ thiết bị VR.

## 🚀 Tính năng chính
- **Web 3D:** Tham quan mô hình trường học trực quan ngay trên trình duyệt.
- **Hybrid Control:** - Tự động nhận diện kính VR để chuyển chế độ thực tế ảo.
  - Chế độ FPS (First Person Shooter) sử dụng phím WASD + Chuột cho máy tính thường.
- **Thông tin chi tiết:** Click vào tòa nhà để xem thông tin lưu trữ từ Database.
- **Admin Dashboard:** Quản lý thông tin các công trình (Backend API).

## 🛠 Công nghệ sử dụng
- **Frontend:** ReactJS (Vite), React Three Fiber (Three.js), TailwindCSS.
- **Backend:** NodeJS, ExpressJS.
- **Database:** MySQL, Sequelize ORM.

## ⚙️ Hướng dẫn cài đặt và chạy

### 1. Yêu cầu
- Node.js (v14 trở lên)
- MySQL Server

### 2. Cài đặt

**Bước 1: Clone dự án**
\`\`\`bash
git clone <link-repo-cua-ban>
cd PTIT
\`\`\`

**Bước 2: Cấu hình Database**
- Tạo database trống trong MySQL tên là `ptit_vr_db`.
- Vào thư mục `backend`, tạo file `.env` từ file `.env.example` (nếu có) và điền thông tin đăng nhập MySQL.

**Bước 3: Chạy Backend**
\`\`\`bash
cd backend
npm install
npm run dev
# Server chạy tại: http://localhost:5000
\`\`\`

**Bước 4: Chạy Frontend**
Mở một terminal mới:
\`\`\`bash
cd frontend
npm install
npm run dev
# Web chạy tại: http://localhost:5173
\`\`\`

## 👥 Thành viên nhóm
1. Nguyễn Văn A - B21DCCNxxx
2. Trần Văn B - B21DCCNxxx
3. Lê Thị C - B21DCCNxxx