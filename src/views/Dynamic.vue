<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import parse from "rss-to-json";
import { useStore, planforms, members, RSSUrl, uid } from "../utils/stores";
import { useI18n } from "vue-i18n";

const store = useStore();
const { d } = useI18n({ useScope: "global" });

const { t } = useI18n({
  messages: {
    zh: {
      title: "最近动态",
      select: "选择",
      dialog: "动态筛选",
      source: "源动态",
    },
    en: {
      title: "Latest Dynamics",
      select: "Select",
      dialog: "Dynamic filter",
      source: "Source",
    },
  },
});

const dynamics = ref(<any[]>[]);

// 加载动态
const load = () => {
  dynamics.value = store.getDynamics.slice(0, dynamics.value.length + 5);
};

const reload = () => {
  dynamics.value = store.getDynamics.slice(
    0,
    Math.max(dynamics.value.length, 5)
  );
};

onBeforeMount(
  // 获取动态
  () => {
    Promise.all(
      store.selected.map(([planform, member]) => {
        return new Promise<void>(async (resolve) => {
          try {
            store.updateDynamic(
              planform,
              member,
              (await parse(RSSUrl[planform] + uid[planform][member], {})).items
            );
            options.forEach((option) => {
              if (option.value === planform) {
                option.children.forEach((child) => {
                  if (child.value === member) {
                    child.disabled = false;
                  }
                });
              }
            });
            resolve();
          } catch (error) {
            console.log(error);
            resolve();
          }
        });
      })
    ).then(() => {
      store.loading.dynamics = false;
    });
  }
);

// 创建选项卡
const dialogVisible = ref(false);

const props = { multiple: true };

const options: {
  value: keyof planforms;
  label: keyof planforms;
  children: { value: keyof members; label: keyof members; disabled: boolean }[];
}[] = [];

let planform: keyof planforms;
let member: keyof members;

for (planform in store.dynamics) {
  const children = [];
  for (member in store.dynamics[planform]) {
    children.push({
      value: member,
      label: member,
      disabled: true,
    });
  }
  options.push({ value: planform, label: planform, children: children });
}
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    v-on:close="reload"
    :title="t(`dialog`)"
    width="280px"
  >
    <el-cascader-panel
      v-model="store.selected"
      :options="options"
      :props="props"
    />
  </el-dialog>

  <el-row justify="center">
    <el-col :md="17" :sm="19" :xs="24">
      <div class="title">
        <span>{{ t("title") }}</span>
        <el-button
          class="select-button"
          @click="dialogVisible = true"
          :loading="store.loading.dynamics"
          type="text"
          >{{ t("select") }}</el-button
        >
      </div>

      <el-card
        class="infinite-list"
        v-infinite-scroll="load"
        infinite-scroll-distance="100"
        v-loading="store.loading.dynamics"
        shadow="never"
      >
        <el-timeline>
          <el-timeline-item
            v-for="dynamic in dynamics"
            :timestamp="d(dynamic.created, `long`)"
            placement="top"
          >
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <el-space wrap>
                    <el-avatar :src="dynamic.member" size="small"></el-avatar>
                    <el-avatar :src="dynamic.planform" size="small"></el-avatar>
                  </el-space>
                  <el-link :href="dynamic.link" target="_blank" type="info">{{
                    t("source")
                  }}</el-link>
                </div>
              </template>
              <div>{{ dynamic.title }}</div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.select-button {
  width: 64px;
}
.infinite-list {
  height: calc(100vh - 137px);
  overflow: auto;
}
</style>
