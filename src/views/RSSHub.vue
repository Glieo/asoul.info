<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore, planforms, members, RSSUrl, uid } from "../utils/stores";
import { useI18n } from "vue-i18n";

import "element-plus/theme-chalk/src/message.scss";
import { ElMessage } from "element-plus";

const store = useStore();

const { t } = useI18n({
  messages: {
    zh: {
      title: "RSS订阅",
      copy: "复制",
      copySuccess: "复制成功",
      copyFail: "复制失败",
      subscribe: "订阅链接",
      dynamic: "各成员动态",
      custom: "自定订阅地址",
      more: "更多规则请查看 ",

      aszb: "ASOUL周报的动态",
      jbjb: "贾布加布的投稿",
      hbzl: "魂报的专栏",
      asch: "ASOUL微博超话",
    },
    en: {
      title: "RSS Subscription",
      copy: "Copy",
      copySuccess: "Copy success",
      copyFail: "Copy fail",
      subscribe: "Subscribe link",
      dynamic: "Dynamics of each member",
      custom: "Custom subscription address",
      more: "For more rules, please check ",

      aszb: "Dynamics of ASOUL Weekly News",
      jbjb: "Jabu Gabe's contribution",
      hbzl: "Column of ASoul Newspaper",
      asch: "ASOUL Weibo super talk",
    },
  },
});

// 复制内容
function copy(data: string) {
  navigator.clipboard.writeText(data).then(
    () => {
      ElMessage({
        message: t("copySuccess"),
        type: "success",
        offset: 70,
      });
    },
    () => {
      ElMessage({
        message: t("copyFail"),
        type: "error",
        offset: 70,
      });
    }
  );
}

// 创建自定订阅地址
const custom_selected = ref(RSSUrl["video"] + "393396916");

const custom_options = computed(() => [
  {
    description: t("aszb"),
    url: RSSUrl["bilibili"] + "1185499676",
  },
  { description: t("jbjb"), url: RSSUrl["video"] + "393396916" },
  {
    description: t("hbzl"),
    url: RSSUrl["article"] + "619440171",
  },
  {
    description: t("asch"),
    url: RSSUrl["super"] + "10080861838dd4bdf01b1414e70089ca10d776",
  },
]);

// 创建成员动态选项卡
const dynamic_url = computed(
  () =>
    RSSUrl[dynamic_selected.value[0]] +
    uid[dynamic_selected.value[0]][dynamic_selected.value[1]]
);

const dynamic_selected = ref(<[keyof planforms, keyof members]>[
  "bilibili",
  "official",
]);

const dynamic_options: {
  value: keyof planforms;
  label: keyof planforms;
  children: { value: keyof members; label: keyof members }[];
}[] = [];

let planform: keyof planforms;
let member: keyof members;

for (planform in store.dynamics) {
  const children = [];
  for (member in store.dynamics[planform]) {
    children.push({
      value: member,
      label: member,
    });
  }
  dynamic_options.push({
    value: planform,
    label: planform,
    children: children,
  });
}
</script>

<template>
  <el-row justify="center">
    <el-col :md="17" :sm="19" :xs="24">
      <div class="title">
        <span>{{ t("title") }}</span>
      </div>

      <el-card class="info-box" shadow="hover">
        <template #header>
          <div class="card-header">
            <span>{{ t("dynamic") }}</span>
            <el-button @click="copy(dynamic_url)" type="text">{{
              t("copy")
            }}</el-button>
          </div>
        </template>
        <div class="rss-box">
          <el-cascader v-model="dynamic_selected" :options="dynamic_options" />
          <div class="rss-link">
            <el-tooltip :content="dynamic_url" placement="top">
              <el-link
                :href="dynamic_url"
                :underline="false"
                target="_blank"
                type="primary"
                >{{ t("subscribe") }}</el-link
              >
            </el-tooltip>
          </div>
        </div>
      </el-card>

      <el-card class="info-box" shadow="hover">
        <template #header>
          <div class="card-header">
            <span>{{ t("custom") }}</span>
            <el-button @click="copy(custom_selected)" type="text">{{
              t("copy")
            }}</el-button>
          </div>
        </template>
        <div class="rss-box">
          <el-radio-group class="radio-box" v-model="custom_selected">
            <el-radio v-for="item in custom_options" :label="item.url">{{
              item.description
            }}</el-radio>
          </el-radio-group>
          <div class="rss-link">
            <el-tooltip :content="custom_selected" placement="top">
              <el-link
                :href="custom_selected"
                :underline="false"
                target="_blank"
                type="primary"
                >{{ t("subscribe") }}</el-link
              >
            </el-tooltip>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="card-header">
          <div>
            <span>{{ t("more") }}</span>
            <el-link
              href="https://docs.rsshub.app"
              :underline="false"
              target="_blank"
              type="primary"
              >docs.rsshub.app</el-link
            >
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.rss-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.rss-link {
  margin: 8px;
}
.radio-box {
  flex-direction: column;
  align-items: flex-start;
}
</style>
