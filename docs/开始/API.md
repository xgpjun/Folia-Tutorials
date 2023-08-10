---
sidebar_position: 3
---

目前，Bukkit中有很多API是依赖主线程实现的，例如Bukkit Scheduler。

Folia的`RegionScheduler`和`EntityScheduler`允许将任务调度到“拥有”该特定位置或实体的区域的“下一个tick”运行。

这意味着你可以使用这些调度器来创建在特定区域中下一tick时执行的任务。例如，在该区域内下一tick时进行某个位置上的操作，或者在该区域的实体下一tick时执行某项任务。

这些方法包含在PaperAPI在，当然可以在Paper端调用，只不过它们都会在Paper的主线程中执行。

### 添加

添加了`RegionScheduler`, `AsyncScheduler`, `GlobalRegionScheduler`和`EntityScheduler`作为`BukkitScheduler`的替代品。

`EntityScheduler`通过`entity#getScheduler`获得，其余则使用`Bukkit`/`Server`类获得。

`Bukkit#isownedbycurrentreregion` 用于检测当前代码执行的区域是否有对应的实体、方块、Location等。

因为没有明确的主线程，事件的async修饰符都被标记了弃用。

### 不再可用的API

部分 传送门/重生/登录的API不可用。

记分板、世界加载和卸载API均不可用。

Entity#teleport。在任何情况下的传送都不能使用，使用teleportAsync

### 计划中要添加的API(官方画饼)

一种异步事件，可以在不同的线程上下文中执行，允许事件在稍微晚的节点执行。例如访问所在区域不相同的方块数据，需要先异步加载区块。

世界加载/卸载

加强线程安全检查。

and more...
