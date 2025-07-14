import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/taskbotics/',
  // 저장소 이름만 사용: schoi69821/는 제외하고 /taskbotics/만 입력
  // 슬래시 포함: 앞뒤로 슬래시(/)를 꼭 포함해야 함
  // 대소문자 구분: GitHub 저장소 이름과 정확히 일치해야 함
})