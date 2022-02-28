<script setup lang="ts">
import Bella from "../assets/images/beilalabella.webp";

const images = [
  {
    uid: "20682852",
    image:
      "https://i0.hdslb.com/bfs/album/80f9fe1428b635bdc42c556a5c745318d2816a5b.png@1080w.webp",
  },
  {
    uid: "5298187",
    image:
      "https://i0.hdslb.com/bfs/album/23e194fab395f6f56fa449f20d4895e0746e11d2.jpg@1080w.webp",
  },
  {
    uid: "5298187",
    image:
      "https://i0.hdslb.com/bfs/album/b45347cdfa7b44f2c8bf7b3f08fcb7f568b8e7b8.jpg@1080w.webp",
  },
  {
    uid: "5298187",
    image:
      "https://i0.hdslb.com/bfs/album/88ac0f630e41feb972091f4374978085552302f9.jpg@1080w.webp",
  },
  {
    uid: "5298187",
    image:
      "https://i0.hdslb.com/bfs/album/6cda17aad4996aaa2f4a85cb0747f931030869bd.jpg@1080w.webp",
  },
  {
    uid: "5298187",
    image:
      "https://i0.hdslb.com/bfs/album/1be24be9ebad821200985392b61cc016cf4c3648.jpg@1080w.webp",
  },
];

const carousel = [{ uid: "2648890", image: Bella }].concat(
  getRandomArrayElements(images, 2)
);

function getRandomArrayElements(arr: any[], count: number) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
</script>

<template>
  <el-row class="banner-box" justify="center">
    <el-col :span="23">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <el-carousel
          height="calc(100vh - 110px)"
          :interval="5000"
          trigger="click"
          arrow="never"
        >
          <el-carousel-item v-for="item in carousel">
            <el-tooltip
              :content="`uid: ` + item.uid"
              :show-after="500"
              :offset="-130"
              placement="right"
              effect="dark"
            >
              <img
                :src="item.image"
                :alt="item.image"
                referrerpolicy="no-referrer"
              />
            </el-tooltip>
          </el-carousel-item>
        </el-carousel>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner-box {
  margin-bottom: 40px;
}
</style>
