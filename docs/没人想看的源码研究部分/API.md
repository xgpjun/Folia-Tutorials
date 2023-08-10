---
sidebar_position: 1
---

## API代码修改

### 强制禁用Timings

类似spark的功能。 

#### Timings

> package co.aikar.timings

```java
     public static void setTimingsEnabled(boolean enabled) {
+        enabled = false; // Folia - region threading - disable timings
         timingsEnabled = enabled;
         warnAboutDeprecationOnEnable();
         reset();
     }
```

由于Folia独特的tick机制，这个功能失效

```java
     private static void warnAboutDeprecationOnEnable() {
-        if (timingsEnabled && !warnedAboutDeprecationOnEnable) {
+        if ((true || timingsEnabled) && !warnedAboutDeprecationOnEnable) { // Folia
             Bukkit.getLogger().warning(PlainTextComponentSerializer.plainText().serialize(deprecationMessage()));
             warnedAboutDeprecationOnEnable = true;
         }
```

由于上面的timingsEnabled始终为false，做出的更改。

```java
     public static Component deprecationMessage() {
         return Component.text()
-            .color(TextColor.color(0xf3ef91))
-            .append(Component.text("[!] The timings profiler has been enabled but has been scheduled for removal from Paper in the future."))
+            .color(TextColor.color(0xf39195)) // Folia
+            .append(Component.text("[!] The timings system cannot be enabled on Folia, and has been scheduled for removal from Paper in the future.")) // Folia
             .append(Component.newline())
             .append(
                 Component.text("    We recommend installing the spark profiler as a replacement: ")
           ...
     }
```

提示你timings system在Folia无法使用。

#### TimingsCommand

> package co.aikar.timings

```java
public boolean execute(@NotNull CommandSender sender, @NotNull String currentAlias, @NotNull String[] args) {
         if (!testPermission(sender)) {
             return true;
         }
-        if (false) {
+        if (true) {
             sender.sendMessage(Timings.deprecationMessage());
+            return true;
         }
         if (args.length < 1) {
             sender.sendMessage(text("Usage: " + this.usageMessage, NamedTextColor.RED));
             ......
         }
  ......
}
```

在命令层面禁用Timings系统， 直接return就执行不到余下的语句了捏。

### 调度程序

####  SimplePluginManager

> package org.bukkit.plugin

这个类拥有插件的启用和启用的相关方法。

```java
public void disablePlugin(@NotNull final Plugin plugin) { 
  ...
						try {
-                server.getScheduler().cancelTasks(plugin);
+                server.getAsyncScheduler().cancelTasks(plugin); // Folia - new schedulers
             } catch (Throwable ex) {
-                handlePluginException("Error occurred (in the plugin loader) while cancelling tasks for "
+                handlePluginException("Error occurred (in the plugin loader) while cancelling async tasks for " 
                                       // Folia - new schedulers
                         + plugin.getDescription().getFullName() + " (Is it up to date?)", ex, plugin); // Paper
             }
  ...
}
```

由于调度程序的修改，在禁用插件取消所有task需要使用独特的方法。 在这里是使用`getAsyncScheduler().cancelTasks(plugin)`来取消所有任务。

#### BukkitScheduler

> package org.bukkit.scheduler

Bukkit调度程序实现的就是这个接口，Folia把它标记了`@Deprecated` 

```java
/**
 * @deprecated Use one of {@link io.papermc.paper.threadedregions.scheduler.RegionScheduler},
 *                        {@link io.papermc.paper.threadedregions.scheduler.AsyncScheduler},
 *                        {@link io.papermc.paper.threadedregions.scheduler.EntityScheduler},
 *                        or {@link io.papermc.paper.threadedregions.scheduler.GlobalRegionScheduler}
 */
```

因此在Folia中你需要使用 `RegionScheduler`、`AsyncScheduler`、`EntityScheduler` 或 `GlobalRegionScheduler` 。

当然`Bukkit.getScheduler`.....  并没有标记弃用，希望你别顺手写上去了 233



### 显性标注支持Folia

这个就是之前提的必须在plugin.yml中添加 `folia-supported: true` 插件才会正常加载

#### PluginMeta

> package io.papermc.paper.plugin.configuration

这个接口就是管plugin.yml的。

```java
    // Folia start - block plugins not marked as supported
+    /**
+     * Returns whether the plugin has been marked to be compatible with regionised threading as provided
+     * by Folia
+     */
+    public boolean isFoliaSupported();
+    // Folia end - block plugins not marked as supported
```

添加了一个isFoliaSupported()的方法，用于在Folia端读取是否填写了`folia-supported: true`。



#### PluginDescriptionFile

> package org.bukkit.plugin

DescriptionFile... 同样的就是 plugin.yml 这是bukkit包的类，folia中实现了上方的接口。

```java
    // Folia start - block plugins not marked as supported
    private String foliaSupported;
    private static final String FOLIA_SUPPORTED_KEY = "folia-supported";

    /**
     * Returns whether the plugin has been marked to be compatible with regionised threading as provided
     * by Folia
     */
    @Override
    public boolean isFoliaSupported() {
        return this.foliaSupported != null && this.foliaSupported.equalsIgnoreCase("true");
    }
    // Folia end - block plugins not marked as supported
```

```java
   private void loadMap(@NotNull Map<?, ?> map) throws InvalidDescriptionException {
        ...
        // Folia start - block plugins not marked as supported
        if (map.get(FOLIA_SUPPORTED_KEY) != null) {
            foliaSupported = map.get(FOLIA_SUPPORTED_KEY).toString();
        }
        // Folia end - block plugins not marked as supported
    }
```

```java
 		@NotNull
    private Map<String, Object> saveMap() {
        ...
        // Folia start - block plugins not marked as supported
        if (foliaSupported != null) {
            map.put(FOLIA_SUPPORTED_KEY, foliaSupported);
        }
        // Folia end - block plugins not marked as supported

        return map;
    }
```

新增foliaSupported字段，并在读取和保存上添加对应逻辑。

所以你也可以通过反射来获得这个字段来判断是否为Folia服务端。


### RegionizedServerInitEvent

#### RegionizedServerInitEvent

> package io.papermc.paper.threadedregions

Folia新增的事件，这个事件会在服务器初始化完成，但服务器开始"并行地"更新区块前触发(callEvent)。

你可以利用这个事件来实现一个钩子(hook)，在服务器初始化之后，但并没有开始"并行地"更新区块之前执行你的代码，在这些代码里你可以不用考虑因为多线程产生的安全问题。

代码...有啥好看的,就一个事件。

### 添加位置/实体检查

#### Bukkit

> package org.bukkit

添加了`getRegionScheduler()` `getAsyncScheduler() ` `getGlobalRegionScheduler()`   上文已讲，不再赘述。

`isGlobalTickThread()` 则为 Returns whether the current thread is ticking the global region.

（应该是）检验当前代码执行的线程是否为全局，应该类似 `getGlobalRegionScheduler()`所创建的调度吧。

你应该可以在特定代码中做出判断，毕竟有些操作不在全局线程中执行可能会失效。

####  Server

> package org.bukkit

跟上面一样。

