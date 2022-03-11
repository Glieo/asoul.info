<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "../utils/stores";
import { useI18n } from "vue-i18n";

import "element-plus/theme-chalk/src/message.scss";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/src/notification.scss";
import { ElNotification } from "element-plus";
import { Link } from "@element-plus/icons-vue";

import CopyButton from "../components/CopyButton.vue";

const store = useStore();

const { t } = useI18n({
  messages: {
    zh: {
      title: "短链",
      generate: "生成短链",
      submit: "提交",
      url_input: "输入链接",
      slug_input: "可以留空",
      createSuccess: "短链创建成功",
      example: "示例",
      go: "跳转",
    },
    en: {
      title: "Shorty",
      generate: "Generate short link",
      submit: "Submit",
      url_input: "Enter link",
      slug_input: "Can be empty",
      createSuccess: "Short link created successfully",
      example: "Example",
      go: "Go",
    },
  },
});

const longUrl = ref("");
const slug = ref("");
const getting = ref(false);
const url_prefix = ref("https://");

// 输入是否有效
const isValidated = computed(() => {
  return !(
    /^https?:\/\/.{3,}/.test(url_prefix.value + longUrl.value) &&
    (!slug.value.length || /^[a-zA-Z0-9]{3,}$/.test(slug.value))
  );
});

// 提交api
function submit() {
  getting.value = true;
  fetch("https://asoul.info/create", {
    method: "post",
    body: new URLSearchParams({
      url: url_prefix.value + longUrl.value,
      slug: slug.value,
    }),
    mode: "cors",
  })
    .then((res) => res.json())
    .then((res) => {
      getting.value = false;
      if (res.message) {
        ElMessage({
          message: res.message,
          type: "error",
        });
        return;
      }
      slug.value = res.slug;
      ElNotification({
        title: t("createSuccess"),
        message: "Url: asoul.info/" + slug.value,
        position: "bottom-right",
        onClick: () => {
          window.open("https://asoul.info/" + slug.value);
        },
      });
    })
    .catch((err) => {
      getting.value = false;
      ElMessage({
        message: err.message,
        type: "error",
      });
    });
}

// 创建示例地址
const members = Reflect.ownKeys(store.fans);
const example_selected = ref(members[0] as string);

const example_url = computed(() => {
  return "asoul.info/" + example_selected.value;
});
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
            <span>{{ t("generate") }}</span>
            <CopyButton
              :content="`asoul.info/` + slug"
              :disabled="slug.length == 0"
            ></CopyButton>
          </div>
        </template>

        <el-space class="generate-box" direction="vertical">
          <el-input
            v-model="longUrl"
            :placeholder="t(`url_input`)"
            :suffix-icon="Link"
            clearable
          >
            <template #prepend>
              <el-select
                class="prefix-select"
                v-model="url_prefix"
                placeholder="Select"
              >
                <el-option label="https://" value="https://"></el-option>
                <el-option label="http://" value="http://"></el-option>
              </el-select> </template
          ></el-input>
          <el-input
            v-model="slug"
            :placeholder="t(`slug_input`)"
            minlength="3"
            maxlength="9"
            show-word-limit
            clearable
          >
            <template #prepend>asoul.info/</template>
          </el-input>
          <el-button
            @click="submit()"
            :loading="getting"
            :disabled="isValidated"
            type="primary"
            round
          >
            {{ t("submit") }}
          </el-button>
        </el-space>
      </el-card>

      <el-card class="info-box" shadow="hover">
        <template #header>
          <div class="card-header">
            <span>{{ t("example") }}</span>
            <CopyButton :content="example_url"></CopyButton>
          </div>
        </template>
        <el-row justify="space-around">
          <el-radio-group class="radio-box" v-model="example_selected">
            <el-radio v-for="member in members" :label="(member as string)">
              {{ member }}
            </el-radio>
          </el-radio-group>
          <el-tooltip :content="example_url" placement="top">
            <el-link
              :href="`https://` + example_url"
              :underline="false"
              target="_blank"
              type="primary"
              >{{ t("go") }}</el-link
            >
          </el-tooltip>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.generate-box {
  width: 100%;
}
.prefix-select {
  width: 90px;
  --el-select-input-focus-border-color: rgba(0, 0, 0, 0);
}
</style>
