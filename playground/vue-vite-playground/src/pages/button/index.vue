<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

const handleClick = () => {
  console.log('Button clicked!')
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div style="padding: 20px;">
    <h2>基础用法</h2>
    <div class="group">
      <TxButton>默认按钮</TxButton>
      <TxButton type="primary">主要按钮</TxButton>
      <TxButton type="success">成功按钮</TxButton>
      <TxButton type="info">信息按钮</TxButton>
      <TxButton type="warning">警告按钮</TxButton>
      <TxButton type="danger">危险按钮</TxButton>
    </div>

    <h2>禁用状态</h2>
    <div class="group">
      <TxButton disabled>默认按钮</TxButton>
      <TxButton type="primary" disabled>主要按钮</TxButton>
      <TxButton type="success" disabled>成功按钮</TxButton>
      <TxButton type="info" disabled>信息按钮</TxButton>
      <TxButton type="warning" disabled>警告按钮</TxButton>
      <TxButton type="danger" disabled>危险按钮</TxButton>
    </div>

    <h2>文字按钮</h2>
    <div class="group">
      <TxButton type="text">文字按钮</TxButton>
      <TxButton type="text" disabled>文字按钮</TxButton>
    </div>

    <h2>朴素按钮</h2>
    <div class="group">
      <TxButton plain>朴素按钮</TxButton>
      <TxButton type="primary" plain>主要按钮</TxButton>
      <TxButton type="success" plain>成功按钮</TxButton>
      <TxButton type="info" plain>信息按钮</TxButton>
      <TxButton type="warning" plain>警告按钮</TxButton>
      <TxButton type="danger" plain>危险按钮</TxButton>
    </div>

    <h2>圆角按钮</h2>
    <div class="group">
      <TxButton round>圆角按钮</TxButton>
      <TxButton type="primary" round>主要按钮</TxButton>
      <TxButton type="success" round>成功按钮</TxButton>
      <TxButton type="info" round>信息按钮</TxButton>
      <TxButton type="warning" round>警告按钮</TxButton>
      <TxButton type="danger" round>危险按钮</TxButton>
    </div>

    <h2>图标按钮</h2>
    <div class="group">
      <TxButton type="primary" icon="edit" circle></TxButton>
      <TxButton type="primary" icon="share" circle></TxButton>
      <TxButton type="primary" icon="delete" circle></TxButton>
      <TxButton type="primary" icon="search">搜索</TxButton>
    </div>

    <h2>加载中</h2>
    <div class="group">
      <TxButton type="primary" :loading="loading" @click="handleClick">
        {{ loading ? '加载中' : '点击加载' }}
      </TxButton>
      <TxButton type="primary" loading></TxButton>
    </div>

    <h2>不同尺寸</h2>
    <div class="group">
      <TxButton size="large">大型按钮</TxButton>
      <TxButton>默认按钮</TxButton>
      <TxButton size="small">小型按钮</TxButton>
      <TxButton size="mini">超小按钮</TxButton>
    </div>

    <h2>震动反馈</h2>
    <div class="group">
      <TxButton type="primary" vibrate-type="light">轻微震动</TxButton>
      <TxButton type="primary" vibrate-type="medium">中等震动</TxButton>
      <TxButton type="primary" vibrate-type="heavy">重度震动</TxButton>
      <TxButton type="success" vibrate-type="success">成功震动</TxButton>
      <TxButton type="warning" vibrate-type="warning">警告震动</TxButton>
      <TxButton type="danger" vibrate-type="error">错误震动</TxButton>
      <TxButton type="info" :vibrate="false">无震动</TxButton>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin: 20px 0 10px 0;
  color: #333;
}

.group {
  margin-bottom: 20px;
}
</style>
