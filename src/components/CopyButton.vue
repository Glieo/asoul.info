<script setup lang="ts">
import { useI18n } from "vue-i18n";

import "element-plus/theme-chalk/src/message.scss";
import { ElMessage } from "element-plus";

const props = defineProps({
  content: String,
});

const { t } = useI18n({
  messages: {
    zh: {
      copy: "复制",
      copySuccess: "复制成功",
      copyFail: "复制失败",
      copyEmpty: "没有复制内容",
    },
    en: {
      copy: "Copy",
      copySuccess: "Copy success",
      copyFail: "Copy fail",
      copyEmpty: "No copy content",
    },
  },
});

// 复制内容
function copy(data: string | undefined) {
  if (!data) {
    ElMessage({
      message: t("copyEmpty"),
      type: "error",
      offset: 70,
    });
    return;
  }

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
</script>

<template>
  <el-button @click="copy(props.content)" type="text">
    {{ t("copy") }}
  </el-button>
</template>

<style scoped></style>
