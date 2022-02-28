<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import parse from "rss-to-json";
import { useStore, members, RSSUrl, roomID } from "../utils/stores";
import { useI18n } from "vue-i18n";

import "element-plus/theme-chalk/src/notification.scss";
import { ElNotification } from "element-plus";
import { Sunny, Moon, Switch } from "@element-plus/icons-vue";

const store = useStore();
const { locale } = useI18n({ useScope: "global" });

const { t } = useI18n({
  messages: {
    zh: {
      home: "首页",
      dynamic: "动态",
      rsshub: "RSS订阅",
      live: "{msg} 正在直播",
    },
    en: {
      home: "Home",
      dynamic: "Dynamics",
      rsshub: "RSSHub",
      live: "{msg} is broadcasting live",
    },
  },
});

const pathname = ref("");

// 夜间模式
let date = new Date();
if (date.getHours() > 21 || date.getHours() < 7) {
  changeMode();
}
function changeMode() {
  store.darkMode = !store.darkMode;
  document.body.classList.toggle("element-plus-dark");
}

// 切换语言
function changeLanguage() {
  locale.value = locale.value === "zh" ? "en" : "zh";
}

onBeforeMount(() => {
  // 获取当前路径
  pathname.value = window.location.pathname;
  // 获取直播状态
  store.live = [];
  Promise.all(
    Reflect.ownKeys(store.fans).map((member) => {
      return new Promise<void>(async (resolve) => {
        try {
          store.updateLive({
            member: member,
            live: (
              await parse(RSSUrl["live"] + roomID[member as keyof members], {})
            ).items[0],
          });
          resolve();
        } catch (error) {
          resolve();
        }
      });
    })
  ).then(() => {
    store.getLive.forEach((live) => {
      setTimeout(() => {
        ElNotification({
          title: t("live", { msg: live.member }),
          dangerouslyUseHTMLString: true,
          message: live.description,
          position: "bottom-right",
          onClick: () => {
            window.open(live.link);
          },
        });
      }, 1000);
    });
  });
});
</script>

<template>
  <div class="toolbar">
    <el-menu
      class="toolbar-nav"
      :default-active="pathname"
      mode="horizontal"
      router
    >
      <el-menu-item index="/">{{ t("home") }}</el-menu-item>
      <el-menu-item index="/dynamic">{{ t("dynamic") }}</el-menu-item>
      <el-menu-item index="/rss">{{ t("rsshub") }}</el-menu-item>
      <div class="toolbar-action toolbar-side">
        <el-space class="sub-action" wrap>
          <a v-for="live in store.getLive" :href="live.link" target="_blank">
            <el-avatar :src="live.avatar"></el-avatar>
          </a>
          <el-button
            @click="changeMode"
            :icon="store.darkMode ? Sunny : Moon"
            aria-label="change Mode"
            size="large"
            circle
          ></el-button>
          <el-button
            @click="changeLanguage"
            :icon="Switch"
            aria-label="change Language"
            size="large"
            circle
          ></el-button>
        </el-space>
      </div>
    </el-menu>
    <div class="toolbar-title toolbar-side">
      <el-link class="site-title" :underline="false" href="/"
        >A-Soul Info</el-link
      >
    </div>
  </div>
</template>

<style scoped>
.toolbar {
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  z-index: 723;
}
.toolbar-nav {
  justify-content: center;
}
.toolbar-side {
  position: absolute;
  display: inline-flex;
  align-items: center;
  height: 100%;
  top: 0;
}
.toolbar-title {
  left: 0;
  padding-left: 80px;
}
.toolbar-action {
  right: 0;
  padding-right: 80px;
}
.site-title {
  font-size: 1.3em;
  font-weight: bold;
}

@media (max-width: 768px) {
  .toolbar-action {
    display: none !important;
  }
  .toolbar-nav {
    height: 59px;
    padding-left: 100%;
    justify-content: flex-end !important;
  }
  .toolbar-title {
    transform: translate(-3.5em);
    padding-left: 50% !important;
  }
  .sub-action {
    margin-left: 10px;
    flex-direction: row-reverse;
  }
}
</style>
