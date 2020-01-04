<template>
    <div>
      <i-panel v-for="title in titles" :key="title" >
        <view style="padding: 15px;">{{title.title}}</view>
      </i-panel>
    </div>
</template>