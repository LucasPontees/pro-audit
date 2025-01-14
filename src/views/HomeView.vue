<script setup lang="ts"></script>

<template>
  <main class="announcement-container">
    <div class="announcement">
      <h1>🚧 Site em Desenvolvimento 🚧</h1>
      <div class="animation-bar"></div>
    </div>
  </main>
</template>

<style scoped>
.announcement-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.announcement {
  text-align: center;
  padding: 2rem 4rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: float 3s ease-in-out infinite;
}

.announcement h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.animation-bar {
  height: 4px;
  background: linear-gradient(90deg, #4caf50, #2196f3);
  border-radius: 2px;
  animation: progress 2s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes progress {
  0% {
    width: 0%;
    margin-left: 0;
  }
  50% {
    width: 100%;
    margin-left: 0;
  }
  100% {
    width: 0%;
    margin-left: 100%;
  }
}
</style>
