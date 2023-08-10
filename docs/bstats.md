---
sidebar_position: 7
---

# 关于bstats

本人在使用过程中发现bstats会报错，因此需要对bstats也进行一些更改。

所以我选择直接复制一个java下来：[bstats-metrics](https://github.com/Bastian/bstats-metrics/blob/1.x.x/bstats-bukkit/src/main/java/org/bstats/bukkit/Metrics.java)  修改191行，  `Bukkit.getScheduler().runTask(plugin, this::submitData)`;

使用前文中`GlobalRegionScheduler` 或者`AsyncScheduler`