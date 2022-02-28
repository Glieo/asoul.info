<script setup lang="ts">
import { onBeforeMount } from "vue";
import parse from "rss-to-json";
import { useStore, members, RSSUrl, uid } from "../utils/stores";
import { useI18n } from "vue-i18n";

const store = useStore();

const { t } = useI18n({
  messages: {
    zh: {
      schedule: "日程表",
      source: "源动态",
      member: "成员",
      fans: "粉丝",
      new: "新粉丝",
    },
    en: {
      schedule: "Schedule",
      source: "Source",
      member: "Member",
      fans: "Fans",
      new: "New followers",
    },
  },
});

onBeforeMount(() => {
  // 获取官号文章
  (async () => {
    try {
      store.updateArticle(
        (await parse(RSSUrl["article"] + uid["bilibili"]["official"], {})).items
      );
      store.loading.articles = false;
    } catch (error) {
      console.log(error);
    }
  })();

  // 获取官号微博
  (async () => {
    try {
      store.updateSchedule(
        (await parse(RSSUrl["weibo"] + uid["weibo"]["official"], {})).items
      );
      store.loading.schedules = false;
    } catch (error) {
      console.log(error);
    }
  })();

  // 获取粉丝数
  Promise.all(
    Reflect.ownKeys(store.fans).map((member) => {
      return new Promise<void>(async (resolve, reject) => {
        try {
          store.updateFan(
            member as keyof members,
            (
              await parse(
                RSSUrl["fans"] + uid["bilibili"][member as keyof members],
                {}
              )
            ).items
          );
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    })
  )
    .then(() => {
      store.loading.fans = false;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <el-row class="article-box" justify="center">
    <el-col :md="20" :sm="21">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <el-carousel height="auto" indicator-position="outside" trigger="click">
          <el-skeleton :loading="store.loading.articles" animated>
            <template #template>
              <el-carousel-item class="skeleton-article">
                <el-skeleton-item class="skeleton-img" variant="image" />
              </el-carousel-item>
              <el-carousel-item v-for="index in 4">
                <el-skeleton-item class="skeleton-img" variant="image" />
              </el-carousel-item>
            </template>
            <template #default>
              <img
                class="toolImg"
                :src="store.getArticles[0].image"
                alt="toolImg"
                referrerpolicy="no-referrer"
              />
              <el-carousel-item v-for="item in store.getArticles">
                <a :href="item.link" target="_blank">
                  <img
                    :src="item.image"
                    :alt="item.image"
                    referrerpolicy="no-referrer"
                  />
                </a>
              </el-carousel-item>
            </template>
          </el-skeleton>
        </el-carousel>
      </el-card>
    </el-col>
  </el-row>

  <el-row :gutter="20" justify="center">
    <el-col class="info-box" :md="18" :sm="17">
      <el-card :body-style="{ padding: '10px' }" shadow="hover">
        <template #header>
          <div class="card-header">
            <span>{{ t("schedule") }}</span>
            <el-link
              :href="store.getSchedules?.link"
              target="_blank"
              type="info"
              >{{ t("source") }}</el-link
            >
          </div>
        </template>
        <el-skeleton :loading="store.loading.schedules" animated>
          <template #template>
            <div class="skeleton-schedule">
              <el-skeleton-item class="skeleton-img" variant="image" />
            </div>
          </template>
          <template #default>
            <img
              :src="store.getSchedules?.image"
              alt="Schedule"
              referrerpolicy="no-referrer"
            />
          </template>
        </el-skeleton>
      </el-card>
    </el-col>

    <el-col class="info-box" :md="6" :sm="7" :xs="21">
      <el-card shadow="hover">
        <el-skeleton :loading="store.loading.fans" animated>
          <template #template>
            <el-table :data="store.getFans">
              <el-table-column :label="t(`member`)">
                <template #default="scope">
                  <el-avatar :src="scope.row.avatar"></el-avatar>
                </template>
              </el-table-column>
              <el-table-column :label="t(`fans`)">
                <template #default>
                  <el-skeleton-item variant="text" />
                </template>
              </el-table-column>
            </el-table>
          </template>
          <template #default>
            <el-table :data="store.getFans">
              <el-table-column :label="t(`member`)">
                <template #default="scope">
                  <el-avatar :src="scope.row.avatar"></el-avatar>
                </template>
              </el-table-column>
              <el-table-column :label="t(`fans`)">
                <template #default="scope">
                  <el-popover
                    :content="scope.row.followers.toLocaleString()"
                    :title="t(`new`)"
                    :width="200"
                    placement="top-start"
                    trigger="hover"
                  >
                    <template #reference>{{ scope.row.count }}</template>
                  </el-popover>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-skeleton>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
img {
  width: 100%;
}
.toolImg {
  opacity: 0;
}
.article-box {
  margin-bottom: 20px;
}
.skeleton-img {
  width: 100%;
  height: 100%;
  position: absolute;
}
.skeleton-article {
  width: 100%;
  padding-bottom: 29.375%;
  position: relative;
}
.skeleton-schedule {
  width: 100%;
  padding-bottom: 67%;
  position: relative;
}
</style>
