# Button 按钮

按钮用于触发一个操作，如提交表单。

## 基础用法

基础的按钮用法。

```vue
<template>
  <div>
    <TxButton>默认按钮</TxButton>
    <TxButton type="primary">主要按钮</TxButton>
    <TxButton type="success">成功按钮</TxButton>
    <TxButton type="info">信息按钮</TxButton>
    <TxButton type="warning">警告按钮</TxButton>
    <TxButton type="danger">危险按钮</TxButton>
  </div>
</template>
```

## 禁用状态

按钮不可用状态。

```vue
<template>
  <div>
    <TxButton disabled>默认按钮</TxButton>
    <TxButton type="primary" disabled>主要按钮</TxButton>
    <TxButton type="success" disabled>成功按钮</TxButton>
    <TxButton type="info" disabled>信息按钮</TxButton>
    <TxButton type="warning" disabled>警告按钮</TxButton>
    <TxButton type="danger" disabled>危险按钮</TxButton>
  </div>
</template>
```

## 文字按钮

没有边框和背景色的按钮。

```vue
<template>
  <div>
    <TxButton type="text">文字按钮</TxButton>
    <TxButton type="text" disabled>文字按钮</TxButton>
  </div>
</template>
```

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

```vue
<template>
  <div>
    <TxButton type="primary" icon="edit"></TxButton>
    <TxButton type="primary" icon="share"></TxButton>
    <TxButton type="primary" icon="delete"></TxButton>
    <TxButton type="primary" icon="search">搜索</TxButton>
    <TxButton type="primary">上传<TxIcon name="upload" /></TxButton>
  </div>
</template>
```

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

```vue
<template>
  <TxButtonGroup>
    <TxButton type="primary">上一页</TxButton>
    <TxButton type="primary">下一页</TxButton>
  </TxButtonGroup>
</template>
```

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

```vue
<template>
  <div>
    <TxButton type="primary" loading>加载中</TxButton>
    <TxButton type="primary" loading></TxButton>
  </div>
</template>
```

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

```vue
<template>
  <div>
    <TxButton size="large">大型按钮</TxButton>
    <TxButton>默认按钮</TxButton>
    <TxButton size="small">小型按钮</TxButton>
    <TxButton size="mini">超小按钮</TxButton>
  </div>
</template>
```

## API

### Button Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| size | 尺寸 | string | large / small / mini | — |
| type | 类型 | string | primary / success / warning / danger / info / text | — |
| plain | 是否朴素按钮 | boolean | — | false |
| round | 是否圆角按钮 | boolean | — | false |
| circle | 是否圆形按钮 | boolean | — | false |
| loading | 是否加载中状态 | boolean | — | false |
| disabled | 是否禁用状态 | boolean | — | false |
| icon | 图标类名 | string | — | — |
| autofocus | 是否默认聚焦 | boolean | — | false |
| native-type | 原生 type 属性 | string | button / submit / reset | button |

### Button Events

| 事件名称 | 说明 | 回调参数 |
|----------|------|----------|
| click | 点击时触发 | event |
